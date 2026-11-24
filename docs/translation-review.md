# 출력 언어 번역 검토표 (v2.66)

치료사 화면은 한국어입니다. 영어·일본어는 미리보기와 인쇄에만 쓰입니다. 한국어 운동 문장은 `exercises.js` 원문 그대로입니다.

직접 입력한 환자 이름, 치료사 이름, 공통 주의사항의 자유 문장, 운동 방법·주의의 개별 수정은 번역하지 않습니다.

## 확인이 필요한 항목

- **tha.** THA 일반 주의는 코드 주석의 세 가지(고관절 굴곡 90도 초과, 정중선을 넘는 내전, 내회전)만 환자 문장으로 옮겼습니다. 접근법별 구분은 앱이 두지 않습니다. 전방 접근에서는 신전·외회전 제한이 다를 수 있어, 그 환자에게 이 문구를 쓸지는 치료사가 확인해야 합니다.
- **2.** 주의의 '관절 이상음'은 특정 염발음으로 단정하지 않고 '평소와 다른 관절 소리'로 옮겼습니다.
- **9.** 방법에는 3초 유지가 있고, 인쇄되는 용량 칸은 횟수×세트입니다. 한국어와 같이 두었습니다.
- **12.** '다시 모읍니다'는 옆으로 벌린 다리를 제자리로 되돌린다는 뜻으로 옮겼습니다. 정중선을 넘겨 교차하라는 뜻은 넣지 않았습니다. 임상 검토표도 이 문장이 모호하다고 적혀 있습니다.
- **20.** 환측은 마비측·수술측을 아우르는 affected side / 患側로 옮겼습니다. 이 운동은 상지 체중지지라 뇌졸중 쪽 표현에 맞춥니다.
- **33.** 목표의 '어깨 ROM'은 환자에게 ROM이라는 약어 대신 가동범위라는 말로 풀었습니다.
- **39.** 방법의 3~5초 유지와, 용량 칸의 횟수×세트를 한국어와 같이 둘 다 남겼습니다. 용량 칸을 초 유지로 바꾸지는 않았습니다.
- **42.** '눈을 감고 시행하지 마세요'는 눈을 감는 롬버그 변형을 하지 말라는 뜻으로 그대로 옮겼습니다.
- **53.** 어깨를 뒤로 크게 돌리되, 이어지는 순서는 앞 → 위 → 뒤 → 아래입니다. 그 순서를 영어·일본어에도 그대로 두었습니다.
- **59.** '발이 꼬이지 않도록'은 발이 교차해 걸리지 않게 천천히 하라는 뜻으로 옮겼습니다.
- **75.** 제목 '횡격막 호흡'의 일본어는 환자에게 익숙한 腹式呼吸으로 했습니다. 방법은 배가 올라오는 횡격막 호흡이고, 목표는 '横隔膜を使う呼吸'으로 구분해 두었습니다.
- **76.** '촛불을 흔들 듯이'는 촛불을 끄는 강한 입김이 아니라, 불꽃이 흔들릴 정도의 약한 날숨으로 옮겼습니다.
- **78.** 유발 폐활량계는 incentive spirometer / インセンティブスパイロメーター로 적었습니다. 3~5초 숨 참기는 방법 문장에만 있고, 용량 칸은 한국어와 같이 횟수×세트입니다.
- **79.** '허-' 소리는 영어 huh, 일본어 ハッ으로 옮겼습니다. 거울에 김이 서리는 듯한 길고 센 날숨입니다.
- **memo-free.** 치료사가 직접 고친 공통 주의사항, 환자 이름, 치료사 이름, 운동 방법·주의의 개별 수정 문장은 번역하지 않고 입력한 그대로 인쇄합니다. AI 보조가 만든 공통 주의 초안도 메모 칸에 들어가는 자유 문장이라 그대로 인쇄됩니다.
- **safety.** 낙상·호흡·통증 상단 주의는 한국어 주의 문장의 낱말을 보고 고른 뒤, 고른 문장 전체를 출력 언어로 바꿉니다. 치료사가 주의 문장을 직접 고쳐 그 낱말이 없으면 일반 안내 문장으로 떨어집니다. 이 동작은 한국어 출력과 같습니다.
- **page.** 쪽 번호는 지금처럼 숫자만 인쇄합니다(1 / 2). 한국어 낱말이 없습니다.
- **date.** 한국어 출력의 날짜는 지금처럼 YYYY-MM-DD입니다. 영어는 October 20, 2026, 일본어는 2026年10月20日처럼 바꿉니다.

## 고정 출력 문구

| 키 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| docTitle | 개인별 맞춤 운동 과제 | Your home exercise program | あなた向けの自宅運動 |
| docSubtitle | 안전한 범위에서 천천히 시행해주세요. | Move slowly, and stay within a range that feels safe. | 安全な範囲で、ゆっくり行ってください。 |
| patientName | 환자명 | Name | お名前 |
| dateLabel | 작성일 | Date | 作成日 |
| dailyFreqLabel | 하루 횟수 | Times a day | 1日の回数 |
| timeLabel | 예상시간 | Estimated time | めやす時間 |
| therapistLabel | 담당치료사 | Therapist | 担当療法士 |
| exercise | 운동 | Exercise | 運動 |
| method | 방법 | Instructions | 方法 |
| goal | 목표 | Goal | 目標 |
| caution | 주의 | Caution | 注意 |
| generalCaution | 공통 주의사항 | General precautions | 共通の注意 |
| empty | 선택된 운동이 없습니다. | No exercises selected. | 選ばれた運動はありません。 |
| checklistTitle | 📅 운동 수행 체크표 | 📅 Exercise checklist | 📅 運動の実施チェック表 |
| painTitle | ✅ 통증/피로도 기록 | ✅ Pain and fatigue log | ✅ 痛み・疲れの記録 |
| painBefore | 운동 전 통증 NRS | Pain before exercise (0–10) | 運動前の痛み（0–10） |
| painAfter | 운동 후 통증 NRS | Pain after exercise (0–10) | 運動後の痛み（0–10） |
| fatigueBefore | 운동 전 피로도 | Fatigue before exercise | 運動前の疲れ |
| fatigueAfter | 운동 후 피로도 | Fatigue after exercise | 運動後の疲れ |
| fatigueScale | 낮음 / 보통 / 높음 | Low / Moderate / High | 軽い / 普通 / 強い |
| video | 영상 | Video | 動画 |
| qrAlt | 운동 영상 QR | Exercise video QR code | 運動動画のQRコード |
| qrHelp | 📱 QR코드를 촬영하면 운동 영상을 확인할 수 있습니다. | 📱 Point your camera at the QR code to watch the exercise video. | 📱 QRコードを読み取ると、運動の動画を見られます。 |
| pdfName | 환자 | Patient | 患者 |
| missing | 목록에 없는 운동 | Exercise not in the list | 一覧にない運動 |

### 용량·시간·날짜·요일

| 항목 | 한국어 (현재 출력과 같음) | English | 日本語 |
| --- | --- | --- | --- |
| 횟수 | 10회 × 2세트 | 10 reps × 2 sets | 10回 × 2セット |
| 1회·1세트 | 1회 × 1세트 | 1 rep × 1 set | 1回 × 1セット |
| 초 유지 | 30초 유지 × 3세트 | Hold 30 sec × 3 sets | 30秒保持 × 3セット |
| 시간 운동 | 10분 | 10 min | 10分 |
| 하루 횟수 1 | 하루 1회 | 1 time a day | 1日1回 |
| 하루 횟수 2 | 하루 2회 | 2 times a day | 1日2回 |
| 용량과 하루 횟수 | 10회 × 2세트 · 하루 2회 | 10 reps × 2 sets · 2 times a day | 10回 × 2セット · 1日2回 |
| 예상 시간 | 약 12분 (1회 기준) | About 12 min (per session) | 約12分（1回あたり） |
| 하루 예상 시간 | 약 12분 (1회 기준) · 하루 약 24분 | About 12 min (per session) · about 24 min a day | 約12分（1回あたり） · 1日約24分 |
| 날짜 | 2026-10-20 | October 20, 2026 | 2026年10月20日 |
| 주차 | 2주차 | Week 2 | 2週目 |
| 쪽 번호 | 1 / 2 | 1 / 2 | 1 / 2 |

### 좌/우

| 한국어 | English | 日本語 |
| --- | --- | --- |
| 좌측 | Left | 左側 |
| 우측 | Right | 右側 |
| 양측 | Both sides | 両側 |
| 환측 | Affected side | 患側 |
| 건측 | Unaffected side | 健側 |

### 단계

| 한국어 | English | 日本語 |
| --- | --- | --- |
| Lv0 PROM/보호자 | Lv0 PROM / caregiver | Lv0 他動運動／介助 |
| Lv1 침상운동 | Lv1 Bed exercise | Lv1 ベッド上の運動 |
| Lv2 앉은자세 | Lv2 Sitting | Lv2 座って行う運動 |
| Lv3 선자세 | Lv3 Standing | Lv3 立って行う運動 |
| Lv4 보행훈련 | Lv4 Walking practice | Lv4 歩行練習 |
| Lv5 유산소운동 | Lv5 Aerobic exercise | Lv5 有酸素運動 |

### 요일

| 한국어 | English | 日本語 |
| --- | --- | --- |
| 월 화 수 목 금 토 일 | Mon Tue Wed Thu Fri Sat Sun | 月 火 水 木 金 土 日 |

### 상단 안전 문구

낙상 고위험군 주의멘트를 켰을 때, 담은 운동의 한국어 주의 문장을 보고 하나만 고릅니다.

| 한국어 | English | 日本語 |
| --- | --- | --- |
| 낙상 위험 — 반드시 보호자 감독 또는 지지물 가까이에서 시행하세요. | Fall risk — do this only with a caregiver watching, or close to something sturdy you can hold. | 転倒の危険 — 必ず介助者が見守るか、しっかりした支えのそばで行ってください。 |
| 운동 중 흉통·호흡곤란·어지러움 시 즉시 중단하세요. | Stop right away if you have chest pain, shortness of breath, or dizziness during the exercise. | 運動中に胸の痛み、息苦しさ、めまいが出たら、すぐに中止してください。 |
| 통증이 심해지면 강도를 줄이거나 중단하세요. | If the pain gets worse, make the exercise easier or stop. | 痛みが強くなるときは、楽にするか中止してください。 |
| 안전한 범위에서 천천히 시행하고 불편감이 있으면 치료사에게 알려주세요. | Move slowly in a range that feels safe. Tell your therapist if anything feels wrong. | 安全な範囲でゆっくり行い、違和感があれば療法士に伝えてください。 |

