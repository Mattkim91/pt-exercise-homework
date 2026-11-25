/* 인쇄·미리보기 문구
   치료사 화면은 한국어입니다. 이 파일은 출력 언어가 영어·일본어일 때만 쓰입니다.
   <script src="i18n.js"> 로 읽으므로 file:// 에서도 동작합니다.
   환자 이름, 치료사 이름, 직접 고친 메모는 번역하지 않습니다.
   운동의 한국어 원문은 exercises.js 에만 있습니다. 이 파일은 그 문장을 바꾸지 않습니다.
*/
var PRINT_STRINGS = {
  "ko": {
    "docTitle": "개인별 맞춤 운동 과제",
    "docSubtitle": "안전한 범위에서 천천히 시행해주세요.",
    "patientName": "환자명",
    "dateLabel": "작성일",
    "dailyFreqLabel": "하루 횟수",
    "timeLabel": "예상시간",
    "therapistLabel": "담당치료사",
    "exercise": "운동",
    "method": "방법",
    "goal": "목표",
    "caution": "주의",
    "generalCaution": "공통 주의사항",
    "empty": "선택된 운동이 없습니다.",
    "checklistTitle": "📅 운동 수행 체크표",
    "painTitle": "✅ 통증/피로도 기록",
    "painBefore": "운동 전 통증 NRS",
    "painAfter": "운동 후 통증 NRS",
    "fatigueBefore": "운동 전 피로도",
    "fatigueAfter": "운동 후 피로도",
    "fatigueScale": "낮음 / 보통 / 높음",
    "video": "영상",
    "qrAlt": "운동 영상 QR",
    "qrHelp": "📱 QR코드를 촬영하면 운동 영상을 확인할 수 있습니다.",
    "pdfName": "환자",
    "missing": "목록에 없는 운동"
  },
  "en": {
    "docTitle": "Your home exercise program",
    "docSubtitle": "Move slowly, and stay within a range that feels safe.",
    "patientName": "Name",
    "dateLabel": "Date",
    "dailyFreqLabel": "Times a day",
    "timeLabel": "Estimated time",
    "therapistLabel": "Therapist",
    "exercise": "Exercise",
    "method": "Instructions",
    "goal": "Goal",
    "caution": "Caution",
    "generalCaution": "General precautions",
    "empty": "No exercises selected.",
    "checklistTitle": "📅 Exercise checklist",
    "painTitle": "✅ Pain and fatigue log",
    "painBefore": "Pain before exercise (0–10)",
    "painAfter": "Pain after exercise (0–10)",
    "fatigueBefore": "Fatigue before exercise",
    "fatigueAfter": "Fatigue after exercise",
    "fatigueScale": "Low / Moderate / High",
    "video": "Video",
    "qrAlt": "Exercise video QR code",
    "qrHelp": "📱 Point your camera at the QR code to watch the exercise video.",
    "pdfName": "Patient",
    "missing": "Exercise not in the list"
  },
  "ja": {
    "docTitle": "あなた向けの自宅運動",
    "docSubtitle": "安全な範囲で、ゆっくり行ってください。",
    "patientName": "お名前",
    "dateLabel": "作成日",
    "dailyFreqLabel": "1日の回数",
    "timeLabel": "めやす時間",
    "therapistLabel": "担当療法士",
    "exercise": "運動",
    "method": "方法",
    "goal": "目標",
    "caution": "注意",
    "generalCaution": "共通の注意",
    "empty": "選ばれた運動はありません。",
    "checklistTitle": "📅 運動の実施チェック表",
    "painTitle": "✅ 痛み・疲れの記録",
    "painBefore": "運動前の痛み（0–10）",
    "painAfter": "運動後の痛み（0–10）",
    "fatigueBefore": "運動前の疲れ",
    "fatigueAfter": "運動後の疲れ",
    "fatigueScale": "軽い / 普通 / 強い",
    "video": "動画",
    "qrAlt": "運動動画のQRコード",
    "qrHelp": "📱 QRコードを読み取ると、運動の動画を見られます。",
    "pdfName": "患者",
    "missing": "一覧にない運動"
  }
};
var SAFETY_I18N = {
  "en": {
    "낙상 위험 — 반드시 보호자 감독 또는 지지물 가까이에서 시행하세요.": "Fall risk — do this only with a caregiver watching, or close to something sturdy you can hold.",
    "운동 중 흉통·호흡곤란·어지러움 시 즉시 중단하세요.": "Stop right away if you have chest pain, shortness of breath, or dizziness during the exercise.",
    "통증이 심해지면 강도를 줄이거나 중단하세요.": "If the pain gets worse, make the exercise easier or stop.",
    "안전한 범위에서 천천히 시행하고 불편감이 있으면 치료사에게 알려주세요.": "Move slowly in a range that feels safe. Tell your therapist if anything feels wrong."
  },
  "ja": {
    "낙상 위험 — 반드시 보호자 감독 또는 지지물 가까이에서 시행하세요.": "転倒の危険 — 必ず介助者が見守るか、しっかりした支えのそばで行ってください。",
    "운동 중 흉통·호흡곤란·어지러움 시 즉시 중단하세요.": "運動中に胸の痛み、息苦しさ、めまいが出たら、すぐに中止してください。",
    "통증이 심해지면 강도를 줄이거나 중단하세요.": "痛みが強くなるときは、楽にするか中止してください。",
    "안전한 범위에서 천천히 시행하고 불편감이 있으면 치료사에게 알려주세요.": "安全な範囲でゆっくり行い、違和感があれば療法士に伝えてください。"
  }
};
var LEVEL_I18N = {
  "Lv0 PROM/보호자": {
    "en": "Lv0 PROM / caregiver",
    "ja": "Lv0 他動運動／介助"
  },
  "Lv1 침상운동": {
    "en": "Lv1 Bed exercise",
    "ja": "Lv1 ベッド上の運動"
  },
  "Lv2 앉은자세": {
    "en": "Lv2 Sitting",
    "ja": "Lv2 座って行う運動"
  },
  "Lv3 선자세": {
    "en": "Lv3 Standing",
    "ja": "Lv3 立って行う運動"
  },
  "Lv4 보행훈련": {
    "en": "Lv4 Walking practice",
    "ja": "Lv4 歩行練習"
  },
  "Lv5 유산소운동": {
    "en": "Lv5 Aerobic exercise",
    "ja": "Lv5 有酸素運動"
  }
};
var SIDE_I18N = {
  "좌측": {
    "en": "Left",
    "ja": "左側"
  },
  "우측": {
    "en": "Right",
    "ja": "右側"
  },
  "양측": {
    "en": "Both sides",
    "ja": "両側"
  },
  "환측": {
    "en": "Affected side",
    "ja": "患側"
  },
  "건측": {
    "en": "Unaffected side",
    "ja": "健側"
  }
};
var DAY_LABELS = {
  "ko": [
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
    "일"
  ],
  "en": [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
  ],
  "ja": [
    "月",
    "火",
    "水",
    "木",
    "金",
    "土",
    "日"
  ]
};
var MEMO_PRESETS = {
  "default": {
    "ko": "통증이나 어지럼증 등의 증상 발생 시 잠시 중단하고 충분한 휴식을 취해주세요.",
    "en": "If you get pain, dizziness, or similar symptoms, pause and rest until you feel better.",
    "ja": "痛みやめまいなどの症状が出たら、いったん中止して十分に休んでください。"
  },
  "tha": {
    "ko": "통증이나 어지럼증 등의 증상 발생 시 잠시 중단하고 충분한 휴식을 취해주세요. 인공고관절 수술 후의 일반 주의: 고관절을 90도보다 많이 굽히지 마세요. 다리를 몸 가운데선 너머로 모으거나 꼬지 마세요. 무릎과 발끝을 안쪽으로 돌리지 마세요.",
    "en": "If you get pain, dizziness, or similar symptoms, pause and rest until you feel better. General precautions after hip replacement: do not bend the hip past 90 degrees. Do not bring the leg across the midline of your body or cross your legs. Do not turn the knee and toes inward.",
    "ja": "痛みやめまいなどの症状が出たら、いったん中止して十分に休んでください。人工股関節の手術後の一般的な注意: 股関節を90度より深く曲げないでください。脚を体の真ん中の線より内側に寄せたり、脚を組んだりしないでください。膝とつま先を内側にひねらないでください。"
  }
};
var TARGET_I18N = {
  "발목 관절가동범위 유지 및 구축 예방": {
    "en": "Keep the ankle moving and help prevent stiffness.",
    "ja": "足首の動きを保ち、硬くなるのを防ぎます。"
  },
  "하지 관절가동범위 유지 및 구축 예방": {
    "en": "Keep the leg joints moving and help prevent stiffness.",
    "ja": "脚の関節の動きを保ち、硬くなるのを防ぎます。"
  },
  "어깨 관절가동범위 유지 및 구축 예방": {
    "en": "Keep the shoulder moving and help prevent stiffness.",
    "ja": "肩の動きを保ち、硬くなるのを防ぎます。"
  },
  "손목·손가락 관절가동범위 유지 및 구축 예방": {
    "en": "Keep the wrist and fingers moving and help prevent stiffness.",
    "ja": "手首と指の動きを保ち、硬くなるのを防ぎます。"
  },
  "침상 이동 능력 향상": {
    "en": "Make it easier to move in bed.",
    "ja": "ベッドの上で動きやすくします。"
  },
  "대퇴사두근 활성화": {
    "en": "Wake up the muscle on the front of the thigh.",
    "ja": "太ももの前の筋肉を働かせます。"
  },
  "둔근 활성화": {
    "en": "Wake up the buttock muscles.",
    "ja": "お尻の筋肉を働かせます。"
  },
  "대퇴사두근 강화 및 무릎 펴기 조절": {
    "en": "Strengthen the front of the thigh and control straightening the knee.",
    "ja": "太ももの前を鍛え、膝を伸ばす動きをコントロールします。"
  },
  "고관절 굴곡근 및 대퇴사두근 강화": {
    "en": "Strengthen the muscles that lift the thigh and straighten the knee.",
    "ja": "脚を上げる筋肉と、膝を伸ばす筋肉を鍛えます。"
  },
  "고관절 외전근 강화": {
    "en": "Strengthen the muscles that move the leg out to the side.",
    "ja": "脚を横に開く筋肉を鍛えます。"
  },
  "고관절 외전근 및 중둔근 강화": {
    "en": "Strengthen the side-hip and gluteus medius muscles.",
    "ja": "股関節の外側と中殿筋を鍛えます。"
  },
  "고관절 외전근 강화 및 골반 안정성 향상": {
    "en": "Strengthen the side-hip muscles and steady the pelvis.",
    "ja": "股関節の外側を鍛え、骨盤を安定させます。"
  },
  "둔근 강화 및 침상 이동 준비": {
    "en": "Strengthen the buttocks and prepare for moving in bed.",
    "ja": "お尻を鍛え、ベッドの上で動く準備をします。"
  },
  "손목 관절가동범위 유지": {
    "en": "Keep the wrist moving.",
    "ja": "手首の動きを保ちます。"
  },
  "팔꿈치 관절가동범위 유지": {
    "en": "Keep the elbow moving.",
    "ja": "肘の動きを保ちます。"
  },
  "상지 체중지지 및 어깨 안정성 향상": {
    "en": "Practice taking weight through the arm and steady the shoulder.",
    "ja": "腕に体重をのせ、肩を安定させます。"
  },
  "골반 조절 및 요부 긴장 완화": {
    "en": "Practice pelvic control and ease tension in the low back.",
    "ja": "骨盤のコントロールを練習し、腰の緊張をやわらげます。"
  },
  "상지 조절 및 체간 안정성 향상": {
    "en": "Improve arm control and trunk steadiness.",
    "ja": "腕のコントロールと体幹の安定を高めます。"
  },
  "정적 앉은 균형 향상": {
    "en": "Improve steady balance while sitting.",
    "ja": "座ったままのバランスを高めます。"
  },
  "앉은 균형 및 체간 조절": {
    "en": "Improve sitting balance and trunk control.",
    "ja": "座ったバランスと体幹のコントロールを高めます。"
  },
  "상지 도달 및 체간 조절": {
    "en": "Practice reaching and trunk control.",
    "ja": "手を伸ばす動きと体幹のコントロールを練習します。"
  },
  "동적 앉은 균형 향상": {
    "en": "Improve balance while sitting and moving.",
    "ja": "座りながら動くバランスを高めます。"
  },
  "상지 도달 및 시각 탐색 능력 향상": {
    "en": "Practice reaching and looking toward a target.",
    "ja": "目標を見て手を伸ばす練習をします。"
  },
  "대퇴사두근 강화": {
    "en": "Strengthen the front of the thigh.",
    "ja": "太ももの前を鍛えます。"
  },
  "고관절 굴곡 및 보행 준비": {
    "en": "Practice lifting the thigh to prepare for walking.",
    "ja": "太ももを上げて、歩く準備をします。"
  },
  "종아리 근력 강화": {
    "en": "Strengthen the calf.",
    "ja": "ふくらはぎを鍛えます。"
  },
  "발목 배측굴곡근 강화": {
    "en": "Strengthen the muscles that lift the foot up.",
    "ja": "足先を上げる筋肉を鍛えます。"
  },
  "어깨 움직임 및 상지 조절": {
    "en": "Practice shoulder movement and arm control.",
    "ja": "肩の動きと腕のコントロールを練習します。"
  },
  "양측 상지 협응 및 어깨 ROM": {
    "en": "Use both arms together and keep the shoulder moving.",
    "ja": "両腕をそろえて動かし、肩の可動域を保ちます。"
  },
  "손가락 협응 및 미세운동 향상": {
    "en": "Improve finger coordination and fine movement.",
    "ja": "指の協調と細かい動きを高めます。"
  },
  "손 근력 및 쥐기 기능 향상": {
    "en": "Strengthen the hand and improve grip.",
    "ja": "手の力と握る働きを高めます。"
  },
  "견갑골 안정화 및 자세 조절 향상": {
    "en": "Steady the shoulder blades and improve posture.",
    "ja": "肩甲骨を安定させ、姿勢のコントロールを高めます。"
  },
  "상지 지지 및 체중부하 훈련": {
    "en": "Practice supporting yourself through the arms.",
    "ja": "腕で体を支える練習をします。"
  },
  "하지 근력 및 기능적 이동 향상": {
    "en": "Strengthen the legs and make everyday transfers easier.",
    "ja": "脚を鍛え、日常の移動をしやすくします。"
  },
  "하지 근력 및 선 자세 안정성 향상": {
    "en": "Strengthen the legs and improve steady standing.",
    "ja": "脚を鍛え、立った姿勢を安定させます。"
  },
  "보행 전 체중이동 훈련": {
    "en": "Practice shifting weight before walking.",
    "ja": "歩く前に、体重を移す練習をします。"
  },
  "계단 준비 및 하지 체중부하 조절": {
    "en": "Prepare for stairs and practice controlling weight on the leg.",
    "ja": "階段の準備として、脚への体重のかけ方を練習します。"
  },
  "정적 균형 향상": {
    "en": "Improve steady balance.",
    "ja": "じっと立つバランスを高めます。"
  },
  "좁은 지지면 균형 향상": {
    "en": "Improve balance on a narrow base.",
    "ja": "せまい面で立つバランスを高めます。"
  },
  "보행 준비 및 하지 조절": {
    "en": "Prepare for walking and improve leg control.",
    "ja": "歩く準備をし、脚のコントロールを高めます。"
  },
  "햄스트링 강화 및 무릎 굽힘 조절": {
    "en": "Strengthen the hamstrings and control bending the knee.",
    "ja": "ハムストリングスを鍛え、膝を曲げる動きをコントロールします。"
  },
  "고관절 신전근 강화": {
    "en": "Strengthen the muscles that move the leg backward.",
    "ja": "脚を後ろに動かす筋肉を鍛えます。"
  },
  "하지 근력 강화": {
    "en": "Strengthen the legs.",
    "ja": "脚を鍛えます。"
  },
  "전방 체중이동 및 선 자세 균형 향상": {
    "en": "Practice shifting weight forward and balancing while standing.",
    "ja": "前へ体重を移し、立ったバランスを高めます。"
  },
  "어깨 관절가동범위 및 상지 기능 향상": {
    "en": "Keep the shoulder moving and improve arm use.",
    "ja": "肩の動きを保ち、腕の働きを高めます。"
  },
  "견갑골 가동범위 및 어깨 주변 근육 활성화": {
    "en": "Move the shoulder blades and wake up the muscles around the shoulder.",
    "ja": "肩甲骨を動かし、肩のまわりの筋肉を働かせます。"
  },
  "발 위치 조절 및 체중이동 향상": {
    "en": "Practice placing the foot and shifting weight.",
    "ja": "足の位置と体重移動を練習します。"
  },
  "보행 중 방향전환 능력 향상": {
    "en": "Improve turning while walking.",
    "ja": "歩きながらの方向転換を練習します。"
  },
  "기본 보행 능력 및 활동량 향상": {
    "en": "Improve basic walking and daily activity.",
    "ja": "基本的な歩行と活動量を高めます。"
  },
  "보행 지구력 향상": {
    "en": "Build walking endurance.",
    "ja": "歩く持久力を高めます。"
  },
  "일상 활동량 및 지구력 향상": {
    "en": "Increase daily activity and endurance.",
    "ja": "日常の活動量と持久力を高めます。"
  },
  "측방 균형 및 고관절 근력 향상": {
    "en": "Improve side-to-side balance and hip strength.",
    "ja": "横方向のバランスと股関節の筋力を高めます。"
  },
  "후방 보행 조절 및 균형 향상": {
    "en": "Improve control and balance when stepping backward.",
    "ja": "後ろへ歩くコントロールとバランスを高めます。"
  },
  "동적 균형 향상": {
    "en": "Improve balance while moving.",
    "ja": "動きながらのバランスを高めます。"
  },
  "보행 중 발 들기 및 균형 향상": {
    "en": "Practice lifting the foot while walking, and improve balance.",
    "ja": "歩きながら足を上げ、バランスを高めます。"
  },
  "방향전환 및 장애물 회피 능력 향상": {
    "en": "Practice turning and walking around obstacles.",
    "ja": "方向転換と、障害物を避ける歩き方を練習します。"
  },
  "방향전환 및 동적 균형 향상": {
    "en": "Practice turning and balance while moving.",
    "ja": "方向転換と、動きながらのバランスを練習します。"
  },
  "하지 근력 및 계단 기능 향상": {
    "en": "Strengthen the legs and practice stair skills.",
    "ja": "脚を鍛え、階段の動作を練習します。"
  },
  "계단 기능 및 하지 근력 향상": {
    "en": "Practice stairs and strengthen the legs.",
    "ja": "階段の動作を練習し、脚を鍛えます。"
  },
  "계단 하강 조절 능력 향상": {
    "en": "Improve control when coming down stairs.",
    "ja": "階段を下りるコントロールを高めます。"
  },
  "기능적 보행 및 양손 사용 향상": {
    "en": "Practice walking while using both hands.",
    "ja": "両手を使う歩き方を練習します。"
  },
  "보행 조절 능력 향상": {
    "en": "Improve control of walking speed and rhythm.",
    "ja": "歩く速さやリズムのコントロールを高めます。"
  },
  "심폐지구력 및 하지 반복운동": {
    "en": "Build heart-and-lung endurance and repeat leg movement.",
    "ja": "心肺の持久力を高め、脚の繰り返し運動をします。"
  },
  "보행 지구력 및 속도 조절": {
    "en": "Build walking endurance and practice speed control.",
    "ja": "歩く持久力と、速さのコントロールを高めます。"
  },
  "전신 지구력 및 일상 활동량 향상": {
    "en": "Build whole-body endurance and daily activity.",
    "ja": "全身の持久力と日常の活動量を高めます。"
  },
  "발목 가동범위 및 보행 준비": {
    "en": "Keep the ankle moving and prepare for walking.",
    "ja": "足首の動きを保ち、歩く準備をします。"
  },
  "무릎 뒤쪽 유연성 및 보행 준비": {
    "en": "Loosen the back of the thigh and prepare for walking.",
    "ja": "太ももの後ろをやわらかくし、歩く準備をします。"
  },
  "횡격막 호흡과 환기 효율": {
    "en": "Practice diaphragmatic breathing and easier air movement.",
    "ja": "横隔膜を使う呼吸で、空気の出入りをしやすくします。"
  },
  "날숨 시간과 기도 개방": {
    "en": "Lengthen the breath out and help keep the airways open.",
    "ja": "息を吐く時間を長くし、気道を開きやすくします。"
  },
  "흉곽 확장과 흡기 깊이": {
    "en": "Expand the rib cage and take a deeper breath in.",
    "ja": "胸郭を広げ、息を深く吸えるようにします。"
  },
  "느리고 깊은 들숨": {
    "en": "Practice a slow, deep breath in.",
    "ja": "ゆっくり深い息吸いを練習します。"
  },
  "기도 분비물 이동": {
    "en": "Help move mucus up and out of the airways.",
    "ja": "気道のたんを上の方へ動かします。"
  },
  "어깨 관절가동범위 유지, 보조 능동운동": {
    "en": "Keep the shoulder moving, with help from the other arm.",
    "ja": "肩の動きを保ち、反対の手で助けて動かします。"
  },
  "몸통 깊은 근육 활성화, 요부 안정 준비": {
    "en": "Wake up the deep trunk muscles and get ready to steady the lower back.",
    "ja": "体幹の深い筋肉を働かせ、腰を安定させる準備をします。"
  },
  "고관절 내전근 활성화": {
    "en": "Wake up the muscles that bring the thighs together.",
    "ja": "股関節を内側に閉じる筋肉を働かせます。"
  },
  "고관절 안쪽·바깥 돌림 가동범위 유지": {
    "en": "Keep the hip able to turn inward and outward.",
    "ja": "股関節を内側・外側に回す動きを保ちます。"
  },
  "체간 안정, 반대쪽 팔·다리 협응": {
    "en": "Steady the trunk and coordinate the opposite arm and leg.",
    "ja": "体幹を安定させ、反対側の手足を一緒に動かします。"
  },
  "목 자세 조절, 심부 경부 굴곡근 활성화": {
    "en": "Practice neck posture and wake up the deep muscles that draw the chin in.",
    "ja": "首の姿勢を整え、あごを引く深い筋肉を働かせます。"
  },
  "흉추 가동 및 몸통 회전": {
    "en": "Help the upper back move, and turn the trunk.",
    "ja": "胸の背骨を動きやすくし、体を回します。"
  },
  "발 안쪽 작은 근육 활성화, 발바닥 감각": {
    "en": "Wake up the small muscles in the foot and the feeling on the sole.",
    "ja": "足の内側の小さな筋肉を働かせ、足の裏の感覚を出します。"
  },
  "앞허벅지와 고관절 앞쪽 유연성": {
    "en": "Loosen the front of the thigh and the front of the hip.",
    "ja": "太ももの前と股関節の前をやわらかくします。"
  },
  "장비 없는 저강도 유산소": {
    "en": "Light aerobic exercise with no equipment.",
    "ja": "道具を使わない、軽い有酸素運動。"
  },
  "신전 선호 요통에서 상체 신전 자세로 증상 완화": {
    "en": "For a low back that feels better when it is gently arched, ease symptoms by resting propped up.",
    "ja": "軽く反らす方が楽な腰痛で、上体を起こした姿勢にして症状をやわらげます。"
  },
  "체간 안정, 고관절·무릎 90도 자세에서 복부·고관절 굴곡근 지구력": {
    "en": "Steady the trunk, and build endurance in the belly and hip-lifting muscles with the hips and knees at 90 degrees.",
    "ja": "体幹を安定させ、股関節と膝を90度にした姿勢で、お腹と股関節を曲げる筋肉の持久力をつけます。"
  }
};
var EXERCISE_I18N = {
  "1": {
    "title": {
      "en": "Passive ankle movement",
      "ja": "足首の他動運動"
    },
    "description": {
      "en": "A therapist or caregiver gently moves your ankle up and down. Let the leg relax.",
      "ja": "療法士または介助者が、足首をやさしく上下に動かします。力を抜いて楽にしてください。"
    },
    "caution": {
      "en": "Stop and tell your therapist if it hurts. Move gently, without pushing against tightness.",
      "ja": "痛みがあれば中止し、療法士に伝えてください。抵抗に逆らわず、やさしく行ってください。"
    }
  },
  "2": {
    "title": {
      "en": "Passive knee and hip movement",
      "ja": "膝・股関節の他動運動"
    },
    "description": {
      "en": "A therapist or caregiver slowly bends and straightens the knee, and gently bends the hip. Let the leg relax.",
      "ja": "療法士または介助者が、膝をゆっくり曲げ伸ばしし、股関節をやさしく曲げます。力を抜いて楽にしてください。"
    },
    "caution": {
      "en": "Stop right away if the joint makes an unusual noise or it hurts. Be especially careful around a fracture or a surgical site.",
      "ja": "関節からいつもと違う音がしたり痛みがあれば、すぐに中止してください。骨折や手術した部位は特に注意してください。"
    }
  },
  "3": {
    "title": {
      "en": "Passive shoulder movement",
      "ja": "肩の他動運動"
    },
    "description": {
      "en": "A therapist or caregiver gently lifts the arm forward and out to the side. Let the arm relax.",
      "ja": "療法士または介助者が、腕をやさしく前に上げ、横に開きます。力を抜いて楽にしてください。"
    },
    "caution": {
      "en": "If the shoulder has dislocated before, tell your therapist first. Stay in a range that does not hurt.",
      "ja": "肩が外れたことがある人は、先に療法士に伝えてください。痛くない範囲だけで行ってください。"
    }
  },
  "4": {
    "title": {
      "en": "Passive wrist and finger movement",
      "ja": "手首・指の他動運動"
    },
    "description": {
      "en": "A therapist or caregiver moves the wrist up and down and gently straightens the fingers. Let the hand relax.",
      "ja": "療法士または介助者が、手首を上下に動かし、指をやさしく伸ばします。力を抜いて楽にしてください。"
    },
    "caution": {
      "en": "If the fingers are very stiff, do not force them straight. Stay within the range that is available.",
      "ja": "指の硬さが強いときは、無理に伸ばさず、動く範囲だけで行ってください。"
    }
  },
  "5": {
    "title": {
      "en": "Ankle pumps",
      "ja": "アンクルポンプ"
    },
    "description": {
      "en": "Lying down, slowly move your ankle up and down on your own. Pull the toes toward you, then point them away. Repeat.",
      "ja": "仰向けで、自分で足首をゆっくり上下に動かします。足先を体の方へ引き、次に下へ押す動きを繰り返します。"
    },
    "caution": {
      "en": "Stop and tell your therapist if it hurts. Move slowly, without bouncing.",
      "ja": "痛みがあれば中止し、療法士に伝えてください。反動をつけず、ゆっくり行ってください。"
    }
  },
  "6": {
    "title": {
      "en": "Bend and straighten the knee",
      "ja": "膝の曲げ伸ばし"
    },
    "description": {
      "en": "Lie down with the heel on the bed. Slowly slide the heel toward you to bend the knee, then slowly straighten the leg back down.",
      "ja": "仰向けで、かかとを床につけます。かかとを体の方へゆっくり滑らせて膝を曲げ、またゆっくり伸ばして下ろします。"
    },
    "caution": {
      "en": "Stop right away if the knee makes an unusual noise or it hurts. After a fracture or surgery, stay in a range that does not hurt.",
      "ja": "膝からいつもと違う音がしたり痛みがあれば、すぐに中止してください。骨折や手術のあとは、痛くない範囲だけで行ってください。"
    }
  },
  "7": {
    "title": {
      "en": "Roll onto your side",
      "ja": "横向きに寝返り"
    },
    "description": {
      "en": "Lie down, bend the knees a little, and slowly roll the body onto one side.",
      "ja": "仰向けで膝を軽く曲げ、体をゆっくり横向きに回します。"
    },
    "caution": {
      "en": "If you feel dizzy or it hurts, rest, then continue slowly.",
      "ja": "めまいや痛みがあれば、休みながらゆっくり行ってください。"
    }
  },
  "8": {
    "title": {
      "en": "Press the knee down",
      "ja": "膝を下に押す"
    },
    "description": {
      "en": "Place a towel under the knee. Press the knee down into the towel so the front of the thigh tightens.",
      "ja": "膝の下にタオルを置き、膝を下へ押して太ももの前に力を入れます。"
    },
    "caution": {
      "en": "If the knee hurts a lot, press more gently.",
      "ja": "膝の痛みが強いときは、力を弱めてください。"
    }
  },
  "9": {
    "title": {
      "en": "Tighten the buttocks",
      "ja": "お尻に力を入れる"
    },
    "description": {
      "en": "Lie down, squeeze the buttocks, hold for 3 seconds, then slowly relax.",
      "ja": "仰向けでお尻に力を入れ、3秒保ってから、ゆっくり力を抜きます。"
    },
    "caution": {
      "en": "If the low back or the leg starts to hurt, use less effort.",
      "ja": "腰や脚が痛くなったら、力を弱めてください。"
    }
  },
  "10": {
    "title": {
      "en": "Short-arc quad",
      "ja": "ショートアーククワッド"
    },
    "description": {
      "en": "Place a pillow or a rolled towel under the knee. Lying down, slowly straighten the knee and lift the foot.",
      "ja": "膝の下に枕か丸めたタオルを置きます。仰向けで膝をゆっくり伸ばし、足を持ち上げます。"
    },
    "caution": {
      "en": "If the knee hurts a lot, use a smaller movement and check that the front of the thigh is working.",
      "ja": "膝の痛みが強いときは、動かす範囲を小さくし、太ももの前に力が入っているか確かめてください。"
    }
  },
  "11": {
    "title": {
      "en": "Straight leg raise",
      "ja": "脚上げ（膝を伸ばして）"
    },
    "description": {
      "en": "Lie down with the knee straight. Slowly lift one leg, then lower it.",
      "ja": "仰向けで膝を伸ばしたまま、片方の脚をゆっくり上げ、下ろします。"
    },
    "caution": {
      "en": "Stop if the low back arches a lot or it hurts.",
      "ja": "腰が大きく浮く、または痛みがあれば中止してください。"
    }
  },
  "12": {
    "title": {
      "en": "Slide the leg out to the side",
      "ja": "脚を横に開く"
    },
    "description": {
      "en": "Lie on your back. Slowly move one leg out to the side, then bring it back in.",
      "ja": "仰向けで、片方の脚をゆっくり横に開き、また戻します。"
    },
    "caution": {
      "en": "Do not let the pelvis roll with the leg.",
      "ja": "骨盤が一緒に回らないように注意してください。"
    }
  },
  "13": {
    "title": {
      "en": "Clamshell",
      "ja": "クラムシェル"
    },
    "description": {
      "en": "Lie on your side with the knees bent and the feet together. Slowly lift the top knee, then lower it.",
      "ja": "横向きで膝を曲げ、足はそろえたままにします。上の膝をゆっくり開き、閉じます。"
    },
    "caution": {
      "en": "Do not let the pelvis roll backward. Stay in a range that does not hurt.",
      "ja": "骨盤が後ろへ倒れないようにし、痛くない範囲で行ってください。"
    }
  },
  "14": {
    "title": {
      "en": "Side-lying leg lift",
      "ja": "横向きで脚を上げる"
    },
    "description": {
      "en": "Lie on your side with the top leg straight. Slowly lift that leg, then lower it.",
      "ja": "横向きで、上の脚を伸ばしたままゆっくり上げ、下ろします。"
    },
    "caution": {
      "en": "Do not let the low back or pelvis twist too much.",
      "ja": "腰や骨盤が大きく動かないように注意してください。"
    }
  },
  "15": {
    "title": {
      "en": "Bridge",
      "ja": "ブリッジ"
    },
    "description": {
      "en": "Lie down with the knees bent and the feet on the bed. Slowly lift the hips, then lower them.",
      "ja": "膝を立てて仰向けになり、お尻をゆっくり上げ、下ろします。"
    },
    "caution": {
      "en": "Stop if the low back hurts a lot.",
      "ja": "腰の痛みが強いときは中止してください。"
    }
  },
  "16": {
    "title": {
      "en": "Open and close the hand",
      "ja": "手を握って開く"
    },
    "description": {
      "en": "Slowly make a fist, then open the fingers all the way. Repeat, staying in a range that does not hurt.",
      "ja": "自分で指をゆっくり握り、全部開く動きを繰り返します。痛くない範囲で行います。"
    },
    "caution": {
      "en": "Do not force the fingers fully straight. Stay within the range you can move yourself.",
      "ja": "指を無理に最後まで伸ばさず、自分で動かせる範囲だけで行ってください。"
    }
  },
  "17": {
    "title": {
      "en": "Bend and straighten the wrist",
      "ja": "手首の曲げ伸ばし"
    },
    "description": {
      "en": "Rest the arm comfortably and slowly move the wrist up and down.",
      "ja": "腕を楽に置いたまま、手首をゆっくり上下に動かします。"
    },
    "caution": {
      "en": "Move slowly, without bouncing.",
      "ja": "反動をつけず、ゆっくり行ってください。"
    }
  },
  "18": {
    "title": {
      "en": "Bend and straighten the elbow",
      "ja": "肘の曲げ伸ばし"
    },
    "description": {
      "en": "Slowly bend the elbow, then straighten it. Repeat in a range that does not hurt.",
      "ja": "肘をゆっくり曲げ、伸ばします。痛くない範囲で繰り返します。"
    },
    "caution": {
      "en": "Do not let the shoulder hitch up.",
      "ja": "肩が過剰に上がらないように注意してください。"
    }
  },
  "19": {
    "title": {
      "en": "Lift the arm while lying down",
      "ja": "仰向けで腕を上げる"
    },
    "description": {
      "en": "Lie down and slowly lift the arm forward on your own, then lower it. Repeat in a range that does not hurt.",
      "ja": "仰向けで、自分で腕をゆっくり前に上げ、下ろします。痛くない範囲で繰り返します。"
    },
    "caution": {
      "en": "If the shoulder hurts, or it has dislocated before, tell your therapist first. Stay in a range that does not hurt.",
      "ja": "肩の痛みや、肩が外れたことがある人は、先に療法士に伝えてください。痛くない範囲だけで行ってください。"
    }
  },
  "20": {
    "title": {
      "en": "Weight bearing through the affected arm",
      "ja": "患側の腕に体重をかける"
    },
    "description": {
      "en": "Rest the affected arm on a table. Slowly put weight through the palm or the forearm and hold.",
      "ja": "テーブルの上に患側の腕を置き、手のひらまたは前腕でゆっくり体重をかけて保ちます。"
    },
    "caution": {
      "en": "If the shoulder or wrist hurts, use less weight and a more comfortable angle.",
      "ja": "肩や手首が痛ければ、角度と体重を減らしてください。"
    }
  },
  "21": {
    "title": {
      "en": "Pelvic tilt",
      "ja": "骨盤を傾ける"
    },
    "description": {
      "en": "Lie with the knees bent. Gently press the low back toward the bed as you tilt the pelvis.",
      "ja": "膝を立てて仰向けになり、腰を床の方へ軽く押しつけながら骨盤を動かします。"
    },
    "caution": {
      "en": "Use a small range that does not hurt.",
      "ja": "痛くない、小さい範囲で行ってください。"
    }
  },
  "22": {
    "title": {
      "en": "Reach while lying down",
      "ja": "仰向けで手を伸ばす"
    },
    "description": {
      "en": "Lie down and slowly reach one arm forward, then bring it back. Keep the shoulder from hiking up, and stay in a comfortable range.",
      "ja": "仰向けで、片方の腕をゆっくり前に伸ばし、戻します。肩が過剰に上がらないよう、楽な範囲で行います。"
    },
    "caution": {
      "en": "If the shoulder hurts or tingles, use a smaller range.",
      "ja": "肩の痛みやしびれがあれば、範囲を小さくしてください。"
    }
  },
  "23": {
    "title": {
      "en": "Sit and hold",
      "ja": "座った姿勢を保つ"
    },
    "description": {
      "en": "Sit with your feet on the floor and your back upright. Hold that position.",
      "ja": "足を床につけ、背すじを伸ばして座った姿勢を保ちます。"
    },
    "caution": {
      "en": "If you feel dizzy, lean back against the chair and rest.",
      "ja": "めまいがあれば、背もたれにもたれて休んでください。"
    }
  },
  "24": {
    "title": {
      "en": "Shift weight side to side while sitting",
      "ja": "座って左右に体重を移す"
    },
    "description": {
      "en": "Sit in a chair and slowly move your trunk to the left, then to the right.",
      "ja": "椅子に座り、体を左右へゆっくり移します。"
    },
    "caution": {
      "en": "If your balance feels unsteady, have a caregiver stay beside you.",
      "ja": "バランスが不安定なときは、介助者がそばで見守ってください。"
    }
  },
  "25": {
    "title": {
      "en": "Reach forward",
      "ja": "前へ手を伸ばす"
    },
    "description": {
      "en": "While sitting, slowly reach toward an object in front of you, then come back.",
      "ja": "座ったまま、前にある物へゆっくり手を伸ばし、戻します。"
    },
    "caution": {
      "en": "Do not let the body pitch too far forward.",
      "ja": "体が前へ倒れすぎないように注意してください。"
    }
  },
  "26": {
    "title": {
      "en": "Reach for an object while sitting",
      "ja": "座って物をつかむ"
    },
    "description": {
      "en": "While sitting, reach to the side or forward and pick up an object.",
      "ja": "座ったまま、左右または前にある物へ手を伸ばしてつかみます。"
    },
    "caution": {
      "en": "If the body leans too far, a caregiver should help.",
      "ja": "体が大きく傾くときは、介助者が手伝ってください。"
    }
  },
  "27": {
    "title": {
      "en": "Reach for a cone",
      "ja": "コーンに手を伸ばす"
    },
    "description": {
      "en": "While sitting, reach for a cone in front of you or to the side, touch or hold it, then come back.",
      "ja": "座ったまま、前や横にあるコーンへ手を伸ばしてつかみ、元の位置に戻します。"
    },
    "caution": {
      "en": "Do not lean the trunk too far. Have a caregiver supervise if you need to.",
      "ja": "体を大きく傾けないようにし、必要なら介助者の見守りで行ってください。"
    }
  },
  "28": {
    "title": {
      "en": "Straighten the knee while sitting",
      "ja": "座って膝を伸ばす"
    },
    "description": {
      "en": "Sit tall in a chair. Slowly straighten one knee, hold for 2 seconds, then lower the foot.",
      "ja": "椅子に背すじを伸ばして座ります。片方の膝をゆっくり伸ばし、2秒保ってから下ろします。"
    },
    "caution": {
      "en": "Do not lean the back behind you.",
      "ja": "腰が後ろへ反らないように注意してください。"
    }
  },
  "29": {
    "title": {
      "en": "March in place while sitting",
      "ja": "座ってその場で足を上げる"
    },
    "description": {
      "en": "Sit in a chair and lift one knee, then the other. Do not let the trunk fall backward.",
      "ja": "椅子に座り、左右の膝を交互に上げます。体が後ろへ倒れないように保ちます。"
    },
    "caution": {
      "en": "If the back leans behind you, use a smaller lift.",
      "ja": "腰が後ろへ反るときは、上げる高さを小さくしてください。"
    }
  },
  "30": {
    "title": {
      "en": "Heel raises while sitting",
      "ja": "座ってかかとを上げる"
    },
    "description": {
      "en": "Sit in a chair with the toes on the floor. Slowly lift the heels, then lower them.",
      "ja": "椅子に座り、足先は床につけたまま、かかとをゆっくり上げ、下ろします。"
    },
    "caution": {
      "en": "If the ankle hurts, move slowly.",
      "ja": "足首が痛ければ、ゆっくり行ってください。"
    }
  },
  "31": {
    "title": {
      "en": "Toe raises while sitting",
      "ja": "座って足先を上げる"
    },
    "description": {
      "en": "Sit in a chair with the heels on the floor. Slowly lift the toes toward you.",
      "ja": "椅子に座り、かかとは床につけたまま、足先を体の方へゆっくり上げます。"
    },
    "caution": {
      "en": "Do not pull hard.",
      "ja": "無理に引っ張らないでください。"
    }
  },
  "32": {
    "title": {
      "en": "Slide the arm forward on a table",
      "ja": "テーブルの上で腕を滑らせる"
    },
    "description": {
      "en": "Put a towel on the table, rest the hand on it, and slowly slide the arm forward, then back.",
      "ja": "テーブルの上にタオルを置き、手をのせて、腕を前へゆっくり滑らせ、戻します。"
    },
    "caution": {
      "en": "Stop if the shoulder pain gets worse.",
      "ja": "肩の痛みが強くなるときは中止してください。"
    }
  },
  "33": {
    "title": {
      "en": "Lift both arms with a stick",
      "ja": "棒を持って両腕を上げる"
    },
    "description": {
      "en": "Hold a stick with both hands. Slowly lift the arms forward, then lower them.",
      "ja": "両手で棒を持ち、腕をゆっくり前に上げ、下ろします。"
    },
    "caution": {
      "en": "Use the other arm to help the painful arm. Do not force it.",
      "ja": "痛い腕は反対の腕で助け、無理をしないでください。"
    }
  },
  "34": {
    "title": {
      "en": "Touch the thumb to each fingertip",
      "ja": "親指と指先を合わせる"
    },
    "description": {
      "en": "Touch the thumb to the index, middle, ring, and little fingertips in order, then open the hand.",
      "ja": "親指を人差し指、中指、薬指、小指の順に合わせ、開きます。"
    },
    "caution": {
      "en": "If a finger hurts, move slowly and use a smaller range.",
      "ja": "指が痛ければ、ゆっくり小さい範囲で行ってください。"
    }
  },
  "35": {
    "title": {
      "en": "Squeeze a towel",
      "ja": "タオル握り"
    },
    "description": {
      "en": "Hold a small towel in the hand. Slowly squeeze it, then relax.",
      "ja": "小さいタオルを手に握り、ゆっくり力を入れて押し、ゆるめます。"
    },
    "caution": {
      "en": "If the finger joints hurt, squeeze more gently.",
      "ja": "指の関節が痛ければ、力を弱めてください。"
    }
  },
  "36": {
    "title": {
      "en": "Squeeze the shoulder blades together",
      "ja": "肩甲骨を寄せる"
    },
    "description": {
      "en": "Let the arms hang comfortably. Slowly draw both shoulder blades together toward the spine, then relax.",
      "ja": "腕を楽に下ろし、両方の肩甲骨を背中の方へゆっくり寄せ、ゆるめます。"
    },
    "caution": {
      "en": "Do not shrug. If the neck starts working, use a smaller movement.",
      "ja": "肩をすくめないようにし、首に力が入るときは範囲を小さくしてください。"
    }
  },
  "37": {
    "title": {
      "en": "Press down on the armrests",
      "ja": "肘かけを押す"
    },
    "description": {
      "en": "Press down on the chair armrests, as if you were going to lift the hips a little.",
      "ja": "椅子の肘かけを手で押し、お尻を少し持ち上げるように力を入れます。"
    },
    "caution": {
      "en": "If the wrist or shoulder hurts, press more gently.",
      "ja": "手首や肩が痛ければ、力を弱めてください。"
    }
  },
  "38": {
    "title": {
      "en": "Sit to stand",
      "ja": "立ち座り"
    },
    "description": {
      "en": "Sit in a chair with your feet on the floor. Lean the body forward, then stand up slowly.",
      "ja": "椅子に座り、足を床につけます。体を前へ傾けてから、ゆっくり立ちます。"
    },
    "caution": {
      "en": "Stop if the knee hurts or you feel dizzy.",
      "ja": "膝の痛みやめまいがあれば中止してください。"
    }
  },
  "39": {
    "title": {
      "en": "Stand, hold, and sit back down",
      "ja": "立って姿勢を保つ"
    },
    "description": {
      "en": "Stand up from the chair, hold a tall standing position for 3~5 seconds, then sit back down slowly.",
      "ja": "椅子から立ち上がり、正しい立ち姿勢を3~5秒保って、ゆっくり座り直します。"
    },
    "caution": {
      "en": "Stop right away if you feel dizzy or the knee hurts.",
      "ja": "めまいや膝の痛みがあれば、すぐに中止してください。"
    }
  },
  "40": {
    "title": {
      "en": "Shift weight side to side while standing",
      "ja": "立って左右に体重を移す"
    },
    "description": {
      "en": "Stand with the feet about shoulder-width apart. Slowly shift your weight to the left, then to the right.",
      "ja": "両足を肩幅くらいに開いて立ち、体重を左右へゆっくり移します。"
    },
    "caution": {
      "en": "Do not let the body lean too far.",
      "ja": "体が大きく傾かないように注意してください。"
    }
  },
  "41": {
    "title": {
      "en": "Step up and shift weight",
      "ja": "片足を台に乗せて体重を移す"
    },
    "description": {
      "en": "Place one foot on a low step. Slowly shift your weight forward and back, or side to side.",
      "ja": "片方の足を低い台の上に置き、前後または左右へゆっくり体重を移します。"
    },
    "caution": {
      "en": "Do not let the knee collapse inward. Hold a rail if your balance feels unsteady.",
      "ja": "膝が内側へ崩れないようにし、バランスが不安定なら手すりを持ってください。"
    }
  },
  "42": {
    "title": {
      "en": "Stand with the feet together",
      "ja": "足をそろえて立つ"
    },
    "description": {
      "en": "Bring the feet together and hold the standing position.",
      "ja": "両足をそろえて立った姿勢を保ちます。"
    },
    "caution": {
      "en": "Do not do this with your eyes closed.",
      "ja": "目を閉じて行わないでください。"
    }
  },
  "43": {
    "title": {
      "en": "Tandem stance",
      "ja": "足を前後一直線にして立つ"
    },
    "description": {
      "en": "Place one foot directly in front of the other, heel toward toe, and hold the standing position.",
      "ja": "片方の足をもう片方の足の前に、一直線に置いて立ち、その姿勢を保ちます。"
    },
    "caution": {
      "en": "If your balance feels unsteady, do this with a caregiver watching.",
      "ja": "バランスが不安定なときは、介助者の見守りで行ってください。"
    }
  },
  "44": {
    "title": {
      "en": "Single-leg stance holding a chair",
      "ja": "椅子を持って片足立ち"
    },
    "description": {
      "en": "Hold a sturdy chair or a rail. Lift one foot slightly and hold for as long as you safely can.",
      "ja": "しっかりした椅子か手すりを持ち、片方の足を少し上げて、できる範囲で保ちます。"
    },
    "caution": {
      "en": "Stay close to a stable support.",
      "ja": "必ず安定した支えのそばで行ってください。"
    }
  },
  "45": {
    "title": {
      "en": "March in place while standing",
      "ja": "立ってその場で足を上げる"
    },
    "description": {
      "en": "Stand with the feet about hip-width apart. Lift one knee, then the other, staying in place.",
      "ja": "両足を骨盤の幅くらいに開いて立ち、その場で左右の膝を交互に上げます。"
    },
    "caution": {
      "en": "If you feel dizzy or unsteady, sit down and rest.",
      "ja": "めまいやバランスの不安があれば、座って休んでください。"
    }
  },
  "46": {
    "title": {
      "en": "Heel raises while standing",
      "ja": "立ってかかとを上げる"
    },
    "description": {
      "en": "Hold a chair or a rail. Slowly lift both heels, then lower them.",
      "ja": "椅子か手すりを持ち、両方のかかとをゆっくり上げ、下ろします。"
    },
    "caution": {
      "en": "If the ankle hurts or your balance feels unsteady, use a smaller lift.",
      "ja": "足首の痛みやバランスの不安があれば、上げる高さを小さくしてください。"
    }
  },
  "47": {
    "title": {
      "en": "Bend the knee while standing",
      "ja": "立って膝を曲げる"
    },
    "description": {
      "en": "Hold a chair or a rail. Slowly bend one knee backward, then lower the foot.",
      "ja": "椅子か手すりを持って立ち、片方の膝を後ろへゆっくり曲げ、下ろします。"
    },
    "caution": {
      "en": "Do not lean the chest forward. If your balance feels unsteady, do this with a caregiver watching.",
      "ja": "上体が前へ倒れないようにし、バランスが不安定なら介助者の見守りで行ってください。"
    }
  },
  "48": {
    "title": {
      "en": "Lift the leg out to the side while standing",
      "ja": "立って脚を横に上げる"
    },
    "description": {
      "en": "Hold a chair. Slowly lift one leg out to the side, then lower it.",
      "ja": "椅子を持って立ち、片方の脚を横へゆっくり上げ、下ろします。"
    },
    "caution": {
      "en": "Do not lean the trunk to the opposite side.",
      "ja": "体が反対側へ傾かないように注意してください。"
    }
  },
  "49": {
    "title": {
      "en": "Lift the leg backward while standing",
      "ja": "立って脚を後ろに上げる"
    },
    "description": {
      "en": "Hold a chair. Keep the knee straight and slowly lift one leg backward.",
      "ja": "椅子を持って立ち、膝を伸ばしたまま片方の脚を後ろへゆっくり上げます。"
    },
    "caution": {
      "en": "Do not arch the low back.",
      "ja": "腰が過剰に反らないように注意してください。"
    }
  },
  "50": {
    "title": {
      "en": "Mini squat",
      "ja": "ミニスクワット"
    },
    "description": {
      "en": "Hold a chair or a rail. Bend the knees a little, then slowly straighten.",
      "ja": "椅子か手すりを持ち、膝を少し曲げ、ゆっくり伸ばします。"
    },
    "caution": {
      "en": "Do not let the knees travel far past the toes.",
      "ja": "膝が足先より大きく前へ出ないように注意してください。"
    }
  },
  "51": {
    "title": {
      "en": "Reach forward while standing",
      "ja": "立って前へ手を伸ばす"
    },
    "description": {
      "en": "Stand steadily. Slowly reach forward with one hand or both hands, then come back.",
      "ja": "安定して立ち、片手または両手を前へゆっくり伸ばし、戻します。"
    },
    "caution": {
      "en": "If you might fall, do this near a caregiver or a rail.",
      "ja": "転びそうなときは、介助者または手すりのそばで行ってください。"
    }
  },
  "52": {
    "title": {
      "en": "Walk the fingers up the wall",
      "ja": "壁づたいに腕を上げる"
    },
    "description": {
      "en": "Face a wall. Slowly walk the fingers up the wall, then back down.",
      "ja": "壁に向かって立ち、指を壁の上へゆっくり歩き上げ、下ろします。"
    },
    "caution": {
      "en": "If the shoulder hurts a lot, do not reach as high.",
      "ja": "肩の痛みが強いときは、高さを下げ、無理をしないでください。"
    }
  },
  "53": {
    "title": {
      "en": "Large shoulder-blade circles",
      "ja": "肩甲骨を大きく回す"
    },
    "description": {
      "en": "Sit tall. Slowly make large backward circles with both shoulders. In order: bring them forward, lift them up, pull them back, then lower them. Repeat.",
      "ja": "椅子に背すじを伸ばして座ります。両肩でゆっくり大きく、後ろ回しの円を描きます。前に寄せ、上に上げ、後ろに引き、下に下ろす順で繰り返します。"
    },
    "caution": {
      "en": "If the shoulder hurts or feels very tight, use a smaller circle.",
      "ja": "肩の痛みやこりが強いときは、回す範囲を小さくしてください。"
    }
  },
  "54": {
    "title": {
      "en": "Step tap",
      "ja": "ステップタッチ"
    },
    "description": {
      "en": "Place a low step or a mark in front of you. Lightly tap it with one foot, then bring the foot back.",
      "ja": "前に低い台か印を置き、片方の足で軽くタッチして、元の位置に戻します。"
    },
    "caution": {
      "en": "Make sure the step cannot slide.",
      "ja": "台が滑らないように固定してください。"
    }
  },
  "55": {
    "title": {
      "en": "Turn in place",
      "ja": "その場で方向を変える"
    },
    "description": {
      "en": "Using small steps, slowly turn to face a new direction.",
      "ja": "その場で小さい歩幅で、ゆっくり方向を変えます。"
    },
    "caution": {
      "en": "Do not spin quickly. Stop if you feel dizzy.",
      "ja": "急に回らず、めまいがあれば中止してください。"
    }
  },
  "56": {
    "title": {
      "en": "Walk indoors",
      "ja": "室内を歩く"
    },
    "description": {
      "en": "Walk at a comfortable pace on a flat indoor surface. Use a walking aid if you need one.",
      "ja": "平らな室内を、楽な速さで歩きます。必要なら歩行補助具を使います。"
    },
    "caution": {
      "en": "If you feel dizzy or it hurts, rest, then continue.",
      "ja": "めまいや痛みがあれば、休みながら行ってください。"
    }
  },
  "57": {
    "title": {
      "en": "Walk in a hallway",
      "ja": "廊下を歩く"
    },
    "description": {
      "en": "Walk at a steady pace in a safe hallway. Rest along the way if you need to.",
      "ja": "安全な廊下を一定の速さで歩きます。途中で必要なら休みます。"
    },
    "caution": {
      "en": "Watch for people and obstacles so you do not bump into them.",
      "ja": "人や障害物にぶつからないように注意してください。"
    }
  },
  "58": {
    "title": {
      "en": "Walk outdoors",
      "ja": "屋外を歩く"
    },
    "description": {
      "en": "Walk at a comfortable pace on a flat, safe outdoor path.",
      "ja": "平らで安全な屋外の道を、楽な速さで歩きます。"
    },
    "caution": {
      "en": "Avoid slopes, slippery ground, and crowded places.",
      "ja": "坂道、滑りやすい道、人の多い場所は避けてください。"
    }
  },
  "59": {
    "title": {
      "en": "Step sideways",
      "ja": "横歩き"
    },
    "description": {
      "en": "Stay near a rail or a wall. Slowly step sideways, one foot at a time.",
      "ja": "手すりや壁のそばで、横へ一歩ずつゆっくり移動します。"
    },
    "caution": {
      "en": "Move slowly so the feet do not cross and tangle.",
      "ja": "足がもつれないよう、ゆっくり行ってください。"
    }
  },
  "60": {
    "title": {
      "en": "Walk backward",
      "ja": "後ろ歩き"
    },
    "description": {
      "en": "In a safe space, walk backward slowly for a short distance only.",
      "ja": "安全な場所で、短い距離だけゆっくり後ろへ歩きます。"
    },
    "caution": {
      "en": "Do this only with a caregiver watching, or close to a rail.",
      "ja": "必ず介助者の見守りか、手すりのそばで行ってください。"
    }
  },
  "61": {
    "title": {
      "en": "Tandem walk",
      "ja": "一直線に歩く"
    },
    "description": {
      "en": "Walk slowly along a line, placing one foot in front of the other.",
      "ja": "線に沿って、片方の足をもう片方の前に置くようにゆっくり歩きます。"
    },
    "caution": {
      "en": "Hold a rail if your balance feels unsteady.",
      "ja": "バランスが不安定なときは、手すりを持って行ってください。"
    }
  },
  "62": {
    "title": {
      "en": "Step over a low obstacle",
      "ja": "低い障害物をまたぐ"
    },
    "description": {
      "en": "Slowly step over a low obstacle. Lift the foot high enough that the toes do not catch.",
      "ja": "低い障害物をゆっくりまたぎます。足先が引っかからないよう、十分に上げます。"
    },
    "caution": {
      "en": "Start with a low obstacle, with a caregiver watching.",
      "ja": "介助者の見守りで、低い障害物から始めてください。"
    }
  },
  "63": {
    "title": {
      "en": "Weave between cones",
      "ja": "コーンの間を歩く"
    },
    "description": {
      "en": "Slowly walk in a zigzag between cones or marks on the floor.",
      "ja": "床に置いたコーンや印の間を、ゆっくりジグザグに歩きます。"
    },
    "caution": {
      "en": "Leave enough space so you do not trip on a cone.",
      "ja": "コーンに引っかからないよう、十分な間隔を空けて行ってください。"
    }
  },
  "64": {
    "title": {
      "en": "Step up onto a low step",
      "ja": "低い段を上る"
    },
    "description": {
      "en": "Place one foot on a low step, step up slowly, then step back down.",
      "ja": "低い段に片方の足を乗せ、ゆっくり上り、下りてきます。"
    },
    "caution": {
      "en": "Hold a rail, and do this with a caregiver watching.",
      "ja": "手すりを持ち、介助者の見守りで行ってください。"
    }
  },
  "65": {
    "title": {
      "en": "Walk up stairs",
      "ja": "階段を上る"
    },
    "description": {
      "en": "Hold the rail and go up one step at a time, slowly.",
      "ja": "手すりを持ち、一段ずつゆっくり上ります。"
    },
    "caution": {
      "en": "Stop if the knee hurts a lot or you are very short of breath.",
      "ja": "膝の痛みや息苦しさが強いときは中止してください。"
    }
  },
  "66": {
    "title": {
      "en": "Walk down stairs",
      "ja": "階段を下りる"
    },
    "description": {
      "en": "Hold the rail and come down one step at a time, slowly.",
      "ja": "手すりを持ち、一段ずつゆっくり下ります。"
    },
    "caution": {
      "en": "Do not rush. Always hold the rail.",
      "ja": "急いで下りず、必ず手すりを持ってください。"
    }
  },
  "67": {
    "title": {
      "en": "Figure-8 walk",
      "ja": "8の字歩き"
    },
    "description": {
      "en": "Walk slowly in a figure-8 around two marks.",
      "ja": "二つの印を中心に、8の字の道をゆっくり歩きます。"
    },
    "caution": {
      "en": "Stop right away if you feel dizzy or your balance wobbles.",
      "ja": "めまいやバランスのふらつきがあれば、すぐに止まってください。"
    }
  },
  "68": {
    "title": {
      "en": "Carry a light object",
      "ja": "軽い物を運ぶ"
    },
    "description": {
      "en": "Carry a light object, walk a short distance slowly, then set it down.",
      "ja": "軽い物を持ち、短い距離をゆっくり移動して、置きます。"
    },
    "caution": {
      "en": "Do not carry anything heavy. If your balance feels unsteady, ask a caregiver for help.",
      "ja": "重い物は避け、バランスが不安定なら介助者に手伝ってもらってください。"
    }
  },
  "69": {
    "title": {
      "en": "Change walking speed",
      "ja": "歩く速さを変える"
    },
    "description": {
      "en": "Walk at your usual pace, then a little faster or a little slower.",
      "ja": "いつもの速さで歩き、少し速く、またはゆっくり歩きます。"
    },
    "caution": {
      "en": "Do not push yourself to walk fast.",
      "ja": "無理に速く歩かないでください。"
    }
  },
  "70": {
    "title": {
      "en": "Stationary bike",
      "ja": "固定式自転車"
    },
    "description": {
      "en": "Sit on a stationary bike and pedal at an easy effort.",
      "ja": "固定式自転車に座り、楽な強さでペダルをこぎます。"
    },
    "caution": {
      "en": "Stop right away if you are too short of breath or you feel dizzy.",
      "ja": "息が上がりすぎる、またはめまいがあれば、すぐに中止してください。"
    }
  },
  "71": {
    "title": {
      "en": "Treadmill walking",
      "ja": "トレッドミル歩行"
    },
    "description": {
      "en": "Hold the safety rails and start walking on the treadmill at a slow speed.",
      "ja": "トレッドミルで安全手すりを持ち、遅い速さから歩きます。"
    },
    "caution": {
      "en": "Do this only with a therapist or caregiver watching.",
      "ja": "必ず療法士または介助者の見守りで行ってください。"
    }
  },
  "72": {
    "title": {
      "en": "Outdoor endurance walk",
      "ja": "屋外で持久歩行"
    },
    "description": {
      "en": "Walk at a comfortable pace for about 15~20 minutes on a flat, safe outdoor path. You may rest along the way.",
      "ja": "平らで安全な屋外の道を、楽な速さで15~20分ほど歩きます。途中で休んでもかまいません。"
    },
    "caution": {
      "en": "Avoid slopes, slippery ground, and crowded places. Stop right away if you have chest pain, shortness of breath, or dizziness.",
      "ja": "坂道、滑りやすい道、人の多い場所は避けてください。胸の痛み、息苦しさ、めまいがあればすぐに中止してください。"
    }
  },
  "73": {
    "title": {
      "en": "Calf stretch",
      "ja": "ふくらはぎのストレッチ"
    },
    "description": {
      "en": "Hold a wall or a rail and step one leg back. Keep the back knee straight and the heel on the floor, and feel a stretch in the calf.",
      "ja": "壁か手すりを持ち、片方の脚を後ろへ伸ばします。後ろの膝を伸ばし、かかとが床から離れないようにして、ふくらはぎが伸びる感じを保ちます。"
    },
    "caution": {
      "en": "Do not bounce. Hold the stretch quietly. If it hurts, ease off.",
      "ja": "反動をつけず、ゆっくり保ってください。痛みがあれば範囲を小さくしてください。"
    }
  },
  "74": {
    "title": {
      "en": "Hamstring stretch",
      "ja": "ハムストリングスのストレッチ"
    },
    "description": {
      "en": "Sit in a chair, straighten one leg, and gently draw the toes up. Sit tall and slowly lean forward until you feel a stretch at the back of the thigh. Hold it.",
      "ja": "椅子に座り、片方の脚を前へ伸ばして足先を軽く上げます。背すじを伸ばしたまま体をゆっくり前へ傾け、太ももの後ろが伸びる感じを保ちます。"
    },
    "caution": {
      "en": "Do not round the back hard or bounce. Stop if you feel tingling or pain.",
      "ja": "腰を深く丸めたり、反動をつけたりしないでください。しびれや痛みがあれば中止してください。"
    }
  },
  "75": {
    "title": {
      "en": "Diaphragmatic breathing",
      "ja": "腹式呼吸"
    },
    "description": {
      "en": "Lie on your back, or sit tall. Put one hand on the chest and one on the belly. Breathe in slowly through the nose so the belly rises into the hand. Breathe out slowly through the mouth so the belly falls.",
      "ja": "仰向けになるか、背すじを伸ばして座ります。片手を胸、片手をお腹に置きます。鼻からゆっくり吸い、お腹が手に触れるようにふくらませます。口からゆっくり吐き、お腹がへこむようにします。"
    },
    "caution": {
      "en": "If you feel dizzy or short of breath, stop and return to your usual breathing. Do not force the belly up.",
      "ja": "めまいや息切れがあればすぐにやめ、いつもの呼吸に戻してください。お腹を無理に押し上げないでください。"
    }
  },
  "76": {
    "title": {
      "en": "Pursed-lip breathing",
      "ja": "口すぼめ呼吸"
    },
    "description": {
      "en": "Sit tall. Breathe in slowly through the nose. Then purse the lips, as if you were gently flickering a candle, and breathe out for a long time. Make the breath out longer than the breath in.",
      "ja": "背すじを伸ばして座ります。鼻からゆっくり吸います。次に唇を小さくすぼめ、ろうそくの炎をゆらすように長く吐きます。吸うより吐く方を長くします。"
    },
    "caution": {
      "en": "Do not puff the cheeks hard, and do not hold your breath. Stop if you feel dizzy.",
      "ja": "頬を強くふくらませたり、息を止めたりしないでください。めまいがあれば中止してください。"
    }
  },
  "77": {
    "title": {
      "en": "Chest-expansion breathing",
      "ja": "胸郭を広げる呼吸"
    },
    "description": {
      "en": "Sit tall with both hands on the sides of the rib cage. Breathe in slowly and deeply through the nose so the ribs widen to the sides. Open the mouth slightly and breathe out as the ribs come back down.",
      "ja": "背すじを伸ばして座り、両手を肋骨の横に置きます。鼻からゆっくり深く吸い、肋骨が左右に広がるようにします。口を軽く開け、肋骨が下がるように吐きます。"
    },
    "caution": {
      "en": "Do not shrug the shoulders as you breathe in. If it hurts or you are very short of breath, take a shallower breath.",
      "ja": "肩をすくめて吸わないでください。痛みや強い息苦しさがあれば、深さをおさえてください。"
    }
  },
  "78": {
    "title": {
      "en": "Incentive spirometer",
      "ja": "インセンティブスパイロメーター"
    },
    "description": {
      "en": "Sit tall if you can. Seal your lips around the mouthpiece of the incentive spirometer so air does not leak through the nose. Breathe in slowly and deeply so the indicator rises. At the fullest breath, hold for 3~5 seconds. Take the mouthpiece out, then breathe out comfortably.",
      "ja": "できれば背すじを伸ばして座ります。インセンティブスパイロメーターのマウスピースをくわえ、鼻から空気が漏れないようにします。ゆっくり深く吸い、表示が上がるようにします。いっぱいに吸ったところで3~5秒息を止めます。マウスピースを外してから、楽に吐きます。"
    },
    "caution": {
      "en": "Do not breathe in fast or hard. Stop and tell your therapist if you feel dizzy, have chest pain, or are very short of breath.",
      "ja": "速く強く吸わないでください。めまい、胸の痛み、強い息苦しさがあれば中止し、療法士に伝えてください。"
    }
  },
  "79": {
    "title": {
      "en": "Huff",
      "ja": "ハフィング"
    },
    "description": {
      "en": "Sit tall. Breathe in through the nose at a usual size. Open the mouth wide and breathe out in one long, strong “huh,” as if you were fogging a mirror. If mucus moves up near the throat, cough once, then rest.",
      "ja": "背すじを伸ばして座ります。鼻から普通の大きさで吸います。口を大きく開け、鏡をくもらせるような「ハッ」という長く強い息で吐きます。たんがのど元まで上がってきたら、一度咳をして休みます。"
    },
    "caution": {
      "en": "Do not cough hard over and over. Stop if you feel dizzy or it hurts.",
      "ja": "続けて強く咳をしないでください。めまいや痛みがあれば中止してください。"
    }
  },
  "80": {
    "title": {
      "en": "Lift the arm with the other hand",
      "ja": "反対の手で腕を上げる"
    },
    "description": {
      "en": "Lie on your back. With your other hand, lightly hold the wrist or forearm of the arm you are moving. Slowly lift that arm up toward your head, only as far as it does not hurt, then lower it at the same speed. Do not let the moving arm go completely limp. Lift with it only as much as you can.",
      "ja": "仰向けになります。反対の手で、動かす腕の手首か前腕を軽く持ちます。痛くない範囲まで腕をゆっくり頭の方へ上げ、同じ速さで下ろします。動かす腕の力を完全には抜かず、できる分だけ一緒に上げます。"
    },
    "caution": {
      "en": "Do not jerk the sore arm upward. If the shoulder hurts or you feel a sharp tingling, lower the height. Right after a dislocation or surgery, lift only to the height your therapist allows.",
      "ja": "痛い腕を引っ張り上げないでください。肩の痛みやピリッとする感じがあれば、高さを下げてください。脱臼や手術の直後は、療法士が許した高さまでにしてください。"
    }
  },
  "81": {
    "title": {
      "en": "Gently tighten the belly and hold",
      "ja": "お腹に軽く力を入れて保つ"
    },
    "description": {
      "en": "Lie down with your knees bent. Keep the space between your lower back and the floor from getting larger. Gently tighten the lower belly so it becomes a little flatter. Do not hold your breath. Keep breathing comfortably while you hold the tension, then relax.",
      "ja": "膝を立てて寝ます。腰と床のすき間が大きくならないようにしたまま、下腹に軽く力を入れ、お腹が少し薄くなるようにします。息を止めず、楽に呼吸しながら力を保ってから、力を抜きます。"
    },
    "caution": {
      "en": "Do not hold your breath or tense your shoulders. Do not lift your lower back far off the floor, and do not press it down hard enough to cause pain. Stop right away if it hurts.",
      "ja": "息を止めたり、肩に力を入れたりしないでください。腰を床から大きく持ち上げたり、逆に強く押しつけて痛みを出したりしないでください。痛みがあればすぐに中止してください。"
    }
  },
  "82": {
    "title": {
      "en": "Squeeze a towel between the knees",
      "ja": "膝の間のタオルを挟む"
    },
    "description": {
      "en": "Lie with your knees bent and place a folded towel between them. Gently squeeze the towel with your knees, as if you were holding it, then relax. Keep your pelvis from rolling and your lower back from lifting.",
      "ja": "膝を立てて寝て、折ったタオルを両膝の間に入れます。膝でタオルをやさしく挟むように力を入れてから、力を抜きます。骨盤が回ったり、腰が浮かないようにします。"
    },
    "caution": {
      "en": "After a hip replacement, do this only if your therapist says you may. This is not the same as the general hip-replacement warning about bringing the legs too far together: the towel keeps the knees apart, and you only squeeze. Stop if you feel pain in the groin or on the inner knee.",
      "ja": "股関節を置換した人は、療法士が許した場合だけ行ってください。これは人工股関節の一般的な注意にある、脚を寄せすぎる動きとは違います。タオルが膝の間を開けた状態で、挟むだけです。脚の付け根や膝の内側が痛ければ中止してください。"
    }
  },
  "83": {
    "title": {
      "en": "Turn the whole leg in and out",
      "ja": "脚全体を内外に回す"
    },
    "description": {
      "en": "Lie on your back with the knee straight, or sit with the leg stretched out in front. Keep both knees from bending. From the hip, slowly turn the whole leg inward until the toes point toward each other, then turn it outward until the toes point apart. Do not move only the ankle. Let the kneecap turn in the same direction as the toes.",
      "ja": "膝を伸ばしたまま仰向けになるか、脚を前に伸ばして座ります。両方の膝が曲がらないようにしたまま、股関節から脚全体をゆっくり内側へ回し、つま先が互いに寄るようにします。次に外側へ回し、つま先が開くようにします。足首だけを動かさず、膝のお皿がつま先と同じ向きに回るようにします。"
    },
    "caution": {
      "en": "If it hurts, make the movement smaller or stop. Do not bend the knee or spread the leg far out to the side.",
      "ja": "痛みがあれば範囲を小さくするか、中止してください。膝を曲げたり、脚を横に大きく開いたりしないでください。"
    }
  },
  "84": {
    "title": {
      "en": "Lift the opposite arm and leg on hands and knees",
      "ja": "四つばいで反対の手足を上げる"
    },
    "description": {
      "en": "Place your hands and knees on the floor. Put your hands under your shoulders and your knees under your hips. Keep your lower back from sagging down or pushing up. Slowly lift one arm and the opposite leg only until they are about level with the floor, then lower them. Switch sides.",
      "ja": "手と膝を床について四つばいになります。手は肩の下、膝は股関節の下に置きます。腰が下に沈んだり、上に突き出したりしないようにしたまま、片方の腕と反対の脚を、床とほぼ水平になる高さまでゆっくり上げて下ろします。左右を交互に行います。"
    },
    "caution": {
      "en": "Stop if your lower back, wrist, or knee hurts. If your body twists to one side, do not lift as high. If you cannot balance on your own, start with the arm only, or the leg only. If your wrist is uncomfortable, ask your therapist before using a fist or a supported hand.",
      "ja": "腰、手首、膝が痛ければ中止してください。体が片方へ回るときは、上げる高さを下げてください。一人でバランスが不安なら、先に腕だけ、または脚だけ行ってください。手首がつらいときは、こぶしや手を支える姿勢にする前に療法士と相談してください。"
    }
  },
  "85": {
    "title": {
      "en": "Chin tuck",
      "ja": "あごを引く"
    },
    "description": {
      "en": "Sit tall and look straight ahead. Do not drop your head. Gently draw the chin in so the head slides straight back, as if it were moving backward on a level line. Hold briefly when the back of the neck feels lightly longer, then relax.",
      "ja": "背すじを伸ばして座り、正面を見ます。頭を下げず、あごを少し引いて、頭が後ろへ水平に移動するように引きます。首の後ろが軽く長くなる感じで少し保ってから、力を抜きます。"
    },
    "caution": {
      "en": "Do not bend the head forward or drop it down. Stop right away and tell your therapist if you feel dizzy, your hand tingles, or your neck hurts a lot. After neck surgery or an injury, do this only if your therapist allows it.",
      "ja": "頭を前に傾けたり、下に下げたりしないでください。めまい、手のしびれ、強い首の痛みがあればすぐに中止し、療法士に伝えてください。首の手術やけがの後は、療法士が許した場合だけ行ってください。"
    }
  },
  "86": {
    "title": {
      "en": "Turn the trunk while sitting",
      "ja": "座って体を回す"
    },
    "description": {
      "en": "Sit tall with both feet on the floor. Lightly cross your arms in front of your chest, or rest your hands on your shoulders. Keep your pelvis facing forward and slowly turn only your trunk to one side, then come back. Repeat to the other side.",
      "ja": "背すじを伸ばして座り、両足を床に置きます。腕を胸の前で軽く組むか、肩に手を置きます。骨盤は正面を向けたまま、体だけを片方へゆっくり回して戻します。反対側も繰り返します。"
    },
    "caution": {
      "en": "Do not twist the lower back hard. Stop if you just had spine surgery, have sudden low-back pain, or feel dizzy. After a hip replacement, stay within the turning and bending range your therapist gave you.",
      "ja": "腰を大きくねじらないでください。背骨の手術の直後、急な腰痛、めまいがあれば中止してください。股関節を置換した人は、療法士が伝えた回す範囲・曲げる範囲を守ってください。"
    }
  },
  "87": {
    "title": {
      "en": "Scrunch a towel with the toes",
      "ja": "つま先でタオルをたぐる"
    },
    "description": {
      "en": "Sit in a chair and spread a thin towel on the floor in front of your foot. Keep the heel on the floor and scrunch the towel toward you with your toes. Move only the toes, and do not let the knee wobble.",
      "ja": "椅子に座り、足の前の床に薄いタオルを広げます。かかとを床につけたまま、つま先でタオルを手繰り寄せるようにくしゃくしゃにします。つま先だけを動かし、膝が揺れないようにします。"
    },
    "caution": {
      "en": "Stop if a toe joint or the sole of the foot hurts. If you recently had foot surgery, have a serious wound, or have poor blood flow, ask your therapist first. If the foot cramps, straighten it and rest.",
      "ja": "足の指の関節や足の裏が痛ければ中止してください。最近足の手術をした、傷がひどい、血流の障害があるときは、療法士と相談してください。つったら、足を伸ばして休んでください。"
    }
  },
  "88": {
    "title": {
      "en": "Standing stretch for the front of the thigh",
      "ja": "立って太ももの前を伸ばす"
    },
    "description": {
      "en": "Stand and hold a chair or a rail with one hand. Bend one knee back and lightly hold the ankle, or the cuff of the pants, with the hand on the same side. Point the knee toward the floor and do not let the lower back bend forward. Hold where you feel a stretch in the front of the thigh.",
      "ja": "椅子か手すりを片手で持って立ちます。片方の膝を後ろへ曲げ、同じ側の手で足首かズボンの裾を軽く持ちます。膝は床の方を向け、腰が前に折れないようにして、太ももの前が伸びる感じで保ちます。"
    },
    "caution": {
      "en": "Do not bounce. Stop if your lower back or knee hurts, or if your balance feels unsteady. If you had a hip replacement from the front, or you are limited in straightening the hip or turning it outward, do not do this until your therapist allows it. If you cannot hold the ankle, rest the top of the foot on a chair behind you and use only a small stretch.",
      "ja": "反動をつけないでください。腰の痛み、膝の痛み、バランスの不安があれば中止してください。股関節の前方からの置換や、股関節を伸ばす・外へ回す動きに制限がある人は、療法士が許すまでは行わないでください。足首をつかめないときは、後ろの椅子に足の甲を乗せて、小さくだけ行ってください。"
    }
  },
  "89": {
    "title": {
      "en": "Walk in place",
      "ja": "その場歩き"
    },
    "description": {
      "en": "Stand with a chair or a rail beside you. Lift your feet one after the other and walk in place. Swing your arms naturally, and keep going for the set time at an effort where you can still talk. Hold the support with one hand if you need to.",
      "ja": "椅子か手すりを横に置いて立ちます。その場で足を交互に軽く上げ、歩くように動きます。腕は自然に振り、話せる強さで決めた時間を続けます。必要なら片手で支えを持ちます。"
    },
    "caution": {
      "en": "Sit down right away if you feel dizzy, very short of breath, or chest pain. If your balance is unsteady, hold a support. If a joint starts to hurt more, do not lift the feet as high.",
      "ja": "めまい、強い息苦しさ、胸の痛みがあればすぐに座ってください。バランスが不安なら支えを持って行ってください。関節の痛みが増えたら、足を上げる高さを下げてください。"
    }
  },
  "90": {
    "title": {
      "en": "Prop up on your elbows while lying face down",
      "ja": "うつ伏せで肘につき上体を起こす"
    },
    "description": {
      "en": "Do this only if your therapist prescribed it. Lie face down and place your elbows under your shoulders, then gently raise your upper body and rest on your elbows. Keep your pelvis and legs on the floor, and breathe comfortably. Hold the position while you check that pain is not spreading down the leg.",
      "ja": "療法士がこの動きを処方した場合だけ行います。床にうつ伏せになり、肘を肩の下に置いて上体を軽く起こし、肘に寄りかかります。骨盤と脚は床に置いたまま、楽に呼吸します。痛みが脚へ広がっていないかを確かめながら保ちます。"
    },
    "caution": {
      "en": "Do not use this as a general home exercise without a diagnosis. If tingling or pain spreads down the leg, stop right away and lie comfortably face down or on your side again. Do not do this right after spine surgery, if a fracture is suspected, if spinal narrowing is severe, or if you are pregnant. Do not move on by yourself to the later step of pushing the back up all the way with your palms.",
      "ja": "診断なしに、一般の宿題として使わないでください。脚のしびれや痛みが下の方へ広がったら、すぐに中止し、楽にうつ伏せか横向きに戻ってください。背骨の手術の直後、骨折の疑い、狭窄が強いとき、妊娠中は行わないでください。手のひらで腰を最後まで押し上げる次の段階へ、一人で進めないでください。"
    }
  },
  "91": {
    "title": {
      "en": "Hold the tabletop position",
      "ja": "テーブルトップの姿勢を保つ"
    },
    "description": {
      "en": "Lie on your back with both arms by your sides. Bend both hips and both knees to a right angle (90 degrees) and lift the legs off the bed. Point the thighs toward the ceiling, and keep the shins level with the bed. Do not let your lower back lift off the floor. Do not hold your breath. Breathe comfortably while you hold the position, then lower the legs slowly.",
      "ja": "仰向けになり、両腕を体の横に置きます。両方の股関節と膝をそれぞれ直角（90度）に曲げ、脚をベッドから持ち上げます。太ももは天井の方へ立て、すねはベッドと平行に水平にします。腰が床から浮かないようにしたまま、息を止めず楽に呼吸しながら姿勢を保ち、ゆっくり脚を下ろします。"
    },
    "caution": {
      "en": "If your lower back lifts off the floor or your lower back starts to hurt, lower the legs right away and stop. Do not hold your breath or lift your head.",
      "ja": "腰が床から浮くか、腰が痛くなったら、すぐに脚を下ろして中止してください。息を止めたり、頭を持ち上げたりしないでください。"
    }
  }
};
var TRANSLATION_NOTES = [
  {
    "id": "tha",
    "text": "THA 일반 주의는 코드 주석의 세 가지(고관절 굴곡 90도 초과, 정중선을 넘는 내전, 내회전)만 환자 문장으로 옮겼습니다. 접근법별 구분은 앱이 두지 않습니다. 전방 접근에서는 신전·외회전 제한이 다를 수 있어, 그 환자에게 이 문구를 쓸지는 치료사가 확인해야 합니다."
  },
  {
    "id": "2",
    "text": "주의의 '관절 이상음'은 특정 염발음으로 단정하지 않고 '평소와 다른 관절 소리'로 옮겼습니다."
  },
  {
    "id": "9",
    "text": "방법에는 3초 유지가 있고, 인쇄되는 용량 칸은 횟수×세트입니다. 한국어와 같이 두었습니다."
  },
  {
    "id": "12",
    "text": "'다시 모읍니다'는 옆으로 벌린 다리를 제자리로 되돌린다는 뜻으로 옮겼습니다. 정중선을 넘겨 교차하라는 뜻은 넣지 않았습니다. 임상 검토표도 이 문장이 모호하다고 적혀 있습니다."
  },
  {
    "id": "20",
    "text": "환측은 마비측·수술측을 아우르는 affected side / 患側로 옮겼습니다. 이 운동은 상지 체중지지라 뇌졸중 쪽 표현에 맞춥니다."
  },
  {
    "id": "33",
    "text": "목표의 '어깨 ROM'은 환자에게 ROM이라는 약어 대신 가동범위라는 말로 풀었습니다."
  },
  {
    "id": "39",
    "text": "방법의 3~5초 유지와, 용량 칸의 횟수×세트를 한국어와 같이 둘 다 남겼습니다. 용량 칸을 초 유지로 바꾸지는 않았습니다."
  },
  {
    "id": "42",
    "text": "'눈을 감고 시행하지 마세요'는 눈을 감는 롬버그 변형을 하지 말라는 뜻으로 그대로 옮겼습니다."
  },
  {
    "id": "53",
    "text": "어깨를 뒤로 크게 돌리되, 이어지는 순서는 앞 → 위 → 뒤 → 아래입니다. 그 순서를 영어·일본어에도 그대로 두었습니다."
  },
  {
    "id": "59",
    "text": "'발이 꼬이지 않도록'은 발이 교차해 걸리지 않게 천천히 하라는 뜻으로 옮겼습니다."
  },
  {
    "id": "75",
    "text": "제목 '횡격막 호흡'의 일본어는 환자에게 익숙한 腹式呼吸으로 했습니다. 방법은 배가 올라오는 횡격막 호흡이고, 목표는 '横隔膜を使う呼吸'으로 구분해 두었습니다."
  },
  {
    "id": "76",
    "text": "'촛불을 흔들 듯이'는 촛불을 끄는 강한 입김이 아니라, 불꽃이 흔들릴 정도의 약한 날숨으로 옮겼습니다."
  },
  {
    "id": "78",
    "text": "유발 폐활량계는 incentive spirometer / インセンティブスパイロメーター로 적었습니다. 3~5초 숨 참기는 방법 문장에만 있고, 용량 칸은 한국어와 같이 횟수×세트입니다."
  },
  {
    "id": "79",
    "text": "'허-' 소리는 영어 huh, 일본어 ハッ으로 옮겼습니다. 거울에 김이 서리는 듯한 길고 센 날숨입니다."
  },
  {
    "id": "memo-free",
    "text": "치료사가 직접 고친 공통 주의사항, 환자 이름, 치료사 이름, 운동 방법·주의의 개별 수정 문장은 번역하지 않고 입력한 그대로 인쇄합니다. AI 보조가 만든 공통 주의 초안도 메모 칸에 들어가는 자유 문장이라 그대로 인쇄됩니다."
  },
  {
    "id": "safety",
    "text": "낙상·호흡·통증 상단 주의는 한국어 주의 문장의 낱말을 보고 고른 뒤, 고른 문장 전체를 출력 언어로 바꿉니다. 치료사가 주의 문장을 직접 고쳐 그 낱말이 없으면 일반 안내 문장으로 떨어집니다. 이 동작은 한국어 출력과 같습니다."
  },
  {
    "id": "page",
    "text": "쪽 번호는 지금처럼 숫자만 인쇄합니다(1 / 2). 한국어 낱말이 없습니다."
  },
  {
    "id": "date",
    "text": "한국어 출력의 날짜는 지금처럼 YYYY-MM-DD입니다. 영어는 October 20, 2026, 일본어는 2026年10月20日처럼 바꿉니다."
  },
  {
    "id": "80-91",
    "text": "v2.67에서 추가한 12개 운동의 영어·일본어는 Matt 검토 전입니다. 한국어 이름·목표·방법·주의는 승인 문구 그대로입니다. 이 12개는 THA 고관절 주의 프리셋에 넣지 않았습니다."
  },
  {
    "id": "80",
    "text": "기본 side는 환측입니다. 처방할 때 좌/우 칸에서 바꿀 수 있습니다."
  },
  {
    "id": "81",
    "text": "승인 용량은 10초 유지 × 8회 × 2세트입니다. 유지 운동의 용량 칸은 초 × 세트뿐이라, 8회를 세트 칸에 넣어 10초 유지 × 8세트로 표시합니다. 뒤의 × 2세트는 기본값에 곱하지 않았습니다."
  },
  {
    "id": "82",
    "text": "용량의 (각 2–3초 유지)는 한 번 모을 때의 짧은 힘주기입니다. 9번·28번처럼 용량 칸은 10회 × 2세트로 두었습니다. 초 유지로 바꾸면 10회가 사라집니다."
  },
  {
    "id": "83",
    "text": "고관절 치환에서 안쪽 돌림을 제한하는 경우는 승인 문장에 금지를 단정하지 않았습니다. THA 프리셋에도 넣지 않았습니다."
  },
  {
    "id": "84",
    "text": "승인 용량은 좌우 각 8회 × 2세트이고 side는 없습니다. 방법에 좌우를 번갈아 한다는 문장이 있어, 용량 칸은 8회 × 2세트입니다."
  },
  {
    "id": "85",
    "text": "승인 용량은 5초 유지 × 10회 × 2세트입니다. 81번과 같이 5초 유지 × 10세트로 표시하고, 뒤의 × 2세트는 기본값에 곱하지 않았습니다. 목표의 심부 경부 굴곡근은 환자에게 풀어서 옮겼습니다. 신체 필터에 목(neck)을 추가했습니다."
  },
  {
    "id": "86",
    "text": "승인 용량은 좌우 각 8회 × 2세트이고 side는 없습니다. 방법에 반대쪽도 반복한다는 문장이 있어, 용량 칸은 8회 × 2세트입니다. 목표의 흉추는 등 위쪽(upper back / 胸の背骨)으로 풀었습니다."
  },
  {
    "id": "88",
    "text": "승인 용량은 15–20초 유지 × 3세트 (좌우)입니다. 용량 칸은 숫자 하나라 기본값을 15초로 두었고, 치료사가 초를 바꿀 수 있습니다. side는 양측입니다. 전방 접근 치환과 신전·외회전은 환자 문장으로 풀었습니다."
  },
  {
    "id": "89",
    "text": "승인 용량은 5분 × 1세트이고 시간 기준입니다. 다른 시간 운동(70–72)과 같이 유인물에는 5분만 표시됩니다. 적응 후 8–10분은 기본값에 넣지 않았습니다. 45번 서서 제자리 발 들기와 제목을 구분했습니다."
  },
  {
    "id": "90",
    "text": "승인 용량은 20–30초 유지 × 3세트입니다. 기본값은 범위의 시작인 20초이고, 치료사가 초를 바꿀 수 있습니다. 신전 선호 요통과 협착은 환자 문장으로 풀었습니다."
  },
  {
    "id": "91",
    "text": "승인된 매핑 그대로 10초 유지 × 5세트입니다. 초는 치료사가 바꿀 수 있습니다. THA 프리셋에는 넣지 않았습니다."
  }
];
