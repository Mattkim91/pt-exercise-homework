// 운동 자료·번역·문서 검사. 설치할 것 없이 실행한다:  node tools/check-data.js
const fs=require('fs'),path=require('path'),vm=require('vm');
const ROOT=path.resolve(__dirname,'..');
const rd=f=>fs.readFileSync(path.join(ROOT,f),'utf8').replace(/\r\n/g,'\n');
const errors=[];let count=0;
const ok=(cond,msg)=>{count++;if(!cond)errors.push(msg);};

const c={};vm.createContext(c);
vm.runInContext(rd('exercises.js'),c);vm.runInContext(rd('i18n.js'),c);
const {EXERCISES,IMAGE_META,presets,BBS_RECOMMENDATIONS,SEARCH_ALIASES,PRINT_STRINGS,SAFETY_I18N,LEVEL_I18N,SIDE_I18N,DAY_LABELS,MEMO_PRESETS,TARGET_I18N,EXERCISE_I18N}=c;
const html=rd('index.html');
const LANGS=['en','ja','ar'];
const HANGUL=/[가-힣ㄱ-ㅎㅏ-ㅣ]/, ARABIC=/[؀-ۿ]/, KANA=/[ぁ-んァ-ヶ]/;
// 번역문이 비었거나 다른 언어가 섞였는지 본다
function text(value,lang,where){
  ok(typeof value==='string'&&value.trim(),`${where}: ${lang} 번역 없음`);
  if(typeof value!=='string') return;
  ok(!HANGUL.test(value),`${where}: ${lang} 번역에 한글이 있음 — ${value}`);
  ok(lang==='ja'||!KANA.test(value),`${where}: ${lang} 번역에 일본어가 있음 — ${value}`);
  ok(lang==='ar'||!ARABIC.test(value),`${where}: ${lang} 번역에 아랍어가 있음 — ${value}`);
}

// 운동
const ids=EXERCISES.map(e=>e.id), idSet=new Set(ids);
ok(idSet.size===ids.length,'운동 번호가 겹침');
ok(new Set(EXERCISES.map(e=>e.imageKey)).size===ids.length,'imageKey가 겹침');
for(const e of EXERCISES){
  const w=`${e.id} ${e.title}`;
  for(const k of ['title','target','description','caution','level','category','imageKey']) ok(typeof e[k]==='string'&&e[k].trim(),`${w}: ${k} 없음`);
  for(const k of ['reps','sets','durationMin']) ok(Number.isInteger(e[k])&&e[k]>0,`${w}: ${k} 값 오류`);
  ok(fs.existsSync(path.join(ROOT,'exercise-images',e.imageKey+'.webp')),`${w}: 그림 파일 없음`);
  ok(IMAGE_META[e.imageKey]&&IMAGE_META[e.imageKey].bodyRegion,`${w}: IMAGE_META 없음`);
  ok(SEARCH_ALIASES[e.id],`${w}: 검색 별칭 없음`);
  ok(LEVEL_I18N[e.level],`${w}: 단계 번역 없음`);
  ok(!e.side||SIDE_I18N[e.side],`${w}: 좌/우 번역 없음`);
  const x=EXERCISE_I18N[e.id]||{};
  for(const l of LANGS){
    for(const k of ['title','description','caution']) text(x[k]&&x[k][l],l,`${w} ${k}`);
    text(TARGET_I18N[e.target]&&TARGET_I18N[e.target][l],l,`${w} 목표`);
  }
}
Object.keys(SEARCH_ALIASES).forEach(k=>ok(idSet.has(Number(k)),`검색 별칭 ${k}: 없는 운동`));

// 프리셋·BBS·단위
presets.forEach(p=>{
  p.ids.forEach(i=>ok(idSet.has(i),`프리셋 ${p.name}: 없는 운동 ${i}`));
  ok(new Set(p.ids).size===p.ids.length,`프리셋 ${p.name}: 운동이 겹침`);
  ok(!p.memoPreset||MEMO_PRESETS[p.memoPreset],`프리셋 ${p.name}: 없는 주의문구`);
});
ok(new Set(presets.map(p=>p.name)).size===presets.length,'프리셋 이름이 겹침');
BBS_RECOMMENDATIONS.forEach(b=>b.ids.forEach(i=>ok(idSet.has(i),`BBS ${b.label}: 없는 운동 ${i}`)));
for(let n=0;n<=56;n++) ok(BBS_RECOMMENDATIONS.filter(b=>n>=b.min&&n<=b.max).length===1,`BBS ${n}점 구간이 하나가 아님`);
for(const name of ['HOLD_UNIT_IDS','TIME_BASED_IDS']){
  const m=html.match(new RegExp(`const ${name} = new Set\\(\\[([\\d,]+)\\]`));
  ok(m,`${name} 없음`);
  if(m) m[1].split(',').map(Number).forEach(i=>ok(idSet.has(i),`${name}: 없는 운동 ${i}`));
}

