<template>
  <div
    class="min-h-screen bg-white"
    @click="enableAutoplay"
    @scroll="enableAutoplay"
    @touchstart="enableAutoplay"
  >
    <!-- 풀스크린 히어로 섹션 -->
    <section
      class="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- 배경 비디오 -->
      <div class="absolute inset-0 z-0">
        <!-- 로딩 중 배경 이미지 -->
        <img
          src="../img/video-poster.jpg"
          alt="Video poster"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          :class="{
            'opacity-100': !videoPlaying,
            'opacity-0': videoPlaying,
          }"
        />

        <!-- 비디오 (심플 버전) -->
        <video
          ref="heroVideo"
          src="../video/mainVideo.mp4"
          poster="../img/video-poster.jpg"
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
          x5-playsinline
          preload="auto"
          class="w-full h-full object-cover transition-opacity duration-500"
          :class="{
            'opacity-0': !videoCanPlay || !videoPlaying,
            'opacity-100': videoCanPlay && videoPlaying,
          }"
          @loadeddata="handleVideoLoaded"
          @canplay="handleVideoCanPlay"
          @play="handleVideoPlay"
          @pause="handleVideoPause"
          @error="handleVideoError"
        ></video>

        <!-- 재생 버튼 (자동재생 실패시) -->
        <div
          v-if="showPlayButton"
          class="absolute inset-0 z-20 flex items-center justify-center"
          @click="playVideo"
        >
          <div
            class="bg-black/60 rounded-full p-8 cursor-pointer hover:bg-black/80 transition-colors backdrop-blur-sm"
          >
            <svg
              class="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <!-- 어두운 오버레이 -->
        <div class="absolute inset-0 bg-black/60 z-5"></div>
      </div>

      <!-- 메인 콘텐츠 -->
      <div
        class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto transition-opacity duration-1000"
        :class="{ 'opacity-0': !contentVisible, 'opacity-100': contentVisible }"
      >
        <span
          class="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white logo-korean leading-tight"
        >
          [공명-共鳴] : 함께 공, 울 명
        </span>
        <h2
          class="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white logo-korean leading-tight"
        >
          "함께 울리는, 더 큰 울림"
        </h2>
      </div>

      <!-- 스크롤 인디케이터 -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <svg
          class="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>

    <!-- 프로그램 섹션 -->
    <section class="py-20 sm:py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 program-title"
          >
            맞춤형 프로그램
          </h2>
          <p class="text-lg sm:text-xl text-gray-600">
            <span>개인에 맞는 맞춤형 트레이닝을 제공합니다</span>
          </p>
        </div>

        <!-- 카드들 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(program, index) in programs"
            :key="index"
            ref="programCards"
            :class="[
              'program-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2',
              index === 0 ? 'animate-slide-in-left' : '',
              index === 1 ? 'animate-slide-in-up' : '',
              index === 2 ? 'animate-slide-in-right' : '',
              isVisible.programs ? 'animate-active' : 'opacity-0',
            ]"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            <div class="relative">
              <img
                :src="program.image"
                :alt="program.title"
                class="w-full h-80 object-cover"
              />
              <div class="absolute inset-0 bg-black/20"></div>
            </div>

            <div class="p-6 pb-4 flex flex-col h-full">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                {{ program.title }}
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                {{ program.description }}
              </p>

              <ul class="space-y-2">
                <li
                  v-for="benefit in program.benefits"
                  :key="benefit"
                  class="flex items-center text-gray-700"
                >
                  <div
                    class="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"
                  ></div>
                  <span class="text-sm">{{ benefit }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 건강기기 체험 섹션 -->
    <!-- <section class="py-20 sm:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            프리미엄 기기 체험
          </h2>
          <p class="text-lg sm:text-xl text-gray-600">
            검증된 헬스케어 기기를 직접 체험하고 전문가 상담을 받아보세요
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(effect, index) in healthcareServices"
            :key="index"
            ref="effectCards"
            :class="[
              'effect-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
              isVisible.effectCards
                ? 'animate-fade-in-up'
                : 'opacity-0 translate-y-4',
            ]"
            :style="{
              animationDelay: `${index * 150}ms`,
            }"
          >
            <img
              :src="effect.image"
              :alt="effect.title"
              class="w-full h-32 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                {{ effect.title }}
              </h3>
              <p class="text-sm text-gray-600">{{ effect.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- 갤러리 섹션 -->
    <section class="py-20 sm:py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 program-title"
          >
            현장 갤러리
          </h2>
          <p class="text-lg sm:text-xl text-gray-600">
            실제 트레이닝 현장과 최신 시설을 확인해보세요
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            ref="galleryItems"
            :class="[
              'gallery-item relative overflow-hidden rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105',
              index % 3 === 0 ? 'row-span-2' : 'aspect-square',
              isVisible.galleryItems
                ? 'animate-fade-in-up'
                : 'opacity-0 translate-y-4',
            ]"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <img
              :src="image"
              :alt="`갤러리 ${index + 1}`"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 제품 판매 섹션 -->
    <section class="py-20 sm:py-32 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 program-title"
          >
            위탁판매 서비스
          </h2>
          <p class="text-lg sm:text-xl text-gray-600">
            전문가가 선별한 프리미엄 건강기기를 합리적인 가격으로 만나보세요
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(product, index) in products"
            :key="index"
            ref="productCards"
            :class="[
              'product-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2',
              isVisible.productCards
                ? 'animate-fade-in-up'
                : 'opacity-0 translate-y-4',
            ]"
            :style="{ animationDelay: `${index * 300}ms` }"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-80 object-cover object-top"
            />

            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                {{ product.name }}
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                {{ product.description }}
              </p>
              <button
                class="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                @click="$router.push(product.route)"
              >
                제품 보기
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
  name: 'Home',
  data() {
    return {
      videoLoaded: false,
      videoCanPlay: false,
      videoPlaying: false,
      showPlayButton: false,
      contentVisible: false,
      programs: [
        {
          image:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: '퍼스널 트레이닝',
          description:
            '개인 맞춤형 운동 프로그램으로 체형 교정과 체력 향상을 도와드립니다',
          benefits: [
            '개인 맞춤형 운동 계획',
            '체형 교정 및 체력 향상',
            '전문 트레이너의 1:1 지도',
            '목표 달성을 위한 지속적인 관리',
          ],
        },
        {
          image:
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: '필라테스',
          description:
            '코어 근육 강화와 신체 정렬에 중점을 둔 전문 필라테스 프로그램으로 건강한 체형을 만들어갑니다',
          benefits: [
            '코어 근력 강화',
            '유연성 및 근력 향상',
            '재활 및 컨디셔닝',
            '체형 교정',
          ],
        },
        {
          image: '/main/powerPlate.jpg',
          title: '파워플레이트',
          description:
            '3차원 진동 기술을 활용한 혁신적인 운동법으로 짧은 시간에 최대의 운동 효과를 경험하세요',
          benefits: [
            '근력 및 근지구력 향상',
            '체지방 감소 및 순환 개선',
            '시간 효율적인 운동',
            '관절 부담 최소화',
          ],
        },
      ],
      healthcareServices: [
        {
          title: '무료 체험 서비스',
          description: '최신 건강기기를 실제로 체험하고 효과를 직접 확인하세요',
          image: '/main/card/service.jpg',
        },
        {
          title: '전문가 맞춤 상담',
          description: '개인의 건강 상태와 목표에 맞는 최적의 솔루션 제안',
          image:
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        },
        {
          title: '위탁판매 서비스',
          description: '검증된 프리미엄 제품을 합리적인 가격으로 만나보세요',
          image:
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        },
        {
          title: '사후관리 서비스',
          description: '구매 후에도 지속적인 사용법 안내와 관리 서비스 제공',
          image:
            'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        },
      ],
      galleryImages: [
        `/main/mainImg1.jpg`,
        `/main/mainImg2.jpg`,
        `/main/mainImg3.jpg`,
        `/main/mainImg4.jpg`,
        `/main/mainImg5.jpg`,
        `/main/mainImg6.jpg`,
      ],
      products: [
        {
          image: '/main/card/powerPlate.jpg',
          name: '파워플레이트 프리미엄',
          description:
            '전신 진동운동을 위한 최신형 파워플레이트로 근력강화와 체중감량에 탁월한 효과를 제공합니다.',
          route: '/products/powerPlate',
        },
        {
          image: '/main/card/oxygen.png',
          name: '고압산소 치료기기',
          description:
            '산소농도를 높여 피로회복과 면역력 강화에 도움을 주며, 운동 후 빠른 회복을 지원하는 건강관리 장비입니다.',
          route: '/products/oxygen',
        },
      ],
      isVisible: {
        programs: false,
        effectCards: false,
        galleryItems: false,
        productCards: false,
      },
    };
  },
  mounted() {
    this.setupScrollAnimation();

    // DOM 로드 후 텍스트 표시
    setTimeout(() => {
      this.contentVisible = true;
    }, 500);

    // 전역 이벤트 리스너 추가 (더 확실한 감지)
    window.addEventListener('scroll', this.enableAutoplay, { once: true });
    window.addEventListener('click', this.enableAutoplay, { once: true });
    window.addEventListener('touchstart', this.enableAutoplay, { once: true });
  },

  beforeUnmount() {
    // 이벤트 리스너 정리
    window.removeEventListener('scroll', this.enableAutoplay);
    window.removeEventListener('click', this.enableAutoplay);
    window.removeEventListener('touchstart', this.enableAutoplay);
  },
  methods: {
    handleVideoLoaded() {
      console.log('Video loaded');
      this.videoLoaded = true;
    },

    handleVideoCanPlay() {
      console.log('Video can play');
      this.videoCanPlay = true;

      // 자동재생 시도
      this.attemptAutoplay();
    },

    handleVideoPlay() {
      console.log('Video playing');
      this.videoPlaying = true;
      this.showPlayButton = false;
    },

    handleVideoPause() {
      console.log('Video paused');
      this.videoPlaying = false;
    },

    handleVideoError(error) {
      console.log('Video error:', error);
      this.videoLoaded = false;
      this.videoCanPlay = false;
      this.showPlayButton = true;
    },

    async attemptAutoplay() {
      const video = this.$refs.heroVideo;
      if (!video) return;

      try {
        await video.play();
        console.log('Autoplay successful');
      } catch (error) {
        console.log('Autoplay blocked:', error.name);
        // 자동재생이 차단되면 재생 버튼 표시
        this.showPlayButton = true;
      }
    },

    async playVideo() {
      const video = this.$refs.heroVideo;
      if (!video) return;

      try {
        await video.play();
        console.log('Manual play successful');
      } catch (error) {
        console.log('Manual play failed:', error);
      }
    },
    setupScrollAnimation() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target;
              if (
                this.$refs.programCards &&
                this.$refs.programCards.includes(target)
              ) {
                this.isVisible.programs = true;
              } else if (
                this.$refs.effectCards &&
                this.$refs.effectCards.includes(target)
              ) {
                this.isVisible.effectCards = true;
              } else if (
                this.$refs.galleryItems &&
                this.$refs.galleryItems.includes(target)
              ) {
                this.isVisible.galleryItems = true;
              } else if (
                this.$refs.productCards &&
                this.$refs.productCards.includes(target)
              ) {
                this.isVisible.productCards = true;
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
        if (this.$refs.programCards) {
          this.$refs.programCards.forEach((card) => observer.observe(card));
        }
        if (this.$refs.effectCards) {
          this.$refs.effectCards.forEach((card) => observer.observe(card));
        }
        if (this.$refs.galleryItems) {
          this.$refs.galleryItems.forEach((item) => observer.observe(item));
        }
        if (this.$refs.productCards) {
          this.$refs.productCards.forEach((card) => observer.observe(card));
        }
      });
    },
  },
};
</script>

<style scoped>
/* 애니메이션 정의 */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 애니메이션 클래스 */
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-slide-in-left {
  animation: slide-in-left 0.6s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.6s ease-out forwards;
}

.animate-slide-in-up {
  animation: slide-in-up 0.6s ease-out forwards;
}

/* 반응형 텍스트 */
.logo-korean {
  word-break: keep-all;
  line-height: 1.2;
}

/* 호버 효과 */
.program-card:hover,
.product-card:hover {
  transform: translateY(-8px);
}

.effect-card:hover {
  transform: translateY(-4px);
}

.gallery-item:hover {
  transform: scale(1.05);
}

/* 부드러운 전환 효과 */
video {
  transition: opacity 0.5s ease-in-out;
}
</style>
