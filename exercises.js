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
  {"id": 53, "category": "ADL", "level": "Lv3 선자세", "title": "날개뼈 크게 돌리기", "target": "견갑골 가동범위 및 어깨 주변 근육 활성화", "reps": 10, "sets": 2, "durationMin": 5, "side": "양측", "image": "🔄", "description": "의자에 허리를 세우고 앉아 양 어깨를 천천히 크게 원을 그리듯 뒤로 돌립니다. 앞으로 모았다가 위로 올리고, 뒤로 당겼다가 아래로 내리는 순서로 반복합니다.", "caution": "어깨 통증이나 결림이 심하면 범위를 줄이세요.", "imageKey": "scapular-rotation"},
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
  {"id": 75, "category": "Endurance", "level": "Lv1 침상운동", "title": "횡격막 호흡", "target": "횡격막 호흡과 환기 효율", "reps": 10, "sets": 2, "durationMin": 5, "side": "", "image": "😮‍💨", "description": "바로 눕거나 허리를 세우고 앉습니다. 한 손은 가슴, 한 손은 배에 올리고 코로 천천히 들이마시며 배가 손에 닿게 부풀립니다. 입으로 천천히 내쉬며 배가 들어가게 합니다.", "caution": "어지럽거나 숨이 가빠지면 바로 멈추고 평소 호흡으로 돌아옵니다. 힘을 주어 배를 밀어 올리지 마세요.", "imageKey": "diaphragmatic-breathing", "imagePending": true},
  {"id": 76, "category": "Endurance", "level": "Lv2 앉은자세", "title": "입술 오므리고 호흡", "target": "날숨 시간과 기도 개방", "reps": 10, "sets": 2, "durationMin": 4, "side": "", "image": "💨", "description": "허리를 세우고 앉습니다. 코로 천천히 들이마신 뒤, 입술을 작게 오므리고 촛불을 흔들 듯이 길게 내쉽니다. 들이마시기보다 내쉬기를 길게 합니다.", "caution": "볼을 과도하게 부풀리거나 숨을 참지 마세요. 어지러우면 중단하세요.", "imageKey": "pursed-lip-breathing", "imagePending": true},
  {"id": 77, "category": "Endurance", "level": "Lv2 앉은자세", "title": "가슴 확장 호흡", "target": "흉곽 확장과 흡기 깊이", "reps": 5, "sets": 2, "durationMin": 4, "side": "", "image": "🫁", "description": "허리를 세우고 앉아 양손을 갈비뼈 옆에 둡니다. 코로 천천히 깊게 들이마시며 갈비뼈가 양옆으로 넓어지게 합니다. 입을 가볍게 벌리고 갈비뼈가 내려오게 내쉽니다.", "caution": "어깨를 으쓱하며 들이마시지 마세요. 통증이나 심한 숨참이 있으면 깊이를 줄이세요.", "imageKey": "thoracic-expansion", "imagePending": true},
  {"id": 78, "category": "Endurance", "level": "Lv1 침상운동", "title": "유발 폐활량계", "target": "느리고 깊은 들숨", "reps": 10, "sets": 1, "durationMin": 5, "side": "", "image": "📈", "description": "가능하면 허리를 세우고 앉습니다. 유발 폐활량계의 마우스피스를 물고 코로 새지 않게 합니다. 천천히 깊게 들이마셔 표시가 올라가도록 하고, 최대로 들이마신 상태에서 3~5초 숨을 참습니다. 마우스피스를 뺀 뒤 편하게 내쉽니다.", "caution": "빠르게 세게 들이마시지 마세요. 어지러움, 흉통, 심한 숨참이 있으면 중단하고 치료사에게 알리세요.", "imageKey": "incentive-spirometry", "imagePending": true},
  {"id": 79, "category": "Endurance", "level": "Lv2 앉은자세", "title": "허프 기침", "target": "기도 분비물 이동", "reps": 5, "sets": 2, "durationMin": 4, "side": "", "image": "🗣️", "description": "허리를 세우고 앉습니다. 코로 보통 크기로 들이마신 뒤, 입을 크게 벌리고 거울에 김을 서리게 하듯 '허-' 하고 길고 세게 내쉽니다. 가래가 목 근처로 올라오면 한 번 기침하고 쉽니다.", "caution": "연속해서 세게 기침하지 마세요. 어지럽거나 통증이 있으면 중단하세요.", "imageKey": "huff-cough", "imagePending": true}
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
  }
};

