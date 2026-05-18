/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/gallery/1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg,  ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "홍승표",
    nameEn: "Groom",
    father: "홍순계",
    mother: "박정숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "성지연",
    nameEn: "Bride",
    father: "성신협",
    mother: "강성미",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-08",
    time: "13:00",
    venue: "호텔 ICC웨딩홀",
    hall: "크리스탈 볼룸 1층",
    address: "대전 유성구 엑스포로123번길 55",
    tel: "042-866-5100"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/21086510",
    naver: "https://naver.me/FCA8TiOq"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "홍승표", bank: "우리은행", number: "1002-062-113914" },
      { role: "아버지", name: "홍순계", bank: "경남은행", number: "519-21-0311210" },
      { role: "어머니", name: "박정숙", bank: "경남은행", number: "519-21-0347113" }
    ],
    bride: [
      { role: "신부", name: "성지연", bank: "국민은행", number: "710402-00-171311" },
      { role: "아버지", name: "성신협", bank: "국민은행", number: "459-21-0375-661" },
      { role: "어머니", name: "강성미", bank: "농협은행", number: "317-02-299692" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "승표 ♥ 지연 결혼합니다",
    description: "2026년 8월 8일, 소중한 분들을 초대합니다."
  }
};
