<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <!-- 대형 이미지 with 오버레이 -->
        <div class="mb-6 relative">
          <img
            src="/products/saso/sasoHero.png"
            alt="SASOM7 제품"
            class="w-full h-64 md:h-80 object-cover shadow-2xl"
          />
          <!-- 어두운 오버레이 -->
          <div class="absolute inset-0 bg-black/60"></div>

          <!-- 텍스트 내용 -->
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-12 md:mt-30">
              <span class="text-1xl md:text-2xl text-white"
                >Premium Technology</span
              >
              <h1 class="text-4xl md:text-5xl font-bold mt-5 mb-6 text-white">
                SASOM7
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 제품 개요 섹션 -->
    <section class="pt-20 pb-5 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <img
            src="/products/saso/01mlogo.png"
            alt="Zero-I Logo"
            class="w-50 mx-auto mb-4"
          />
        </div>

        <!-- 메인 제품 이미지 -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div ref="mainImage" class="opacity-100 translate-x-0">
            <img
              :src="productData.images.main"
              alt="SASOM7 메인 이미지"
              class="w-full h-80 object-contain rounded-2xl shadow-lg"
            />
          </div>

          <div ref="mainContent" class="space-y-6 opacity-100 translate-x-0">
            <div>
              <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {{ productData.name }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ productData.description }}
              </p>
            </div>

            <!-- 주요 특징 -->
            <div class="space-y-2">
              <div
                v-for="(feature, index) in productData.features"
                :key="index"
                class="flex items-center"
              >
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span class="text-gray-700">{{ feature }}</span>
              </div>
            </div>

            <!-- 문의 버튼 -->
            <button
              @click="handleInquiry"
              class="w-full lg:w-auto bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              제품 문의하기
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 모던한 섹션 구분선 -->
    <div class="relative mb-20">
      <!-- 그라데이션 라인 -->
      <div class="absolute inset-0 flex items-center">
        <div
          class="w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
        ></div>
      </div>

      <!-- 중앙 장식 요소 -->
      <div class="relative flex justify-center">
        <div class="bg-white px-8">
          <div class="flex items-center space-x-4">
            <div class="w-3 h-3 bg-blue-600 rounded-full opacity-60"></div>
            <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div class="w-3 h-3 bg-blue-600 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 비디오 섹션 -->
    <section class="pb-20 bg-gray-50">
      <div class="max-w-5xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            제품 시연 영상
          </h2>
          <p class="text-lg text-gray-600">
            SASOM7의 실제 동작과 사용법을 영상으로 확인해보세요
          </p>
        </div>

        <!-- 단일 비디오 -->
        <div class="relative rounded-2xl overflow-hidden shadow-lg">
          <video
            ref="videoPlayer"
            :src="productData.videos.demo"
            class="w-full h-96 object-cover"
            controls
            preload="metadata"
          ></video>
          <div
            class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm"
          >
            SASOM7 제품 시연 영상
          </div>
        </div>
      </div>
    </section>

    <!-- 상세 정보 이미지 섹션 -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            제품 상세 정보
          </h2>
          <p class="text-lg text-gray-600">
            SASOM7의 자세한 정보와 특징을 확인해보세요
          </p>
        </div>

        <!-- 상세 이미지 그리드 (v-for 사용) -->
        <div class="space-y-12 grid grid-cols-2 gap-8">
          <div
            v-for="(detail, index) in productData.detailImages"
            :key="index"
            class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
          >
            <!-- 이미지 -->
            <div
              class="order-2 lg:order-1"
              :class="{ 'lg:order-2': index % 2 === 1 }"
            >
              <img
                :src="detail.src"
                :alt="detail.alt"
                class="w-full h-full object-contain p-6"
              />

              <!-- 텍스트 내용 -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Sasom7Product',
  data() {
    return {
      productData: {
        name: 'SASOM7',
        description:
          'SASOM7은 최첨단 기술과 혁신적인 디자인이 결합된 차세대 프리미엄 제품입니다. 사용자의 편의성과 효율성을 극대화하여 새로운 차원의 경험을 제공합니다.',
        images: {
          main: '/products/saso/01M7.png',
        },
        videos: {
          demo: '/products/saso/01mVideo.mp4',
        },
        detailImages: [
          {
            src: '/products/saso/detail1.png',
            alt: 'SASOM7 기능 상세',
            title: '고급 소재와 정밀 가공',
            description:
              '최고급 소재를 사용하여 내구성과 안정성을 보장하며, 정밀한 가공 기술로 완성된 프리미엄 품질입니다. 모든 부품은 엄격한 품질 기준을 통과한 최상급 소재만을 사용합니다.',
            points: [
              '항공우주급 알루미늄 합금 사용',
              '정밀도 ±0.01mm 가공 기술',
              '내부식성 특수 코팅 처리',
            ],
          },
          {
            src: '/products/saso/detail2.png',
            alt: 'SASOM7 인터페이스',
            title: '직관적인 사용자 인터페이스',
            description:
              '사용자 편의성을 고려한 직관적인 인터페이스로 누구나 쉽게 사용할 수 있도록 설계되었습니다. 복잡한 설정 없이도 바로 사용 가능합니다.',
            points: [
              '터치스크린 기반 간편 조작',
              '다국어 지원 (한국어, 영어)',
              '사용자 맞춤 설정 저장 기능',
            ],
          },
          {
            src: '/products/saso/detail3.png',
            alt: 'SASOM7 기술 사양',
            title: '첨단 기술 적용',
            description:
              '최신 기술을 적용하여 뛰어난 성능과 효율성을 제공하며, 지속적인 업데이트를 통해 발전해 나갑니다. AI 기반 최적화 시스템이 탑재되어 있습니다.',
            points: [
              'AI 기반 자동 최적화',
              '실시간 성능 모니터링',
              '원격 업데이트 지원',
            ],
          },
          {
            src: '/products/saso/detail4.png',
            alt: 'SASOM7 안전성',
            title: '철저한 품질 관리',
            description:
              '엄격한 품질 관리 시스템을 통해 검증된 제품으로, 안전하고 신뢰할 수 있는 사용 경험을 보장합니다. 국제 안전 인증을 모두 획득했습니다.',
            points: [
              'CE, FCC, KC 인증 획득',
              '24시간 연속 작동 테스트 통과',
              '2년 품질보증 및 A/S 지원',
            ],
          },
        ],
        features: [
          '혁신적인 기술 적용',
          '프리미엄 디자인',
          '사용자 친화적 인터페이스',
          '뛰어난 내구성과 안정성',
        ],
        specifications: [
          {
            title: '크기',
            value: '1200×800×400mm',
            icon: 'fas fa-ruler-combined',
          },
          {
            title: '무게',
            value: '15.5kg',
            icon: 'fas fa-weight-hanging',
          },
          {
            title: '전원',
            value: 'AC 220V / 50-60Hz',
            icon: 'fas fa-plug',
          },
          {
            title: '보증기간',
            value: '2년 A/S',
            icon: 'fas fa-shield-alt',
          },
        ],
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleInquiry() {
      const phone = '010-4429-2889';
      if (confirm('SASOM7 제품 문의를 위해 전화 연결하시겠습니까?')) {
        window.location.href = `tel:${phone}`;
      }
    },

    handleEmailInquiry() {
      const email = 'cprh7677@naver.com';
      const subject = 'SASOM7 제품 문의';
      const body =
        '안녕하세요! SASOM7 제품에 대해 자세한 정보를 문의드리고 싶습니다.';

      const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = emailUrl;
    },
  },
};
</script>

<style scoped>
/* 비디오 호버 효과 */
video:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

/* 상세 이미지 호버 효과 */
.space-y-12 > div:hover img {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* 부드러운 트랜지션 */
* {
  transition: all 0.3s ease;
}

/* 모바일 최적화 */
@media (max-width: 768px) {
  .grid.lg\\:grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .order-1,
  .order-2,
  .lg\\:order-1,
  .lg\\:order-2 {
    order: initial !important;
  }
}
</style>
