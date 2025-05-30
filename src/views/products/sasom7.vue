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
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            SASOM7 <span class="text-blue-600">제품 소개</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            혁신적인 기술과 프리미엄 디자인이 만나 탄생한 차세대 솔루션입니다.
          </p>
        </div>

        <!-- 메인 제품 이미지 -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div ref="mainImage" class="opacity-100 translate-x-0">
            <!-- 애니메이션 비활성화 
            :class="[
              'transition-all duration-1000',
              isVisible.mainImage
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8',
            ]"
            -->
            <img
              :src="productData.images.main"
              alt="SASOM7 메인 이미지"
              class="w-full h-80 object-contain rounded-2xl shadow-lg"
            />
          </div>

          <div ref="mainContent" class="space-y-6 opacity-100 translate-x-0">
            <!-- 애니메이션 비활성화
            :class="[
              'space-y-6 transition-all duration-1000 delay-300',
              isVisible.mainContent
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8',
            ]"
            -->
            >
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

    <!-- 제품 상세 정보 섹션 -->
    <div class="text-center mb-20"></div>
    <!-- 비디오 섹션 -->
    <section class="pb-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <!-- 비디오 그리드 -->
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- 첫 번째 비디오 -->
          <div ref="video1" class="opacity-100 translate-y-0">
            <!-- 애니메이션 비활성화
            :class="[
              'transition-all duration-1000',
              isVisible.video1
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
            -->
            <div class="relative rounded-2xl overflow-hidden shadow-lg">
              <video
                ref="videoPlayer1"
                :src="productData.videos.demo"
                class="w-full h-64 object-cover"
                controls
                preload="metadata"
              ></video>
            </div>
          </div>

          <!-- 두 번째 GIF -->
          <div ref="video2" class="opacity-100 translate-y-0">
            <!-- 애니메이션 비활성화
            :class="[
              'transition-all duration-1000 delay-300',
              isVisible.video2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
            -->
            <div class="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                :src="productData.videos.tutorial"
                alt="SASOM7 사용법 가이드"
                class="w-full h-64 object-cover"
              />
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
          detail:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        },
        videos: {
          demo: '/products/saso/01mVideo.mp4',
          tutorial: '/products/saso/01mgif.gif',
        },
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
      isVisible: {
        mainImage: false,
        mainContent: false,
        video1: false,
        video2: false,
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    // 애니메이션 비활성화
    // this.setupScrollAnimation();
  },
  beforeUnmount() {
    // 애니메이션 비활성화
    // if (this.observer) {
    //   this.observer.disconnect();
    // }
  },
  methods: {
    // 애니메이션 관련 메서드 비활성화
    /*
    setupScrollAnimation() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target;

              if (target === this.$refs.mainImage) {
                this.isVisible.mainImage = true;
              } else if (target === this.$refs.mainContent) {
                this.isVisible.mainContent = true;
              } else if (target === this.$refs.video1) {
                this.isVisible.video1 = true;
              } else if (target === this.$refs.video2) {
                this.isVisible.video2 = true;
              }
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      this.$nextTick(() => {
        const elementsToObserve = [
          this.$refs.mainImage,
          this.$refs.mainContent,
          this.$refs.video1,
          this.$refs.video2,
        ];

        elementsToObserve.forEach((element) => {
          if (element) observer.observe(element);
        });
      });

      this.observer = observer;
    },
    */

    handleInquiry() {
      const message = '안녕하세요! SASOM7 제품에 대해 문의드리고 싶습니다.';
      const phone = '02-715-0607';

      if (confirm('SASOM7 제품 문의를 위해 전화 연결하시겠습니까?')) {
        window.location.href = `tel:${phone}`;
      }
    },
  },
};
</script>

<style scoped>
/* 추가적인 스타일이 필요한 경우 여기에 작성 */
</style>
