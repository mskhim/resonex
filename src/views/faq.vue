<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 히어로 섹션 -->
    <section
      class="relative bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 text-white"
    >
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-20 h-64 md:h-80">
        <div class="text-center mt-10 md:mt-30">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">자주 묻는 질문</h1>
        </div>
      </div>
    </section>

    <!-- FAQ 섹션 -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <!-- 카테고리 탭 -->
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <button
            v-for="category in categories"
            :key="category.key"
            @click="activeCategory = category.key"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all duration-200',
              activeCategory === category.key
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 shadow-md',
            ]"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- FAQ 아코디언 -->
        <div class="space-y-4">
          <div
            v-for="(faq, index) in filteredFaqs"
            :key="index"
            class="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <span class="text-indigo-600 font-bold text-sm">Q</span>
                </div>
                <h3 class="font-semibold text-gray-900 text-lg">
                  {{ faq.question }}
                </h3>
              </div>
              <svg
                class="w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0"
                :class="{ 'rotate-180': openItems.includes(index) }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <transition name="faq-content">
              <div v-show="openItems.includes(index)" class="px-6 pb-6">
                <div class="flex items-start gap-4">
                  <div
                    class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <span class="text-emerald-600 font-bold text-sm">A</span>
                  </div>
                  <div
                    class="text-gray-600 leading-relaxed"
                    v-html="faq.answer"
                  ></div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- 추가 문의 섹션 -->
        <div class="mt-16 text-center">
          <div
            class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8"
          >
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              더 궁금한 점이 있으신가요?
            </h3>
            <p class="text-gray-600 mb-6">
              언제든지 편하게 문의해 주세요. 친절하게 상담해드리겠습니다.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                @click="openKakaoChat"
                class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <i class="fab fa-kakao text-lg"></i>
                카카오톡 문의
              </button>
              <button
                @click="openPhoneCall"
                class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <i class="fas fa-phone text-lg"></i>
                전화 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      activeCategory: 'all',
      openItems: [],

      categories: [
        { key: 'all', name: '전체' },
        { key: 'price', name: '가격·이용료' },
        { key: 'training', name: '운동·트레이닝' },
        { key: 'facility', name: '시설·장비' },
        { key: 'reservation', name: '예약·상담' },
      ],

      faqs: [
        // 가격·이용료
        {
          category: 'price',
          question: '퍼스널 트레이닝 가격이 어떻게 되나요?',
          answer: `<strong>퍼스널 트레이닝 가격:</strong><br>
                   • <strong>2:1 듀엣 4회:</strong> 150,000원<br>
                   • <strong>2:1 듀엣 8회:</strong> 280,000원<br>
                   • <strong>2:1 듀엣 16회:</strong> 520,000원<br><br>
                   <strong>1:1 전문강습:</strong><br>
                   • 최저가격: 55,000원<br>
                   • 최대가격: 88,000원<br>
                   • 전문상담 컨설팅: 30,000원<br><br>
                   ※ 개인별 맞춤 프로그램에 따라 가격이 달라질 수 있습니다.`,
        },
        {
          category: 'price',
          question: '개인 운동 입장권은 얼마인가요?',
          answer: `<strong>개인 운동 입장권:</strong><br>
                   • <strong>4회 입장권 (1달 소진):</strong> 80,000원<br>
                   • <strong>8회 입장권 (2달 소진):</strong> 144,000원<br>
                   • <strong>16회 입장권 (3달 소진):</strong> 256,000원<br><br>
                   ※ 모든 전문 장비 자유 이용 가능<br>
                   ※ 파워플레이트, 재활기구 포함`,
        },
        {
          category: 'price',
          question: '할인 혜택이 있나요?',
          answer: `<strong>다양한 할인 혜택:</strong><br>
                   • <strong>리뷰 등록시:</strong> 1회 체험 무료<br>
                   • <strong>남위례 협력 업체:</strong> 할인 혜택<br>
                   • <strong>남위례 사업자:</strong> 특별 할인<br>
                   • <strong>의료 종사자:</strong> 할인 혜택<br>
                   • <strong>가족 세션:</strong> 공유 무료<br><br>
                   ※ 자세한 할인율은 카카오톡 상담을 통해 확인하세요!`,
        },

        // 운동·트레이닝
        {
          category: 'training',
          question: '운동 초보자도 가능한가요?',
          answer: `<strong>물론 가능합니다!</strong><br>
                   • 미국 스포츠 의학회 자격 보유 트레이너<br>
                   • 개인별 맞춤 운동 프로그램 제공<br>
                   • 안전하고 체계적인 운동 지도<br>
                   • 기초부터 차근차근 교육<br><br>
                   운동 경험이 전혀 없어도 걱정하지 마세요. 전문 트레이너가 안전하게 지도해드립니다.`,
        },
        {
          category: 'training',
          question: '어떤 운동을 할 수 있나요?',
          answer: `<strong>다양한 운동 프로그램:</strong><br>
                   • <strong>퍼스널 트레이닝:</strong> 1:1, 2:1 맞춤 지도<br>
                   • <strong>필라테스:</strong> Align Pilates 프리미엄 장비<br>
                   • <strong>파워플레이트:</strong> 진동 운동 및 사이클<br>
                   • <strong>재활 운동:</strong> 체형교정, 재활 전문<br>
                   • <strong>기능성 운동:</strong> 다양한 소도구 활용<br><br>
                   위례 유일의 종합 운동 센터입니다!`,
        },
        {
          category: 'training',
          question: '재활 운동도 가능한가요?',
          answer: `<strong>전문 재활 운동 가능!</strong><br>
                   • <strong>타워풀리:</strong> 대한민국 재활 기구<br>
                   • <strong>SASO:</strong> 진동 마사지 재활 기구<br>
                   • <strong>제로아이:</strong> 일본 재활 기구<br>
                   • <strong>독일 재활 소도구:</strong> 다수 보유<br>
                   • <strong>파워플레이트:</strong> FDA 1등급 MDD 머신<br><br>
                   미국 스포츠 의학회 자격 보유 트레이너가 전문 재활 운동을 지도합니다.`,
        },

        // 시설·장비
        {
          category: 'facility',
          question: '어떤 전문 장비가 있나요?',
          answer: `<strong>위례 유일 보유 장비:</strong><br>
                   • <strong>파워플레이트:</strong> 미국 전문 진동 플랫폼<br>
                   • <strong>파워플레이트 싸이클:</strong> 진동 사이클<br>
                   • <strong>Align Pilates:</strong> 프리미엄 필라테스 장비<br>
                   • <strong>타워풀리:</strong> 재활 전문 기구<br>
                   • <strong>SASO:</strong> 독일 진동 마사지 기구<br>
                   • <strong>제로아이:</strong> 일본 재활 기구<br><br>
                   모든 장비는 FDA 1등급, MDD 인증 제품입니다.`,
        },
        {
          category: 'facility',
          question: '공명짐만의 특별한 점이 있나요?',
          answer: `<strong>공명짐의 특별함:</strong><br>
                   🥇 <strong>남위례 파워플레이트 전문 스튜디오</strong><br>
                   🥇 <strong>위례 유일 필라테스+PT+파워플레이트</strong><br>
                   🥇 <strong>미국 스포츠 의학회 자격 보유 트레이너</strong><br>
                   🥇 <strong>FDA 1등급, MDD 머신 보유</strong><br>
                   🥇 <strong>위례 유일 재활기구 종합 보유</strong><br><br>
                   차별화된 전문 장비와 자격을 갖춘 위례 최고의 PT 센터입니다!`,
        },

        // 예약·상담
        {
          category: 'reservation',
          question: '어떻게 예약하고 상담받을 수 있나요?',
          answer: `<strong>예약 및 상담 방법:</strong><br>
                   • <strong>카카오톡 채널:</strong> '공명짐' 검색 후 무료 상담<br>
                   • <strong>전화 상담:</strong> 010-4429-2889<br>
                   • <strong>이메일:</strong> cprh7677@naver.com<br><br>
                   <strong>상담 내용:</strong><br>
                   • 개인별 맞춤 운동 계획<br>
                   • 체형 분석 및 목표 설정<br>
                   • 가격 및 할인 혜택 안내<br>
                   • 무료 체험 예약`,
        },
        {
          category: 'reservation',
          question: '체험 이용이 가능한가요?',
          answer: `<strong>무료 체험 이용 가능!</strong><br>
                   • <strong>리뷰 등록시:</strong> 1회 체험 무료<br>
                   • 전문 트레이너 상담 포함<br>
                   • 모든 장비 체험 가능<br>
                   • 개인별 맞춤 운동 계획 수립<br><br>
                   <strong>체험 예약:</strong><br>
                   카카오톡 '공명짐' 또는 전화로 사전 예약 필수<br>
                   운동복과 운동화를 준비해 주세요.`,
        },

        // 기타
        {
          category: 'all',
          question: '위치와 주차는 어떻게 되나요?',
          answer: `<strong>위치 안내:</strong><br>
                   (13647) 경기도 성남시 수정구 창곡동 555, B1호<br><br>
                   <strong>교통편:</strong><br>
                   • 남위례역 인근<br>
                   • 대중교통 이용 편리<br>
                   • 주차 공간 완비<br><br>
                   자세한 길 안내는 카카오톡으로 문의해 주세요!`,
        },
        {
          category: 'all',
          question: '결제는 어떻게 하나요?',
          answer: `<strong>결제 방법:</strong><br>
                   • <strong>현금 결제</strong><br>
                   • <strong>카드 결제</strong> (모든 카드 가능)<br>
                   • <strong>계좌 이체:</strong><br>
                   &nbsp;&nbsp;국민은행 229101-04-339256 (고종관)<br><br>
                   <strong>결제 시기:</strong><br>
                   • 첫 이용 전 결제<br>
                   • 분할 결제 상담 가능<br>
                   ※ 자세한 결제 방법은 상담 시 안내드립니다.`,
        },
      ],
    };
  },
  computed: {
    filteredFaqs() {
      if (this.activeCategory === 'all') {
        return this.faqs;
      }
      return this.faqs.filter((faq) => faq.category === this.activeCategory);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    toggleFaq(index) {
      const itemIndex = this.openItems.indexOf(index);
      if (itemIndex > -1) {
        this.openItems.splice(itemIndex, 1);
      } else {
        this.openItems.push(index);
      }
    },
    openKakaoChat() {
      window.open('http://pf.kakao.com/_RJVsn', '_blank');
    },
    openPhoneCall() {
      window.location.href = 'tel:010-4429-2889';
    },
  },
};
</script>

<style scoped>
.faq-content-enter-active,
.faq-content-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-content-enter-from,
.faq-content-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.faq-content-enter-to,
.faq-content-leave-from {
  max-height: 1000px;
  opacity: 1;
  transform: translateY(0);
}
</style>
