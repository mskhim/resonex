<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <!-- 대형 이미지 with 오버레이 -->
        <div class="mb-6 relative">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
            alt="피트니스 제품"
            class="w-full h-64 md:h-80 object-cover shadow-2xl"
          />
          <!-- 어두운 오버레이 -->
          <div class="absolute inset-0 bg-black/60"></div>

          <!-- 텍스트 내용 -->
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-30">
              <span class="text-1xl md:text-2xl text-white"> Fitness </span>
              <h1 class="text-4xl md:text-5xl font-bold mt-5 mb-6 text-white program-title">
                피트니스
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 제품 리스트 섹션 -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Fitness <span class="text-blue-600">제품 라인업</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            다양한 피트니스 제품을 만나보세요.
          </p>
        </div>

        <div class="space-y-16">
          <div
            v-for="(product, index) in fitnessProducts"
            :key="product.id"
            :class="[
              'flex flex-col lg:flex-row items-center gap-8',
              index % 2 === 1 ? 'lg:flex-row-reverse' : '',
            ]"
          >
            <!-- 이미지 -->
            <div class="w-full lg:w-1/2">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <!-- 제품 정보 -->
            <div class="w-full lg:w-1/2 space-y-6">
              <div>
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {{ product.name }}
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  {{ product.description }}
                </p>
              </div>

              <!-- 특징 -->
              <div class="space-y-2">
                <div
                  v-for="(feature, featureIndex) in product.features"
                  :key="featureIndex"
                  class="flex items-center"
                >
                  <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Fitness',
  data() {
    return {
      fitnessProducts: [
        {
          id: 1,
          name: 'Fitness Pro 1',
          description: '설명 예시입니다.',
          features: ['특징1', '특징2'],
          image: 'https://via.placeholder.com/400x300',
        },
        // ...추가 제품...
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
/* 필요시 스타일 추가 */
</style>