var presets = [
  // ── 뇌졸중 ────────────────────────────────────────
  {name:"Stroke 중증", ids:[1,2,3,4,5,6,16,17,18,19,20,23,24]},
  // PROM+침상 ROM+상지 기본+앉은균형 시작
  {name:"Stroke 경증", ids:[5,6,11,15,20,23,24,25,26,27,38,40,45,51,54,56,62,67]},
  // 앉기·서기 이행, 체중이동, 보행준비 중심
  {name:"Stroke 보행", ids:[38,40,41,45,54,55,56,59,60,61,62,67,69]},
  // 보행 안정성·장애물·방향전환 중심

  // ── 척수/기타 운동장애 ─────────────────────────────
  {name:"SCI-Cervical", ids:[1,2,3,4,16,17,18,19,20,23,24,25,32,33,34,35,36,37]},
  // 경추 손상: 보호자 PROM, 상지 ROM·손기능·체간/앉기 중심
  {name:"SCI-Thoracic", ids:[5,6,7,15,20,23,24,25,32,33,36,37,38,40,51]},
  // 흉추 손상: 체간 안정, 상지 지지, 기립 이행
  {name:"SCI-Lumbar", ids:[5,6,8,10,11,12,15,28,29,38,40,45,46,50,56,64]},
  // 요추 손상: 하지 잔존기능 활용, 기립·보행 이행
  {name:"Ataxia", ids:[23,24,25,27,40,42,43,44,45,54,55,59,60,61,62,63,67]},
  // 협응·균형 중심: 앉은균형→선균형→보행변형

  // ── 근골격/노인 ───────────────────────────────────
  {name:"TKA POD#1~3", ids:[5,6,8,10,11,30,31]},
  // 초기 부종·ROM·대퇴사두근 활성화
  {name:"TKA POD#4~7", ids:[6,10,11,28,38,46,50,64,65,66,73,74]},
  // 기립·계단·유연성 이행
  {name:"Sarcopenia", ids:[10,11,15,28,29,30,37,38,39,45,46,50,56,70,71]},
  // 하지 근력·기능적 이동·유산소
  {name:"고령 허약", ids:[5,6,23,24,28,29,30,38,40,42,44,46,56,70]},
  // 침상~앉기~서기 안전 이행, 낙상 예방, 지구력 기초
  {name:"낙상예방", ids:[23,24,40,42,43,44,45,54,55,59,60,61,62,67]},
  // 정적/동적균형과 장애물·방향전환

  // ── 내과·종양 ─────────────────────────────────────
  {name:"호흡질환", ids:[5,19,23,25,36,38,46,56,70,72]},
  // 저강도 전신운동: 호흡보조근 이완, 지구력 기초, 자세 교정
  {name:"심장질환", ids:[5,23,28,30,38,46,56,70,71,72]},
  // 저~중강도 유산소 중심, 하지 근력 보조, 과부하 배제
  {name:"Cancer", ids:[5,6,15,23,28,38,46,50,56,70,72]},
  // 피로·근감소 대응: 침상~앉기~서기 순, 저강도 유산소

  // ── 와상/보호자 교육 ───────────────────────────────
  {name:"Bedridden", ids:[1,2,3,4,5,6,7,8,9,16,17,18,19,21,22]},
  // 보호자 PROM과 침상 기본운동
  {name:"상지 기능 기본", ids:[3,4,16,17,18,19,20,25,32,33,34,35,36,52,53]},
  // 상지 ROM·손기능·견갑대 조절

  // ── v2.63 추가. 위 프리셋 배열은 바꾸지 않음 ─────────────
  {name:"호흡운동", ids:[75,76,77,78,79,23,36]},
  // 호흡 훈련 초안 5개와 앉은 자세·날개뼈 모으기. 초안은 임상 검토 필요
  {name:"THA", ids:[5,8,9,10,23,28,30,31,40,46,47,48,49,56,73]}
  // 고관절 일반 주의(굴곡 90도 초과, 정중선을 넘는 내전, 내회전)를 지키며 기존 운동만 사용. 접근법별 구분은 두지 않음
];

var BBS_RECOMMENDATIONS = [
  {min:0,  max:20, label:"고위험/중증 균형", desc:"침상·앉은자세·보호자 감독 중심", ids:[1,2,5,6,8,9,16,17,23,24,26,28]},
  {min:21, max:40, label:"중등도 균형저하", desc:"앉기에서 기립 전환, 체중이동과 지지물 보행 준비", ids:[23,24,25,27,28,29,38,40,41,42,45,46,54,56]},
  {min:41, max:56, label:"경도 균형저하/낙상예방", desc:"좁은 지지면, 장애물, 방향전환, 속도 변화 중심", ids:[40,42,43,44,54,55,56,59,60,61,62,63,67,69]}
];