### 공통 주의 문구

메모 칸이 아래 한국어와 글자까지 같으면 출력 언어로 바꿉니다. 한 글자라도 고치면 입력한 그대로 인쇄합니다.

#### 기본 주의문구

| 언어 | 문장 |
| --- | --- |
| 한국어 | 통증이나 어지럼증 등의 증상 발생 시 잠시 중단하고 충분한 휴식을 취해주세요. |
| English | If you get pain, dizziness, or similar symptoms, pause and rest until you feel better. |
| 日本語 | 痛みやめまいなどの症状が出たら、いったん中止して十分に休んでください。 |

#### THA 고관절 주의

| 언어 | 문장 |
| --- | --- |
| 한국어 | 통증이나 어지럼증 등의 증상 발생 시 잠시 중단하고 충분한 휴식을 취해주세요. 인공고관절 수술 후의 일반 주의: 고관절을 90도보다 많이 굽히지 마세요. 다리를 몸 가운데선 너머로 모으거나 꼬지 마세요. 무릎과 발끝을 안쪽으로 돌리지 마세요. |
| English | If you get pain, dizziness, or similar symptoms, pause and rest until you feel better. General precautions after hip replacement: do not bend the hip past 90 degrees. Do not bring the leg across the midline of your body or cross your legs. Do not turn the knee and toes inward. |
| 日本語 | 痛みやめまいなどの症状が出たら、いったん中止して十分に休んでください。人工股関節の手術後の一般的な注意: 股関節を90度より深く曲げないでください。脚を体の真ん中の線より内側に寄せたり、脚を組んだりしないでください。膝とつま先を内側にひねらないでください。 |

## 운동 79개

### 1. 발목 수동관절운동

- imageKey: `ankle-prom`
- 단계: Lv0 PROM/보호자
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 발목 수동관절운동 | Passive ankle movement | 足首の他動運動 |
| 목표 | 발목 관절가동범위 유지 및 구축 예방 | Keep the ankle moving and help prevent stiffness. | 足首の動きを保ち、硬くなるのを防ぎます。 |
| 방법 | 치료사 또는 보호자가 환자의 발목을 부드럽게 위아래로 움직여줍니다. 환자는 힘을 빼고 편안하게 유지합니다. | A therapist or caregiver gently moves your ankle up and down. Let the leg relax. | 療法士または介助者が、足首をやさしく上下に動かします。力を抜いて楽にしてください。 |
| 주의 | 통증이 있으면 즉시 중단하고 치료사에게 알려주세요. 저항 없이 부드럽게 시행하세요. | Stop and tell your therapist if it hurts. Move gently, without pushing against tightness. | 痛みがあれば中止し、療法士に伝えてください。抵抗に逆らわず、やさしく行ってください。 |

### 2. 무릎·고관절 수동관절운동 ⚠

- imageKey: `lower-limb-prom`
- 단계: Lv0 PROM/보호자
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 무릎·고관절 수동관절운동 | Passive knee and hip movement | 膝・股関節の他動運動 |
| 목표 | 하지 관절가동범위 유지 및 구축 예방 | Keep the leg joints moving and help prevent stiffness. | 脚の関節の動きを保ち、硬くなるのを防ぎます。 |
| 방법 | 치료사 또는 보호자가 무릎을 천천히 굽혔다 펴고, 고관절을 부드럽게 굽혀줍니다. 환자는 힘을 빼고 편안하게 유지합니다. | A therapist or caregiver slowly bends and straightens the knee, and gently bends the hip. Let the leg relax. | 療法士または介助者が、膝をゆっくり曲げ伸ばしし、股関節をやさしく曲げます。力を抜いて楽にしてください。 |
| 주의 | 관절 이상음이나 통증이 있으면 즉시 중단하세요. 골절·수술 부위는 특히 주의하세요. | Stop right away if the joint makes an unusual noise or it hurts. Be especially careful around a fracture or a surgical site. | 関節からいつもと違う音がしたり痛みがあれば、すぐに中止してください。骨折や手術した部位は特に注意してください。 |

### 3. 어깨 수동관절운동

- imageKey: `shoulder-prom`
- 단계: Lv0 PROM/보호자
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 어깨 수동관절운동 | Passive shoulder movement | 肩の他動運動 |
| 목표 | 어깨 관절가동범위 유지 및 구축 예방 | Keep the shoulder moving and help prevent stiffness. | 肩の動きを保ち、硬くなるのを防ぎます。 |
| 방법 | 치료사 또는 보호자가 팔을 부드럽게 앞으로 들어 올리고, 옆으로 벌려줍니다. 환자는 힘을 빼고 편안하게 유지합니다. | A therapist or caregiver gently lifts the arm forward and out to the side. Let the arm relax. | 療法士または介助者が、腕をやさしく前に上げ、横に開きます。力を抜いて楽にしてください。 |
| 주의 | 어깨 탈구 병력이 있으면 치료사에게 먼저 알려주세요. 통증 없는 범위에서만 시행하세요. | If the shoulder has dislocated before, tell your therapist first. Stay in a range that does not hurt. | 肩が外れたことがある人は、先に療法士に伝えてください。痛くない範囲だけで行ってください。 |

### 4. 손목·손가락 수동관절운동

- imageKey: `wrist-hand-prom`
- 단계: Lv0 PROM/보호자
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 손목·손가락 수동관절운동 | Passive wrist and finger movement | 手首・指の他動運動 |
| 목표 | 손목·손가락 관절가동범위 유지 및 구축 예방 | Keep the wrist and fingers moving and help prevent stiffness. | 手首と指の動きを保ち、硬くなるのを防ぎます。 |
| 방법 | 치료사 또는 보호자가 손목을 위아래로 움직이고 손가락을 부드럽게 펴줍니다. 환자는 힘을 빼고 편안하게 유지합니다. | A therapist or caregiver moves the wrist up and down and gently straightens the fingers. Let the hand relax. | 療法士または介助者が、手首を上下に動かし、指をやさしく伸ばします。力を抜いて楽にしてください。 |
| 주의 | 손가락 경직이 심하면 무리하게 펴지 말고 가능한 범위에서만 시행하세요. | If the fingers are very stiff, do not force them straight. Stay within the range that is available. | 指の硬さが強いときは、無理に伸ばさず、動く範囲だけで行ってください。 |

### 5. 발목 펌프 운동

- imageKey: `ankle-pump`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 발목 펌프 운동 | Ankle pumps | アンクルポンプ |
| 목표 | 발목 관절가동범위 유지 및 구축 예방 | Keep the ankle moving and help prevent stiffness. | 足首の動きを保ち、硬くなるのを防ぎます。 |
| 방법 | 누운 자세에서 발목을 스스로 천천히 위아래로 움직입니다. 발끝을 몸쪽으로 당겼다가 아래로 미는 동작을 반복합니다. | Lying down, slowly move your ankle up and down on your own. Pull the toes toward you, then point them away. Repeat. | 仰向けで、自分で足首をゆっくり上下に動かします。足先を体の方へ引き、次に下へ押す動きを繰り返します。 |
| 주의 | 통증이 있으면 즉시 중단하고 치료사에게 알려주세요. 반동 없이 천천히 시행하세요. | Stop and tell your therapist if it hurts. Move slowly, without bouncing. | 痛みがあれば中止し、療法士に伝えてください。反動をつけず、ゆっくり行ってください。 |

### 6. 무릎 굽혔다 펴기

- imageKey: `heel-slide`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 무릎 굽혔다 펴기 | Bend and straighten the knee | 膝の曲げ伸ばし |
| 목표 | 하지 관절가동범위 유지 및 구축 예방 | Keep the leg joints moving and help prevent stiffness. | 脚の関節の動きを保ち、硬くなるのを防ぎます。 |
| 방법 | 누운 자세에서 발뒤꿈치를 바닥에 대고 천천히 몸쪽으로 끌어 무릎을 굽힌 뒤, 다시 천천히 펴서 내립니다. | Lie down with the heel on the bed. Slowly slide the heel toward you to bend the knee, then slowly straighten the leg back down. | 仰向けで、かかとを床につけます。かかとを体の方へゆっくり滑らせて膝を曲げ、またゆっくり伸ばして下ろします。 |
| 주의 | 무릎에서 이상음이나 통증이 있으면 즉시 중단하세요. 골절·수술 부위는 통증 없는 범위에서만 시행하세요. | Stop right away if the knee makes an unusual noise or it hurts. After a fracture or surgery, stay in a range that does not hurt. | 膝からいつもと違う音がしたり痛みがあれば、すぐに中止してください。骨折や手術のあとは、痛くない範囲だけで行ってください。 |

### 7. 옆으로 돌아눕기

- imageKey: `log-rolling`
- 단계: Lv1 침상운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 옆으로 돌아눕기 | Roll onto your side | 横向きに寝返り |
| 목표 | 침상 이동 능력 향상 | Make it easier to move in bed. | ベッドの上で動きやすくします。 |
| 방법 | 누운 자세에서 무릎을 살짝 굽히고 몸통을 천천히 옆으로 돌립니다. | Lie down, bend the knees a little, and slowly roll the body onto one side. | 仰向けで膝を軽く曲げ、体をゆっくり横向きに回します。 |
| 주의 | 어지럽거나 통증이 있으면 천천히 쉬어가며 시행하세요. | If you feel dizzy or it hurts, rest, then continue slowly. | めまいや痛みがあれば、休みながらゆっくり行ってください。 |

### 8. 무릎 누르기

- imageKey: `quad-set`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 무릎 누르기 | Press the knee down | 膝を下に押す |
| 목표 | 대퇴사두근 활성화 | Wake up the muscle on the front of the thigh. | 太ももの前の筋肉を働かせます。 |
| 방법 | 무릎 아래에 수건을 놓고 무릎을 아래로 눌러 허벅지 앞쪽에 힘을 줍니다. | Place a towel under the knee. Press the knee down into the towel so the front of the thigh tightens. | 膝の下にタオルを置き、膝を下へ押して太ももの前に力を入れます。 |
| 주의 | 무릎 통증이 심하면 힘주는 강도를 줄이세요. | If the knee hurts a lot, press more gently. | 膝の痛みが強いときは、力を弱めてください。 |

### 9. 엉덩이 힘주기 ⚠

