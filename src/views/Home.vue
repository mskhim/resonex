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

    <!-- 서비스 하이라이트 섹션 (간격 추가용) -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16"></div>

        <!-- 모바일: 2x2, 태블릿: 2x2, 데스크톱: 1x4 -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div
            v-for="(feature, index) in specialFeatures"
            :key="index"
            ref="featureCards"
            :class="[
              'text-center group transition-all duration-700 bg-gray-100 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl',
              isVisible.featureCards
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
            :style="{ animationDelay: `${index * 150}ms` }"
          >
            <div class="mb-3 md:mb-4 relative">
              <div
                class="w-14 h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <i
                  :class="feature.icon + ' text-xl md:text-2xl text-blue-600'"
                ></i>
              </div>
            </div>

            <!-- 카운팅 숫자 -->
            <div class="mb-2 md:mb-3">
              <h3
                class="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2"
              >
                {{ feature.title }}
              </h3>
              <span class="text-3xl md:text-4xl font-bold text-gray-900">
                {{ Math.floor(animatedNumbers[index]) }}
              </span>
              <br />
              <span class="text-sm md:text-lg text-gray-900 ml-1">{{
                feature.unit
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 와이드 임팩트 섹션 -->
    <section class="mt-15 relative h-screen bg-black overflow-hidden">
      <!-- 배경 이미지 -->
      <div class="absolute inset-0">
        <img
          src="/main/powerplate-wide.jpg"
          alt="공명짐 파워플레이트 트레이닝"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- 콘텐츠 -->
      <div class="relative z-10 h-full flex items-center">
        <div class="max-w-7xl mx-auto px-4 w-full">
          <div
            ref="impactContent"
            :class="[
              'text-white space-y-8 max-w-4xl transition-all duration-1000',
              isVisible.impactContent
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
          >
            <div class="space-y-4">
              <h2
                class="text-2xl md:text-3xl lg:text-4xl font-light logo-korean text-white/90"
              >
                [공명-共鳴] : 함께 공, 울 명
              </h2>
              <h3
                class="text-3xl md:text-5xl lg:text-6xl font-bold program-title"
              >
                '함께 울리는, 더 큰 울림'
              </h3>
            </div>

            <div class="w-20 h-1 bg-white/80"></div>

            <div
              class="space-y-6 text-lg md:text-xl lg:text-2xl leading-relaxed"
            >
              <p class="text-white/90">
                진동 운동으로 몸과 마음을 함께 깨우는 공간,
                <br class="block md:hidden" />
                <span class="font-bold text-white">공명짐</span>입니다.
              </p>
              <p class="text-white/80 text-base md:text-lg">
                내 주변에서 나에게 꼭 맞는 운동을 찾고 계신가요?<br />
                조용하고 프라이빗한 공간에서, <br />온전히 나 자신에게 집중하며
                운동하고 싶으신가요?<br />
                공명짐은 그런 분들을 위한 맞춤형 스튜디오입니다.
              </p>
            </div>

            <!-- 회사 소개 버튼 추가 -->
            <div class="pt-8">
              <button
                @click="$router.push('/about')"
                class="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <i class="fas fa-info-circle text-lg"></i>
                <span class="text-lg">회사 소개</span>
                <i
                  class="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-300"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 위탁판매 섹션 -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <!-- 제목 -->
        <div class="text-center mb-16">
          <div
            ref="salesTitle"
            :class="[
              'transition-all duration-1000',
              isVisible.salesTitle
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
          >
            <div
              class="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm mb-4"
            >
              PREMIUM PRODUCTS
            </div>
            <h2
              class="text-2xl md:text-4xl font-bold text-gray-900 program-title mb-4"
            >
              당신의 가치를, 공명짐에서 울리다
            </h2>
            <p class="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
              프리미엄 건강기기, 신뢰로 선별하고 합리로 제안합니다,
              <br />전문가가 직접 선별한 프리미엄 건강 기기를 만나보세요
            </p>
          </div>
        </div>

        <!-- 파워플레이트 -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <!-- 모바일: 이미지가 먼저, 데스크톱: 텍스트가 먼저 -->
          <div
            ref="productImage1"
            class="lg:order-2"
            :class="[
              'relative transition-all duration-1000 delay-300',
              isVisible.productImage1
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8',
            ]"
          >
            <div class="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="/main/card/powerPlate.jpg"
                alt="파워플레이트"
                class="w-full h-64 md:h-80 object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              ></div>
            </div>
          </div>

          <div
            ref="productContent1"
            class="lg:order-1"
            :class="[
              'space-y-6 transition-all duration-1000',
              isVisible.productContent1
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8',
            ]"
          >
            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                파워플레이트 프리미엄
              </h3>
              <div class="w-12 h-1 bg-blue-600 mb-4"></div>
            </div>

            <p class="text-gray-600 text-sm leading-relaxed">
              3차원 진동 기술을 활용한 혁신적인 운동법으로
              <br />근력강화, 체중감량, 순환개선에 탁월한 효과를 제공합니다.
            </p>

            <div class="space-y-3">
              <div class="flex items-center text-gray-700">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>근력 및 근지구력 향상</span>
              </div>
              <div class="flex items-center text-gray-700">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>체지방 감소 및 순환 개선</span>
              </div>
              <div class="flex items-center text-gray-700">
                <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>시간 효율적인 운동</span>
              </div>
            </div>

            <div class="pt-4">
              <button
                class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                @click="$router.push('/products/powerplate')"
              >
                제품 자세히 보기
              </button>
            </div>
          </div>
        </div>

        <!-- 고압산소캡슐 -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- 모바일: 이미지가 먼저, 데스크톱: 이미지가 먼저 (원래 의도대로) -->
          <div
            ref="productImage2"
            class="order-1"
            :class="[
              'relative transition-all duration-1000',
              isVisible.productImage2
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8',
            ]"
          >
            <div class="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="/products/cap/cap2.jpg"
                alt="고압산소 캡슐"
                class="w-full h-64 md:h-80 object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              ></div>
            </div>
          </div>

          <div
            ref="productContent2"
            class="order-2"
            :class="[
              'space-y-6 transition-all duration-1000 delay-300',
              isVisible.productContent2
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8',
            ]"
          >
            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                산소캡슐
              </h3>
              <div class="w-12 h-1 bg-green-600 mb-4"></div>
            </div>

            <p class="text-gray-600 text-sm leading-relaxed">
              높은 농도의 산소를 공급하여 피로회복과 면역력
              <br />강화에 도움을 주며, 운동 후 빠른 회복을 지원합니다.
            </p>

            <div class="space-y-3">
              <div class="flex items-center text-gray-700">
                <div class="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span>피로회복 및 면역력 강화</span>
              </div>
              <div class="flex items-center text-gray-700">
                <div class="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span>운동 후 빠른 회복</span>
              </div>
              <div class="flex items-center text-gray-700">
                <div class="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span>혈액순환 개선</span>
              </div>
            </div>

            <div class="pt-4">
              <button
                class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 cursor-pointer"
                @click="$router.push('/products/oxygen')"
              >
                제품 자세히 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 갤러리 캐러셀 섹션 -->
    <section class="py-16 sm:py-24 bg-gray-50 overflow-hidden">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <div
            ref="galleryTitle"
            :class="[
              'transition-all duration-1000',
              isVisible.galleryTitle
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
          >
            <h2
              class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 program-title"
            >
              현장 갤러리
            </h2>
            <p class="text-sm text-gray-600">
              실제 트레이닝 현장과 최신 시설을 확인해보세요
            </p>
          </div>
        </div>

        <!-- 캐러셀 컨테이너 -->
        <div
          ref="galleryCarousel"
          :class="[
            'relative transition-all duration-1000',
            isVisible.galleryCarousel
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8',
          ]"
        >
          <!-- 캐러셀 래퍼 -->
          <div class="overflow-hidden rounded-xl">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(image, index) in galleryImages"
                :key="index"
                class="w-full flex-shrink-0 relative"
              >
                <img
                  :src="image"
                  :alt="`갤러리 ${index + 1}`"
                  class="w-full h-64 md:h-100 object-cover"
                />
                <div class="absolute inset-0 bg-black/10"></div>

                <!-- 이미지 넘버 -->
                <div
                  class="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1"
                >
                  <span class="text-white text-sm font-medium"
                    >{{ index + 1 }} / {{ galleryImages.length }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 네비게이션 버튼 -->
          <button
            @click="prevSlide"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-300 z-10"
          >
            <svg
              class="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <button
            @click="nextSlide"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-300 z-10"
          >
            <svg
              class="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          <!-- 인디케이터 -->
          <div class="flex justify-center mt-6 space-x-2">
            <button
              v-for="(image, index) in galleryImages"
              :key="index"
              @click="goToSlide(index)"
              :class="[
                'w-2 h-2 rounded-full transition-all duration-300',
                currentSlide === index
                  ? 'bg-gray-800 scale-125'
                  : 'bg-gray-400 hover:bg-gray-600',
              ]"
            ></button>
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
            '코어 근육 강화와 신체 정렬에 중점을 둔 전문 필라테스 프로그램입니다',
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
      hasCountingStarted: false,
      observer: null,
      specialFeatures: [
        {
          icon: 'fas fa-calendar-alt',
          title: '운영 연수',
          number: 2,
          unit: '년 +',
          description: '축적된 전문 노하우',
        },
        {
          icon: 'fas fa-medal',
          title: '자격증 및 수상경력',
          number: 20,
          unit: '개 +',
          description: '검증된 전문성',
        },
        {
          icon: 'fas fa-redo-alt',
          title: '재등록율',
          number: 80,
          unit: '% 이상',
          description: '높은 회원 만족도',
        },
        {
          icon: 'fas fa-star',
          title: '프리미엄 장비',
          number: 15,
          unit: '대 +',
          description: '최신 운동 장비',
        },
      ],
      animatedNumbers: [0, 0, 0, 0], // 카운팅용 숫자 배열
      currentSlide: 0,
      isVisible: {
        impactContent: false,
        highlightTitle: false,
        featureCards: false,
        salesTitle: false,
        productContent1: false,
        productImage1: false,
        productContent2: false,
        productImage2: false,
        salesDescription: false,
        galleryTitle: false,
        galleryCarousel: false,
      },
    };
  },
  mounted() {
    this.setupScrollAnimation();

    // DOM 로드 후 텍스트 표시만 (카운팅 코드 제거)
    setTimeout(() => {
      this.contentVisible = true;
    }, 500);

    // 캐러셀 자동 재생
    setInterval(() => {
      this.nextSlide();
    }, 5000);

    // 전역 이벤트 리스너 추가
    window.addEventListener('scroll', this.enableAutoplay, { once: true });
    window.addEventListener('click', this.enableAutoplay, { once: true });
    window.addEventListener('touchstart', this.enableAutoplay, { once: true });
  },

  beforeUnmount() {
    // 이벤트 리스너 정리
    window.removeEventListener('scroll', this.enableAutoplay);
    window.removeEventListener('click', this.enableAutoplay);
    window.removeEventListener('touchstart', this.enableAutoplay);
    if (this.observer) {
      this.observer.disconnect();
    }
  },

  methods: {
    handleVideoLoaded() {
      console.log('Video loaded');
      this.videoLoaded = true;
    },

    handleVideoCanPlay() {
      console.log('Video can play');
      this.videoCanPlay = true;
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

    enableAutoplay() {
      // 사용자 인터랙션 후 자동재생 시도
      this.attemptAutoplay();
    },

    setupScrollAnimation() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target;

              // 각 섹션별 애니메이션 트리거
              if (target === this.$refs.impactContent) {
                this.isVisible.impactContent = true;
              } else if (target === this.$refs.highlightTitle) {
                this.isVisible.highlightTitle = true;
              } else if (
                this.$refs.featureCards &&
                this.$refs.featureCards.includes(target)
              ) {
                this.isVisible.featureCards = true;
                // 🎯 카운팅 애니메이션 시작 - 여기가 핵심!
                if (!this.hasCountingStarted) {
                  this.startCountingAnimation();
                }
              } else if (target === this.$refs.salesTitle) {
                this.isVisible.salesTitle = true;
              } else if (target === this.$refs.productContent1) {
                this.isVisible.productContent1 = true;
              } else if (target === this.$refs.productImage1) {
                this.isVisible.productImage1 = true;
              } else if (target === this.$refs.productContent2) {
                this.isVisible.productContent2 = true;
              } else if (target === this.$refs.productImage2) {
                this.isVisible.productImage2 = true;
              } else if (target === this.$refs.salesDescription) {
                this.isVisible.salesDescription = true;
              } else if (target === this.$refs.galleryTitle) {
                this.isVisible.galleryTitle = true;
              } else if (target === this.$refs.galleryCarousel) {
                this.isVisible.galleryCarousel = true;
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
        // 모든 요소들을 관찰
        const elementsToObserve = [
          this.$refs.impactContent,
          this.$refs.highlightTitle,
          this.$refs.salesTitle,
          this.$refs.productContent1,
          this.$refs.productImage1,
          this.$refs.productContent2,
          this.$refs.productImage2,
          this.$refs.salesDescription,
          this.$refs.galleryTitle,
          this.$refs.galleryCarousel,
        ];

        elementsToObserve.forEach((element) => {
          if (element) observer.observe(element);
        });

        // 특징 카드들 관찰 - 이것이 카운팅을 트리거함
        if (this.$refs.featureCards) {
          this.$refs.featureCards.forEach((card) => observer.observe(card));
        }
      });
    },

    // 캐러셀 메서드들
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.galleryImages.length;
    },

    prevSlide() {
      this.currentSlide =
        this.currentSlide === 0
          ? this.galleryImages.length - 1
          : this.currentSlide - 1;
    },

    goToSlide(index) {
      this.currentSlide = index;
    },

    // 숫자 카운팅 애니메이션 (스크롤시 한 번만)
    startCountingAnimation() {
      // 이미 카운팅이 시작되었다면 실행하지 않음
      if (this.hasCountingStarted) return;

      this.hasCountingStarted = true;

      this.specialFeatures.forEach((feature, index) => {
        this.animateNumber(index, feature.number);
      });
    },

    animateNumber(index, targetNumber) {
      const duration = 2000; // 2초
      const stepTime = 50; // 50ms마다 업데이트
      const steps = duration / stepTime;
      const increment = targetNumber / steps;
      let currentNumber = 0;

      const timer = setInterval(() => {
        currentNumber += increment;

        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(timer);
        }

        // Vue 반응형 데이터 업데이트
        this.animatedNumbers[index] = currentNumber;
        this.$forceUpdate();
      }, stepTime);
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
