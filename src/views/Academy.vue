<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <div class="mb-6 relative">
          <img
            src="/academy/hero.jpg"
            alt="공명짐 교육 아카데미"
            class="w-full h-64 md:h-80 object-cover object-center shadow-2xl"
          />
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-12 md:mt-30">
              <span class="text-xl md:text-2xl text-white">Academy</span>
              <h1 class="text-4xl md:text-5xl font-bold mt-5 mb-6 text-white">
                교육 아카데미
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 소개 섹션 -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            교육 아카데미
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            공명짐 아카데미에서는 파트너 센터 및 전문가 분들을 대상으로 한<br />
            전문 교육 출장 프로그램을 운영하고 있습니다.
          </p>
        </div>

        <!-- 교육 프로그램 카드 -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <!-- 파워플레이트 교육 -->
          <div
            class="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 fade-in"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4"
              >
                <i class="fas fa-dumbbell text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">
                파워플레이트 교육
              </h3>
            </div>
            <div class="space-y-3 text-gray-600">
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>파워플레이트의 과학적 원리와 핵심 적용 방식 이해</p>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>소도구와 함께 구성하는 다이나믹한 기능성 트레이닝</p>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>센터 유형에 따라 맞춤 설계된 이론 + 실습 병행 수업</p>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>센터 구성원 모두를 위한 실전 적용 중심 교육</p>
              </div>
            </div>
          </div>

          <!-- 트리거포인트 교육 -->
          <div
            class="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 fade-in"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mr-4"
              >
                <i class="fas fa-hand-paper text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">
                트리거포인트 교육
              </h3>
            </div>
            <div class="space-y-3 text-gray-600">
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>현대인에게 필수적인 셀프 근막이완(SMR) 기법</p>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>폼롤러, 마사지볼, MB5 등 다양한 도구 활용법</p>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>개인/소그룹/단체 수업에서 바로 활용 가능한 구성</p>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>교정 운동학 관점의 회복 & 리커버리 커리큘럼</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 교육 현장 갤러리 -->
    <section class="pt-4 pb-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12 fade-in">
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            교육 현장
          </h3>
          <p class="text-lg text-gray-600">
            전문적이고 체계적인 교육 프로그램의 현장을 확인하세요
          </p>
        </div>

        <!-- 캐러셀 갤러리 -->
        <div class="relative fade-in">
          <div class="overflow-hidden rounded-2xl">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(slide, slideIndex) in carouselSlides"
                :key="slideIndex"
                class="w-full flex-shrink-0"
              >
                <div
                  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
                >
                  <div
                    v-for="(image, imgIndex) in slide"
                    :key="imgIndex"
                    class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
                    @click="openLightbox(slideIndex * 3 + imgIndex)"
                  >
                    <img
                      :src="image.url"
                      :alt="image.alt"
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                    <div
                      class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"
                    ></div>
                    <div
                      class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div
                        class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      >
                        <i class="fas fa-expand text-white text-sm"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 캐러셀 컨트롤 -->
          <div class="flex justify-center mt-8 gap-4">
            <button
              @click="prevSlide"
              class="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <i class="fas fa-chevron-left text-gray-600"></i>
            </button>
            <div class="flex items-center gap-2">
              <button
                v-for="(slide, index) in carouselSlides"
                :key="index"
                @click="currentSlide = index"
                :class="[
                  'w-3 h-3 rounded-full transition-colors duration-200',
                  currentSlide === index ? 'bg-indigo-600' : 'bg-gray-300',
                ]"
              ></button>
            </div>
            <button
              @click="nextSlide"
              class="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <i class="fas fa-chevron-right text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 교육 문의 섹션 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="bg-white rounded-3xl shadow-lg p-12 fade-in">
          <div
            class="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <i class="fas fa-handshake text-white text-3xl"></i>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            출장 교육 문의
          </h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            출장 교육은 센터 일정 및 공간 여건에 맞춰 유연하게 조율됩니다.<br />
            전문적인 교육이 필요하시다면 언제든 연락주세요.
          </p>

          <div class="grid md:grid-cols-3 gap-6 mb-10">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <i class="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">출장 교육</h3>
              <p class="text-gray-600 text-sm">센터 현장 방문</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <i class="fas fa-users text-emerald-600 text-2xl"></i>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">맞춤 교육</h3>
              <p class="text-gray-600 text-sm">센터별 특성 반영</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <i class="fas fa-certificate text-purple-600 text-2xl"></i>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">전문 교육</h3>
              <p class="text-gray-600 text-sm">이론 + 실습 병행</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="openKakaoChat"
              class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200 flex items-center justify-center gap-3"
            >
              카카오톡 문의
            </button>
            <button
              @click="openPhoneCall"
              class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-2xl transition-colors duration-200 flex items-center justify-center gap-3"
            >
              전화 문의
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 라이트박스 모달 -->
    <div
      v-if="lightboxOpen"
      @click="closeLightbox"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    >
      <div class="relative max-w-4xl max-h-full">
        <img
          :src="additionalImages[lightboxIndex].url"
          :alt="additionalImages[lightboxIndex].alt"
          class="max-w-full max-h-full object-contain rounded-lg"
          @click.stop
        />
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Academy',
  data() {
    return {
      currentSlide: 0,
      lightboxOpen: false,
      lightboxIndex: 0,

      // 캐러셀 이미지들
      additionalImages: [
        {
          url: '/academy/academy10.jpg',
          alt: '교육 현장 추가 1',
        },
        {
          url: '/academy/academy11.jpg',
          alt: '교육 현장 추가 2',
        },
        {
          url: '/academy/academy12.jpg',
          alt: '교육 현장 추가 3',
        },
        {
          url: '/academy/academy13.jpg',
          alt: '교육 현장 추가 4',
        },
        {
          url: '/academy/academy14.jpg',
          alt: '교육 현장 추가 5',
        },
        {
          url: '/academy/academy15.jpg',
          alt: '교육 현장 추가 6',
        },
        {
          url: '/academy/academy16.jpg',
          alt: '교육 현장 추가 7',
        },
        {
          url: '/academy/academy17.jpg',
          alt: '교육 현장 추가 8',
        },
        {
          url: '/academy/academy18.jpg',
          alt: '교육 현장 추가 9',
        },
        {
          url: '/academy/academy19.jpg',
          alt: '교육 현장 추가 10',
        },
        {
          url: '/academy/academy20.jpg',
          alt: '교육 현장 추가 11',
        },
        {
          url: '/academy/academy21.jpg',
          alt: '교육 현장 추가 12',
        },
        {
          url: '/academy/academy22.jpg',
          alt: '교육 현장 추가 13',
        },
        {
          url: '/academy/academy23.jpg',
          alt: '교육 현장 추가 14',
        },
        {
          url: '/academy/academy24.jpg',
          alt: '교육 현장 추가 15',
        },
        {
          url: '/academy/academy25.jpg',
          alt: '교육 현장 추가 16',
        },
        {
          url: '/academy/academy26.jpg',
          alt: '교육 현장 추가 17',
        },
      ],
    };
  },
  computed: {
    carouselSlides() {
      const slides = [];
      for (let i = 0; i < this.additionalImages.length; i += 3) {
        slides.push(this.additionalImages.slice(i, i + 3));
      }
      return slides;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.initializeAnimations();
  },
  methods: {
    initializeAnimations() {
      // Intersection Observer for fade-in animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, observerOptions);

      // Observe all elements with fade-in class
      document.querySelectorAll('.fade-in').forEach((el) => {
        observer.observe(el);
      });
    },
    openLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxOpen = true;
    },
    closeLightbox() {
      this.lightboxOpen = false;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length;
    },
    prevSlide() {
      this.currentSlide =
        this.currentSlide === 0
          ? this.carouselSlides.length - 1
          : this.currentSlide - 1;
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
/* 페이드인 애니메이션 */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate-fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* 스태거 애니메이션 (순차적으로 나타나기) */
.fade-in:nth-child(1) {
  transition-delay: 0.1s;
}
.fade-in:nth-child(2) {
  transition-delay: 0.2s;
}
.fade-in:nth-child(3) {
  transition-delay: 0.3s;
}
.fade-in:nth-child(4) {
  transition-delay: 0.4s;
}

.program-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