- imageKey: `glute-set`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 엉덩이 힘주기 | Tighten the buttocks | お尻に力を入れる |
| 목표 | 둔근 활성화 | Wake up the buttock muscles. | お尻の筋肉を働かせます。 |
| 방법 | 누운 자세에서 엉덩이에 힘을 주고 3초간 유지한 뒤 천천히 힘을 뺍니다. | Lie down, squeeze the buttocks, hold for 3 seconds, then slowly relax. | 仰向けでお尻に力を入れ、3秒保ってから、ゆっくり力を抜きます。 |
| 주의 | 허리나 다리에 통증이 생기면 강도를 줄이세요. | If the low back or the leg starts to hurt, use less effort. | 腰や脚が痛くなったら、力を弱めてください。 |

### 10. 쇼트아크 쿼드

- imageKey: `short-arc-quad`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 쇼트아크 쿼드 | Short-arc quad | ショートアーククワッド |
| 목표 | 대퇴사두근 강화 및 무릎 펴기 조절 | Strengthen the front of the thigh and control straightening the knee. | 太ももの前を鍛え、膝を伸ばす動きをコントロールします。 |
| 방법 | 무릎 아래에 베개나 수건을 받치고 누운 자세에서 무릎을 천천히 펴며 발을 들어 올립니다. | Place a pillow or a rolled towel under the knee. Lying down, slowly straighten the knee and lift the foot. | 膝の下に枕か丸めたタオルを置きます。仰向けで膝をゆっくり伸ばし、足を持ち上げます。 |
| 주의 | 무릎 통증이 심하면 범위를 줄이고 허벅지 앞쪽에 힘이 들어가는지 확인하세요. | If the knee hurts a lot, use a smaller movement and check that the front of the thigh is working. | 膝の痛みが強いときは、動かす範囲を小さくし、太ももの前に力が入っているか確かめてください。 |

### 11. 다리 들어올리기

- imageKey: `straight-leg-raise`
- 단계: Lv1 침상운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 다리 들어올리기 | Straight leg raise | 脚上げ（膝を伸ばして） |
| 목표 | 고관절 굴곡근 및 대퇴사두근 강화 | Strengthen the muscles that lift the thigh and straighten the knee. | 脚を上げる筋肉と、膝を伸ばす筋肉を鍛えます。 |
| 방법 | 누운 자세에서 무릎을 편 상태로 한쪽 다리를 천천히 들어 올렸다가 내립니다. | Lie down with the knee straight. Slowly lift one leg, then lower it. | 仰向けで膝を伸ばしたまま、片方の脚をゆっくり上げ、下ろします。 |
| 주의 | 허리가 과하게 뜨거나 통증이 있으면 중단하세요. | Stop if the low back arches a lot or it hurts. | 腰が大きく浮く、または痛みがあれば中止してください。 |

### 12. 다리 벌리기 ⚠

- imageKey: `supine-hip-abduction`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 다리 벌리기 | Slide the leg out to the side | 脚を横に開く |
| 목표 | 고관절 외전근 강화 | Strengthen the muscles that move the leg out to the side. | 脚を横に開く筋肉を鍛えます。 |
| 방법 | 누운 자세에서 한쪽 다리를 옆으로 천천히 벌렸다가 다시 모읍니다. | Lie on your back. Slowly move one leg out to the side, then bring it back in. | 仰向けで、片方の脚をゆっくり横に開き、また戻します。 |
| 주의 | 골반이 함께 돌아가지 않도록 주의하세요. | Do not let the pelvis roll with the leg. | 骨盤が一緒に回らないように注意してください。 |

### 13. 클램쉘

- imageKey: `clam-shell`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 클램쉘 | Clamshell | クラムシェル |
| 목표 | 고관절 외전근 및 중둔근 강화 | Strengthen the side-hip and gluteus medius muscles. | 股関節の外側と中殿筋を鍛えます。 |
| 방법 | 옆으로 누워 무릎을 구부린 상태에서 발은 붙이고 위쪽 무릎을 천천히 벌렸다가 모읍니다. | Lie on your side with the knees bent and the feet together. Slowly lift the top knee, then lower it. | 横向きで膝を曲げ、足はそろえたままにします。上の膝をゆっくり開き、閉じます。 |
| 주의 | 골반이 뒤로 넘어가지 않도록 주의하고 통증 없는 범위에서 시행하세요. | Do not let the pelvis roll backward. Stay in a range that does not hurt. | 骨盤が後ろへ倒れないようにし、痛くない範囲で行ってください。 |

### 14. 옆으로 누워 다리 벌리기

- imageKey: `side-lying-hip-abduction`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 옆으로 누워 다리 벌리기 | Side-lying leg lift | 横向きで脚を上げる |
| 목표 | 고관절 외전근 강화 및 골반 안정성 향상 | Strengthen the side-hip muscles and steady the pelvis. | 股関節の外側を鍛え、骨盤を安定させます。 |
| 방법 | 옆으로 누운 자세에서 위쪽 다리를 편 상태로 천천히 위로 들었다가 내립니다. | Lie on your side with the top leg straight. Slowly lift that leg, then lower it. | 横向きで、上の脚を伸ばしたままゆっくり上げ、下ろします。 |
| 주의 | 허리나 골반이 과하게 움직이지 않도록 주의하세요. | Do not let the low back or pelvis twist too much. | 腰や骨盤が大きく動かないように注意してください。 |

### 15. 브릿지

- imageKey: `bridge`
- 단계: Lv1 침상운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 브릿지 | Bridge | ブリッジ |
| 목표 | 둔근 강화 및 침상 이동 준비 | Strengthen the buttocks and prepare for moving in bed. | お尻を鍛え、ベッドの上で動く準備をします。 |
| 방법 | 무릎을 세우고 누운 뒤 엉덩이를 천천히 들어 올렸다가 내립니다. | Lie down with the knees bent and the feet on the bed. Slowly lift the hips, then lower them. | 膝を立てて仰向けになり、お尻をゆっくり上げ、下ろします。 |
| 주의 | 허리 통증이 심하면 중단하세요. | Stop if the low back hurts a lot. | 腰の痛みが強いときは中止してください。 |

### 16. 손 쥐었다 펴기

- imageKey: `hand-open-close`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 손 쥐었다 펴기 | Open and close the hand | 手を握って開く |
| 목표 | 손목·손가락 관절가동범위 유지 및 구축 예방 | Keep the wrist and fingers moving and help prevent stiffness. | 手首と指の動きを保ち、硬くなるのを防ぎます。 |
| 방법 | 손가락을 스스로 천천히 쥐었다가 모두 펴기를 반복합니다. 통증이 없는 범위에서 시행합니다. | Slowly make a fist, then open the fingers all the way. Repeat, staying in a range that does not hurt. | 自分で指をゆっくり握り、全部開く動きを繰り返します。痛くない範囲で行います。 |
| 주의 | 손가락을 억지로 끝까지 펴지 말고, 스스로 움직일 수 있는 범위에서만 시행하세요. | Do not force the fingers fully straight. Stay within the range you can move yourself. | 指を無理に最後まで伸ばさず、自分で動かせる範囲だけで行ってください。 |

### 17. 손목 굽힘/폄

- imageKey: `wrist-flexion-extension`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 손목 굽힘/폄 | Bend and straighten the wrist | 手首の曲げ伸ばし |
| 목표 | 손목 관절가동범위 유지 | Keep the wrist moving. | 手首の動きを保ちます。 |
| 방법 | 팔을 편안히 둔 상태에서 손목을 천천히 위아래로 움직입니다. | Rest the arm comfortably and slowly move the wrist up and down. | 腕を楽に置いたまま、手首をゆっくり上下に動かします。 |
| 주의 | 반동 없이 천천히 시행하세요. | Move slowly, without bouncing. | 反動をつけず、ゆっくり行ってください。 |

### 18. 팔꿈치 굽힘/폄

- imageKey: `elbow-flexion-extension`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 팔꿈치 굽힘/폄 | Bend and straighten the elbow | 肘の曲げ伸ばし |
| 목표 | 팔꿈치 관절가동범위 유지 | Keep the elbow moving. | 肘の動きを保ちます。 |
| 방법 | 팔꿈치를 천천히 굽혔다가 폅니다. 통증이 없는 범위에서 반복합니다. | Slowly bend the elbow, then straighten it. Repeat in a range that does not hurt. | 肘をゆっくり曲げ、伸ばします。痛くない範囲で繰り返します。 |
| 주의 | 어깨가 과하게 들리지 않도록 주의하세요. | Do not let the shoulder hitch up. | 肩が過剰に上がらないように注意してください。 |

### 19. 누워서 팔 올리기

- imageKey: `supine-shoulder-flexion`
- 단계: Lv1 침상운동
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 누워서 팔 올리기 | Lift the arm while lying down | 仰向けで腕を上げる |
| 목표 | 어깨 관절가동범위 유지 및 구축 예방 | Keep the shoulder moving and help prevent stiffness. | 肩の動きを保ち、硬くなるのを防ぎます。 |
| 방법 | 누운 자세에서 팔을 스스로 천천히 앞으로 들어 올렸다가 내립니다. 통증 없는 범위에서 반복합니다. | Lie down and slowly lift the arm forward on your own, then lower it. Repeat in a range that does not hurt. | 仰向けで、自分で腕をゆっくり前に上げ、下ろします。痛くない範囲で繰り返します。 |
| 주의 | 어깨 통증이나 탈구 병력이 있으면 치료사에게 먼저 알려주세요. 통증 없는 범위에서만 시행하세요. | If the shoulder hurts, or it has dislocated before, tell your therapist first. Stay in a range that does not hurt. | 肩の痛みや、肩が外れたことがある人は、先に療法士に伝えてください。痛くない範囲だけで行ってください。 |

### 20. 환측 팔 체중지지 ⚠

- imageKey: `affected-arm-weight-bearing`
- 단계: Lv1 침상운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 환측 팔 체중지지 | Weight bearing through the affected arm | 患側の腕に体重をかける |
| 목표 | 상지 체중지지 및 어깨 안정성 향상 | Practice taking weight through the arm and steady the shoulder. | 腕に体重をのせ、肩を安定させます。 |
| 방법 | 테이블 위에 환측 팔을 올리고 손바닥 또는 전완으로 천천히 체중을 실어 유지합니다. | Rest the affected arm on a table. Slowly put weight through the palm or the forearm and hold. | テーブルの上に患側の腕を置き、手のひらまたは前腕でゆっくり体重をかけて保ちます。 |
| 주의 | 어깨 통증이나 손목 통증이 있으면 각도와 체중을 줄이세요. | If the shoulder or wrist hurts, use less weight and a more comfortable angle. | 肩や手首が痛ければ、角度と体重を減らしてください。 |