// 공통 출력 문구
const same=(a,b)=>JSON.stringify(Object.keys(a).sort())===JSON.stringify(Object.keys(b).sort());
for(const l of LANGS){
  ok(same(PRINT_STRINGS.ko,PRINT_STRINGS[l]||{}),`PRINT_STRINGS ${l}: 항목이 한국어와 다름`);
  Object.entries(PRINT_STRINGS[l]||{}).forEach(([k,v])=>text(v,l,`PRINT_STRINGS ${k}`));
  ok(same(SAFETY_I18N.en,SAFETY_I18N[l]||{}),`SAFETY_I18N ${l}: 항목이 다름`);
  Object.entries(SAFETY_I18N[l]||{}).forEach(([k,v])=>{text(v,l,`낙상 문구`);ok(html.includes(`"${k}"`),`낙상 문구가 index.html에 없음 — ${k}`);});
  ok((DAY_LABELS[l]||[]).length===7,`요일 ${l}: 7개가 아님`);
  Object.entries(LEVEL_I18N).forEach(([k,v])=>text(v[l],l,`단계 ${k}`));
  Object.entries(SIDE_I18N).forEach(([k,v])=>text(v[l],l,`좌/우 ${k}`));
  Object.entries(MEMO_PRESETS).forEach(([k,v])=>text(v[l],l,`주의문구 ${k}`));
}

// 문서가 자료와 같은지
const clinical=rd('docs/clinical-review.md'), trans=rd('docs/translation-review.md');
for(const m of clinical.matchAll(/^\| (\d+) \| ([^|]+) \| (Lv\d[^|]*) \|/gm)){
  const e=EXERCISES.find(x=>x.id===Number(m[1]));
  ok(e&&e.title===m[2].trim()&&e.level===m[3].trim(),`clinical-review.md가 다름: ${m[0]}`);
}
for(const e of EXERCISES){
  const start=trans.indexOf(`\n### ${e.id}. ${e.title}`);
  ok(start>=0,`translation-review.md에 ${e.id} ${e.title} 없음`);
  const end=trans.indexOf('\n### ',start+5), body=trans.slice(start,end<0?undefined:end);
  ok(body.includes(`- 단계: ${e.level}\n`),`translation-review.md ${e.id}: 단계가 다름`);
  const x=EXERCISE_I18N[e.id]||{}, row=(label,vals)=>`| ${label} | ${vals.join(' | ')} |`;
  const t=TARGET_I18N[e.target]||{};
  [['이름',e.title,x.title],['목표',e.target,t],['방법',e.description,x.description],['주의',e.caution,x.caution]]
    .forEach(([label,ko,v])=>ok(body.includes(row(label,[ko,...LANGS.map(l=>v&&v[l])])),`translation-review.md ${e.id}: ${label} 문구가 다름`));
  if(e.id>=75) [e.description,e.caution].forEach(s=>ok(clinical.includes(s),`clinical-review.md ${e.id}: 문구가 다름`));
}

// 외부 자료를 쓰지 않는지, QR이 잠겨 있는지
for(const [f,s] of [['index.html',html],['app.css',rd('app.css')],['exercises.js',rd('exercises.js')],['i18n.js',rd('i18n.js')]]){
  for(const re of [/\bsrc\s*=\s*["']?(https?:)?\/\//i,/<link[^>]+href\s*=\s*["']?(https?:)?\/\//i,/@import/i,/url\(\s*["']?(https?:)?\/\//i,/\bfetch\s*\(/,/XMLHttpRequest/,/sendBeacon/,/new WebSocket/,/new EventSource/])
    ok(!re.test(s),`${f}: 외부 자료 또는 네트워크 코드 (${re})`);
}
ok(/const QR_RELEASED = false;/.test(html),'QR은 향후 출시 예정이어야 함');
ok(/const VERSION\s+= "v\d+\.\d+";/.test(html)&&/const VERSION_DATE = "\d{4}-\d\d-\d\d";/.test(html),'버전 또는 날짜 형식 오류');

if(errors.length){console.error(errors.map(e=>'✗ '+e).join('\n'));console.error(`\n${errors.length}건 실패 / ${count}건 검사`);process.exit(1);}
console.log(`✓ 자료 검사 ${count}건 통과 (운동 ${ids.length}개)`);
