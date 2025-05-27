<template>
  <div class="min-h-screen bg-white">
    <!-- 풀스크린 히어로 섹션 -->
    <section
      class="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- 배경 비디오 -->
      <div class="absolute inset-0 z-0">
        <video
          src="../video/mainVideo.mp4"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          class="w-full h-full object-cover"
          poster="../img/video-poster.jpg"
        >
          <!-- 비디오를 지원하지 않는 브라우저용 대체 이미지 -->
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="진동운동 배경"
            class="w-full h-full object-cover"
          />
        </video>
        <!-- 어두운 오버레이 (헤더 텍스트가 잘 보이도록) -->
        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      메인 콘텐츠
      <div class="absolute z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h2 class="text-4xl sm:text-6xl md:text-5xl font-bold mb-6 text-white">
          [공명-共鳴] : 함께 공, 울 명
        </h2>
        <h2 class="text-4xl sm:text-6xl md:text-5xl font-bold mb-6 text-white">
          "함께 울리는, 더 큰 울림"
        </h2>
        <!--
        <p
          class="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-100"
        >
          진동운동의 혁신적 경험
        </p>
        <p
          class="text-base sm:text-lg mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          과학적으로 입증된 진동운동으로 건강한 변화를 시작하세요
        </p> -->

        <!-- CTA 버튼들 -->
        <!-- <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            class="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            체험하기
          </button>
          <button
            class="px-8 py-4 border-2 border-white/80 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            프로그램
          </button>
        </div>-->
      </div>

      <!-- 스크롤 인디케이터 -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
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
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            운동 프로그램
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            개인 맞춤형 진동운동으로 최대의 효과를 경험하세요
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

            <div class="p-6">
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
                class="mt-6 w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                자세히 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 운동 효과 섹션 -->
    <section class="py-20 sm:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            과학적 효과
          </h2>
          <p class="text-lg sm:text-xl text-gray-600">
            진동운동의 입증된 건강 효과
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(effect, index) in exerciseEffects"
            :key="index"
            ref="effectCards"
            :class="[
              'effect-card text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center',
              isVisible.effectCards
                ? 'animate-fade-in-up'
                : 'opacity-0 translate-y-4',
            ]"
            :style="{
              animationDelay: `${index * 150}ms`,
              height: '200px',
              minHeight: '200px',
            }"
          >
            <div class="text-4xl mb-4">{{ effect.icon }}</div>
            <h3 class="text-lg font-bold text-gray-900 mb-2 flex-grow">
              {{ effect.title }}
            </h3>
            <p class="text-sm text-gray-600">{{ effect.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 갤러리 섹션 -->
    <section class="py-20 sm:py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            운동 현장
          </h2>
          <p class="text-lg sm:text-xl text-gray-600">
            공명짐에서의 실제 운동 모습과 최신 장비들을 확인하세요
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
            >
              <svg
                class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 제품 판매 섹션 -->
    <section class="py-20 sm:py-32 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            전문 장비
          </h2>
          <p class="text-lg sm:text-xl text-gray-600">
            전문 운동기구 및 건강 관리 제품을 합리적인 가격으로 제공합니다
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
              class="w-full h-48 object-cover"
            />

            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                {{ product.name }}
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                {{ product.description }}
              </p>
              <button
                class="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                문의하기
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
      programs: [
        {
          image:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: '진동운동 기초',
          description: '진동운동의 기본 원리와 자세를 배우는 초보자 프로그램',
          benefits: [
            '근력 강화',
            '균형감각 향상',
            '혈액순환 개선',
            '저충격 운동',
          ],
        },
        {
          image:
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: '체중 관리',
          description: '효율적인 칼로리 소모와 체중 감량을 위한 맞춤 프로그램',
          benefits: [
            '체지방 감소',
            '신진대사 촉진',
            '근육량 증가',
            '체형 개선',
          ],
        },
        {
          image:
            'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: '재활 운동',
          description: '부상 회복과 근육 강화를 위한 안전한 재활 운동 프로그램',
          benefits: ['관절 가동성 향상', '근육 회복', '통증 완화', '재활 촉진'],
        },
      ],
      exerciseEffects: [
        {
          icon: '💪',
          title: '근력 강화',
          description: '진동 자극을 통한 효과적인 근육 발달',
        },
        {
          icon: '🔥',
          title: '지방 연소',
          description: '높은 칼로리 소모로 체중 감량 효과',
        },
        {
          icon: '⚖️',
          title: '균형감각',
          description: '코어 근육 강화와 신체 균형 개선',
        },
        {
          icon: '💓',
          title: '혈액순환',
          description: '진동으로 인한 혈액순환 및 림프순환 촉진',
        },
      ],
      galleryImages: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      ],
      products: [
        {
          image:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          name: '파워플레이트',
          description:
            '전신 진동운동을 위한 전문 장비로 근력강화와 체중감량에 효과적입니다.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          name: '고압산소 치료기기',
          description:
            '산소농도를 높여 피로회복과 면역력 강화에 도움을 주는 건강관리 장비입니다.',
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
  },
  methods: {
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
</style>