### 21. 골반 기울이기

- imageKey: `pelvic-tilt`
- 단계: Lv1 침상운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 골반 기울이기 | Pelvic tilt | 骨盤を傾ける |
| 목표 | 골반 조절 및 요부 긴장 완화 | Practice pelvic control and ease tension in the low back. | 骨盤のコントロールを練習し、腰の緊張をやわらげます。 |
| 방법 | 무릎을 세우고 누운 자세에서 허리를 바닥 쪽으로 가볍게 누르며 골반을 움직입니다. | Lie with the knees bent. Gently press the low back toward the bed as you tilt the pelvis. | 膝を立てて仰向けになり、腰を床の方へ軽く押しつけながら骨盤を動かします。 |
| 주의 | 통증이 없는 작은 범위에서 시행하세요. | Use a small range that does not hurt. | 痛くない、小さい範囲で行ってください。 |

### 22. 누워서 손 뻗기

- imageKey: `supine-reach`
- 단계: Lv1 침상운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 누워서 손 뻗기 | Reach while lying down | 仰向けで手を伸ばす |
| 목표 | 상지 조절 및 체간 안정성 향상 | Improve arm control and trunk steadiness. | 腕のコントロールと体幹の安定を高めます。 |
| 방법 | 누운 자세에서 한쪽 팔을 천천히 앞으로 뻗었다가 돌아옵니다. 어깨가 과하게 올라가지 않도록 편안한 범위에서 시행합니다. | Lie down and slowly reach one arm forward, then bring it back. Keep the shoulder from hiking up, and stay in a comfortable range. | 仰向けで、片方の腕をゆっくり前に伸ばし、戻します。肩が過剰に上がらないよう、楽な範囲で行います。 |
| 주의 | 어깨 통증이나 저림이 있으면 범위를 줄이세요. | If the shoulder hurts or tingles, use a smaller range. | 肩の痛みやしびれがあれば、範囲を小さくしてください。 |

### 23. 앉은 자세 유지

- imageKey: `sitting-balance`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 앉은 자세 유지 | Sit and hold | 座った姿勢を保つ |
| 목표 | 정적 앉은 균형 향상 | Improve steady balance while sitting. | 座ったままのバランスを高めます。 |
| 방법 | 발을 바닥에 두고 허리를 세워 앉은 자세를 유지합니다. | Sit with your feet on the floor and your back upright. Hold that position. | 足を床につけ、背すじを伸ばして座った姿勢を保ちます。 |
| 주의 | 어지러움이 있으면 등받이에 기대어 쉬세요. | If you feel dizzy, lean back against the chair and rest. | めまいがあれば、背もたれにもたれて休んでください。 |

### 24. 앉아서 좌우 체중이동

- imageKey: `seated-weight-shift`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 앉아서 좌우 체중이동 | Shift weight side to side while sitting | 座って左右に体重を移す |
| 목표 | 앉은 균형 및 체간 조절 | Improve sitting balance and trunk control. | 座ったバランスと体幹のコントロールを高めます。 |
| 방법 | 의자에 앉아 몸통을 좌우로 천천히 이동합니다. | Sit in a chair and slowly move your trunk to the left, then to the right. | 椅子に座り、体を左右へゆっくり移します。 |
| 주의 | 균형이 불안하면 보호자가 옆에서 지켜봐 주세요. | If your balance feels unsteady, have a caregiver stay beside you. | バランスが不安定なときは、介助者がそばで見守ってください。 |

### 25. 앞으로 손 뻗기

- imageKey: `seated-reach`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 앞으로 손 뻗기 | Reach forward | 前へ手を伸ばす |
| 목표 | 상지 도달 및 체간 조절 | Practice reaching and trunk control. | 手を伸ばす動きと体幹のコントロールを練習します。 |
| 방법 | 앉은 자세에서 앞에 놓인 물건을 향해 손을 천천히 뻗었다가 돌아옵니다. | While sitting, slowly reach toward an object in front of you, then come back. | 座ったまま、前にある物へゆっくり手を伸ばし、戻します。 |
| 주의 | 몸이 과하게 앞으로 쏠리지 않게 주의하세요. | Do not let the body pitch too far forward. | 体が前へ倒れすぎないように注意してください。 |

### 26. 앉아서 물건 잡기

- imageKey: `seated-object-reach`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 앉아서 물건 잡기 | Reach for an object while sitting | 座って物をつかむ |
| 목표 | 동적 앉은 균형 향상 | Improve balance while sitting and moving. | 座りながら動くバランスを高めます。 |
| 방법 | 앉은 자세에서 좌우 또는 앞쪽에 놓인 물건을 향해 손을 뻗어 잡습니다. | While sitting, reach to the side or forward and pick up an object. | 座ったまま、左右または前にある物へ手を伸ばしてつかみます。 |
| 주의 | 몸이 과하게 기울면 보호자가 보조하세요. | If the body leans too far, a caregiver should help. | 体が大きく傾くときは、介助者が手伝ってください。 |

### 27. 콘 잡기

- imageKey: `cone-reaching`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 콘 잡기 | Reach for a cone | コーンに手を伸ばす |
| 목표 | 상지 도달 및 시각 탐색 능력 향상 | Practice reaching and looking toward a target. | 目標を見て手を伸ばす練習をします。 |
| 방법 | 앉은 자세에서 앞이나 옆에 놓인 콘을 향해 손을 뻗어 잡았다가 제자리로 돌아옵니다. | While sitting, reach for a cone in front of you or to the side, touch or hold it, then come back. | 座ったまま、前や横にあるコーンへ手を伸ばしてつかみ、元の位置に戻します。 |
| 주의 | 몸통을 과하게 기울이지 않도록 하고 필요 시 보호자 감독하에 시행하세요. | Do not lean the trunk too far. Have a caregiver supervise if you need to. | 体を大きく傾けないようにし、必要なら介助者の見守りで行ってください。 |

### 28. 앉아서 무릎 펴기

- imageKey: `seated-knee-extension`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 앉아서 무릎 펴기 | Straighten the knee while sitting | 座って膝を伸ばす |
| 목표 | 대퇴사두근 강화 | Strengthen the front of the thigh. | 太ももの前を鍛えます。 |
| 방법 | 의자에 허리를 세우고 앉아 한쪽 무릎을 천천히 펴고 2초간 유지한 뒤 내립니다. | Sit tall in a chair. Slowly straighten one knee, hold for 2 seconds, then lower the foot. | 椅子に背すじを伸ばして座ります。片方の膝をゆっくり伸ばし、2秒保ってから下ろします。 |
| 주의 | 허리가 뒤로 젖혀지지 않도록 주의하세요. | Do not lean the back behind you. | 腰が後ろへ反らないように注意してください。 |

### 29. 앉아서 제자리 발 들기

- imageKey: `seated-marching`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 앉아서 제자리 발 들기 | March in place while sitting | 座ってその場で足を上げる |
| 목표 | 고관절 굴곡 및 보행 준비 | Practice lifting the thigh to prepare for walking. | 太ももを上げて、歩く準備をします。 |
| 방법 | 의자에 앉아 무릎을 번갈아 들어 올립니다. 몸통이 뒤로 넘어가지 않게 유지합니다. | Sit in a chair and lift one knee, then the other. Do not let the trunk fall backward. | 椅子に座り、左右の膝を交互に上げます。体が後ろへ倒れないように保ちます。 |
| 주의 | 허리가 뒤로 젖혀지면 범위를 줄이세요. | If the back leans behind you, use a smaller lift. | 腰が後ろへ反るときは、上げる高さを小さくしてください。 |

### 30. 앉아서 뒤꿈치 들기

- imageKey: `seated-heel-raise`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 앉아서 뒤꿈치 들기 | Heel raises while sitting | 座ってかかとを上げる |
| 목표 | 종아리 근력 강화 | Strengthen the calf. | ふくらはぎを鍛えます。 |
| 방법 | 의자에 앉아 발끝은 바닥에 두고 뒤꿈치를 천천히 들어 올렸다가 내립니다. | Sit in a chair with the toes on the floor. Slowly lift the heels, then lower them. | 椅子に座り、足先は床につけたまま、かかとをゆっくり上げ、下ろします。 |
| 주의 | 발목 통증이 있으면 천천히 시행하세요. | If the ankle hurts, move slowly. | 足首が痛ければ、ゆっくり行ってください。 |

### 31. 앉아서 발끝 들기

- imageKey: `seated-toe-raise`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 앉아서 발끝 들기 | Toe raises while sitting | 座って足先を上げる |
| 목표 | 발목 배측굴곡근 강화 | Strengthen the muscles that lift the foot up. | 足先を上げる筋肉を鍛えます。 |
| 방법 | 의자에 앉아 뒤꿈치는 바닥에 두고 발끝을 몸쪽으로 천천히 들어 올립니다. | Sit in a chair with the heels on the floor. Slowly lift the toes toward you. | 椅子に座り、かかとは床につけたまま、足先を体の方へゆっくり上げます。 |
| 주의 | 무리하게 당기지 마세요. | Do not pull hard. | 無理に引っ張らないでください。 |

### 32. 테이블 위 팔 밀기

- imageKey: `table-slide`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 테이블 위 팔 밀기 | Slide the arm forward on a table | テーブルの上で腕を滑らせる |
| 목표 | 어깨 움직임 및 상지 조절 | Practice shoulder movement and arm control. | 肩の動きと腕のコントロールを練習します。 |
| 방법 | 테이블 위에 수건을 놓고 손을 올린 뒤 팔을 앞으로 천천히 밀었다가 돌아옵니다. | Put a towel on the table, rest the hand on it, and slowly slide the arm forward, then back. | テーブルの上にタオルを置き、手をのせて、腕を前へゆっくり滑らせ、戻します。 |
| 주의 | 어깨 통증이 심해지면 중단하세요. | Stop if the shoulder pain gets worse. | 肩の痛みが強くなるときは中止してください。 |

### 33. 막대 잡고 양팔 올리기 ⚠

