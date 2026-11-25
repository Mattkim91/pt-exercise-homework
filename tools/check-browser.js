// 앱을 실제 Chrome으로 열어 검사한다. 설치할 것 없이 실행한다 (Node 22 이상, Chrome 필요):
//   node tools/check-browser.js                  저장소의 index.html
//   node tools/check-browser.js 오프라인.html     오프라인 단일 파일 (파일 하나만 읽는지도 본다)
const {spawn}=require('child_process'),fs=require('fs'),os=require('os'),path=require('path'),{pathToFileURL}=require('url');
const ROOT=path.resolve(__dirname,'..');
const target=process.argv[2]?path.resolve(process.argv[2]):path.join(ROOT,'index.html');
const single=!!process.argv[2];
const CHROME=[process.env.CHROME_PATH,'C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(p=>p&&fs.existsSync(p));
if(!CHROME){console.error('Chrome을 찾지 못했습니다. CHROME_PATH를 지정하세요.');process.exit(1);}
const sleep=t=>new Promise(r=>setTimeout(r,t));
const errors=[];let count=0;
const ok=(cond,msg)=>{count++;if(!cond)errors.push(msg);};

let chrome=null;
(async()=>{
  const profile=fs.mkdtempSync(path.join(os.tmpdir(),'pt-check-'));
  chrome=spawn(CHROME,['--headless=new','--remote-debugging-port=0','--user-data-dir='+profile,'--no-first-run','--disable-background-networking',...(process.env.CI?['--no-sandbox']:[]),'about:blank'],{stdio:'ignore'});
  const portFile=path.join(profile,'DevToolsActivePort');
  for(let i=0;i<80&&!fs.existsSync(portFile);i++) await sleep(250);
  await sleep(300);
  const port=fs.readFileSync(portFile,'utf8').split('\n')[0];
  const tabs=await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise(r=>ws.onopen=r);
  let id=0;const wait={},requests=[],pageErrors=[];
  ws.onmessage=m=>{const d=JSON.parse(m.data);
    if(d.id){wait[d.id](d);return;}
    if(d.method==='Network.requestWillBeSent') requests.push(d.params.request.url);
    if(d.method==='Runtime.exceptionThrown') pageErrors.push(d.params.exceptionDetails.exception?.description||d.params.exceptionDetails.text);
    if(d.method==='Log.entryAdded'&&d.params.entry.level==='error') pageErrors.push(d.params.entry.text+' '+(d.params.entry.url||'').slice(0,120));
  };
  const send=(method,params={})=>new Promise(r=>{wait[++id]=r;ws.send(JSON.stringify({id,method,params}));});
  // 확인 창이 닫히지 않는 것처럼 앱이 멈추면 30초 뒤 실패로 끝낸다
  const limit=(p,e)=>{let t;return Promise.race([p,new Promise((_,no)=>{t=setTimeout(()=>no(new Error('30초 안에 끝나지 않음: '+e.trim().slice(0,200))),30000);})]).finally(()=>clearTimeout(t));};
  const ev=async e=>{const d=await limit(send('Runtime.evaluate',{expression:`(async()=>{${e}})()`,returnByValue:true,awaitPromise:true}),e);
    if(d.result.exceptionDetails) throw new Error(d.result.exceptionDetails.exception?.description||d.result.exceptionDetails.text);return d.result.result.value;};
  for(const x of ['Network','Runtime','Log','Page']) await send(x+'.enable');
  const open=async()=>{await send('Page.navigate',{url:pathToFileURL(target).href});for(let i=0;i<60;i++){await sleep(200);try{if(await ev('return typeof state==="object"&&!!document.querySelector("main")'))return;}catch(e){}}throw new Error('앱이 열리지 않음');};
  await open();
  await ev('window.alert=()=>{};window.confirm=()=>true;localStorage.clear();');
  await open();await ev('window.alert=()=>{};window.confirm=()=>true;');

  // ── 환자가 바뀔 때 앞 환자 값이 남지 않는지
  const leak=await ev(`
    newPatient();
    state.patient.name="가환자";addExercise(5);addExercise(44);
    setField("showFallWarning",true);setField("showChecklist",true);setField("layoutMode","큰 글씨형");setOutputLang("en");
    state.aiProfile={diagnosis:"tka",functionLevel:"standing",goal:"gait",bbs:"12",note:"가환자 메모"};state.bbsScore="12";recommendAiExercises();
    enterCartEditMode();
    const a=state.patient.id;
    newPatient();
    const blank={note:state.aiProfile.note,bbs:state.bbsScore,res:state.aiResultIds.length,text:state.aiText,fall:state.showFallWarning,chk:state.showChecklist,lay:state.layoutMode,lang:state.outputLang,draft:state.cartDraftSelected,sel:state.selected.length};
    state.patient.name="나환자";state.patient.memo="";await buildAiLeaflet();
    const b=state.patient.id,note=state.patient.note;
    loadPatient(a);
    return {blank,note,back:{n:state.patient.name,fall:state.showFallWarning,lay:state.layoutMode,lang:state.outputLang,sel:state.selected.map(x=>x.id).join(),ai:state.aiProfile.note},a,b};`);
  ok(JSON.stringify(leak.blank)===JSON.stringify({note:"",bbs:"",res:0,text:"",fall:false,chk:false,lay:"1단 가로형",lang:"ko",draft:null,sel:0}),'새 환자에 앞 환자 값이 남음: '+JSON.stringify(leak.blank));
  ok(leak.note==='','앞 환자 메모가 다음 환자에 들어감: '+leak.note);
  ok(leak.back.n==='가환자'&&leak.back.fall===true&&leak.back.lay==='큰 글씨형'&&leak.back.lang==='en'&&leak.back.sel==='5,44'&&leak.back.ai==='','환자를 다시 열 때 값이 다름: '+JSON.stringify(leak.back));
  const del=await ev(`loadPatient("${leak.b}");state.patient.note="x";deletePatient("${leak.b}");newPatient();await new Promise(r=>setTimeout(r,800));return {left:state.savedPatients.map(p=>p.name).join(),stored:JSON.parse(localStorage.getItem(STORAGE_KEY)).length,name:state.patient.name};`);
  ok(del.left==='가환자'&&del.stored===1&&del.name==='','지운 환자가 되살아남: '+JSON.stringify(del));

  // ── THA 주의문구는 물어본 뒤에만 바뀜
  const tha=await ev(`
    newPatient();state.tab=1;render();
    const pick=async id=>{await new Promise(r=>setTimeout(r,30));const open=!!state.choiceDialog;if(open) resolveChoice(id);await new Promise(r=>setTimeout(r,30));return open;};
    const out={};
    applyPreset("TKA POD#1~3");out.tkaAsks=await pick("cancel");
    applyPreset("THA");out.asks=await pick("cancel");out.kept=state.patient.memoPreset;
    applyPreset("THA");out.offAsks=await pick("cancel");
    applyPreset("THA");await pick("ok");out.changed=state.patient.memoPreset;
    applyPreset("THA");applyPreset("THA");out.again=await pick("cancel");
    newPatient();state.patient.memo="직접 쓴 문구";state.patient.memoPreset="";
    applyPreset("THA");await new Promise(r=>setTimeout(r,30));out.warns=state.choiceDialog.message.includes("직접 쓴 문구");await pick("cancel");out.custom=state.patient.memo;
    return out;`);
  ok(JSON.stringify(tha)===JSON.stringify({tkaAsks:false,asks:true,kept:"default",offAsks:false,changed:"tha",again:false,warns:true,custom:"직접 쓴 문구"}),'THA 주의문구 확인 동작이 다름: '+JSON.stringify(tha));

  // ── 운동 목록의 용량 표시: 유지 운동은 초, 시간 운동은 분, 나머지는 회
  const dose=await ev(`
    newPatient();state.tab=1;state.level=state.category=state.bodyFilter=state.purposeFilter=state.tagFilter="전체";state.showFavoritesOnly=false;state.query="";render();
    return exercises.filter(e=>{
      const row=document.querySelector('#exercise-results [data-key="ex-'+e.id+'"]');
      const want=e.isTimeBased?e.durationMin+"분":HOLD_UNIT_IDS.has(e.id)?e.reps+"초 유지 × "+e.sets+"세트":e.reps+"회 × "+e.sets+"세트";
      const line=row?row.querySelector(".text-xs.text-slate-400").textContent.trim():"";
      const mins=exerciseMinutes(selectedFromLibrary(e))+"분";
      if(!e.isTimeBased&&!line.startsWith(want+" · "+mins)) return true;
      if(HOLD_UNIT_IDS.has(e.id)&&exerciseMinutes(selectedFromLibrary(e))!==Math.max(1,Math.ceil(e.reps*e.sets/60))) return true;
      return !line.startsWith(want)||line.endsWith("·")||doseText(selectedFromLibrary(e))!==want;
    }).map(e=>e.id);`);
  ok(!dose.length,'운동 목록의 용량 표시가 다름: '+dose);

  // ── BBS 빈 칸은 0점이 아님
  const bbs=await ev(`return [""," ","0","20","21","56","57","x","20.5","-1"].map(v=>{state.bbsScore=v;const r=activeBbsRecommendation();return r?r.min:"-";}).join();`);
  ok(bbs==='-,-,0,0,21,41,-,-,-,-','BBS 구간이 다름: '+bbs);

  // ── BBS 점수는 환자 기록에 저장, 유인물·복사본에는 넣지 않음
  const save=await ev(`
    const out={};const stored=id=>JSON.parse(localStorage.getItem(STORAGE_KEY)).find(r=>r.id===id);
    newPatient();state.tab=1;render();setBbsScore("33");out.noName=state.savedPatients.some(p=>p.bbsScore===33);
    state.patient.name="저장A";autoSave();const a=state.patient.id;out.first=stored(a).bbsScore;
    setBbsScore("47");newPatient();out.flushed=stored(a).bbsScore;out.blank=state.bbsScore+state.aiProfile.bbs;
    state.patient.name="저장B";autoSave();const b=state.patient.id;out.b="bbsScore" in stored(b);
    loadPatient(a);out.loaded=state.bbsScore+"/"+state.aiProfile.bbs+"/"+activeBbsRecommendation().min;
    out.list=document.querySelector("#patient-list").textContent.includes("BBS 47점");
    addExercise(23);const box=document.createElement("div");box.innerHTML=leafletHTML();out.leaflet=/47|BBS/.test(box.textContent);
    setBbsScore("57");autoSave();out.invalid="bbsScore" in stored(a);
    setBbsScore("0");autoSave();out.zero=stored(a).bbsScore;
    loadPatient(b);out.cross=state.bbsScore;loadPatient(a);out.zeroLoad=state.bbsScore;
    setBbsScore("");await new Promise(r=>setTimeout(r,800));out.cleared="bbsScore" in stored(a);
    setBbsScore("12");autoSave();duplicatePatient(a);out.copy=state.bbsScore;
    out.migrate=[{bbsScore:"30"},{bbsScore:99},{bbsScore:{}},{bbsScore:56},{}].map(r=>{const m=migratePatientRecord({id:"x",selected:[],memoPreset:"default",settings:{printDefaultsMigrated:true,outputLang:"ko"},...r});return (m.record.bbsScore??"-")+(m.changed?"*":"");}).join();
    newPatient();deletePatient(a);deletePatient(b);return out;`);
  ok(JSON.stringify(save)===JSON.stringify({noName:false,first:33,flushed:47,blank:'',b:false,loaded:'47/47/41',list:true,leaflet:false,invalid:false,zero:0,cross:'',zeroLoad:'0',cleared:false,copy:'',migrate:'30*,-*,-*,56,-'}),'BBS 저장 동작이 다름: '+JSON.stringify(save));

  // ── 작업 중인 환자 표시
  const bar=await ev(`
    const out={};const q=s=>document.querySelector(s), bar=()=>q("#patient-header-badge .patient-bar"), txt=()=>bar().textContent.replace(/\\s+/g," ");
    newPatient();out.empty=bar().className.includes("is-empty")&&txt().includes("선택된 환자 없음");
    const name=q("#patient-name-input");name.focus();name.value="표시<b>A";name.dispatchEvent(new Event("input",{bubbles:true}));
    out.typing=bar().className.includes("is-new")&&txt().includes("아직 저장 전")&&txt().includes("표시<b>A");
    await new Promise(r=>setTimeout(r,800));
    out.saved=bar().className.includes("is-active")&&txt().includes("작업 중");
    out.keep=document.activeElement===q("#patient-name-input")&&q("#patient-name-input").value==="표시<b>A";
    out.form=q("main").textContent.includes("작업 중인 환자: 표시<b>A");
    const rows=()=>[...document.querySelectorAll(".patient-row.is-current")];
    const a=state.patient.id;out.rowA=rows().length===1&&rows()[0].dataset.key==="pt-"+a&&rows()[0].textContent.includes("작업 중");
    newPatient();out.noRow=rows().length===0;
    state.patient.name="표시B";saveCurrentPatient();const b=state.patient.id;out.added=txt().includes("새 환자를 추가했습니다")&&rows().length===1&&rows()[0].dataset.key==="pt-"+b;
    loadPatient(a);out.loaded=txt().includes("환자를 불러왔습니다")&&txt().includes("표시<b>A")&&bar().className.includes("is-flash")&&rows()[0].dataset.key==="pt-"+a;
    out.loadBtns=document.querySelectorAll(".patient-row .pr-load").length===state.savedPatients.length-1;
    state.tab=1;render();addExercise(23);addExercise(38);out.count=txt().includes("운동 2개");setBbsScore("41");out.bbs=txt().includes("BBS 41점");
    out.tabs=[0,1,2,3,4].every(t=>{state.tab=t;render();return bar().className.includes("is-active")&&txt().includes("표시<b>A")});
    goPatientList();out.list=state.tab===0;
    await new Promise(r=>setTimeout(r,3300));out.calm=txt().includes("작업 중인 환자")&&!bar().className.includes("is-flash");
    out.noPrint=!!bar().closest(".no-print");
    deletePatient(a);out.deleted=bar().className.includes("is-empty");deletePatient(b);
    return out;`);
  ok(Object.values(bar).every(v=>v===true)&&Object.keys(bar).length===17,'작업 중인 환자 표시가 다름: '+JSON.stringify(bar));

  // ── BBS 범위: 추천은 거르고, 직접 담을 때는 경고만
  const guard=await ev(`
    const tick=()=>new Promise(r=>setTimeout(r,30));const out={};
    newPatient();state.tab=1;render();setBbsScore("10");out.same=state.aiProfile.bbs;
    const p1=addExercise(61);await tick();out.asks=!!state.choiceDialog;resolveChoice("cancel");await p1;out.cancelled=state.selected.length;
    const p2=addExercise(61);await tick();resolveChoice("ok");await p2;out.added=state.selected.map(x=>x.id).join();
    addExercise(23);out.noAsk=!state.choiceDialog&&state.selected.length===2;
    state.tab=2;render();out.banner=document.querySelector("main").textContent.includes("추천 범위를 벗어난 운동 1개: 일자 걷기");
    state.tab=3;render();out.printBanner=document.querySelector("main").textContent.includes("추천 범위를 벗어난 운동 1개");
    out.leaflet=leafletHTML().includes("BBS");
    state.tab=1;render();state.query="일자 걷기";renderExerciseResults();out.badge=document.querySelector("#exercise-results").textContent.includes("BBS 범위 밖");
    setBbsScore("");out.badgeOff=!document.querySelector("#exercise-results").textContent.includes("BBS 범위 밖");state.query="";
    out.bands=["0","20","21","40","41","56"].map(v=>{const b=bbsBandFor(v);return [3,23,38,43,44,56,57,70,71].filter(i=>bbsAllows(exerciseById(i),b)).join(".")}).join("|");
    applyPreset("낙상예방");state.presetShowAll=true;renderExerciseResults();setBbsScore("30");
    const before=state.selected.length;const p3=addAllFiltered();await tick();if(state.choiceDialog.title.includes("많이")){resolveChoice("ok");await tick();}
    out.bulk=state.choiceDialog.title;resolveChoice("cancel");await p3;out.bulkCancelled=state.selected.length===before;
    newPatient();out.reset=state.bbsScore===""&&state.aiProfile.bbs==="";
    return out;`);
  ok(guard.same==='10'&&guard.asks&&guard.cancelled===0&&guard.added==='61'&&guard.noAsk&&guard.banner&&guard.printBanner&&!guard.leaflet&&guard.badge&&guard.badgeOff&&guard.bulk==='BBS 추천 범위를 벗어납니다'&&guard.bulkCancelled&&guard.reset,'BBS 경고 동작이 다름: '+JSON.stringify(guard));
  ok(guard.bands==='3.23|3.23|3.23.38.56.70|3.23.38.56.70|3.23.38.43.44.56.57.70.71|3.23.38.43.44.56.57.70.71','BBS 범위가 다름: '+guard.bands);

  // ── 조건별 추천: 모든 진단·기능·목표·BBS 조합이 규칙을 지키는지
  const rec=await ev(`
    newPatient();state.tab=4;render();
    const bad=[];let n=0,empty=0;
    const lv=e=>e.level.slice(0,3);
    for(const dx of Object.keys(RECOMMEND_PRESETS)) for(const f of Object.keys(RECOMMEND_LEVELS)) for(const g of ["ROM","strength","balance","gait","endurance","ADL","stretch"]) for(const b of ["","0","20","21","40","41","56"]){
      if(f==="walking"&&b!==""&&Number(b)<=20) continue;
      state.aiProfile={diagnosis:dx,functionLevel:f,goal:g,bbs:b,note:""};
      const draw=render;render=()=>{};try{await recommendAiExercises();}finally{render=draw;}
      n++;
      const ids=state.aiResultIds, w=[dx,f,g,b].join("/");
      if(!ids.length){empty++;if(!state.aiText.includes("맞는 운동이 없습니다")) bad.push(w+" 안내 없음");}
      if(ids.length>12||new Set(ids).size!==ids.length) bad.push(w+" 개수");
      const inPreset=new Set(RECOMMEND_PRESETS[dx].flatMap(x=>presets.find(p=>p.name===x).ids));
      ids.map(exerciseById).forEach(e=>{
        if(!(e.diagnosisTags||[]).includes(dx)&&!inPreset.has(e.id)) bad.push(w+" 진단 밖 "+e.id);
        if(!RECOMMEND_LEVELS[f].includes(lv(e))) bad.push(w+" 단계 밖 "+e.id);
        if(!bbsAllows(e,bbsBandFor(b))) bad.push(w+" BBS 밖 "+e.id);
        if(e.id===90||(dx==="tka"&&[82,83,87,88].includes(e.id))||(f==="bed"&&e.id===84)) bad.push(w+" 제외 운동 "+e.id);
      });
    }
    const out={n,empty,bad:bad.slice(0,5)};
    const tick=()=>new Promise(r=>setTimeout(r,30));
    state.aiProfile={diagnosis:"fall",functionLevel:"walking",goal:"balance",bbs:"10",note:""};
    const p=recommendAiExercises();await tick();out.asks=state.choiceDialog.title;resolveChoice("ok");await p;out.low=state.aiResultIds.join();
    const q=recommendAiExercises();await tick();resolveChoice("cancel");out.cancel=await q;
    setAiProfile("goal","gait");out.cleared=state.aiResultIds.length;
    let msg="";const al=window.alert;window.alert=m=>{msg=m};state.aiProfile.bbs="57";await recommendAiExercises();window.alert=al;out.invalid=msg.includes("0~56");
    state.aiProfile={diagnosis:"fall",functionLevel:"bed",goal:"balance",bbs:"",note:""};state.aiResultIds=[];const sel=state.selected.length;await buildAiLeaflet();out.emptyBuild=!state.choiceDialog&&state.selected.length===sel&&state.tab===4;
    return out;`);
  ok(!rec.bad.length&&rec.n===2002,'조건별 추천 규칙 위반: '+JSON.stringify(rec));
  ok(rec.asks==='BBS와 기능 수준을 확인하세요'&&rec.low==='23,24,26,27,87,29'&&rec.cancel===false&&rec.cleared===0&&rec.invalid&&rec.emptyBuild,'조건별 추천 확인 동작이 다름: '+JSON.stringify(rec));

  // ── 프리셋 핵심 운동
  const coreCheck=await ev(`
    newPatient();state.tab=1;render();const bad=[];
    for(const p of presets){
      state.activePreset=null;applyPreset(p.name);if(state.choiceDialog) resolveChoice("cancel");await new Promise(r=>setTimeout(r,5));
      const first=filtered().map(e=>e.id).sort((a,b)=>a-b).join(), want=(p.core||p.ids).slice().sort((a,b)=>a-b).join();
      if(first!==want) bad.push(p.name+" 핵심");
      const bar=document.querySelector("#exercise-results").textContent;
      if(p.core&&!bar.includes("나머지 "+(p.ids.length-p.core.length)+"개 더 보기")) bad.push(p.name+" 더 보기");
      state.presetShowAll=true;renderExerciseResults();
      const all=filtered().map(e=>e.id);
      if(all.slice().sort((a,b)=>a-b).join()!==p.ids.slice().sort((a,b)=>a-b).join()) bad.push(p.name+" 전체");
      if(p.core&&all.slice(0,p.core.length).some(i=>!p.core.includes(i))) bad.push(p.name+" 순서");
    }
    applyPreset("낙상예방");const reset=state.presetShowAll===false;newPatient();
    return bad.concat(reset?[]:["초기화"]);`);
  ok(!coreCheck.length,'프리셋 핵심 운동이 다름: '+coreCheck.join(', '));

  // ── 처방 이력
  const hist=await ev(`
    newPatient();state.tab=0;state.patient.name="이력<b>";addExercise(5);addExercise(28);
    const out={};const id0=state.patient.id;
    out.first=recordPrescription("print");out.dup=recordPrescription("pdf");
    await new Promise(r=>setTimeout(r,20));
    updateSelectedSilent(28,"reps","15");removeExerciseSilent(5);addExercise(38);setPatientDailyFreq("2");
    const d=prescriptionDiff(state.patient.history[0],currentPrescription());
    out.diff=[d.added.join(),d.removed.join(),d.changed.join(),d.other.join()].join(" | ");
    out.second=recordPrescription("manual");
    const pid=state.patient.id;
    newPatient();out.blankHist=(state.patient.history||[]).length;
    await new Promise(r=>setTimeout(r,20));
    loadPatient(pid);out.count=state.patient.history.length;
    const p=restoreHistory(state.patient.history[1].id);await new Promise(r=>setTimeout(r,30));resolveChoice("ok");await p;
    out.restored=state.selected.map(x=>x.id+":"+x.reps).join();out.freq=state.patient.dailyFreq||0;out.noDup=state.patient.history.length;
    out.stored=JSON.parse(localStorage.getItem(STORAGE_KEY)).find(r=>r.id===pid).history.length;
    duplicatePatient(pid);out.copyHist=(state.patient.history||[]).length;
    loadPatient(pid);state.historyOpenId=state.patient.history[0].id;renderMain();out.rendered=document.querySelector("main").textContent.includes("바로 앞 이력과 비교");
    for(let i=0;i<40;i++){updateSelectedSilent(28,"sets",String(i+1));recordPrescription("manual");}
    out.limit=state.patient.history.length;
    out.bad=normalizeHistory([null,{at:"x",selected:[{id:5}]},{at:new Date().toISOString(),selected:[]},{id:"');alert(1)//",at:new Date().toISOString(),selected:[{id:5}]}]).map(h=>/^hist-[0-9a-z-]+$/.test(h.id)).join();
    return out;`);
  ok(hist.first&&!hist.dup&&hist.second&&hist.count===2&&hist.noDup===2&&hist.stored===2&&hist.blankHist===0&&hist.copyHist===0&&hist.rendered&&hist.limit===30&&hist.bad==='true','처방 이력 동작이 다름: '+JSON.stringify(hist));
  ok(/앉았다 일어서기 \| 발목 펌프 운동 \| 앉아서 무릎 펴기: .*10.* → .*15.* \| 하루 횟수: 없음 → .*2/.test(hist.diff),'처방 비교가 다름: '+hist.diff);
  ok(hist.restored==='5:10,28:10'&&hist.freq===0,'이전 처방 불러오기가 다름: '+JSON.stringify(hist));
  const reload=await ev('return JSON.stringify(state.savedPatients.map(p=>[p.name,(p.history||[]).length]))');
  await open();await ev('window.alert=()=>{};window.confirm=()=>true;');
  ok(await ev('return JSON.stringify(state.savedPatients.map(p=>[p.name,(p.history||[]).length]))')===reload,'새로 열었을 때 환자 목록이나 이력이 다름');

  // ── 나만의 프리셋
  const mine=await ev(`
    newPatient();state.tab=2;state.patient.name="프리셋";addExercise(44);addExercise(56);
    updateSelectedSilent(44,"reps","20");updateSelectedSideSilent(44,"좌측");setExerciseDailyFreq(44,"3");updateSelectedSilent(56,"durationMin","12");
    window.prompt=()=>"균형 <i>세트";addMyPreset();
    newPatient();state.tab=1;render();
    const p=loadMyPresets()[0];
    const r=useMyPreset(p.id);await new Promise(r=>setTimeout(r,30));resolveChoice("append");await r;
    const s=state.selected.map(x=>[x.id,x.reps,x.durationMin,x.side,x.dailyFreq||0,x.unit].join(":")).join();
    state.tab=1;render();const shown=document.querySelector("main").textContent.includes("균형 <i>세트");
    return {keys:JSON.stringify(p.items),s,shown,bad:normalizeMyPresets([{name:"x",items:[{id:9999}]},{name:"",items:[{id:5}]},{id:"');x//",name:"y",items:[{id:5}]}]).map(x=>/^my-[0-9a-z-]+$/.test(x.id)).join()};`);
  ok(/^44:20:\d+:[^:좌]*:0:sec,56:\d+:12:[^:]*:0:reps$/.test(mine.s),'나만의 프리셋 담기가 다름: '+JSON.stringify(mine));
  ok(mine.shown&&mine.bad==='true'&&!/side|dailyFreq/.test(mine.keys),'나만의 프리셋 저장이 다름: '+JSON.stringify(mine));
  ok(await ev(`
    const keep=state.savedPatients.length;
    state.importPreview={fileName:"old.json",patients:state.savedPatients.slice(),favorites:[],recent:[],myPresets:null};applyImport("replace");
    const kept=loadMyPresets().length===1&&state.savedPatients.length===keep;
    state.importPreview={fileName:"new.json",patients:[],favorites:[],recent:[],myPresets:normalizeMyPresets([{id:"my-1",name:"새 세트",items:[{id:5}]}])};applyImport("merge");
    return kept&&loadMyPresets().length===2&&validateBackup({patients:[{id:"a",history:{}}]})!==""&&validateBackup({patients:[],myPresets:{}})!==""&&validateBackup({patients:[{id:"a"}]})==="";`),'백업 가져오기가 다름');

  // ── 검색
  const search=await ev(`
    state.level=state.category=state.bodyFilter=state.purposeFilter=state.tagFilter="전체";state.activePreset=null;state.bbsMode=false;state.showFavoritesOnly=false;
    const find=q=>{state.query=q;return filtered().map(e=>e.id);};
    const want={bridge:[15],SLR:[11],"까치발":[30,46],"무릎펴기":[28],"heel raise":[30,46],LAQ:[28],SLS:[44],PLB:[76],IS:[78],"bird dog":[84],birddog:[84],"스쿼트":[50],"서서 무릎":[47],"자전거":[70],"sit to stand":[38],"chin tuck":[85]};
    const miss=Object.entries(want).filter(([q,ids])=>!ids.every(i=>find(q).includes(i))).map(([q])=>q);
    const all=find("").length, none=find("없는운동이름").length, slr=find("SLR").length;
    state.query="";return {miss,all,none,slr,total:exercises.length};`);
  ok(!search.miss.length&&search.all===search.total&&search.none===0&&search.slr===1,'검색이 다름: '+JSON.stringify(search));

  // ── 오래된 파일 안내
  const age=await ev(`const [y,m,d]=VERSION_DATE.split("-").map(Number);return [0,89,90].map(n=>offlineFileAgeDays(new Date(y,m-1,d+n))).join();`);
  ok(age==='0,89,90','오프라인 파일 날짜 계산이 다름: '+age);

  // ── 유인물: 언어 4개 × 레이아웃 4개, 번역 누락과 그림
  const left=await ev(`
    newPatient();state.patient.name="A";state.therapistName="B";state.patient.dailyFreq=2;state.patient.date="2026-11-26";
    state.showChecklist=state.showPainLog=state.showFallWarning=true;state.selected=exercises.map(selectedFromLibrary);
    const bad=[];
    for(const l of OUTPUT_LANGS) for(const m of LAYOUTS){
      state.outputLang=l;state.layoutMode=m;
      const d=document.createElement("div");d.innerHTML=leafletHTML();
      if(d.querySelectorAll("article").length!==exercises.length) bad.push(l+m+" 운동 수");
      if(d.querySelectorAll("article img").length!==exercises.length) bad.push(l+m+" 그림 수");
      const t=d.textContent;
      if(l!=="ko"&&/[가-힣]/.test(t)) bad.push(l+m+" 한글 "+t.match(/[가-힣]+/)[0]);
      if((l==="en"||l==="ar")&&/[ぁ-んァ-ヶ一-龥]/.test(t)) bad.push(l+m+" 일본어");
      if(l!=="ar"&&/[\\u0600-\\u06ff]/.test(t)) bad.push(l+m+" 아랍어");
      if(/undefined|NaN|\\[object/.test(t)) bad.push(l+m+" 잘못된 값");
      if((l==="ar")!==(d.querySelector(".leaflet-out").dir==="rtl")) bad.push(l+m+" 방향");
      if(d.innerHTML.includes("leaflet-qr")) bad.push(l+m+" QR");
    }
    return bad;`);
  ok(!left.length,'유인물 오류: '+left.join(', '));
  const brokenImages=await ev(`
    const urls=exercises.map(e=>e.imageUrl);
    const r=await Promise.all(urls.map(u=>new Promise(res=>{const i=new Image();i.onload=()=>res(i.naturalWidth>0);i.onerror=()=>res(false);i.src=u;})));
    return exercises.filter((e,i)=>!r[i]).map(e=>e.id);`);
  ok(!brokenImages.length,'열리지 않는 그림: '+brokenImages);

  // ── 인쇄 배경과 실제 인쇄
  await ev('state.selected=state.selected.slice(0,2);state.showChecklist=state.showPainLog=false;state.outputLang="ko";state.layoutMode="1단 가로형";render();');
  await send('Emulation.setEmulatedMedia',{media:'print'});
  const bg=await ev(`return [document.documentElement,document.body,document.querySelector("#app"),document.querySelector("#app > div")].map(e=>getComputedStyle(e).backgroundColor).join("|")+"|"+getComputedStyle(document.querySelector("#app > div")).minHeight`);
  await send('Emulation.setEmulatedMedia',{media:''});
  ok(bg===Array(4).fill('rgb(255, 255, 255)').join('|')+'|0px','인쇄 배경이 흰색이 아님: '+bg);
  for(const l of ['ko','en','ja','ar']){
    await ev(`state.outputLang="${l}";render();`);
    const pdf=await send('Page.printToPDF',{preferCSSPageSize:true,printBackground:true});
    const raw=Buffer.from(pdf.result.data,'base64').toString('latin1');
    const pages=(raw.match(/\/Type\s*\/Page\b/g)||[]).length;
    ok(pages===1,`${l} 운동 2개 인쇄가 1쪽이 아님 (${pages}쪽)`);
  }

  // ── 네트워크와 오류
  const outside=[...new Set(requests.filter(u=>!/^(data|file|blob|about|chrome):/.test(u)))];
  ok(!outside.length,'외부 요청: '+outside.join(', '));
  if(single) ok([...new Set(requests.filter(u=>u.startsWith('file:')))].length===1,'오프라인 파일이 다른 파일을 읽음');
  ok(!pageErrors.length,'화면 오류: '+[...new Set(pageErrors)].join('\n'));

  await send('Browser.close').catch(()=>{});chrome.kill();
  await sleep(500);try{fs.rmSync(profile,{recursive:true,force:true});}catch(e){}
  if(errors.length){console.error(errors.map(e=>'✗ '+e).join('\n'));console.error(`\n${errors.length}건 실패 / ${count}건 검사`);process.exit(1);}
  console.log(`✓ 화면 검사 ${count}건 통과 (${path.basename(target)})`);process.exit(0);
})().catch(e=>{console.error(e);if(chrome) chrome.kill();process.exit(1);});
