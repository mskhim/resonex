<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <!-- 대형 이미지 with 오버레이 -->
        <div class="mb-6 relative">
          <img
            src="/products/align/hero.png"
            alt="공명짐 제품"
            class="w-full h-64 md:h-80 object-cover object-bottom shadow-2xl"
          />
          <!-- 어두운 오버레이 -->
          <div class="absolute inset-0 bg-black/60"></div>

          <!-- 텍스트 내용 -->
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-12 md:mt-30">
              <span class="text-xl md:text-2xl text-white"> Pilates </span>
              <h1
                class="text-4xl md:text-5xl font-bold mt-5 mb-6 text-white program-title"
              >
                필라테스
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
          <img
            src="/products/align/alignpilateslogo.svg"
            alt="Align Pilates Logo"
            class="w-50 mx-auto mb-4"
          />

          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              ※ 품절유무, 할인유무, 상세페이지 내용은 링크접속하여 확인
              부탁드립니다.
            </p>
          </div>
        </div>
        <!-- 제품 상세 정보 섹션 -->
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12"></div>

            <!-- 상세 이미지 그리드 (수정된 부분) -->
            <div class="grid gap-8">
              <div
                v-for="(detail, index) in detailImages"
                :key="index"
                class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
              >
                <!-- 이미지 -->
                <div class="overflow-hidden">
                  <img
                    :src="detail.src"
                    :alt="detail.alt"
                    class="h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="space-y-16">
          <div
            v-for="(product, index) in powerPlateProducts"
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
                class="w-full h-96 object-contain rounded-2xl shadow-lg"
              />
            </div>

            <!-- 제품 정보 -->
            <div class="w-full lg:w-1/2 space-y-6">
              <div>
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {{ product.name }}
                </h3>
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

              <!-- 문의 버튼 -->
              <button
                @click="handleInquiry(product.name)"
                class="w-full lg:w-auto bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                스마트 스토어 방문
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
  name: 'Products',
  data() {
    return {
      powerPlateProducts: [
        {
          id: 1,
          name: 'A2 Full Pilates Cadillac',
          description:
            '개인용 진동 플랫폼으로 가정에서 간편하게 사용할 수 있는 컴팩트한 모델입니다.',
          features: [
            '풀 스테인리스 프레임',
            '조절 가능한 팔걸이',
            '효과적인 다섯 가지 포지션',
            '높이 조절 가능',
          ],
          price: '₩2,900,000',
          image: '/products/align/a2.png', // 실제 이미지 URL로 변경 필요
        },
        {
          id: 2,
          name: 'A8-Pro Pilates Reformer With Half Cadillac',
          description:
            '중급 사용자를 위한 다기능 진동 플랫폼으로 다양한 운동 프로그램을 제공합니다.',
          features: [
            '레이피드 체인지 스프링 바 장착',
            '편안한 라지 사이즈 베드',
            '플랫 포지션을 포함해 6가지의 풋바 포지션',
            '간편한 로프 조절 시스템',
          ],
          price: '₩7,700,000',
          image: '/products/align/a8.png', // 실제 이미지 URL로 변경 필요
        },
        {
          id: 3,
          name: 'Combo Chair III – Flat Packed',
          description: '최신 기술이 적용된 신제품으로 현재 특가 할인 중입니다.',
          features: [
            '완벽한 견고함',
            '팔 운동을 위한 저항 밴드 연결 가능',
            '부드러운 움직임',
            '핸들로 추가적인 운동 동작 수행',
          ],
          originalPrice: '₩12,100,000',
          price: '₩9,680,000',
          discount: '20% 할인',
          note: '신제품 할인중',
          image: '/products/align/combo.jpg', // 실제 이미지 URL로 변경 필요
        },
        {
          id: 4,
          name: 'Ladder Barrel RC',
          description:
            '전문 트레이너와 피트니스 센터를 위한 프로페셔널 모델입니다.',
          features: [
            '더 발전된 안정성과 내구성',
            '메이플우드 소재의 사다리 디딤대',
            '부드러운 촉감의 발디딤대',
          ],
          price: '₩10,340,000',
          image: '/products/align/barrel.jpg', // 실제 이미지 URL로 변경 필요
        },
      ],
      detailImages: [
        {
          src: '/products/align/detail1.png',
          alt: '필라테스 기능 상세',
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
          src: '/products/align/detail2.png',
          alt: '필라테스 인터페이스',
          title: '직관적인 사용자 인터페이스',
          description:
            '사용자 편의성을 고려한 직관적인 인터페이스로 누구나 쉽게 사용할 수 있도록 설계되었습니다. 복잡한 설정 없이도 바로 사용 가능합니다.',
          points: [
            '터치스크린 기반 간편 조작',
            '다국어 지원 (한국어, 영어)',
            '사용자 맞춤 설정 저장 기능',
          ],
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