- imageKey: `cane-shoulder-flexion`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 막대 잡고 양팔 올리기 | Lift both arms with a stick | 棒を持って両腕を上げる |
| 목표 | 양측 상지 협응 및 어깨 ROM | Use both arms together and keep the shoulder moving. | 両腕をそろえて動かし、肩の可動域を保ちます。 |
| 방법 | 양손으로 막대를 잡고 팔을 천천히 앞으로 들어 올렸다가 내립니다. | Hold a stick with both hands. Slowly lift the arms forward, then lower them. | 両手で棒を持ち、腕をゆっくり前に上げ、下ろします。 |
| 주의 | 아픈 팔은 반대팔로 보조하며 무리하지 마세요. | Use the other arm to help the painful arm. Do not force it. | 痛い腕は反対の腕で助け、無理をしないでください。 |

### 34. 손가락 맞대기

- imageKey: `finger-opposition`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 손가락 맞대기 | Touch the thumb to each fingertip | 親指と指先を合わせる |
| 목표 | 손가락 협응 및 미세운동 향상 | Improve finger coordination and fine movement. | 指の協調と細かい動きを高めます。 |
| 방법 | 엄지손가락을 검지, 중지, 약지, 새끼손가락에 차례로 맞댔다가 폅니다. | Touch the thumb to the index, middle, ring, and little fingertips in order, then open the hand. | 親指を人差し指、中指、薬指、小指の順に合わせ、開きます。 |
| 주의 | 손가락 통증이 있으면 천천히 작은 범위로 시행하세요. | If a finger hurts, move slowly and use a smaller range. | 指が痛ければ、ゆっくり小さい範囲で行ってください。 |

### 35. 수건 쥐기

- imageKey: `towel-squeeze`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 수건 쥐기 | Squeeze a towel | タオル握り |
| 목표 | 손 근력 및 쥐기 기능 향상 | Strengthen the hand and improve grip. | 手の力と握る働きを高めます。 |
| 방법 | 작은 수건을 손에 쥐고 천천히 힘을 주어 눌렀다가 풉니다. | Hold a small towel in the hand. Slowly squeeze it, then relax. | 小さいタオルを手に握り、ゆっくり力を入れて押し、ゆるめます。 |
| 주의 | 손가락 관절 통증이 있으면 강도를 줄이세요. | If the finger joints hurt, squeeze more gently. | 指の関節が痛ければ、力を弱めてください。 |

### 36. 날개뼈 모으기

- imageKey: `scapular-retraction`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 날개뼈 모으기 | Squeeze the shoulder blades together | 肩甲骨を寄せる |
| 목표 | 견갑골 안정화 및 자세 조절 향상 | Steady the shoulder blades and improve posture. | 肩甲骨を安定させ、姿勢のコントロールを高めます。 |
| 방법 | 팔을 편안히 내린 자세에서 양쪽 날개뼈를 등 뒤로 천천히 모았다가 풉니다. | Let the arms hang comfortably. Slowly draw both shoulder blades together toward the spine, then relax. | 腕を楽に下ろし、両方の肩甲骨を背中の方へゆっくり寄せ、ゆるめます。 |
| 주의 | 어깨를 으쓱하지 않도록 하고 목에 힘이 들어가면 범위를 줄이세요. | Do not shrug. If the neck starts working, use a smaller movement. | 肩をすくめないようにし、首に力が入るときは範囲を小さくしてください。 |

### 37. 의자 팔걸이 밀기

- imageKey: `chair-push-up`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 의자 팔걸이 밀기 | Press down on the armrests | 肘かけを押す |
| 목표 | 상지 지지 및 체중부하 훈련 | Practice supporting yourself through the arms. | 腕で体を支える練習をします。 |
| 방법 | 의자 팔걸이를 손으로 누르며 엉덩이를 살짝 들어 올리듯 힘을 줍니다. | Press down on the chair armrests, as if you were going to lift the hips a little. | 椅子の肘かけを手で押し、お尻を少し持ち上げるように力を入れます。 |
| 주의 | 손목이나 어깨 통증이 있으면 강도를 줄이세요. | If the wrist or shoulder hurts, press more gently. | 手首や肩が痛ければ、力を弱めてください。 |

### 38. 앉았다 일어서기

- imageKey: `sit-to-stand`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 앉았다 일어서기 | Sit to stand | 立ち座り |
| 목표 | 하지 근력 및 기능적 이동 향상 | Strengthen the legs and make everyday transfers easier. | 脚を鍛え、日常の移動をしやすくします。 |
| 방법 | 의자에 앉은 상태에서 발을 바닥에 두고 몸을 앞으로 기울인 뒤 천천히 일어섭니다. | Sit in a chair with your feet on the floor. Lean the body forward, then stand up slowly. | 椅子に座り、足を床につけます。体を前へ傾けてから、ゆっくり立ちます。 |
| 주의 | 무릎 통증이나 어지러움이 있으면 중단하세요. | Stop if the knee hurts or you feel dizzy. | 膝の痛みやめまいがあれば中止してください。 |

### 39. 일어서서 자세 유지 ⚠

- imageKey: `sit-to-stand-hold`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 일어서서 자세 유지 | Stand, hold, and sit back down | 立って姿勢を保つ |
| 목표 | 하지 근력 및 선 자세 안정성 향상 | Strengthen the legs and improve steady standing. | 脚を鍛え、立った姿勢を安定させます。 |
| 방법 | 의자에서 일어난 뒤 바른 선 자세를 3~5초 유지하고 천천히 다시 앉습니다. | Stand up from the chair, hold a tall standing position for 3~5 seconds, then sit back down slowly. | 椅子から立ち上がり、正しい立ち姿勢を3~5秒保って、ゆっくり座り直します。 |
| 주의 | 어지럼증이나 무릎 통증이 있으면 즉시 중단하세요. | Stop right away if you feel dizzy or the knee hurts. | めまいや膝の痛みがあれば、すぐに中止してください。 |

### 40. 서서 좌우 체중이동

- imageKey: `standing-weight-shift`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 서서 좌우 체중이동 | Shift weight side to side while standing | 立って左右に体重を移す |
| 목표 | 보행 전 체중이동 훈련 | Practice shifting weight before walking. | 歩く前に、体重を移す練習をします。 |
| 방법 | 양발을 어깨너비로 벌리고 서서 체중을 좌우로 천천히 이동합니다. | Stand with the feet about shoulder-width apart. Slowly shift your weight to the left, then to the right. | 両足を肩幅くらいに開いて立ち、体重を左右へゆっくり移します。 |
| 주의 | 몸이 과하게 기울지 않게 주의하세요. | Do not let the body lean too far. | 体が大きく傾かないように注意してください。 |

### 41. 한발 올리고 체중이동

- imageKey: `step-weight-shift`
- 단계: Lv3 선자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 한발 올리고 체중이동 | Step up and shift weight | 片足を台に乗せて体重を移す |
| 목표 | 계단 준비 및 하지 체중부하 조절 | Prepare for stairs and practice controlling weight on the leg. | 階段の準備として、脚への体重のかけ方を練習します。 |
| 방법 | 한쪽 발을 낮은 발판 위에 올리고 앞뒤 또는 좌우로 천천히 체중을 이동합니다. | Place one foot on a low step. Slowly shift your weight forward and back, or side to side. | 片方の足を低い台の上に置き、前後または左右へゆっくり体重を移します。 |
| 주의 | 무릎이 안쪽으로 무너지지 않도록 하고 균형이 불안하면 손잡이를 잡으세요. | Do not let the knee collapse inward. Hold a rail if your balance feels unsteady. | 膝が内側へ崩れないようにし、バランスが不安定なら手すりを持ってください。 |

### 42. 발 모으고 서기 ⚠

- imageKey: `romberg-standing`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 발 모으고 서기 | Stand with the feet together | 足をそろえて立つ |
| 목표 | 정적 균형 향상 | Improve steady balance. | じっと立つバランスを高めます。 |
| 방법 | 양발을 모으고 선 자세를 유지합니다. | Bring the feet together and hold the standing position. | 両足をそろえて立った姿勢を保ちます。 |
| 주의 | 눈을 감고 시행하지 마세요. | Do not do this with your eyes closed. | 目を閉じて行わないでください。 |

### 43. 일자 서기

- imageKey: `tandem-standing`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 일자 서기 | Tandem stance | 足を前後一直線にして立つ |
| 목표 | 좁은 지지면 균형 향상 | Improve balance on a narrow base. | せまい面で立つバランスを高めます。 |
| 방법 | 한 발을 다른 발 앞에 일자로 두고 선 자세를 유지합니다. | Place one foot directly in front of the other, heel toward toe, and hold the standing position. | 片方の足をもう片方の足の前に、一直線に置いて立ち、その姿勢を保ちます。 |
| 주의 | 균형이 불안하면 보호자 감독하에 시행하세요. | If your balance feels unsteady, do this with a caregiver watching. | バランスが不安定なときは、介助者の見守りで行ってください。 |

### 44. 의자 잡고 한발 서기

- imageKey: `single-leg-stance-chair`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 의자 잡고 한발 서기 | Single-leg stance holding a chair | 椅子を持って片足立ち |
| 목표 | 정적 균형 향상 | Improve steady balance. | じっと立つバランスを高めます。 |
| 방법 | 튼튼한 의자나 난간을 잡고 한쪽 발을 살짝 들어 올린 뒤 가능한 범위에서 유지합니다. | Hold a sturdy chair or a rail. Lift one foot slightly and hold for as long as you safely can. | しっかりした椅子か手すりを持ち、片方の足を少し上げて、できる範囲で保ちます。 |
| 주의 | 반드시 안정적인 지지물 가까이에서 시행하세요. | Stay close to a stable support. | 必ず安定した支えのそばで行ってください。 |

### 45. 서서 제자리 발 들기

- imageKey: `standing-marching`
- 단계: Lv3 선자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 서서 제자리 발 들기 | March in place while standing | 立ってその場で足を上げる |
| 목표 | 보행 준비 및 하지 조절 | Prepare for walking and improve leg control. | 歩く準備をし、脚のコントロールを高めます。 |
| 방법 | 양발을 골반 너비로 벌리고 선 뒤 제자리에서 무릎을 번갈아 들어 올립니다. | Stand with the feet about hip-width apart. Lift one knee, then the other, staying in place. | 両足を骨盤の幅くらいに開いて立ち、その場で左右の膝を交互に上げます。 |
| 주의 | 어지럽거나 균형이 불안하면 앉아서 쉬세요. | If you feel dizzy or unsteady, sit down and rest. | めまいやバランスの不安があれば、座って休んでください。 |

### 46. 서서 뒤꿈치 들기

