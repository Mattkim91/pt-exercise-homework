/* 운동 자료
   개발자가 아닌 사람도 이 파일에서 운동 문구, 그림 메타, 처방 묶음, BBS 구간을 고칠 수 있습니다.
   운동 이름·방법·주의사항은 환자 유인물에 그대로 인쇄됩니다.
   이 파일은 <script src="exercises.js"> 로 읽으므로 file:// 에서도 동작합니다.
*/

var EXERCISES = [
  {"id": 1, "category": "PROM", "level": "Lv0 PROM/보호자", "title": "발목 수동관절운동", "target": "발목 관절가동범위 유지 및 구축 예방", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🦶", "description": "치료사 또는 보호자가 환자의 발목을 부드럽게 위아래로 움직여줍니다. 환자는 힘을 빼고 편안하게 유지합니다.", "caution": "통증이 있으면 즉시 중단하고 치료사에게 알려주세요. 저항 없이 부드럽게 시행하세요.", "imageKey": "ankle-prom"},
  {"id": 2, "category": "PROM", "level": "Lv0 PROM/보호자", "title": "무릎·고관절 수동관절운동", "target": "하지 관절가동범위 유지 및 구축 예방", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🦵", "description": "치료사 또는 보호자가 무릎을 천천히 굽혔다 펴고, 고관절을 부드럽게 굽혀줍니다. 환자는 힘을 빼고 편안하게 유지합니다.", "caution": "관절 이상음이나 통증이 있으면 즉시 중단하세요. 골절·수술 부위는 특히 주의하세요.", "imageKey": "lower-limb-prom"},
  {"id": 3, "category": "PROM", "level": "Lv0 PROM/보호자", "title": "어깨 수동관절운동", "target": "어깨 관절가동범위 유지 및 구축 예방", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🙆", "description": "치료사 또는 보호자가 팔을 부드럽게 앞으로 들어 올리고, 옆으로 벌려줍니다. 환자는 힘을 빼고 편안하게 유지합니다.", "caution": "어깨 탈구 병력이 있으면 치료사에게 먼저 알려주세요. 통증 없는 범위에서만 시행하세요.", "imageKey": "shoulder-prom"},
  {"id": 4, "category": "PROM", "level": "Lv0 PROM/보호자", "title": "손목·손가락 수동관절운동", "target": "손목·손가락 관절가동범위 유지 및 구축 예방", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "✋", "description": "치료사 또는 보호자가 손목을 위아래로 움직이고 손가락을 부드럽게 펴줍니다. 환자는 힘을 빼고 편안하게 유지합니다.", "caution": "손가락 경직이 심하면 무리하게 펴지 말고 가능한 범위에서만 시행하세요.", "imageKey": "wrist-hand-prom"},
  {"id": 5, "category": "AROM", "level": "Lv1 침상운동", "title": "발목 펌프 운동", "target": "발목 관절가동범위 유지 및 구축 예방", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🦶", "description": "누운 자세에서 발목을 스스로 천천히 위아래로 움직입니다. 발끝을 몸쪽으로 당겼다가 아래로 미는 동작을 반복합니다.", "caution": "통증이 있으면 즉시 중단하고 치료사에게 알려주세요. 반동 없이 천천히 시행하세요.", "imageKey": "ankle-pump"},
  {"id": 6, "category": "AROM", "level": "Lv1 침상운동", "title": "무릎 굽혔다 펴기", "target": "하지 관절가동범위 유지 및 구축 예방", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🦵", "description": "누운 자세에서 발뒤꿈치를 바닥에 대고 천천히 몸쪽으로 끌어 무릎을 굽힌 뒤, 다시 천천히 펴서 내립니다.", "caution": "무릎에서 이상음이나 통증이 있으면 즉시 중단하세요. 골절·수술 부위는 통증 없는 범위에서만 시행하세요.", "imageKey": "heel-slide"},
  {"id": 7, "category": "ADL", "level": "Lv1 침상운동", "title": "옆으로 돌아눕기", "target": "침상 이동 능력 향상", "reps": 5, "sets": 3, "durationMin": 5, "side": "", "image": "🔄", "description": "누운 자세에서 무릎을 살짝 굽히고 몸통을 천천히 옆으로 돌립니다.", "caution": "어지럽거나 통증이 있으면 천천히 쉬어가며 시행하세요.", "imageKey": "log-rolling"},
  {"id": 8, "category": "Strengthening", "level": "Lv1 침상운동", "title": "무릎 누르기", "target": "대퇴사두근 활성화", "reps": 10, "sets": 3, "durationMin": 3, "side": "양측", "image": "🦵", "description": "무릎 아래에 수건을 놓고 무릎을 아래로 눌러 허벅지 앞쪽에 힘을 줍니다.", "caution": "무릎 통증이 심하면 힘주는 강도를 줄이세요.", "imageKey": "quad-set"},
  {"id": 9, "category": "Strengthening", "level": "Lv1 침상운동", "title": "엉덩이 힘주기", "target": "둔근 활성화", "reps": 10, "sets": 3, "durationMin": 3, "side": "양측", "image": "🛏️", "description": "누운 자세에서 엉덩이에 힘을 주고 3초간 유지한 뒤 천천히 힘을 뺍니다.", "caution": "허리나 다리에 통증이 생기면 강도를 줄이세요.", "imageKey": "glute-set"},
  {"id": 10, "category": "Strengthening", "level": "Lv1 침상운동", "title": "쇼트아크 쿼드", "target": "대퇴사두근 강화 및 무릎 펴기 조절", "reps": 10, "sets": 3, "durationMin": 5, "side": "양측", "image": "🦵", "description": "무릎 아래에 베개나 수건을 받치고 누운 자세에서 무릎을 천천히 펴며 발을 들어 올립니다.", "caution": "무릎 통증이 심하면 범위를 줄이고 허벅지 앞쪽에 힘이 들어가는지 확인하세요.", "imageKey": "short-arc-quad"},
  {"id": 11, "category": "Strengthening", "level": "Lv1 침상운동", "title": "다리 들어올리기", "target": "고관절 굴곡근 및 대퇴사두근 강화", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "🦵", "description": "누운 자세에서 무릎을 편 상태로 한쪽 다리를 천천히 들어 올렸다가 내립니다.", "caution": "허리가 과하게 뜨거나 통증이 있으면 중단하세요.", "imageKey": "straight-leg-raise"},
  {"id": 12, "category": "Strengthening", "level": "Lv1 침상운동", "title": "다리 벌리기", "target": "고관절 외전근 강화", "reps": 10, "sets": 2, "durationMin": 4, "side": "양측", "image": "🦵", "description": "누운 자세에서 한쪽 다리를 옆으로 천천히 벌렸다가 다시 모읍니다.", "caution": "골반이 함께 돌아가지 않도록 주의하세요.", "imageKey": "supine-hip-abduction"},
  {"id": 13, "category": "Strengthening", "level": "Lv1 침상운동", "title": "클램쉘", "target": "고관절 외전근 및 중둔근 강화", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🦵", "description": "옆으로 누워 무릎을 구부린 상태에서 발은 붙이고 위쪽 무릎을 천천히 벌렸다가 모읍니다.", "caution": "골반이 뒤로 넘어가지 않도록 주의하고 통증 없는 범위에서 시행하세요.", "imageKey": "clam-shell"},
  {"id": 14, "category": "Strengthening", "level": "Lv1 침상운동", "title": "옆으로 누워 다리 벌리기", "target": "고관절 외전근 강화 및 골반 안정성 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🦵", "description": "옆으로 누운 자세에서 위쪽 다리를 편 상태로 천천히 위로 들었다가 내립니다.", "caution": "허리나 골반이 과하게 움직이지 않도록 주의하세요.", "imageKey": "side-lying-hip-abduction"},
  {"id": 15, "category": "Strengthening", "level": "Lv1 침상운동", "title": "브릿지", "target": "둔근 강화 및 침상 이동 준비", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "🌉", "description": "무릎을 세우고 누운 뒤 엉덩이를 천천히 들어 올렸다가 내립니다.", "caution": "허리 통증이 심하면 중단하세요.", "imageKey": "bridge"},
  {"id": 16, "category": "ADL", "level": "Lv1 침상운동", "title": "손 쥐었다 펴기", "target": "손목·손가락 관절가동범위 유지 및 구축 예방", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "✋", "description": "손가락을 스스로 천천히 쥐었다가 모두 펴기를 반복합니다. 통증이 없는 범위에서 시행합니다.", "caution": "손가락을 억지로 끝까지 펴지 말고, 스스로 움직일 수 있는 범위에서만 시행하세요.", "imageKey": "hand-open-close"},
  {"id": 17, "category": "ADL", "level": "Lv1 침상운동", "title": "손목 굽힘/폄", "target": "손목 관절가동범위 유지", "reps": 10, "sets": 3, "durationMin": 3, "side": "양측", "image": "🤲", "description": "팔을 편안히 둔 상태에서 손목을 천천히 위아래로 움직입니다.", "caution": "반동 없이 천천히 시행하세요.", "imageKey": "wrist-flexion-extension"},
  {"id": 18, "category": "ADL", "level": "Lv1 침상운동", "title": "팔꿈치 굽힘/폄", "target": "팔꿈치 관절가동범위 유지", "reps": 10, "sets": 3, "durationMin": 4, "side": "양측", "image": "💪", "description": "팔꿈치를 천천히 굽혔다가 폅니다. 통증이 없는 범위에서 반복합니다.", "caution": "어깨가 과하게 들리지 않도록 주의하세요.", "imageKey": "elbow-flexion-extension"},
  {"id": 19, "category": "ADL", "level": "Lv1 침상운동", "title": "누워서 팔 올리기", "target": "어깨 관절가동범위 유지 및 구축 예방", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🙆", "description": "누운 자세에서 팔을 스스로 천천히 앞으로 들어 올렸다가 내립니다. 통증 없는 범위에서 반복합니다.", "caution": "어깨 통증이나 탈구 병력이 있으면 치료사에게 먼저 알려주세요. 통증 없는 범위에서만 시행하세요.", "imageKey": "supine-shoulder-flexion"},
  {"id": 20, "category": "ADL", "level": "Lv1 침상운동", "title": "환측 팔 체중지지", "target": "상지 체중지지 및 어깨 안정성 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "✋", "description": "테이블 위에 환측 팔을 올리고 손바닥 또는 전완으로 천천히 체중을 실어 유지합니다.", "caution": "어깨 통증이나 손목 통증이 있으면 각도와 체중을 줄이세요.", "imageKey": "affected-arm-weight-bearing"},
  {"id": 21, "category": "AROM", "level": "Lv1 침상운동", "title": "골반 기울이기", "target": "골반 조절 및 요부 긴장 완화", "reps": 10, "sets": 2, "durationMin": 4, "side": "", "image": "🛏️", "description": "무릎을 세우고 누운 자세에서 허리를 바닥 쪽으로 가볍게 누르며 골반을 움직입니다.", "caution": "통증이 없는 작은 범위에서 시행하세요.", "imageKey": "pelvic-tilt"},
  {"id": 22, "category": "ADL", "level": "Lv1 침상운동", "title": "누워서 손 뻗기", "target": "상지 조절 및 체간 안정성 향상", "reps": 10, "sets": 2, "durationMin": 4, "side": "", "image": "🤲", "description": "누운 자세에서 한쪽 팔을 천천히 앞으로 뻗었다가 돌아옵니다. 어깨가 과하게 올라가지 않도록 편안한 범위에서 시행합니다.", "caution": "어깨 통증이나 저림이 있으면 범위를 줄이세요.", "imageKey": "supine-reach"},
  {"id": 23, "category": "Balance", "level": "Lv2 앉은자세", "title": "앉은 자세 유지", "target": "정적 앉은 균형 향상", "reps": 30, "sets": 3, "durationMin": 4, "side": "", "image": "🪑", "description": "발을 바닥에 두고 허리를 세워 앉은 자세를 유지합니다.", "caution": "어지러움이 있으면 등받이에 기대어 쉬세요.", "imageKey": "sitting-balance"},
  {"id": 24, "category": "Balance", "level": "Lv2 앉은자세", "title": "앉아서 좌우 체중이동", "target": "앉은 균형 및 체간 조절", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "↔️", "description": "의자에 앉아 몸통을 좌우로 천천히 이동합니다.", "caution": "균형이 불안하면 보호자가 옆에서 지켜봐 주세요.", "imageKey": "seated-weight-shift"},
  {"id": 25, "category": "ADL", "level": "Lv2 앉은자세", "title": "앞으로 손 뻗기", "target": "상지 도달 및 체간 조절", "reps": 10, "sets": 2, "durationMin": 4, "side": "", "image": "🤲", "description": "앉은 자세에서 앞에 놓인 물건을 향해 손을 천천히 뻗었다가 돌아옵니다.", "caution": "몸이 과하게 앞으로 쏠리지 않게 주의하세요.", "imageKey": "seated-reach"},
  {"id": 26, "category": "Balance", "level": "Lv2 앉은자세", "title": "앉아서 물건 잡기", "target": "동적 앉은 균형 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "🤲", "description": "앉은 자세에서 좌우 또는 앞쪽에 놓인 물건을 향해 손을 뻗어 잡습니다.", "caution": "몸이 과하게 기울면 보호자가 보조하세요.", "imageKey": "seated-object-reach"},
  {"id": 27, "category": "ADL", "level": "Lv2 앉은자세", "title": "콘 잡기", "target": "상지 도달 및 시각 탐색 능력 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🔺", "description": "앉은 자세에서 앞이나 옆에 놓인 콘을 향해 손을 뻗어 잡았다가 제자리로 돌아옵니다.", "caution": "몸통을 과하게 기울이지 않도록 하고 필요 시 보호자 감독하에 시행하세요.", "imageKey": "cone-reaching"},
  {"id": 28, "category": "Strengthening", "level": "Lv2 앉은자세", "title": "앉아서 무릎 펴기", "target": "대퇴사두근 강화", "reps": 10, "sets": 3, "durationMin": 4, "side": "양측", "image": "🪑", "description": "의자에 허리를 세우고 앉아 한쪽 무릎을 천천히 펴고 2초간 유지한 뒤 내립니다.", "caution": "허리가 뒤로 젖혀지지 않도록 주의하세요.", "imageKey": "seated-knee-extension"},
  {"id": 29, "category": "Gait", "level": "Lv2 앉은자세", "title": "앉아서 제자리 발 들기", "target": "고관절 굴곡 및 보행 준비", "reps": 20, "sets": 2, "durationMin": 4, "side": "양측", "image": "🪑", "description": "의자에 앉아 무릎을 번갈아 들어 올립니다. 몸통이 뒤로 넘어가지 않게 유지합니다.", "caution": "허리가 뒤로 젖혀지면 범위를 줄이세요.", "imageKey": "seated-marching"},
  {"id": 30, "category": "Strengthening", "level": "Lv2 앉은자세", "title": "앉아서 뒤꿈치 들기", "target": "종아리 근력 강화", "reps": 15, "sets": 3, "durationMin": 3, "side": "양측", "image": "🦶", "description": "의자에 앉아 발끝은 바닥에 두고 뒤꿈치를 천천히 들어 올렸다가 내립니다.", "caution": "발목 통증이 있으면 천천히 시행하세요.", "imageKey": "seated-heel-raise"},
  {"id": 31, "category": "Strengthening", "level": "Lv2 앉은자세", "title": "앉아서 발끝 들기", "target": "발목 배측굴곡근 강화", "reps": 15, "sets": 3, "durationMin": 3, "side": "양측", "image": "🦶", "description": "의자에 앉아 뒤꿈치는 바닥에 두고 발끝을 몸쪽으로 천천히 들어 올립니다.", "caution": "무리하게 당기지 마세요.", "imageKey": "seated-toe-raise"},
  {"id": 32, "category": "ADL", "level": "Lv2 앉은자세", "title": "테이블 위 팔 밀기", "target": "어깨 움직임 및 상지 조절", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "🪑", "description": "테이블 위에 수건을 놓고 손을 올린 뒤 팔을 앞으로 천천히 밀었다가 돌아옵니다.", "caution": "어깨 통증이 심해지면 중단하세요.", "imageKey": "table-slide"},
  {"id": 33, "category": "ADL", "level": "Lv2 앉은자세", "title": "막대 잡고 양팔 올리기", "target": "양측 상지 협응 및 어깨 ROM", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🙆", "description": "양손으로 막대를 잡고 팔을 천천히 앞으로 들어 올렸다가 내립니다.", "caution": "아픈 팔은 반대팔로 보조하며 무리하지 마세요.", "imageKey": "cane-shoulder-flexion"},
  {"id": 34, "category": "ADL", "level": "Lv2 앉은자세", "title": "손가락 맞대기", "target": "손가락 협응 및 미세운동 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "👌", "description": "엄지손가락을 검지, 중지, 약지, 새끼손가락에 차례로 맞댔다가 폅니다.", "caution": "손가락 통증이 있으면 천천히 작은 범위로 시행하세요.", "imageKey": "finger-opposition"},
  {"id": 35, "category": "ADL", "level": "Lv2 앉은자세", "title": "수건 쥐기", "target": "손 근력 및 쥐기 기능 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "✊", "description": "작은 수건을 손에 쥐고 천천히 힘을 주어 눌렀다가 풉니다.", "caution": "손가락 관절 통증이 있으면 강도를 줄이세요.", "imageKey": "towel-squeeze"},
  {"id": 36, "category": "ADL", "level": "Lv2 앉은자세", "title": "날개뼈 모으기", "target": "견갑골 안정화 및 자세 조절 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🔙", "description": "팔을 편안히 내린 자세에서 양쪽 날개뼈를 등 뒤로 천천히 모았다가 풉니다.", "caution": "어깨를 으쓱하지 않도록 하고 목에 힘이 들어가면 범위를 줄이세요.", "imageKey": "scapular-retraction"},
  {"id": 37, "category": "Strengthening", "level": "Lv2 앉은자세", "title": "의자 팔걸이 밀기", "target": "상지 지지 및 체중부하 훈련", "reps": 10, "sets": 2, "durationMin": 4, "side": "양측", "image": "🪑", "description": "의자 팔걸이를 손으로 누르며 엉덩이를 살짝 들어 올리듯 힘을 줍니다.", "caution": "손목이나 어깨 통증이 있으면 강도를 줄이세요.", "imageKey": "chair-push-up"},
  {"id": 38, "category": "ADL", "level": "Lv3 선자세", "title": "앉았다 일어서기", "target": "하지 근력 및 기능적 이동 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "🧍", "description": "의자에 앉은 상태에서 발을 바닥에 두고 몸을 앞으로 기울인 뒤 천천히 일어섭니다.", "caution": "무릎 통증이나 어지러움이 있으면 중단하세요.", "imageKey": "sit-to-stand"},
  {"id": 39, "category": "ADL", "level": "Lv3 선자세", "title": "일어서서 자세 유지", "target": "하지 근력 및 선 자세 안정성 향상", "reps": 5, "sets": 2, "durationMin": 5, "side": "", "image": "🪑", "description": "의자에서 일어난 뒤 바른 선 자세를 3~5초 유지하고 천천히 다시 앉습니다.", "caution": "어지럼증이나 무릎 통증이 있으면 즉시 중단하세요.", "imageKey": "sit-to-stand-hold"},
  {"id": 40, "category": "Balance", "level": "Lv3 선자세", "title": "서서 좌우 체중이동", "target": "보행 전 체중이동 훈련", "reps": 10, "sets": 3, "durationMin": 5, "side": "", "image": "↔️", "description": "양발을 어깨너비로 벌리고 서서 체중을 좌우로 천천히 이동합니다.", "caution": "몸이 과하게 기울지 않게 주의하세요.", "imageKey": "standing-weight-shift"},
  {"id": 41, "category": "Balance", "level": "Lv3 선자세", "title": "한발 올리고 체중이동", "target": "계단 준비 및 하지 체중부하 조절", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🦵", "description": "한쪽 발을 낮은 발판 위에 올리고 앞뒤 또는 좌우로 천천히 체중을 이동합니다.", "caution": "무릎이 안쪽으로 무너지지 않도록 하고 균형이 불안하면 손잡이를 잡으세요.", "imageKey": "step-weight-shift"},
  {"id": 42, "category": "Balance", "level": "Lv3 선자세", "title": "발 모으고 서기", "target": "정적 균형 향상", "reps": 30, "sets": 3, "durationMin": 4, "side": "", "image": "🧍", "description": "양발을 모으고 선 자세를 유지합니다.", "caution": "눈을 감고 시행하지 마세요.", "imageKey": "romberg-standing"},
  {"id": 43, "category": "Balance", "level": "Lv3 선자세", "title": "일자 서기", "target": "좁은 지지면 균형 향상", "reps": 30, "sets": 3, "durationMin": 5, "side": "", "image": "🧍", "description": "한 발을 다른 발 앞에 일자로 두고 선 자세를 유지합니다.", "caution": "균형이 불안하면 보호자 감독하에 시행하세요.", "imageKey": "tandem-standing"},
  {"id": 44, "category": "Balance", "level": "Lv3 선자세", "title": "의자 잡고 한발 서기", "target": "정적 균형 향상", "reps": 5, "sets": 3, "durationMin": 5, "side": "", "image": "🧍", "description": "튼튼한 의자나 난간을 잡고 한쪽 발을 살짝 들어 올린 뒤 가능한 범위에서 유지합니다.", "caution": "반드시 안정적인 지지물 가까이에서 시행하세요.", "imageKey": "single-leg-stance-chair"},
  {"id": 45, "category": "Gait", "level": "Lv3 선자세", "title": "서서 제자리 발 들기", "target": "보행 준비 및 하지 조절", "reps": 20, "sets": 2, "durationMin": 5, "side": "양측", "image": "🚶", "description": "양발을 골반 너비로 벌리고 선 뒤 제자리에서 무릎을 번갈아 들어 올립니다.", "caution": "어지럽거나 균형이 불안하면 앉아서 쉬세요.", "imageKey": "standing-marching"},
  {"id": 46, "category": "Strengthening", "level": "Lv3 선자세", "title": "서서 뒤꿈치 들기", "target": "종아리 근력 강화", "reps": 15, "sets": 3, "durationMin": 4, "side": "양측", "image": "🦶", "description": "의자나 난간을 잡고 양쪽 뒤꿈치를 천천히 들어 올렸다가 내립니다.", "caution": "발목 통증이나 균형 불안이 있으면 범위를 줄이세요.", "imageKey": "standing-heel-raise"},
  {"id": 47, "category": "Strengthening", "level": "Lv3 선자세", "title": "서서 무릎 굽히기", "target": "햄스트링 강화 및 무릎 굽힘 조절", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🦵", "description": "의자나 난간을 잡고 선 자세에서 한쪽 무릎을 뒤로 천천히 굽혔다가 내립니다.", "caution": "상체가 앞으로 숙여지지 않도록 하고 균형이 불안하면 보호자 감독하에 시행하세요.", "imageKey": "standing-knee-flexion"},
  {"id": 48, "category": "Strengthening", "level": "Lv3 선자세", "title": "서서 다리 옆으로 들기", "target": "고관절 외전근 강화", "reps": 10, "sets": 2, "durationMin": 4, "side": "", "image": "🦵", "description": "의자를 잡고 선 상태에서 한쪽 다리를 옆으로 천천히 들어 올렸다가 내립니다.", "caution": "몸통이 반대쪽으로 기울지 않게 주의하세요.", "imageKey": "standing-hip-abduction"},
  {"id": 49, "category": "Strengthening", "level": "Lv3 선자세", "title": "서서 다리 뒤로 들기", "target": "고관절 신전근 강화", "reps": 10, "sets": 2, "durationMin": 4, "side": "", "image": "🦵", "description": "의자를 잡고 선 상태에서 무릎을 편 채 한쪽 다리를 뒤로 천천히 들어 올립니다.", "caution": "허리가 과하게 꺾이지 않도록 주의하세요.", "imageKey": "standing-hip-extension"},
  {"id": 50, "category": "Strengthening", "level": "Lv3 선자세", "title": "미니 스쿼트", "target": "하지 근력 강화", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🏋️", "description": "의자나 난간을 잡고 무릎을 살짝 굽혔다가 천천히 폅니다.", "caution": "무릎이 발끝보다 과하게 앞으로 나가지 않도록 주의하세요.", "imageKey": "mini-squat"},
  {"id": 51, "category": "Balance", "level": "Lv3 선자세", "title": "서서 앞으로 손 뻗기", "target": "전방 체중이동 및 선 자세 균형 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🙋", "description": "안정적으로 선 자세에서 한 손 또는 양손을 앞으로 천천히 뻗었다가 돌아옵니다.", "caution": "넘어질 위험이 있으면 보호자 또는 난간 가까이에서 시행하세요.", "imageKey": "standing-forward-reach"},
  {"id": 52, "category": "ADL", "level": "Lv3 선자세", "title": "벽 타고 팔 올리기", "target": "어깨 관절가동범위 및 상지 기능 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🧱", "description": "벽을 마주 보고 서서 손가락을 벽 위로 천천히 걸어 올렸다가 내려옵니다.", "caution": "어깨 통증이 심하면 높이를 낮추고 무리하지 마세요.", "imageKey": "wall-slide"},
  {"id": 53, "category": "ADL", "level": "Lv2 앉은자세", "title": "날개뼈 크게 돌리기", "target": "견갑골 가동범위 및 어깨 주변 근육 활성화", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🔄", "description": "의자에 허리를 세우고 앉아 양 어깨를 천천히 크게 원을 그리듯 뒤로 돌립니다. 앞으로 모았다가 위로 올리고, 뒤로 당겼다가 아래로 내리는 순서로 반복합니다.", "caution": "어깨 통증이나 결림이 심하면 범위를 줄이세요.", "imageKey": "scapular-rotation"},
  {"id": 54, "category": "Gait", "level": "Lv3 선자세", "title": "스텝 터치", "target": "발 위치 조절 및 체중이동 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "🦶", "description": "앞에 낮은 발판이나 표시를 두고 한쪽 발로 가볍게 터치한 뒤 제자리로 돌아옵니다.", "caution": "발판이 미끄러지지 않도록 고정하세요.", "imageKey": "step-tap"},
  {"id": 55, "category": "Gait", "level": "Lv3 선자세", "title": "제자리 방향전환", "target": "보행 중 방향전환 능력 향상", "reps": 5, "sets": 3, "durationMin": 5, "side": "", "image": "🔄", "description": "제자리에서 작은 보폭으로 천천히 방향을 바꿉니다.", "caution": "급하게 돌지 말고 어지러우면 중단하세요.", "imageKey": "turning-in-place"},
  {"id": 56, "category": "Gait", "level": "Lv4 보행훈련", "title": "실내 걷기", "target": "기본 보행 능력 및 활동량 향상", "reps": 10, "sets": 1, "durationMin": 10, "side": "", "image": "👟", "description": "평평한 실내에서 편안한 속도로 걷습니다. 필요 시 보행보조도구를 사용합니다.", "caution": "어지러움이나 통증이 있으면 쉬어가며 시행하세요.", "imageKey": "indoor-walking"},
  {"id": 57, "category": "Gait", "level": "Lv4 보행훈련", "title": "복도 걷기", "target": "보행 지구력 향상", "reps": 10, "sets": 1, "durationMin": 10, "side": "", "image": "🚶", "description": "안전한 복도에서 일정한 속도로 걷습니다. 중간에 필요하면 휴식합니다.", "caution": "사람이나 장애물에 부딪히지 않도록 주의하세요.", "imageKey": "corridor-walking"},
  {"id": 58, "category": "Gait", "level": "Lv4 보행훈련", "title": "야외 걷기", "target": "일상 활동량 및 지구력 향상", "reps": 10, "sets": 1, "durationMin": 15, "side": "", "image": "🌳", "description": "평평하고 안전한 야외 보행로에서 편안한 속도로 걷습니다.", "caution": "경사로, 미끄러운 길, 사람이 많은 곳은 피하세요.", "imageKey": "outdoor-walking"},
  {"id": 59, "category": "Balance", "level": "Lv4 보행훈련", "title": "옆으로 걷기", "target": "측방 균형 및 고관절 근력 향상", "reps": 10, "sets": 2, "durationMin": 8, "side": "", "image": "↔️", "description": "난간이나 벽 가까이에서 옆으로 한 발씩 천천히 이동합니다.", "caution": "발이 꼬이지 않도록 천천히 시행하세요.", "imageKey": "side-walking"},
  {"id": 60, "category": "Balance", "level": "Lv4 보행훈련", "title": "뒤로 걷기", "target": "후방 보행 조절 및 균형 향상", "reps": 10, "sets": 2, "durationMin": 8, "side": "", "image": "↩️", "description": "안전한 공간에서 짧은 거리만 천천히 뒤로 걷습니다.", "caution": "반드시 보호자 감독 또는 난간 가까이에서 시행하세요.", "imageKey": "backward-walking"},
  {"id": 61, "category": "Balance", "level": "Lv4 보행훈련", "title": "일자 걷기", "target": "동적 균형 향상", "reps": 10, "sets": 2, "durationMin": 8, "side": "", "image": "🚶", "description": "한 발을 다른 발 앞에 놓듯이 선을 따라 천천히 걷습니다.", "caution": "균형이 불안하면 난간을 잡고 시행하세요.", "imageKey": "tandem-walking"},
  {"id": 62, "category": "Gait", "level": "Lv4 보행훈련", "title": "낮은 장애물 넘기", "target": "보행 중 발 들기 및 균형 향상", "reps": 10, "sets": 2, "durationMin": 8, "side": "양측", "image": "🚧", "description": "낮은 장애물을 천천히 넘어갑니다. 발끝이 걸리지 않도록 충분히 들어 올립니다.", "caution": "보호자 감독하에 낮은 장애물부터 시작하세요.", "imageKey": "obstacle-crossing"},
  {"id": 63, "category": "Gait", "level": "Lv4 보행훈련", "title": "콘 사이 걷기", "target": "방향전환 및 장애물 회피 능력 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "🔺", "description": "바닥에 놓인 콘이나 표식 사이를 천천히 지그재그로 걸어갑니다.", "caution": "콘에 걸리지 않도록 충분한 간격을 두고 시행하세요.", "imageKey": "obstacle-weaving"},
  {"id": 64, "category": "Gait", "level": "Lv4 보행훈련", "title": "낮은 계단 오르기", "target": "하지 근력 및 계단 기능 향상", "reps": 10, "sets": 2, "durationMin": 6, "side": "", "image": "🪜", "description": "낮은 계단에 한 발을 올리고 천천히 올라갔다가 내려옵니다.", "caution": "난간을 잡고 보호자 감독하에 시행하세요.", "imageKey": "step-up-low"},
  {"id": 65, "category": "ADL", "level": "Lv4 보행훈련", "title": "계단 오르기", "target": "계단 기능 및 하지 근력 향상", "reps": 5, "sets": 2, "durationMin": 8, "side": "", "image": "🪜", "description": "난간을 잡고 한 계단씩 천천히 올라갑니다.", "caution": "무릎 통증이나 숨참이 심하면 중단하세요.", "imageKey": "stair-up"},
  {"id": 66, "category": "ADL", "level": "Lv4 보행훈련", "title": "계단 내려오기", "target": "계단 하강 조절 능력 향상", "reps": 5, "sets": 2, "durationMin": 8, "side": "", "image": "🪜", "description": "난간을 잡고 한 계단씩 천천히 내려옵니다.", "caution": "급하게 내려오지 말고 반드시 난간을 잡으세요.", "imageKey": "stair-down"},
  {"id": 67, "category": "Gait", "level": "Lv4 보행훈련", "title": "8자 걷기", "target": "방향전환 및 동적 균형 향상", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "8️⃣", "description": "두 개의 표식을 중심으로 8자 모양 경로를 따라 천천히 걷습니다.", "caution": "어지럽거나 균형이 흔들리면 즉시 멈추세요.", "imageKey": "figure-8-walking"},
  {"id": 68, "category": "ADL", "level": "Lv4 보행훈련", "title": "가벼운 물건 옮기기", "target": "기능적 보행 및 양손 사용 향상", "reps": 5, "sets": 2, "durationMin": 6, "side": "", "image": "📦", "description": "가벼운 물건을 들고 짧은 거리를 천천히 이동한 뒤 내려놓습니다.", "caution": "무거운 물건은 피하고 균형이 불안하면 보호자가 도와주세요.", "imageKey": "carrying-object"},
  {"id": 69, "category": "Gait", "level": "Lv4 보행훈련", "title": "속도 변화 걷기", "target": "보행 조절 능력 향상", "reps": 5, "sets": 2, "durationMin": 8, "side": "", "image": "👟", "description": "평소 속도로 걷다가 조금 빠르게 또는 천천히 걷습니다.", "caution": "무리하게 빠르게 걷지 마세요.", "imageKey": "speed-change-walking"},
  {"id": 70, "category": "Endurance", "level": "Lv5 유산소운동", "title": "고정식 자전거", "target": "심폐지구력 및 하지 반복운동", "reps": 10, "sets": 1, "durationMin": 10, "side": "", "image": "🚲", "description": "고정식 자전거에 앉아 편안한 강도로 페달을 밟습니다.", "caution": "숨이 너무 차거나 어지러우면 즉시 중단하세요.", "imageKey": "stationary-bike"},
  {"id": 71, "category": "Endurance", "level": "Lv5 유산소운동", "title": "트레드밀 걷기", "target": "보행 지구력 및 속도 조절", "reps": 10, "sets": 1, "durationMin": 10, "side": "", "image": "🏃", "description": "트레드밀에서 안전 손잡이를 잡고 느린 속도부터 걷습니다.", "caution": "반드시 치료사 또는 보호자 감독하에 시행하세요.", "imageKey": "treadmill-walking"},
  {"id": 72, "category": "Endurance", "level": "Lv5 유산소운동", "title": "야외 지구력 걷기", "target": "전신 지구력 및 일상 활동량 향상", "reps": 1, "sets": 1, "durationMin": 20, "side": "", "image": "🌳", "description": "평평하고 안전한 야외 보행로에서 편안한 속도로 15~20분 정도 걷습니다. 필요하면 중간에 쉬어도 됩니다.", "caution": "경사로, 미끄러운 길, 사람이 많은 곳은 피하고, 흉통·호흡곤란·어지러움이 있으면 즉시 중단하세요.", "imageKey": "outdoor-endurance-walking"},
  {"id": 73, "category": "AROM", "level": "Lv3 선자세", "title": "종아리 스트레칭", "target": "발목 가동범위 및 보행 준비", "reps": 10, "sets": 3, "durationMin": 4, "side": "", "image": "🦶", "description": "벽이나 난간을 짚고 한쪽 다리를 뒤로 뻗습니다. 뒤쪽 무릎을 편 상태에서 발뒤꿈치가 바닥에서 떨어지지 않게 유지하며 종아리가 당기는 느낌을 느낍니다.", "caution": "반동을 주지 말고 천천히 유지하세요. 통증이 있으면 범위를 줄이세요.", "imageKey": "standing-calf-stretch"},
  {"id": 74, "category": "AROM", "level": "Lv2 앉은자세", "title": "햄스트링 스트레칭", "target": "무릎 뒤쪽 유연성 및 보행 준비", "reps": 10, "sets": 3, "durationMin": 4, "side": "", "image": "🦵", "description": "의자에 앉아 한쪽 다리를 앞으로 펴고 발끝을 가볍게 당깁니다. 허리를 세운 상태에서 몸을 천천히 앞으로 기울여 허벅지 뒤쪽이 당기는 느낌을 유지합니다.", "caution": "허리를 과하게 굽히거나 반동을 주지 마세요. 저림이나 통증이 있으면 중단하세요.", "imageKey": "hamstring-stretch"},
  {"id": 75, "category": "Endurance", "level": "Lv1 침상운동", "title": "횡격막 호흡", "target": "횡격막 호흡과 환기 효율", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "😮‍💨", "description": "바로 눕거나 허리를 세우고 앉습니다. 한 손은 가슴, 한 손은 배에 올리고 코로 천천히 들이마시며 배가 손에 닿게 부풀립니다. 입으로 천천히 내쉬며 배가 들어가게 합니다.", "caution": "어지럽거나 숨이 가빠지면 바로 멈추고 평소 호흡으로 돌아옵니다. 힘을 주어 배를 밀어 올리지 마세요.", "imageKey": "diaphragmatic-breathing"},
  {"id": 76, "category": "Endurance", "level": "Lv2 앉은자세", "title": "입술 오므리고 호흡", "target": "날숨 시간과 기도 개방", "reps": 10, "sets": 2, "durationMin": 4, "side": "", "image": "💨", "description": "허리를 세우고 앉습니다. 코로 천천히 들이마신 뒤, 입술을 작게 오므리고 촛불을 흔들 듯이 길게 내쉽니다. 들이마시기보다 내쉬기를 길게 합니다.", "caution": "볼을 과도하게 부풀리거나 숨을 참지 마세요. 어지러우면 중단하세요.", "imageKey": "pursed-lip-breathing"},
  {"id": 77, "category": "Endurance", "level": "Lv2 앉은자세", "title": "가슴 확장 호흡", "target": "흉곽 확장과 흡기 깊이", "reps": 5, "sets": 2, "durationMin": 4, "side": "", "image": "🫁", "description": "허리를 세우고 앉아 양손을 갈비뼈 옆에 둡니다. 코로 천천히 깊게 들이마시며 갈비뼈가 양옆으로 넓어지게 합니다. 입을 가볍게 벌리고 갈비뼈가 내려오게 내쉽니다.", "caution": "어깨를 으쓱하며 들이마시지 마세요. 통증이나 심한 숨참이 있으면 깊이를 줄이세요.", "imageKey": "thoracic-expansion"},
  {"id": 78, "category": "Endurance", "level": "Lv1 침상운동", "title": "유발 폐활량계", "target": "느리고 깊은 들숨", "reps": 10, "sets": 1, "durationMin": 5, "side": "", "image": "📈", "description": "가능하면 허리를 세우고 앉습니다. 유발 폐활량계의 마우스피스를 물고 코로 새지 않게 합니다. 천천히 깊게 들이마셔 표시가 올라가도록 하고, 최대로 들이마신 상태에서 3~5초 숨을 참습니다. 마우스피스를 뺀 뒤 편하게 내쉽니다.", "caution": "빠르게 세게 들이마시지 마세요. 어지러움, 흉통, 심한 숨참이 있으면 중단하고 치료사에게 알리세요.", "imageKey": "incentive-spirometry"},
  {"id": 79, "category": "Endurance", "level": "Lv2 앉은자세", "title": "허프 기침", "target": "기도 분비물 이동", "reps": 5, "sets": 2, "durationMin": 4, "side": "", "image": "🗣️", "description": "허리를 세우고 앉습니다. 코로 보통 크기로 들이마신 뒤, 입을 크게 벌리고 거울에 김을 서리게 하듯 '허-' 하고 길고 세게 내쉽니다. 가래가 목 근처로 올라오면 한 번 기침하고 쉽니다.", "caution": "연속해서 세게 기침하지 마세요. 어지럽거나 통증이 있으면 중단하세요.", "imageKey": "huff-cough"},
  {"id": 80, "category": "ADL", "level": "Lv1 침상운동", "title": "반대 손으로 팔 올려주기", "target": "어깨 관절가동범위 유지, 보조 능동운동", "reps": 10, "sets": 2, "durationMin": 5, "side": "환측", "image": "🙆", "description": "누운 자세에서 반대쪽 손으로 운동하는 팔의 손목이나 아래팔을 가볍게 잡습니다. 통증이 없는 범위까지 팔을 천천히 머리 쪽으로 올려 주었다가, 같은 속도로 내립니다. 운동하는 팔은 힘을 완전히 빼지 말고, 할 수 있는 만큼만 같이 들어 올립니다.", "caution": "아픈 팔을 잡아채듯 올리지 마세요. 어깨 통증, 찌릿한 느낌이 있으면 높이를 낮추세요. 탈구·수술 직후는 치료사가 허용한 높이까지만 하세요.", "imageKey": "assisted-shoulder-flexion"},
  {"id": 81, "category": "Strengthening", "level": "Lv1 침상운동", "title": "배 힘주고 유지하기", "target": "몸통 깊은 근육 활성화, 요부 안정 준비", "reps": 10, "sets": 8, "durationMin": 4, "side": "", "image": "🛏️", "description": "무릎을 세우고 눕습니다. 허리와 바닥 사이 공간이 커지지 않게 유지한 채, 아랫배에 가볍게 힘을 넣어 복부가 살짝 얇아지게 합니다. 숨을 참지 말고 편하게 숨 쉬며 힘을 유지했다가 풉니다.", "caution": "숨을 참거나 어깨에 힘을 주지 마세요. 허리를 바닥에서 크게 들어 올리거나, 반대로 세게 누르며 통증을 만들지 마세요. 통증이 있으면 즉시 중단하세요.", "imageKey": "abdominal-bracing"},
  {"id": 82, "category": "Strengthening", "level": "Lv1 침상운동", "title": "무릎 사이에 수건 넣고 모으기", "target": "고관절 내전근 활성화", "reps": 10, "sets": 2, "durationMin": 4, "side": "", "image": "🦵", "description": "무릎을 세우고 누워 양쪽 무릎 사이에 접은 수건을 넣습니다. 무릎으로 수건을 부드럽게 모아 쥐듯이 힘을 주었다가 풉니다. 골반이 돌아가거나 허리가 뜨지 않게 유지합니다.", "caution": "고관절 치환 환자는 치료사가 허용한 경우에만 시행하세요. 일반 THA 주의의 과도한 내전과 혼동하지 말고, 수건이 무릎 사이를 벌려 준 상태에서 모으기만 합니다. 서혜부나 무릎 안쪽 통증이 있으면 중단하세요.", "imageKey": "hip-adduction-squeeze"},
  {"id": 83, "category": "AROM", "level": "Lv1 침상운동", "title": "다리 전체 안팎으로 돌리기", "target": "고관절 안쪽·바깥 돌림 가동범위 유지", "reps": 10, "sets": 2, "durationMin": 4, "side": "양측", "image": "🦵", "description": "무릎을 편 채 바로 눕거나, 다리를 앞으로 펴고 앉습니다. 양쪽 무릎이 굽혀지지 않게 유지한 채, 엉덩이 관절에서 다리 전체를 천천히 안쪽으로 돌려 발끝이 서로 모이게 했다가, 다시 바깥으로 돌려 발끝이 벌어지게 합니다. 발목만 움직이지 말고, 무릎뼈가 발끝과 같은 방향으로 따라 돌게 합니다.", "caution": "통증이 있으면 범위를 줄이거나 중단하세요. 무릎을 굽히거나 다리를 옆으로 크게 벌리지 마세요.", "imageKey": "whole-leg-rotation"},
  {"id": 84, "category": "Strengthening", "level": "Lv1 침상운동", "title": "네발 자세에서 반대 팔·다리 들기", "target": "체간 안정, 반대쪽 팔·다리 협응", "reps": 8, "sets": 2, "durationMin": 5, "side": "", "image": "🛏️", "description": "손과 무릎을 바닥에 대고 네발 자세를 만듭니다. 손은 어깨 아래, 무릎은 엉덩이 아래에 둡니다. 허리가 아래로 처지거나 위로 불룩해지지 않게 유지한 채, 한쪽 팔과 반대쪽 다리를 바닥과 수평이 될 정도만 천천히 들어 올렸다가 내립니다. 좌우를 번갈아 합니다.", "caution": "허리 통증, 손목 통증, 무릎 통증이 있으면 중단하세요. 몸이 한쪽으로 돌아가면 드는 높이를 낮추세요. 혼자 균형이 불안하면 팔만, 또는 다리만 먼저 하세요. 손목이 불편하면 주먹 또는 받친 손 자세는 치료사와 상의하세요.", "imageKey": "bird-dog"},
  {"id": 85, "category": "AROM", "level": "Lv2 앉은자세", "title": "턱 당기기", "target": "목 자세 조절, 심부 경부 굴곡근 활성화", "reps": 5, "sets": 10, "durationMin": 3, "side": "", "image": "🧍", "description": "허리를 세우고 앉아 정면을 봅니다. 고개를 숙이지 말고, 턱을 살짝 넣어 머리가 뒤로 수평 이동하듯이 당깁니다. 목 뒤가 가볍게 길어지는 느낌에서 잠시 유지했다가 풉니다.", "caution": "고개를 앞으로 숙이거나 아래로 내리지 마세요. 어지럼, 손 저림, 심한 목 통증이 있으면 즉시 중단하고 치료사에게 알리세요. 경추 수술·외상 후에는 치료사가 허용한 경우에만 시행하세요.", "imageKey": "chin-tuck"},
  {"id": 86, "category": "AROM", "level": "Lv2 앉은자세", "title": "앉아서 몸통 돌리기", "target": "흉추 가동 및 몸통 회전", "reps": 8, "sets": 2, "durationMin": 4, "side": "", "image": "🔄", "description": "허리를 세우고 앉아 양발을 바닥에 둡니다. 팔을 가슴 앞에서 가볍게 교차하거나 어깨에 손을 올립니다. 골반은 정면을 유지한 채 몸통만 한쪽으로 천천히 돌렸다가 돌아옵니다. 반대쪽도 반복합니다.", "caution": "허리를 비틀듯 크게 돌리지 마세요. 척추 수술 직후, 급성 요통, 어지럼이 있으면 중단하세요. 고관절 치환 환자는 치료사가 알려준 회전·굽힘 범위를 지키세요.", "imageKey": "seated-trunk-rotation"},
  {"id": 87, "category": "Strengthening", "level": "Lv2 앉은자세", "title": "발끝으로 수건 구기기", "target": "발 안쪽 작은 근육 활성화, 발바닥 감각", "reps": 10, "sets": 2, "durationMin": 4, "side": "양측", "image": "🦶", "description": "의자에 앉아 발 앞에 얇은 수건을 바닥에 펼칩니다. 발뒤꿈치는 바닥에 붙인 채, 발가락으로 수건을 잡아 당기듯이 구깁니다. 발가락만 움직이고 무릎은 흔들리지 않게 합니다.", "caution": "발가락 관절이나 발바닥 통증이 있으면 중단하세요. 최근 발 수술, 심한 상처, 혈류 장애가 있으면 치료사와 상의하세요. 경련이 나면 발을 펴고 쉬세요.", "imageKey": "towel-toe-curl"},
  {"id": 88, "category": "AROM", "level": "Lv3 선자세", "title": "서서 앞허벅지 스트레칭", "target": "앞허벅지와 고관절 앞쪽 유연성", "reps": 15, "sets": 3, "durationMin": 4, "side": "양측", "image": "🦵", "description": "의자나 난간을 한 손으로 잡고 섭니다. 한쪽 무릎을 뒤로 굽혀 같은 쪽 손으로 발목 또는 바지자락을 가볍게 잡습니다. 무릎이 바닥을 향하고 허리가 앞으로 꺾이지 않게 한 채, 앞허벅지가 당기는 느낌에서 유지합니다.", "caution": "반동을 주지 마세요. 허리 통증, 무릎 통증, 균형 불안이 있으면 중단하세요. 고관절 전방 접근 치환, 신전·외회전 제한이 있는 환자는 치료사가 허용하기 전에는 하지 마세요. 발목을 잡지 못하면 의자 뒤에 발등을 올리고 작게만 시행하세요.", "imageKey": "standing-quad-stretch"},
  {"id": 89, "category": "Endurance", "level": "Lv5 유산소운동", "title": "제자리 걷기", "target": "장비 없는 저강도 유산소", "reps": 1, "sets": 1, "durationMin": 5, "side": "", "image": "🚶", "description": "의자나 난간을 옆에 두고 섭니다. 제자리에서 발을 번갈아 가볍게 들며 걷듯이 이동합니다. 팔을 자연스럽게 흔들고, 말할 수 있는 강도로 정해진 시간을 유지합니다. 필요하면 한 손으로 지지물을 잡습니다.", "caution": "어지럼, 심한 숨참, 흉통이 있으면 즉시 앉으세요. 균형이 불안하면 지지물을 잡고 시행하세요. 관절 통증이 늘면 발 드는 높이를 낮추세요.", "imageKey": "marching-in-place"},
  {"id": 90, "category": "AROM", "level": "Lv1 침상운동", "title": "엎드려 팔꿈치로 상체 기대기", "target": "신전 선호 요통에서 상체 신전 자세로 증상 완화", "reps": 20, "sets": 3, "durationMin": 3, "side": "", "image": "🛏️", "description": "치료사가 이 동작을 처방해 준 경우에만 시행합니다. 바닥에 엎드려 팔꿈치를 어깨 아래에 두고 상체를 가볍게 일으켜 기댑니다. 골반과 다리는 바닥에 둔 채 편안한 호흡을 유지합니다. 통증이 다리로 퍼지지 않는지 확인하며 유지합니다.", "caution": "진단 없이 일반 숙제로 쓰지 마세요. 다리 저림이나 통증이 아래쪽으로 퍼지면 즉시 중단하고 다시 편하게 엎드리거나 옆으로 누우세요. 척추 수술 직후, 골절 의심, 심한 협착, 임산부는 시행하지 마세요. 허리를 손바닥으로 끝까지 밀어 올리는 상위 단계로 혼자 진행하지 마세요.", "imageKey": "prone-on-elbows"},
  {"id": 91, "category": "Strengthening", "level": "Lv1 침상운동", "title": "테이블탑 자세 유지", "target": "체간 안정, 고관절·무릎 90도 자세에서 복부·고관절 굴곡근 지구력", "reps": 10, "sets": 5, "durationMin": 3, "side": "", "image": "🛏️", "description": "바로 누워 두 팔을 몸 옆에 둡니다. 양쪽 엉덩이와 무릎을 각각 직각(90도)으로 구부려 다리를 침대에서 들어 올립니다. 허벅지는 천장 쪽으로 세우고, 정강이는 침대와 나란히 수평이 되게 합니다. 허리가 바닥에서 뜨지 않게 유지한 채, 숨을 참지 말고 편하게 숨 쉬며 자세를 유지했다가, 천천히 다리를 내립니다.", "caution": "허리가 바닥에서 뜨거나 허리 통증이 생기면 즉시 다리를 내리고 중단하세요. 숨을 참거나 목을 들어 올리지 마세요.", "imageKey": "table-top"}
];

var IMAGE_META = {
  "ankle-prom": {
    "cropType": "lower-leg-foot",
    "arrowType": "passive-dorsi-plantar",
    "bodyRegion": "ankle",
    "purposeTags": [
      "PROM"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "bedridden",
      "caregiver",
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "lower-limb-prom": {
    "cropType": "pelvis-leg",
    "arrowType": "passive-hip-knee-flexion",
    "bodyRegion": "hip",
    "purposeTags": [
      "PROM"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "bedridden",
      "caregiver",
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "shoulder-prom": {
    "cropType": "upper-body",
    "arrowType": "passive-shoulder-flexion-abduction",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "PROM"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "bedridden",
      "caregiver"
    ],
    "imagePriority": "C"
  },
  "wrist-hand-prom": {
    "cropType": "forearm-hand",
    "arrowType": "passive-wrist-finger-motion",
    "bodyRegion": "wrist",
    "purposeTags": [
      "PROM"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "bedridden",
      "caregiver"
    ],
    "imagePriority": "C"
  },
  "ankle-pump": {
    "cropType": "lower-leg-foot",
    "arrowType": "dorsi-plantar",
    "bodyRegion": "ankle",
    "purposeTags": [
      "ROM"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "A"
  },
  "heel-slide": {
    "cropType": "pelvis-leg",
    "arrowType": "heel-slide",
    "bodyRegion": "knee",
    "purposeTags": [
      "ROM"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "A"
  },
  "log-rolling": {
    "cropType": "full-body-bed",
    "arrowType": "rolling",
    "bodyRegion": "trunk",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer"
    ],
    "imagePriority": "B"
  },
  "quad-set": {
    "cropType": "knee-focused",
    "arrowType": "press-down",
    "bodyRegion": "knee",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "A"
  },
  "glute-set": {
    "cropType": "pelvis-focused",
    "arrowType": "contraction",
    "bodyRegion": "hip",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "short-arc-quad": {
    "cropType": "knee-focused",
    "arrowType": "knee-extension",
    "bodyRegion": "knee",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "straight-leg-raise": {
    "cropType": "pelvis-leg",
    "arrowType": "leg-lift",
    "bodyRegion": "hip",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "A"
  },
  "supine-hip-abduction": {
    "cropType": "pelvis-leg",
    "arrowType": "abduction",
    "bodyRegion": "hip",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "clam-shell": {
    "cropType": "hip-knee",
    "arrowType": "abduction",
    "bodyRegion": "hip",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "side-lying-hip-abduction": {
    "cropType": "pelvis-leg",
    "arrowType": "abduction",
    "bodyRegion": "hip",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "bridge": {
    "cropType": "trunk-knee",
    "arrowType": "pelvis-lift",
    "bodyRegion": "trunk",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer"
    ],
    "imagePriority": "A"
  },
  "hand-open-close": {
    "cropType": "hand-only",
    "arrowType": "open-close",
    "bodyRegion": "hand",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer"
    ],
    "imagePriority": "C"
  },
  "wrist-flexion-extension": {
    "cropType": "forearm-hand",
    "arrowType": "flexion-extension",
    "bodyRegion": "wrist",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer"
    ],
    "imagePriority": "C"
  },
  "elbow-flexion-extension": {
    "cropType": "arm-focused",
    "arrowType": "flexion-extension",
    "bodyRegion": "elbow",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer"
    ],
    "imagePriority": "C"
  },
  "supine-shoulder-flexion": {
    "cropType": "upper-body",
    "arrowType": "overhead-lift",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer"
    ],
    "imagePriority": "C"
  },
  "affected-arm-weight-bearing": {
    "cropType": "upper-extremity",
    "arrowType": "weight-bearing",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer"
    ],
    "imagePriority": "C"
  },
  "pelvic-tilt": {
    "cropType": "trunk-pelvis",
    "arrowType": "pelvic-tilt",
    "bodyRegion": "trunk",
    "purposeTags": [
      "ROM"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer"
    ],
    "imagePriority": "B"
  },
  "supine-reach": {
    "cropType": "upper-body",
    "arrowType": "forward-reach",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer"
    ],
    "imagePriority": "C"
  },
  "sitting-balance": {
    "cropType": "sitting-full",
    "arrowType": "posture",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "seated-weight-shift": {
    "cropType": "sitting-full",
    "arrowType": "weight-shift",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "B"
  },
  "seated-reach": {
    "cropType": "sitting-upper-body",
    "arrowType": "forward-reach",
    "bodyRegion": "trunk",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "seated-object-reach": {
    "cropType": "sitting-full",
    "arrowType": "reach-side",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "cone-reaching": {
    "cropType": "sitting-full",
    "arrowType": "multi-reach",
    "bodyRegion": "balance",
    "purposeTags": [
      "ADL",
      "balance"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia",
      "sci"
    ],
    "imagePriority": "C"
  },
  "seated-knee-extension": {
    "cropType": "knee-leg",
    "arrowType": "knee-extension",
    "bodyRegion": "knee",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "seated-marching": {
    "cropType": "sitting-lower-body",
    "arrowType": "marching",
    "bodyRegion": "hip",
    "purposeTags": [
      "gait"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly",
      "stroke",
      "fall",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "seated-heel-raise": {
    "cropType": "foot-focused",
    "arrowType": "heel-raise",
    "bodyRegion": "ankle",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "seated-toe-raise": {
    "cropType": "foot-focused",
    "arrowType": "toe-raise",
    "bodyRegion": "ankle",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "table-slide": {
    "cropType": "arm-table",
    "arrowType": "forward-slide",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "cane-shoulder-flexion": {
    "cropType": "upper-body",
    "arrowType": "overhead-lift",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "finger-opposition": {
    "cropType": "hand-only",
    "arrowType": "finger-touch",
    "bodyRegion": "hand",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "towel-squeeze": {
    "cropType": "hand-only",
    "arrowType": "squeeze",
    "bodyRegion": "hand",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "scapular-retraction": {
    "cropType": "upper-body",
    "arrowType": "retraction",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "chair-push-up": {
    "cropType": "chair-body",
    "arrowType": "push-up",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "sit-to-stand": {
    "cropType": "standing-full",
    "arrowType": "stand-up",
    "bodyRegion": "functional",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly",
      "stroke",
      "sci"
    ],
    "imagePriority": "A"
  },
  "sit-to-stand-hold": {
    "cropType": "standing-full",
    "arrowType": "hold",
    "bodyRegion": "functional",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "standing-weight-shift": {
    "cropType": "standing-full",
    "arrowType": "weight-shift",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "B"
  },
  "step-weight-shift": {
    "cropType": "standing-full",
    "arrowType": "step-shift",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "romberg-standing": {
    "cropType": "standing-full",
    "arrowType": "feet-together",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "tandem-standing": {
    "cropType": "standing-full",
    "arrowType": "tandem",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "single-leg-stance-chair": {
    "cropType": "standing-full",
    "arrowType": "single-leg",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "standing-marching": {
    "cropType": "standing-full",
    "arrowType": "marching",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance",
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "standing-heel-raise": {
    "cropType": "lower-body",
    "arrowType": "heel-raise",
    "bodyRegion": "ankle",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "standing-knee-flexion": {
    "cropType": "lower-body",
    "arrowType": "knee-flexion",
    "bodyRegion": "knee",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "standing-hip-abduction": {
    "cropType": "standing-full",
    "arrowType": "abduction",
    "bodyRegion": "hip",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "A"
  },
  "standing-hip-extension": {
    "cropType": "standing-full",
    "arrowType": "hip-extension",
    "bodyRegion": "hip",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "A"
  },
  "mini-squat": {
    "cropType": "standing-full",
    "arrowType": "squat",
    "bodyRegion": "knee",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "A"
  },
  "standing-forward-reach": {
    "cropType": "standing-full",
    "arrowType": "forward-reach",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "wall-slide": {
    "cropType": "upper-body-wall",
    "arrowType": "wall-slide",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "scapular-rotation": {
    "cropType": "upper-body",
    "arrowType": "shoulder-rotation",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "B"
  },
  "step-tap": {
    "cropType": "lower-body",
    "arrowType": "tap",
    "bodyRegion": "balance",
    "purposeTags": [
      "balance",
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "turning-in-place": {
    "cropType": "standing-full",
    "arrowType": "turning",
    "bodyRegion": "gait",
    "purposeTags": [
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "B"
  },
  "indoor-walking": {
    "cropType": "gait-full",
    "arrowType": "gait",
    "bodyRegion": "gait",
    "purposeTags": [
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "corridor-walking": {
    "cropType": "gait-full",
    "arrowType": "gait",
    "bodyRegion": "gait",
    "purposeTags": [
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "outdoor-walking": {
    "cropType": "outdoor-full",
    "arrowType": "gait",
    "bodyRegion": "gait",
    "purposeTags": [
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "side-walking": {
    "cropType": "gait-full",
    "arrowType": "side-gait",
    "bodyRegion": "gait",
    "purposeTags": [
      "balance",
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "backward-walking": {
    "cropType": "gait-full",
    "arrowType": "backward-gait",
    "bodyRegion": "gait",
    "purposeTags": [
      "balance",
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "tandem-walking": {
    "cropType": "gait-full",
    "arrowType": "tandem-gait",
    "bodyRegion": "gait",
    "purposeTags": [
      "balance",
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "A"
  },
  "obstacle-crossing": {
    "cropType": "gait-full",
    "arrowType": "obstacle-cross",
    "bodyRegion": "gait",
    "purposeTags": [
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "A"
  },
  "obstacle-weaving": {
    "cropType": "gait-full",
    "arrowType": "weave",
    "bodyRegion": "gait",
    "purposeTags": [
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "B"
  },
  "step-up-low": {
    "cropType": "stair-lower-body",
    "arrowType": "stair-up",
    "bodyRegion": "gait",
    "purposeTags": [
      "gait"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly",
      "stroke",
      "fall",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "stair-up": {
    "cropType": "stair-full",
    "arrowType": "stair-up",
    "bodyRegion": "gait",
    "purposeTags": [
      "ADL",
      "gait"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly",
      "stroke",
      "fall",
      "ataxia",
      "sci"
    ],
    "imagePriority": "A"
  },
  "stair-down": {
    "cropType": "stair-full",
    "arrowType": "stair-down",
    "bodyRegion": "gait",
    "purposeTags": [
      "ADL",
      "gait"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly",
      "stroke",
      "fall",
      "ataxia",
      "sci"
    ],
    "imagePriority": "A"
  },
  "figure-8-walking": {
    "cropType": "gait-full",
    "arrowType": "figure8",
    "bodyRegion": "gait",
    "purposeTags": [
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "B"
  },
  "carrying-object": {
    "cropType": "gait-full",
    "arrowType": "carrying",
    "bodyRegion": "functional",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "speed-change-walking": {
    "cropType": "gait-full",
    "arrowType": "speed-change",
    "bodyRegion": "gait",
    "purposeTags": [
      "gait"
    ],
    "diagnosisTags": [
      "stroke",
      "fall",
      "elderly",
      "ataxia"
    ],
    "imagePriority": "C"
  },
  "stationary-bike": {
    "cropType": "bike-full",
    "arrowType": "cycling",
    "bodyRegion": "endurance",
    "purposeTags": [
      "endurance"
    ],
    "diagnosisTags": [
      "cardiac",
      "respiratory",
      "cancer",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "treadmill-walking": {
    "cropType": "treadmill-full",
    "arrowType": "treadmill",
    "bodyRegion": "endurance",
    "purposeTags": [
      "endurance"
    ],
    "diagnosisTags": [
      "cardiac",
      "respiratory",
      "cancer",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "outdoor-endurance-walking": {
    "cropType": "outdoor-full",
    "arrowType": "endurance-gait",
    "bodyRegion": "endurance",
    "purposeTags": [
      "endurance"
    ],
    "diagnosisTags": [
      "cardiac",
      "respiratory",
      "cancer",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "standing-calf-stretch": {
    "cropType": "lower-body",
    "arrowType": "calf-stretch",
    "bodyRegion": "ankle",
    "purposeTags": [
      "ROM",
      "stretch"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "hamstring-stretch": {
    "cropType": "lower-body",
    "arrowType": "hamstring-stretch",
    "bodyRegion": "knee",
    "purposeTags": [
      "ROM",
      "stretch"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "diaphragmatic-breathing": {
    "cropType": "trunk",
    "arrowType": "belly-rise-fall",
    "bodyRegion": "trunk",
    "purposeTags": [
      "endurance"
    ],
    "diagnosisTags": [
      "respiratory"
    ],
    "imagePriority": "C"
  },
  "pursed-lip-breathing": {
    "cropType": "trunk",
    "arrowType": "pursed-lip-exhale",
    "bodyRegion": "trunk",
    "purposeTags": [
      "endurance"
    ],
    "diagnosisTags": [
      "respiratory"
    ],
    "imagePriority": "C"
  },
  "thoracic-expansion": {
    "cropType": "trunk",
    "arrowType": "rib-lateral-expansion",
    "bodyRegion": "trunk",
    "purposeTags": [
      "endurance"
    ],
    "diagnosisTags": [
      "respiratory"
    ],
    "imagePriority": "C"
  },
  "incentive-spirometry": {
    "cropType": "trunk",
    "arrowType": "slow-deep-inhale",
    "bodyRegion": "trunk",
    "purposeTags": [
      "endurance"
    ],
    "diagnosisTags": [
      "respiratory"
    ],
    "imagePriority": "C"
  },
  "huff-cough": {
    "cropType": "trunk",
    "arrowType": "huff-exhale",
    "bodyRegion": "trunk",
    "purposeTags": [
      "endurance"
    ],
    "diagnosisTags": [
      "respiratory"
    ],
    "imagePriority": "C"
  },
  "assisted-shoulder-flexion": {
    "cropType": "upper-body",
    "arrowType": "assisted-overhead-lift",
    "bodyRegion": "shoulder",
    "purposeTags": [
      "ADL"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "cancer"
    ],
    "imagePriority": "C"
  },
  "abdominal-bracing": {
    "cropType": "trunk-pelvis",
    "arrowType": "abdominal-brace",
    "bodyRegion": "trunk",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "hip-adduction-squeeze": {
    "cropType": "pelvis-leg",
    "arrowType": "adduction-squeeze",
    "bodyRegion": "hip",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "whole-leg-rotation": {
    "cropType": "pelvis-leg",
    "arrowType": "hip-rotation",
    "bodyRegion": "hip",
    "purposeTags": [
      "ROM"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "tka",
      "sarcopenia"
    ],
    "imagePriority": "C"
  },
  "bird-dog": {
    "cropType": "quadruped-full",
    "arrowType": "opposite-arm-leg-lift",
    "bodyRegion": "trunk",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "elderly",
      "sarcopenia",
      "stroke"
    ],
    "imagePriority": "C"
  },
  "chin-tuck": {
    "cropType": "head-neck",
    "arrowType": "chin-tuck",
    "bodyRegion": "neck",
    "purposeTags": [
      "ROM"
    ],
    "diagnosisTags": [
      "elderly",
      "stroke"
    ],
    "imagePriority": "C"
  },
  "seated-trunk-rotation": {
    "cropType": "sitting-upper-body",
    "arrowType": "trunk-rotation",
    "bodyRegion": "trunk",
    "purposeTags": [
      "ROM"
    ],
    "diagnosisTags": [
      "elderly",
      "stroke",
      "sci"
    ],
    "imagePriority": "C"
  },
  "towel-toe-curl": {
    "cropType": "foot-focused",
    "arrowType": "toe-curl",
    "bodyRegion": "ankle",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "elderly",
      "fall",
      "sarcopenia",
      "tka"
    ],
    "imagePriority": "C"
  },
  "standing-quad-stretch": {
    "cropType": "standing-full",
    "arrowType": "quad-stretch",
    "bodyRegion": "hip",
    "purposeTags": [
      "ROM",
      "stretch"
    ],
    "diagnosisTags": [
      "tka",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "marching-in-place": {
    "cropType": "standing-full",
    "arrowType": "march-in-place",
    "bodyRegion": "endurance",
    "purposeTags": [
      "endurance"
    ],
    "diagnosisTags": [
      "cardiac",
      "respiratory",
      "cancer",
      "sarcopenia",
      "elderly"
    ],
    "imagePriority": "C"
  },
  "prone-on-elbows": {
    "cropType": "full-body-bed",
    "arrowType": "prone-prop",
    "bodyRegion": "trunk",
    "purposeTags": [
      "ROM"
    ],
    "diagnosisTags": [
      "elderly"
    ],
    "imagePriority": "C"
  },
  "table-top": {
    "cropType": "pelvis-leg",
    "arrowType": "table-top-hold",
    "bodyRegion": "trunk",
    "purposeTags": [
      "strength"
    ],
    "diagnosisTags": [
      "stroke",
      "sci",
      "elderly",
      "sarcopenia"
    ],
    "imagePriority": "C"
  }
};

/* core: 프리셋을 고르면 먼저 보이는 핵심 운동. 나머지는 「더 보기」로 나온다. */
var presets = [
  // ── 뇌졸중 ────────────────────────────────────────
  {name:"Stroke 중증", ids:[1,2,3,4,5,6,16,17,18,19,20,23,24,80], core:[1,3,4,6,23,24]},
  // PROM+침상 ROM+상지 기본+앉은균형 시작
  {name:"Stroke 경증", ids:[5,6,11,15,20,23,24,25,26,27,38,40,45,51,54,56,62,67], core:[15,24,38,40,54,56]},
  // 앉기·서기 이행, 체중이동, 보행준비 중심
  {name:"Stroke 보행", ids:[38,40,41,45,54,55,56,59,60,61,62,67,69], core:[38,40,41,45,54,56]},
  // 보행 안정성·장애물·방향전환 중심

  // ── 척수/기타 운동장애 ─────────────────────────────
  {name:"SCI-Cervical", ids:[1,2,3,4,16,17,18,19,20,23,24,25,32,33,34,35,36,37], core:[1,2,3,4,18,23]},
  // 경추 손상: 보호자 PROM, 상지 ROM·손기능·체간/앉기 중심
  {name:"SCI-Thoracic", ids:[5,6,7,15,20,23,24,25,32,33,36,37,38,40,51], core:[7,23,24,25,33,37]},
  // 흉추 손상: 체간 안정, 상지 지지, 기립 이행
  {name:"SCI-Lumbar", ids:[5,6,8,10,11,12,15,28,29,38,40,45,46,50,56,64,82], core:[8,10,11,12,15,38]},
  // 요추 손상: 하지 잔존기능 활용, 기립·보행 이행
  {name:"Ataxia", ids:[23,24,25,27,40,42,43,44,45,54,55,59,60,61,62,63,67], core:[23,24,25,40,42,45]},
  // 협응·균형 중심: 앉은균형→선균형→보행변형

  // ── 근골격/노인 ───────────────────────────────────
  {name:"TKA POD#1~3", ids:[5,6,8,10,11,30,31], core:[5,6,8,10,11]},
  // 초기 부종·ROM·대퇴사두근 활성화
  {name:"TKA POD#4~7", ids:[6,10,11,28,38,46,50,64,65,66,73,74], core:[6,10,28,38,46,64]},
  // 기립·계단·유연성 이행
  {name:"Sarcopenia", ids:[10,11,15,28,29,30,37,38,39,45,46,50,56,70,71,89], core:[15,28,38,46,50,56]},
  // 하지 근력·기능적 이동·유산소
  {name:"고령 허약", ids:[5,6,23,24,28,29,30,38,40,42,44,46,56,70,86], core:[23,28,30,38,40,56]},
  // 침상~앉기~서기 안전 이행, 낙상 예방, 지구력 기초
  {name:"낙상예방", ids:[23,24,40,42,43,44,45,54,55,59,60,61,62,67,87], core:[24,40,42,45,54,55]},
  // 정적/동적균형과 장애물·방향전환

  // ── 내과·종양 ─────────────────────────────────────
  {name:"호흡질환", ids:[5,19,23,25,36,38,46,56,70,72,75,76,77,79], core:[23,25,36,38,46,56]},
  // 저강도 전신운동: 호흡보조근 이완, 지구력 기초, 자세 교정
  {name:"심장질환", ids:[5,23,28,30,38,46,56,70,71,72,89], core:[5,28,30,38,46,56]},
  // 저~중강도 유산소 중심, 하지 근력 보조, 과부하 배제
  {name:"Cancer", ids:[5,6,15,23,28,38,46,50,56,70,72,89], core:[15,23,28,38,46,56]},
  // 피로·근감소 대응: 침상~앉기~서기 순, 저강도 유산소

  // ── 와상/보호자 교육 ───────────────────────────────
  {name:"Bedridden", ids:[1,2,3,4,5,6,7,8,9,16,17,18,19,21,22], core:[1,2,3,4,5,16]},
  // 보호자 PROM과 침상 기본운동
  {name:"상지 기능 기본", ids:[3,4,16,17,18,19,20,25,32,33,34,35,36,52,53,80], core:[19,25,32,33,35,36]},
  // 상지 ROM·손기능·견갑대 조절

  // ── v2.63 추가 ─────────────
  {name:"호흡운동", ids:[75,76,77,78,79,23,36], core:[75,76,77,79,23]},
  // 호흡 훈련 5개와 앉은 자세·날개뼈 모으기
  {name:"THA", memoPreset:"tha", ids:[5,8,9,10,23,28,30,31,40,46,47,48,49,56,73], core:[5,8,9,28,48,56]},
  // 고관절 일반 주의(굴곡 90도 초과, 정중선을 넘는 내전, 내회전)를 지키며 기존 운동만 사용. 접근법별 구분은 두지 않음
  // ── v2.71 추가 ─────────────
  {name:"허리 안정 기초", ids:[21,81,15,91]},
  // 누운 자세 체간 안정
  {name:"목·자세", ids:[85,36,53,86]}
  // 목·어깨뼈·몸통 가동과 자세 조절
];

/* levels: 조건별 추천과 경고에서 이 점수에 맞는 것으로 보는 단계 (없으면 제한 없음)
   allow: 단계를 벗어나도 허용, block: 단계 안이어도 제외. 치료사가 직접 담는 것은 막지 않고 경고만 한다. */
var BBS_RECOMMENDATIONS = [
  {min:0,  max:20, levels:["Lv0","Lv1","Lv2"], allow:[], block:[], label:"고위험/중증 균형", desc:"침상·앉은자세·보호자 감독 중심", ids:[1,2,5,6,8,9,16,17,23,24,26,28]},
  {min:21, max:40, levels:["Lv0","Lv1","Lv2","Lv3"], allow:[56,70], block:[43,44], label:"중등도 균형저하", desc:"앉기에서 기립 전환, 체중이동과 지지물 보행 준비", ids:[23,24,25,27,28,29,38,40,41,42,45,46,54,56]},
  {min:41, max:56, label:"경도 균형저하/낙상예방", desc:"좁은 지지면, 장애물, 방향전환, 속도 변화 중심", ids:[40,42,43,44,54,55,56,59,60,61,62,63,67,69]}
];

/* 조건별 추천: 진단 태그가 있거나 아래 프리셋에 든 운동에서만 고른다. */
var RECOMMEND_PRESETS = {
  stroke:["Stroke 중증","Stroke 경증","Stroke 보행"],
  sci:["SCI-Cervical","SCI-Thoracic","SCI-Lumbar"],
  tka:["TKA POD#1~3","TKA POD#4~7"],
  fall:["낙상예방"], elderly:["고령 허약"], sarcopenia:["Sarcopenia"], cancer:["Cancer"], bedridden:["Bedridden"],
  cardiac:["심장질환"], respiratory:["호흡질환","호흡운동"], ataxia:["Ataxia"]
};
/* 기능 수준에서 추천하는 단계 */
var RECOMMEND_LEVELS = {bed:["Lv0","Lv1"], sitting:["Lv1","Lv2"], standing:["Lv1","Lv2","Lv3"], walking:["Lv2","Lv3","Lv4","Lv5"]};
/* 자동 추천에서 빼는 운동. 치료사가 직접 담을 수는 있다. */
var RECOMMEND_EXCLUDE = {
  all:[90],             // 치료사가 처방한 경우에만 하는 운동
  tka:[82,83,87,88],    // 수술 후 시기를 구분하지 않으므로 뺀다
  bed:[84]              // 네발 자세는 침상 수준에 어렵다
};

/* 치료사 검색용 별칭. 영어명·약어·다른 이름으로 찾을 때만 쓰고 화면과 유인물에는 나오지 않는다. */
var SEARCH_ALIASES = {
  1: "ankle PROM 발목 수동 스트레칭",
  2: "knee hip PROM 무릎 엉덩이 수동",
  3: "shoulder PROM 어깨 수동",
  4: "wrist finger hand PROM 손목 손가락 수동",
  5: "ankle pump AP 발목펌핑 발목 까딱이기",
  6: "heel slide 힐슬라이드 무릎 구부리기",
  7: "rolling log roll 롤링 체위변경",
  8: "quad set QS QSE quadriceps setting 쿼드셋",
  9: "glute set gluteal setting GS 둔근 힘주기",
  10: "SAQ short arc quad 단축호",
  11: "SLR straight leg raise 하지직거상 다리 들기",
  12: "hip abduction supine 고관절 외전",
  13: "clamshell clam shell 조개",
  14: "side lying hip abduction 고관절 외전 중둔근",
  15: "bridge bridging 교각 엉덩이 들기",
  16: "grip fist hand AROM 주먹 쥐기",
  17: "wrist flexion extension 손목 AROM",
  18: "elbow flexion extension 팔꿈치 AROM",
  19: "shoulder flexion supine 어깨 굴곡 만세",
  20: "weight bearing WB 상지 체중지지 마비측",
  21: "pelvic tilt 골반경사 PPT",
  22: "reaching supine 리칭",
  23: "sitting balance static 앉은 균형",
  24: "sitting weight shift 앉은 체중이동",
  25: "reaching sitting forward reach 리칭",
  26: "reaching grasp sitting 리칭",
  27: "cone reaching 고깔",
  28: "LAQ long arc quad knee extension 슬관절 신전",
  29: "seated marching march hip flexion 앉아서 제자리걷기",
  30: "seated heel raise calf raise 앉아서 까치발",
  31: "seated toe raise dorsiflexion DF 배굴 발등 들기",
  32: "table slide towel slide 테이블 슬라이드",
  33: "wand stick cane exercise shoulder flexion 봉 운동",
  34: "finger opposition thumb 대립",
  35: "towel squeeze grip 쥐는 힘 악력",
  36: "scapular retraction scapula squeeze 견갑골 후인 어깨뼈",
  37: "chair push up 푸쉬업 팔걸이",
  38: "STS sit to stand 일어서기 의자에서 일어나기",
  39: "STS standing hold 기립 유지",
  40: "standing weight shift WS 체중이동",
  41: "step stance weight shift 발판",
  42: "feet together romberg stance 모아 서기",
  43: "tandem stance 탄뎀 일렬 서기",
  44: "SLS single leg stance one leg stand OLS 외발 한발로 서기",
  45: "standing marching high march 무릎 들기 제자리걷기",
  46: "heel raise calf raise 까치발 카프레이즈",
  47: "hamstring curl knee flexion standing 햄스트링컬",
  48: "hip abduction standing 고관절 외전",
  49: "hip extension standing 고관절 신전",
  50: "mini squat squat 스쿼트",
  51: "standing reaching forward reach functional reach 리칭",
  52: "wall climbing finger ladder wall walk 벽 오르기",
  53: "scapular circle shoulder roll 어깨 돌리기 어깨뼈",
  54: "step tap toe tap 발판 터치",
  55: "turning pivot 턴 돌기",
  56: "indoor gait walking ambulation 보행",
  57: "hallway gait walking ambulation 보행",
  58: "outdoor gait walking ambulation 보행",
  59: "side step lateral walking 게걸음",
  60: "backward walking retro 후방보행",
  61: "tandem gait tandem walk 탄뎀 일렬 걷기",
  62: "obstacle crossing 장애물 보행",
  63: "cone weaving slalom 지그재그",
  64: "step up 스텝업 발판 오르기",
  65: "stair up ascending 계단",
  66: "stair down descending 계단 내려가기",
  67: "figure of 8 figure 8 팔자 걷기",
  68: "carrying 물건 들고 걷기",
  69: "speed change gait 보행속도",
  70: "ergometer bicycle cycling 에르고미터 싸이클 사이클",
  71: "treadmill 러닝머신",
  72: "outdoor endurance walking 걷기 운동",
  73: "calf gastrocnemius stretch 비복근 스트레칭 종아리 늘리기",
  74: "hamstring stretch 햄스트링 늘리기",
  75: "diaphragmatic breathing DB 복식호흡",
  76: "PLB pursed lip breathing 입술 오므리기",
  77: "thoracic expansion TEE segmental breathing 흉곽 확장",
  78: "IS incentive spirometry 폐활량계 인스피로",
  79: "huffing FET ACBT 가래 객담",
  80: "self assisted shoulder flexion AAROM 어깨 보조운동",
  81: "abdominal bracing drawing in ADIM TrA 복횡근 코어",
  82: "hip adduction squeeze ball squeeze 내전근",
  83: "hip rotation IR ER 내회전 외회전",
  84: "bird dog quadruped 버드독 네발기기",
  85: "chin tuck chin in DNF 친턱 거북목",
  86: "trunk rotation seated 몸통 회전",
  87: "towel curl toe curl foot intrinsic short foot 발가락",
  88: "quad stretch quadriceps rectus femoris 대퇴사두근 늘리기",
  89: "marching in place walk in place 제자리걸음",
  90: "prone on elbows POE prone prop McKenzie 맥켄지 신전운동",
  91: "tabletop 90/90 dead bug 데드버그 코어"
};
