<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <!-- 대형 이미지 with 오버레이 -->
        <div class="mb-6 relative">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
            alt="공명짐 제품"
            class="w-full h-64 md:h-80 object-cover shadow-2xl"
          />
          <!-- 어두운 오버레이 -->
          <div class="absolute inset-0 bg-black/60"></div>

          <!-- 텍스트 내용 -->
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-30">
              <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
                제품 소개
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 파워플레이트 섹션 -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            PowerPlate <span class="text-blue-600">진동 플랫폼</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            전 세계적으로 인정받은 파워플레이트의 진동 기술로 효과적인 운동과
            재활을 경험하세요.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in powerPlateProducts"
            :key="product.id"
            class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-[600px]"
          >
            <div class="aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-48 object-cover"
              />
            </div>
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                {{ product.name }}
              </h3>
              <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                {{ product.description }}
              </p>
              <div class="space-y-2 mb-6 flex-1">
                <div
                  v-for="(feature, index) in product.features"
                  :key="index"
                  class="flex items-center text-sm"
                >
                  <div class="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg mb-4">
                <p class="text-lg font-bold text-blue-800">
                  {{ product.price }}
                </p>
              </div>
              <button
                @click="handleInquiry(product.name)"
                class="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 mt-auto"
              >
                문의하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 고압산소치료기 섹션 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            고압산소치료기 <span class="text-slate-700">O2ONE Series</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            의료진과 환자를 위한 전문적인 고압산소치료 솔루션을 제공합니다.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in oxygenProducts"
            :key="product.id"
            class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-[650px]"
          >
            <div class="aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-48 object-cover"
              />
            </div>
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                {{ product.name }}
              </h3>
              <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                {{ product.description }}
              </p>
              <div v-if="product.specs" class="bg-gray-50 p-3 rounded-lg mb-4">
                <p class="text-sm text-gray-700 font-medium">규격</p>
                <p class="text-sm text-gray-600">{{ product.specs }}</p>
              </div>
              <div class="space-y-2 mb-6 flex-1">
                <div
                  v-for="(feature, index) in product.features"
                  :key="index"
                  class="flex items-center text-sm"
                >
                  <div class="w-2 h-2 bg-slate-700 rounded-full mr-3"></div>
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
              <button
                @click="handleInquiry(product.name)"
                class="w-full bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl hover:bg-slate-900 transition-colors duration-200 mt-auto"
              >
                상담 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 문의 섹션 -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          제품 구매 문의
        </h2>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          전문적인 상담을 통해 귀하에게 최적화된 제품을 추천해드립니다.
        </p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-50 p-6 rounded-xl">
            <i class="fas fa-phone text-3xl text-blue-600 mb-4"></i>
            <h3 class="font-bold text-gray-900 mb-2">전화 상담</h3>
            <p class="text-sm text-gray-600 mb-4">
              전문 상담사가 직접 답변드립니다
            </p>
            <a
              href="tel:02-715-0607"
              class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              02-715-0607
            </a>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <i class="fas fa-envelope text-3xl text-slate-700 mb-4"></i>
            <h3 class="font-bold text-gray-900 mb-2">이메일 문의</h3>
            <p class="text-sm text-gray-600 mb-4">
              자세한 문의사항을 남겨주세요
            </p>
            <a
              href="mailto:cprh7677@naver.com"
              class="inline-block bg-slate-800 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-900 transition-colors"
            >
              이메일 보내기
            </a>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <i class="fas fa-map-marker-alt text-3xl text-green-600 mb-4"></i>
            <h3 class="font-bold text-gray-900 mb-2">직접 방문</h3>
            <p class="text-sm text-gray-600 mb-4">매장에서 직접 체험해보세요</p>
            <button
              @click="goToLocation"
              class="bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              위치 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      powerPlateProducts: [
        {
          id: 1,
          name: 'PowerPlate MOVE',
          description:
            '개인용 진동 플랫폼으로 가정에서 간편하게 사용할 수 있는 모델',
          features: ['가정용 최적화', '간편한 조작', '효과적인 전신 운동'],
          price: '₩2,800,000',
          image:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 2,
          name: 'PowerPlate MY7',
          description: '중급 사용자를 위한 다기능 진동 플랫폼',
          features: [
            '다양한 운동 프로그램',
            '터치스크린 인터페이스',
            '프리미엄 디자인',
          ],
          price: '₩4,200,000',
          image:
            'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 3,
          name: 'PowerPlate MY8',
          description: '최신 기술이 적용된 고급 진동 플랫폼',
          features: ['최신 기술 적용', '고급 마감', '전문가용 기능'],
          price: '₩5,800,000',
          image:
            'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 4,
          name: 'PowerPlate Pro5',
          description: '전문 트레이너와 피트니스 센터를 위한 프로페셔널 모델',
          features: ['전문가용 설계', '내구성 강화', '상업용 등급'],
          price: '₩7,500,000',
          image:
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 5,
          name: 'PowerPlate Pro7',
          description: '상업용 고급 진동 플랫폼으로 최고의 성능 제공',
          features: ['상업용 최적화', '고성능 모터', '프리미엄 기능'],
          price: '₩9,200,000',
          image:
            'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 6,
          name: 'PowerPlate Pro8',
          description: '최상급 프로페셔널 진동 플랫폼',
          features: ['최상급 성능', '최신 기술', '전문가 추천'],
          price: '₩12,800,000',
          image:
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 7,
          name: 'PowerPlate Rev',
          description: '혁신적인 회전 운동이 가능한 특별한 모델',
          features: ['회전 운동 기능', '혁신적 디자인', '독특한 운동 경험'],
          price: '₩6,500,000',
          image:
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ],
      oxygenProducts: [
        {
          id: 1,
          name: 'O2ONE Q31',
          description: '1인용 앉은 자세 고압산소치료기 - 병원 및 클리닉용',
          features: ['1인용 설계', 'BIBS 마스크', '자동/수동 모드'],
          specs: '1.1~3.0ATA / 1824×1024×2219mm',
          image:
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 2,
          name: 'O2ONE Q32',
          description: '2인용 앉은 자세 고압산소치료기 - 효율적인 동시 치료',
          features: ['2인 동시 치료', '공간 효율성', '슬라이딩 도어'],
          specs: '1.1~3.0ATA / 2340×1850×2210mm',
          image:
            'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 3,
          name: 'O2ONE H3000',
          description: '하드타입 고압산소치료기 - 베드슬라이드 방식',
          features: ['베드슬라이드', '화상환자 적합', 'PED 규격 준수'],
          specs: '3.0ATA / 2250×1400×1346mm',
          image:
            'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 4,
          name: 'O2ONE H3100',
          description: '고급형 하드타입 - 컬러 터치 디스플레이',
          features: ['내/외부 터치스크린', 'Lock 기능', '쿨링시스템'],
          specs: '3.0ATA / 225cm×ø81cm',
          image:
            'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 5,
          name: 'O2ONE H2000',
          description: '중압형 하드타입 - 경제적 솔루션',
          features: ['1.1-2.0ATA', '경제적 가격', '안전성 확보'],
          specs: '1.1-2.0ATA / 225cm×ø81cm',
          image:
            'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 6,
          name: 'OXYSYS 4000/4500',
          description: '소프트타입 고압산소치료기 - 휴대성과 편의성',
          features: ['소프트 챔버', '휴대 가능', '간편 설치'],
          specs: '1.1-1.3ATA / 200cm×ø70-90cm',
          image:
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleInquiry(productName) {
      // 제품 문의 처리 로직
      const message = `안녕하세요! ${productName} 제품에 대해 문의드리고 싶습니다.`;
      const phone = '02-715-0607';

      if (confirm(`${productName} 제품 문의를 위해 전화 연결하시겠습니까?`)) {
        window.location.href = `tel:${phone}`;
      }
    },

    goToLocation() {
      // 위치 페이지로 이동하는 로직 (Vue Router 사용시)
      // this.$router.push('/location');
      alert('위치 페이지로 이동합니다.');
    },
  },
};
</script>

<style scoped>
/* 추가적인 스타일이 필요한 경우 여기에 작성 */
</style>