- imageKey: `standing-heel-raise`
- 단계: Lv3 선자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 서서 뒤꿈치 들기 | Heel raises while standing | 立ってかかとを上げる |
| 목표 | 종아리 근력 강화 | Strengthen the calf. | ふくらはぎを鍛えます。 |
| 방법 | 의자나 난간을 잡고 양쪽 뒤꿈치를 천천히 들어 올렸다가 내립니다. | Hold a chair or a rail. Slowly lift both heels, then lower them. | 椅子か手すりを持ち、両方のかかとをゆっくり上げ、下ろします。 |
| 주의 | 발목 통증이나 균형 불안이 있으면 범위를 줄이세요. | If the ankle hurts or your balance feels unsteady, use a smaller lift. | 足首の痛みやバランスの不安があれば、上げる高さを小さくしてください。 |

### 47. 서서 무릎 굽히기

- imageKey: `standing-knee-flexion`
- 단계: Lv3 선자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 서서 무릎 굽히기 | Bend the knee while standing | 立って膝を曲げる |
| 목표 | 햄스트링 강화 및 무릎 굽힘 조절 | Strengthen the hamstrings and control bending the knee. | ハムストリングスを鍛え、膝を曲げる動きをコントロールします。 |
| 방법 | 의자나 난간을 잡고 선 자세에서 한쪽 무릎을 뒤로 천천히 굽혔다가 내립니다. | Hold a chair or a rail. Slowly bend one knee backward, then lower the foot. | 椅子か手すりを持って立ち、片方の膝を後ろへゆっくり曲げ、下ろします。 |
| 주의 | 상체가 앞으로 숙여지지 않도록 하고 균형이 불안하면 보호자 감독하에 시행하세요. | Do not lean the chest forward. If your balance feels unsteady, do this with a caregiver watching. | 上体が前へ倒れないようにし、バランスが不安定なら介助者の見守りで行ってください。 |

### 48. 서서 다리 옆으로 들기

- imageKey: `standing-hip-abduction`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 서서 다리 옆으로 들기 | Lift the leg out to the side while standing | 立って脚を横に上げる |
| 목표 | 고관절 외전근 강화 | Strengthen the muscles that move the leg out to the side. | 脚を横に開く筋肉を鍛えます。 |
| 방법 | 의자를 잡고 선 상태에서 한쪽 다리를 옆으로 천천히 들어 올렸다가 내립니다. | Hold a chair. Slowly lift one leg out to the side, then lower it. | 椅子を持って立ち、片方の脚を横へゆっくり上げ、下ろします。 |
| 주의 | 몸통이 반대쪽으로 기울지 않게 주의하세요. | Do not lean the trunk to the opposite side. | 体が反対側へ傾かないように注意してください。 |

### 49. 서서 다리 뒤로 들기

- imageKey: `standing-hip-extension`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 서서 다리 뒤로 들기 | Lift the leg backward while standing | 立って脚を後ろに上げる |
| 목표 | 고관절 신전근 강화 | Strengthen the muscles that move the leg backward. | 脚を後ろに動かす筋肉を鍛えます。 |
| 방법 | 의자를 잡고 선 상태에서 무릎을 편 채 한쪽 다리를 뒤로 천천히 들어 올립니다. | Hold a chair. Keep the knee straight and slowly lift one leg backward. | 椅子を持って立ち、膝を伸ばしたまま片方の脚を後ろへゆっくり上げます。 |
| 주의 | 허리가 과하게 꺾이지 않도록 주의하세요. | Do not arch the low back. | 腰が過剰に反らないように注意してください。 |

### 50. 미니 스쿼트

- imageKey: `mini-squat`
- 단계: Lv3 선자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 미니 스쿼트 | Mini squat | ミニスクワット |
| 목표 | 하지 근력 강화 | Strengthen the legs. | 脚を鍛えます。 |
| 방법 | 의자나 난간을 잡고 무릎을 살짝 굽혔다가 천천히 폅니다. | Hold a chair or a rail. Bend the knees a little, then slowly straighten. | 椅子か手すりを持ち、膝を少し曲げ、ゆっくり伸ばします。 |
| 주의 | 무릎이 발끝보다 과하게 앞으로 나가지 않도록 주의하세요. | Do not let the knees travel far past the toes. | 膝が足先より大きく前へ出ないように注意してください。 |

### 51. 서서 앞으로 손 뻗기

- imageKey: `standing-forward-reach`
- 단계: Lv3 선자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 서서 앞으로 손 뻗기 | Reach forward while standing | 立って前へ手を伸ばす |
| 목표 | 전방 체중이동 및 선 자세 균형 향상 | Practice shifting weight forward and balancing while standing. | 前へ体重を移し、立ったバランスを高めます。 |
| 방법 | 안정적으로 선 자세에서 한 손 또는 양손을 앞으로 천천히 뻗었다가 돌아옵니다. | Stand steadily. Slowly reach forward with one hand or both hands, then come back. | 安定して立ち、片手または両手を前へゆっくり伸ばし、戻します。 |
| 주의 | 넘어질 위험이 있으면 보호자 또는 난간 가까이에서 시행하세요. | If you might fall, do this near a caregiver or a rail. | 転びそうなときは、介助者または手すりのそばで行ってください。 |

### 52. 벽 타고 팔 올리기

- imageKey: `wall-slide`
- 단계: Lv3 선자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 벽 타고 팔 올리기 | Walk the fingers up the wall | 壁づたいに腕を上げる |
| 목표 | 어깨 관절가동범위 및 상지 기능 향상 | Keep the shoulder moving and improve arm use. | 肩の動きを保ち、腕の働きを高めます。 |
| 방법 | 벽을 마주 보고 서서 손가락을 벽 위로 천천히 걸어 올렸다가 내려옵니다. | Face a wall. Slowly walk the fingers up the wall, then back down. | 壁に向かって立ち、指を壁の上へゆっくり歩き上げ、下ろします。 |
| 주의 | 어깨 통증이 심하면 높이를 낮추고 무리하지 마세요. | If the shoulder hurts a lot, do not reach as high. | 肩の痛みが強いときは、高さを下げ、無理をしないでください。 |

### 53. 날개뼈 크게 돌리기 ⚠

- imageKey: `scapular-rotation`
- 단계: Lv3 선자세
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 날개뼈 크게 돌리기 | Large shoulder-blade circles | 肩甲骨を大きく回す |
| 목표 | 견갑골 가동범위 및 어깨 주변 근육 활성화 | Move the shoulder blades and wake up the muscles around the shoulder. | 肩甲骨を動かし、肩のまわりの筋肉を働かせます。 |
| 방법 | 의자에 허리를 세우고 앉아 양 어깨를 천천히 크게 원을 그리듯 뒤로 돌립니다. 앞으로 모았다가 위로 올리고, 뒤로 당겼다가 아래로 내리는 순서로 반복합니다. | Sit tall. Slowly make large backward circles with both shoulders. In order: bring them forward, lift them up, pull them back, then lower them. Repeat. | 椅子に背すじを伸ばして座ります。両肩でゆっくり大きく、後ろ回しの円を描きます。前に寄せ、上に上げ、後ろに引き、下に下ろす順で繰り返します。 |
| 주의 | 어깨 통증이나 결림이 심하면 범위를 줄이세요. | If the shoulder hurts or feels very tight, use a smaller circle. | 肩の痛みやこりが強いときは、回す範囲を小さくしてください。 |

### 54. 스텝 터치

- imageKey: `step-tap`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 스텝 터치 | Step tap | ステップタッチ |
| 목표 | 발 위치 조절 및 체중이동 향상 | Practice placing the foot and shifting weight. | 足の位置と体重移動を練習します。 |
| 방법 | 앞에 낮은 발판이나 표시를 두고 한쪽 발로 가볍게 터치한 뒤 제자리로 돌아옵니다. | Place a low step or a mark in front of you. Lightly tap it with one foot, then bring the foot back. | 前に低い台か印を置き、片方の足で軽くタッチして、元の位置に戻します。 |
| 주의 | 발판이 미끄러지지 않도록 고정하세요. | Make sure the step cannot slide. | 台が滑らないように固定してください。 |

### 55. 제자리 방향전환

- imageKey: `turning-in-place`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 제자리 방향전환 | Turn in place | その場で方向を変える |
| 목표 | 보행 중 방향전환 능력 향상 | Improve turning while walking. | 歩きながらの方向転換を練習します。 |
| 방법 | 제자리에서 작은 보폭으로 천천히 방향을 바꿉니다. | Using small steps, slowly turn to face a new direction. | その場で小さい歩幅で、ゆっくり方向を変えます。 |
| 주의 | 급하게 돌지 말고 어지러우면 중단하세요. | Do not spin quickly. Stop if you feel dizzy. | 急に回らず、めまいがあれば中止してください。 |

### 56. 실내 걷기

- imageKey: `indoor-walking`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 실내 걷기 | Walk indoors | 室内を歩く |
| 목표 | 기본 보행 능력 및 활동량 향상 | Improve basic walking and daily activity. | 基本的な歩行と活動量を高めます。 |
| 방법 | 평평한 실내에서 편안한 속도로 걷습니다. 필요 시 보행보조도구를 사용합니다. | Walk at a comfortable pace on a flat indoor surface. Use a walking aid if you need one. | 平らな室内を、楽な速さで歩きます。必要なら歩行補助具を使います。 |
| 주의 | 어지러움이나 통증이 있으면 쉬어가며 시행하세요. | If you feel dizzy or it hurts, rest, then continue. | めまいや痛みがあれば、休みながら行ってください。 |

### 57. 복도 걷기

- imageKey: `corridor-walking`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 복도 걷기 | Walk in a hallway | 廊下を歩く |
| 목표 | 보행 지구력 향상 | Build walking endurance. | 歩く持久力を高めます。 |
| 방법 | 안전한 복도에서 일정한 속도로 걷습니다. 중간에 필요하면 휴식합니다. | Walk at a steady pace in a safe hallway. Rest along the way if you need to. | 安全な廊下を一定の速さで歩きます。途中で必要なら休みます。 |
| 주의 | 사람이나 장애물에 부딪히지 않도록 주의하세요. | Watch for people and obstacles so you do not bump into them. | 人や障害物にぶつからないように注意してください。 |

### 58. 야외 걷기

