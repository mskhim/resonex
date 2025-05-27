<template>
  <div class="min-h-screen bg-white">
    <!-- 풀스크린 히어로 섹션 -->
    <section
      class="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- 배경 비디오 -->
      <div class="absolute inset-0 z-0">
        <!-- 로딩 중 배경 이미지 (동영상 로딩 전까지 표시) -->
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          :style="{
            backgroundImage: 'url(../img/video-poster.jpg)',
            opacity: videoLoaded ? 0 : 1,
          }"
        ></div>

        <!-- 모바일용 이미지 대체 -->
        <img
          v-if="isMobile && !videoLoaded"
          src="../img/video-poster.jpg"
          alt="진동운동 배경"
          class="w-full h-full object-cover"
        />

        <!-- 데스크톱/모바일 공용 비디오 -->
        <video
          v-show="!isMobile || videoLoaded"
          ref="heroVideo"
          :src="videoSrc"
          :autoplay="!isMobile"
          muted
          loop
          playsinline
          preload="metadata"
          webkit-playsinline
          x5-playsinline
          class="w-full h-full object-cover transition-opacity duration-500"
          :class="{ 'opacity-0': !videoLoaded, 'opacity-100': videoLoaded }"
          @loadeddata="handleVideoLoaded"
          @canplay="handleVideoCanPlay"
          @error="handleVideoError"
          @click="handleVideoClick"
        >
          <!-- 비디오를 지원하지 않는 브라우저용 대체 이미지 -->
          <img
            src="../img/video-poster.jpg"
            alt="진동운동 배경"
            class="w-full h-full object-cover"
          />
        </video>

        <!-- 모바일 재생 버튼 -->
        <div
          v-if="isMobile && !videoLoaded && !videoError"
          class="absolute inset-0 flex items-center justify-center z-20"
          @click="playVideo"
        >
          <div
            class="bg-black/50 rounded-full p-6 cursor-pointer hover:bg-black/70 transition-colors"
          >
            <svg
              class="w-12 h-12 text-white"
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

    <!-- 나머지 섹션들은 그대로... -->
    <!-- 프로그램 섹션 -->
    <section class="py-20 sm:py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            맞춤형 운동 프로그램
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            전문가가 직접 설계한 프리미엄 운동 솔루션으로 건강한 변화를
            경험하세요
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
                class="w-full h-48 object-cover"
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

              <button
                class="mt-auto mb-4 w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                자세히 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 다른 섹션들... -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      videoLoaded: false,
      videoError: false,
      contentVisible: false,
      isMobile: false,
      videoSrc: '../video/mainVideo.mp4',
      programs: [
        {
          image:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: '공명점 운동',
          description:
            '신체 균형과 에너지 흐름을 개선하는 전통적인 공명점 운동법으로 몸과 마음의 조화를 이룹니다',
          benefits: [
            '에너지 순환 개선',
            '자세 교정 및 밸런스 향상',
            '스트레스 완화',
            '집중력 증진',
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
          image:
            'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      isVisible: {
        programs: false,
        effectCards: false,
        galleryItems: false,
        productCards: false,
      },
    };
  },
  mounted() {
    this.detectMobile();
    this.setupScrollAnimation();
    this.setupVideoPlayback();

    // DOM 로드 후 텍스트 표시
    setTimeout(() => {
      this.contentVisible = true;
    }, 500);
  },
  methods: {
    detectMobile() {
      this.isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768;
    },

    setupVideoPlayback() {
      const video = this.$refs.heroVideo;
      if (!video) return;

      if (this.isMobile) {
        // 모바일에서는 수동 재생 대기
        video.load();
      } else {
        // 데스크톱에서는 자동 재생 시도
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video autoplay started');
            })
            .catch((error) => {
              console.log('Autoplay failed:', error);
            });
        }
      }
    },

    async playVideo() {
      const video = this.$refs.heroVideo;
      if (!video) return;

      try {
        await video.play();
        this.videoLoaded = true;
        console.log('Video playing manually');
      } catch (error) {
        console.log('Manual video play failed:', error);
        this.videoError = true;
      }
    },

    handleVideoClick() {
      if (this.isMobile && !this.videoLoaded) {
        this.playVideo();
      }
    },

    handleVideoLoaded() {
      console.log('Video loaded');
      this.videoLoaded = true;
    },

    handleVideoCanPlay() {
      console.log('Video can play');

      // 데스크톱에서만 자동 재생
      if (!this.isMobile) {
        this.videoLoaded = true;
        const video = this.$refs.heroVideo;
        if (video && video.paused) {
          video.play().catch(() => {
            console.log('Video play failed');
          });
        }
      }
    },

    handleVideoError(error) {
      console.log('Video error:', error);
      this.videoError = true;
      this.videoLoaded = false;
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

/* 반응형 텍스트 개선 */
.logo-korean {
  word-break: keep-all;
  line-height: 1.2;
}

/* 호버 효과 */
.program-card:hover {
  transform: translateY(-8px);
}

/* 부드러운 전환 효과 */
video {
  transition: opacity 0.5s ease-in-out;
}

/* 모바일 재생 버튼 스타일 */
@media (max-width: 768px) {
  .logo-korean {
    font-size: clamp(1.25rem, 6vw, 2.5rem) !important;
  }
}
</style>