- imageKey: `outdoor-walking`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 야외 걷기 | Walk outdoors | 屋外を歩く |
| 목표 | 일상 활동량 및 지구력 향상 | Increase daily activity and endurance. | 日常の活動量と持久力を高めます。 |
| 방법 | 평평하고 안전한 야외 보행로에서 편안한 속도로 걷습니다. | Walk at a comfortable pace on a flat, safe outdoor path. | 平らで安全な屋外の道を、楽な速さで歩きます。 |
| 주의 | 경사로, 미끄러운 길, 사람이 많은 곳은 피하세요. | Avoid slopes, slippery ground, and crowded places. | 坂道、滑りやすい道、人の多い場所は避けてください。 |

### 59. 옆으로 걷기 ⚠

- imageKey: `side-walking`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 옆으로 걷기 | Step sideways | 横歩き |
| 목표 | 측방 균형 및 고관절 근력 향상 | Improve side-to-side balance and hip strength. | 横方向のバランスと股関節の筋力を高めます。 |
| 방법 | 난간이나 벽 가까이에서 옆으로 한 발씩 천천히 이동합니다. | Stay near a rail or a wall. Slowly step sideways, one foot at a time. | 手すりや壁のそばで、横へ一歩ずつゆっくり移動します。 |
| 주의 | 발이 꼬이지 않도록 천천히 시행하세요. | Move slowly so the feet do not cross and tangle. | 足がもつれないよう、ゆっくり行ってください。 |

### 60. 뒤로 걷기

- imageKey: `backward-walking`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 뒤로 걷기 | Walk backward | 後ろ歩き |
| 목표 | 후방 보행 조절 및 균형 향상 | Improve control and balance when stepping backward. | 後ろへ歩くコントロールとバランスを高めます。 |
| 방법 | 안전한 공간에서 짧은 거리만 천천히 뒤로 걷습니다. | In a safe space, walk backward slowly for a short distance only. | 安全な場所で、短い距離だけゆっくり後ろへ歩きます。 |
| 주의 | 반드시 보호자 감독 또는 난간 가까이에서 시행하세요. | Do this only with a caregiver watching, or close to a rail. | 必ず介助者の見守りか、手すりのそばで行ってください。 |

### 61. 일자 걷기

- imageKey: `tandem-walking`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 일자 걷기 | Tandem walk | 一直線に歩く |
| 목표 | 동적 균형 향상 | Improve balance while moving. | 動きながらのバランスを高めます。 |
| 방법 | 한 발을 다른 발 앞에 놓듯이 선을 따라 천천히 걷습니다. | Walk slowly along a line, placing one foot in front of the other. | 線に沿って、片方の足をもう片方の前に置くようにゆっくり歩きます。 |
| 주의 | 균형이 불안하면 난간을 잡고 시행하세요. | Hold a rail if your balance feels unsteady. | バランスが不安定なときは、手すりを持って行ってください。 |

### 62. 낮은 장애물 넘기

- imageKey: `obstacle-crossing`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 양측

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 낮은 장애물 넘기 | Step over a low obstacle | 低い障害物をまたぐ |
| 목표 | 보행 중 발 들기 및 균형 향상 | Practice lifting the foot while walking, and improve balance. | 歩きながら足を上げ、バランスを高めます。 |
| 방법 | 낮은 장애물을 천천히 넘어갑니다. 발끝이 걸리지 않도록 충분히 들어 올립니다. | Slowly step over a low obstacle. Lift the foot high enough that the toes do not catch. | 低い障害物をゆっくりまたぎます。足先が引っかからないよう、十分に上げます。 |
| 주의 | 보호자 감독하에 낮은 장애물부터 시작하세요. | Start with a low obstacle, with a caregiver watching. | 介助者の見守りで、低い障害物から始めてください。 |

### 63. 콘 사이 걷기

- imageKey: `obstacle-weaving`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 콘 사이 걷기 | Weave between cones | コーンの間を歩く |
| 목표 | 방향전환 및 장애물 회피 능력 향상 | Practice turning and walking around obstacles. | 方向転換と、障害物を避ける歩き方を練習します。 |
| 방법 | 바닥에 놓인 콘이나 표식 사이를 천천히 지그재그로 걸어갑니다. | Slowly walk in a zigzag between cones or marks on the floor. | 床に置いたコーンや印の間を、ゆっくりジグザグに歩きます。 |
| 주의 | 콘에 걸리지 않도록 충분한 간격을 두고 시행하세요. | Leave enough space so you do not trip on a cone. | コーンに引っかからないよう、十分な間隔を空けて行ってください。 |

### 64. 낮은 계단 오르기

- imageKey: `step-up-low`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 낮은 계단 오르기 | Step up onto a low step | 低い段を上る |
| 목표 | 하지 근력 및 계단 기능 향상 | Strengthen the legs and practice stair skills. | 脚を鍛え、階段の動作を練習します。 |
| 방법 | 낮은 계단에 한 발을 올리고 천천히 올라갔다가 내려옵니다. | Place one foot on a low step, step up slowly, then step back down. | 低い段に片方の足を乗せ、ゆっくり上り、下りてきます。 |
| 주의 | 난간을 잡고 보호자 감독하에 시행하세요. | Hold a rail, and do this with a caregiver watching. | 手すりを持ち、介助者の見守りで行ってください。 |

### 65. 계단 오르기

- imageKey: `stair-up`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 계단 오르기 | Walk up stairs | 階段を上る |
| 목표 | 계단 기능 및 하지 근력 향상 | Practice stairs and strengthen the legs. | 階段の動作を練習し、脚を鍛えます。 |
| 방법 | 난간을 잡고 한 계단씩 천천히 올라갑니다. | Hold the rail and go up one step at a time, slowly. | 手すりを持ち、一段ずつゆっくり上ります。 |
| 주의 | 무릎 통증이나 숨참이 심하면 중단하세요. | Stop if the knee hurts a lot or you are very short of breath. | 膝の痛みや息苦しさが強いときは中止してください。 |

### 66. 계단 내려오기

- imageKey: `stair-down`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 계단 내려오기 | Walk down stairs | 階段を下りる |
| 목표 | 계단 하강 조절 능력 향상 | Improve control when coming down stairs. | 階段を下りるコントロールを高めます。 |
| 방법 | 난간을 잡고 한 계단씩 천천히 내려옵니다. | Hold the rail and come down one step at a time, slowly. | 手すりを持ち、一段ずつゆっくり下ります。 |
| 주의 | 급하게 내려오지 말고 반드시 난간을 잡으세요. | Do not rush. Always hold the rail. | 急いで下りず、必ず手すりを持ってください。 |

### 67. 8자 걷기

- imageKey: `figure-8-walking`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 8자 걷기 | Figure-8 walk | 8の字歩き |
| 목표 | 방향전환 및 동적 균형 향상 | Practice turning and balance while moving. | 方向転換と、動きながらのバランスを練習します。 |
| 방법 | 두 개의 표식을 중심으로 8자 모양 경로를 따라 천천히 걷습니다. | Walk slowly in a figure-8 around two marks. | 二つの印を中心に、8の字の道をゆっくり歩きます。 |
| 주의 | 어지럽거나 균형이 흔들리면 즉시 멈추세요. | Stop right away if you feel dizzy or your balance wobbles. | めまいやバランスのふらつきがあれば、すぐに止まってください。 |

### 68. 가벼운 물건 옮기기

- imageKey: `carrying-object`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 가벼운 물건 옮기기 | Carry a light object | 軽い物を運ぶ |
| 목표 | 기능적 보행 및 양손 사용 향상 | Practice walking while using both hands. | 両手を使う歩き方を練習します。 |
| 방법 | 가벼운 물건을 들고 짧은 거리를 천천히 이동한 뒤 내려놓습니다. | Carry a light object, walk a short distance slowly, then set it down. | 軽い物を持ち、短い距離をゆっくり移動して、置きます。 |
| 주의 | 무거운 물건은 피하고 균형이 불안하면 보호자가 도와주세요. | Do not carry anything heavy. If your balance feels unsteady, ask a caregiver for help. | 重い物は避け、バランスが不安定なら介助者に手伝ってもらってください。 |

### 69. 속도 변화 걷기

- imageKey: `speed-change-walking`
- 단계: Lv4 보행훈련
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 속도 변화 걷기 | Change walking speed | 歩く速さを変える |
| 목표 | 보행 조절 능력 향상 | Improve control of walking speed and rhythm. | 歩く速さやリズムのコントロールを高めます。 |
| 방법 | 평소 속도로 걷다가 조금 빠르게 또는 천천히 걷습니다. | Walk at your usual pace, then a little faster or a little slower. | いつもの速さで歩き、少し速く、またはゆっくり歩きます。 |
| 주의 | 무리하게 빠르게 걷지 마세요. | Do not push yourself to walk fast. | 無理に速く歩かないでください。 |

### 70. 고정식 자전거

- imageKey: `stationary-bike`
- 단계: Lv5 유산소운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 고정식 자전거 | Stationary bike | 固定式自転車 |
| 목표 | 심폐지구력 및 하지 반복운동 | Build heart-and-lung endurance and repeat leg movement. | 心肺の持久力を高め、脚の繰り返し運動をします。 |
| 방법 | 고정식 자전거에 앉아 편안한 강도로 페달을 밟습니다. | Sit on a stationary bike and pedal at an easy effort. | 固定式自転車に座り、楽な強さでペダルをこぎます。 |
| 주의 | 숨이 너무 차거나 어지러우면 즉시 중단하세요. | Stop right away if you are too short of breath or you feel dizzy. | 息が上がりすぎる、またはめまいがあれば、すぐに中止してください。 |

### 71. 트레드밀 걷기

- imageKey: `treadmill-walking`
- 단계: Lv5 유산소운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 트레드밀 걷기 | Treadmill walking | トレッドミル歩行 |
| 목표 | 보행 지구력 및 속도 조절 | Build walking endurance and practice speed control. | 歩く持久力と、速さのコントロールを高めます。 |
| 방법 | 트레드밀에서 안전 손잡이를 잡고 느린 속도부터 걷습니다. | Hold the safety rails and start walking on the treadmill at a slow speed. | トレッドミルで安全手すりを持ち、遅い速さから歩きます。 |
| 주의 | 반드시 치료사 또는 보호자 감독하에 시행하세요. | Do this only with a therapist or caregiver watching. | 必ず療法士または介助者の見守りで行ってください。 |

### 72. 야외 지구력 걷기

- imageKey: `outdoor-endurance-walking`
- 단계: Lv5 유산소운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 야외 지구력 걷기 | Outdoor endurance walk | 屋外で持久歩行 |
| 목표 | 전신 지구력 및 일상 활동량 향상 | Build whole-body endurance and daily activity. | 全身の持久力と日常の活動量を高めます。 |
| 방법 | 평평하고 안전한 야외 보행로에서 편안한 속도로 15~20분 정도 걷습니다. 필요하면 중간에 쉬어도 됩니다. | Walk at a comfortable pace for about 15~20 minutes on a flat, safe outdoor path. You may rest along the way. | 平らで安全な屋外の道を、楽な速さで15~20分ほど歩きます。途中で休んでもかまいません。 |
| 주의 | 경사로, 미끄러운 길, 사람이 많은 곳은 피하고, 흉통·호흡곤란·어지러움이 있으면 즉시 중단하세요. | Avoid slopes, slippery ground, and crowded places. Stop right away if you have chest pain, shortness of breath, or dizziness. | 坂道、滑りやすい道、人の多い場所は避けてください。胸の痛み、息苦しさ、めまいがあればすぐに中止してください。 |

### 73. 종아리 스트레칭

- imageKey: `standing-calf-stretch`
- 단계: Lv3 선자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 종아리 스트레칭 | Calf stretch | ふくらはぎのストレッチ |
| 목표 | 발목 가동범위 및 보행 준비 | Keep the ankle moving and prepare for walking. | 足首の動きを保ち、歩く準備をします。 |
| 방법 | 벽이나 난간을 짚고 한쪽 다리를 뒤로 뻗습니다. 뒤쪽 무릎을 편 상태에서 발뒤꿈치가 바닥에서 떨어지지 않게 유지하며 종아리가 당기는 느낌을 느낍니다. | Hold a wall or a rail and step one leg back. Keep the back knee straight and the heel on the floor, and feel a stretch in the calf. | 壁か手すりを持ち、片方の脚を後ろへ伸ばします。後ろの膝を伸ばし、かかとが床から離れないようにして、ふくらはぎが伸びる感じを保ちます。 |
| 주의 | 반동을 주지 말고 천천히 유지하세요. 통증이 있으면 범위를 줄이세요. | Do not bounce. Hold the stretch quietly. If it hurts, ease off. | 反動をつけず、ゆっくり保ってください。痛みがあれば範囲を小さくしてください。 |

### 74. 햄스트링 스트레칭

- imageKey: `hamstring-stretch`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 햄스트링 스트레칭 | Hamstring stretch | ハムストリングスのストレッチ |
| 목표 | 무릎 뒤쪽 유연성 및 보행 준비 | Loosen the back of the thigh and prepare for walking. | 太ももの後ろをやわらかくし、歩く準備をします。 |
| 방법 | 의자에 앉아 한쪽 다리를 앞으로 펴고 발끝을 가볍게 당깁니다. 허리를 세운 상태에서 몸을 천천히 앞으로 기울여 허벅지 뒤쪽이 당기는 느낌을 유지합니다. | Sit in a chair, straighten one leg, and gently draw the toes up. Sit tall and slowly lean forward until you feel a stretch at the back of the thigh. Hold it. | 椅子に座り、片方の脚を前へ伸ばして足先を軽く上げます。背すじを伸ばしたまま体をゆっくり前へ傾け、太ももの後ろが伸びる感じを保ちます。 |
| 주의 | 허리를 과하게 굽히거나 반동을 주지 마세요. 저림이나 통증이 있으면 중단하세요. | Do not round the back hard or bounce. Stop if you feel tingling or pain. | 腰を深く丸めたり、反動をつけたりしないでください。しびれや痛みがあれば中止してください。 |

### 75. 횡격막 호흡 ⚠

- imageKey: `diaphragmatic-breathing`
- 단계: Lv1 침상운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 횡격막 호흡 | Diaphragmatic breathing | 腹式呼吸 |
| 목표 | 횡격막 호흡과 환기 효율 | Practice diaphragmatic breathing and easier air movement. | 横隔膜を使う呼吸で、空気の出入りをしやすくします。 |
| 방법 | 바로 눕거나 허리를 세우고 앉습니다. 한 손은 가슴, 한 손은 배에 올리고 코로 천천히 들이마시며 배가 손에 닿게 부풀립니다. 입으로 천천히 내쉬며 배가 들어가게 합니다. | Lie on your back, or sit tall. Put one hand on the chest and one on the belly. Breathe in slowly through the nose so the belly rises into the hand. Breathe out slowly through the mouth so the belly falls. | 仰向けになるか、背すじを伸ばして座ります。片手を胸、片手をお腹に置きます。鼻からゆっくり吸い、お腹が手に触れるようにふくらませます。口からゆっくり吐き、お腹がへこむようにします。 |
| 주의 | 어지럽거나 숨이 가빠지면 바로 멈추고 평소 호흡으로 돌아옵니다. 힘을 주어 배를 밀어 올리지 마세요. | If you feel dizzy or short of breath, stop and return to your usual breathing. Do not force the belly up. | めまいや息切れがあればすぐにやめ、いつもの呼吸に戻してください。お腹を無理に押し上げないでください。 |

### 76. 입술 오므리고 호흡 ⚠

- imageKey: `pursed-lip-breathing`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 입술 오므리고 호흡 | Pursed-lip breathing | 口すぼめ呼吸 |
| 목표 | 날숨 시간과 기도 개방 | Lengthen the breath out and help keep the airways open. | 息を吐く時間を長くし、気道を開きやすくします。 |
| 방법 | 허리를 세우고 앉습니다. 코로 천천히 들이마신 뒤, 입술을 작게 오므리고 촛불을 흔들 듯이 길게 내쉽니다. 들이마시기보다 내쉬기를 길게 합니다. | Sit tall. Breathe in slowly through the nose. Then purse the lips, as if you were gently flickering a candle, and breathe out for a long time. Make the breath out longer than the breath in. | 背すじを伸ばして座ります。鼻からゆっくり吸います。次に唇を小さくすぼめ、ろうそくの炎をゆらすように長く吐きます。吸うより吐く方を長くします。 |
| 주의 | 볼을 과도하게 부풀리거나 숨을 참지 마세요. 어지러우면 중단하세요. | Do not puff the cheeks hard, and do not hold your breath. Stop if you feel dizzy. | 頬を強くふくらませたり、息を止めたりしないでください。めまいがあれば中止してください。 |

### 77. 가슴 확장 호흡

- imageKey: `thoracic-expansion`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 가슴 확장 호흡 | Chest-expansion breathing | 胸郭を広げる呼吸 |
| 목표 | 흉곽 확장과 흡기 깊이 | Expand the rib cage and take a deeper breath in. | 胸郭を広げ、息を深く吸えるようにします。 |
| 방법 | 허리를 세우고 앉아 양손을 갈비뼈 옆에 둡니다. 코로 천천히 깊게 들이마시며 갈비뼈가 양옆으로 넓어지게 합니다. 입을 가볍게 벌리고 갈비뼈가 내려오게 내쉽니다. | Sit tall with both hands on the sides of the rib cage. Breathe in slowly and deeply through the nose so the ribs widen to the sides. Open the mouth slightly and breathe out as the ribs come back down. | 背すじを伸ばして座り、両手を肋骨の横に置きます。鼻からゆっくり深く吸い、肋骨が左右に広がるようにします。口を軽く開け、肋骨が下がるように吐きます。 |
| 주의 | 어깨를 으쓱하며 들이마시지 마세요. 통증이나 심한 숨참이 있으면 깊이를 줄이세요. | Do not shrug the shoulders as you breathe in. If it hurts or you are very short of breath, take a shallower breath. | 肩をすくめて吸わないでください。痛みや強い息苦しさがあれば、深さをおさえてください。 |

### 78. 유발 폐활량계 ⚠

- imageKey: `incentive-spirometry`
- 단계: Lv1 침상운동
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 유발 폐활량계 | Incentive spirometer | インセンティブスパイロメーター |
| 목표 | 느리고 깊은 들숨 | Practice a slow, deep breath in. | ゆっくり深い息吸いを練習します。 |
| 방법 | 가능하면 허리를 세우고 앉습니다. 유발 폐활량계의 마우스피스를 물고 코로 새지 않게 합니다. 천천히 깊게 들이마셔 표시가 올라가도록 하고, 최대로 들이마신 상태에서 3~5초 숨을 참습니다. 마우스피스를 뺀 뒤 편하게 내쉽니다. | Sit tall if you can. Seal your lips around the mouthpiece of the incentive spirometer so air does not leak through the nose. Breathe in slowly and deeply so the indicator rises. At the fullest breath, hold for 3~5 seconds. Take the mouthpiece out, then breathe out comfortably. | できれば背すじを伸ばして座ります。インセンティブスパイロメーターのマウスピースをくわえ、鼻から空気が漏れないようにします。ゆっくり深く吸い、表示が上がるようにします。いっぱいに吸ったところで3~5秒息を止めます。マウスピースを外してから、楽に吐きます。 |
| 주의 | 빠르게 세게 들이마시지 마세요. 어지러움, 흉통, 심한 숨참이 있으면 중단하고 치료사에게 알리세요. | Do not breathe in fast or hard. Stop and tell your therapist if you feel dizzy, have chest pain, or are very short of breath. | 速く強く吸わないでください。めまい、胸の痛み、強い息苦しさがあれば中止し、療法士に伝えてください。 |

### 79. 허프 기침 ⚠

- imageKey: `huff-cough`
- 단계: Lv2 앉은자세
- 좌/우 기본값: 없음

| 항목 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 이름 | 허프 기침 | Huff | ハフィング |
| 목표 | 기도 분비물 이동 | Help move mucus up and out of the airways. | 気道のたんを上の方へ動かします。 |
| 방법 | 허리를 세우고 앉습니다. 코로 보통 크기로 들이마신 뒤, 입을 크게 벌리고 거울에 김을 서리게 하듯 '허-' 하고 길고 세게 내쉽니다. 가래가 목 근처로 올라오면 한 번 기침하고 쉽니다. | Sit tall. Breathe in through the nose at a usual size. Open the mouth wide and breathe out in one long, strong “huh,” as if you were fogging a mirror. If mucus moves up near the throat, cough once, then rest. | 背すじを伸ばして座ります。鼻から普通の大きさで吸います。口を大きく開け、鏡をくもらせるような「ハッ」という長く強い息で吐きます。たんがのど元まで上がってきたら、一度咳をして休みます。 |
| 주의 | 연속해서 세게 기침하지 마세요. 어지럽거나 통증이 있으면 중단하세요. | Do not cough hard over and over. Stop if you feel dizzy or it hurts. | 続けて強く咳をしないでください。めまいや痛みがあれば中止してください。 |

