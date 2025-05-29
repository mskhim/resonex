<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <div class="mb-6 relative">
          <img
            src="/products/zeroi/hero.jpg"
            alt="공명짐 제품"
            class="w-full h-64 md:h-80 object-cover shadow-2xl"
          />
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-12 md:mt-30">
              <span class="text-xl md:text-2xl text-white">Zero-I</span>
              <h1 class="text-4xl md:text-5xl font-bold mt-5 mb-6 text-white">
                제로아이
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 제로아이 섹션 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <img
            src="/products/zeroi/zeroiLogo.png"
            alt="Power Plate Logo"
            class="w-50 mx-auto mb-4"
          />
          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              ※ 품절유무, 할인유무, 상세페이지 내용은 링크접속하여 확인
              부탁드립니다.
            </p>
          </div>
        </div>

        <!-- 제로아이 제품 카드 (파워플레이트 스타일) -->
        <div class="space-y-16 mb-20">
          <div
            v-for="(product, index) in zeroiProducts"
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
                class="w-full h-80 object-contain rounded-2xl shadow-lg"
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
                  v-for="(muscle, featureIndex) in product.targetMuscles"
                  :key="featureIndex"
                  class="flex items-center"
                >
                  <div class="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span class="text-gray-700">{{ muscle }}</span>
                </div>
              </div>

              <!-- 사이즈 정보 -->
              <div class="bg-gray-50 p-4 rounded-xl">
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span class="text-gray-600">사이즈:</span>
                    <p class="font-medium">{{ product.size }}</p>
                  </div>
                  <div>
                    <span class="text-gray-600">중량:</span>
                    <p class="font-medium">{{ product.weight }}</p>
                  </div>
                </div>
              </div>

              <!-- 문의 버튼 -->
              <button
                @click="handleZeroiInquiry(product.name)"
                class="w-full lg:w-auto bg-emerald-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-emerald-700 transition-colors duration-200"
              >
                제품 문의하기
              </button>
            </div>
          </div>
        </div>

        <!-- 추가 상세 이미지 (타워풀리 스타일) -->
        <div class="text-center mb-12 grid md:grid-cols-2 gap-4">
          <div
            v-for="(image, index) in zeroiDetailImages"
            :key="index"
            class="w-full"
          >
            <img
              :src="image.url"
              :alt="image.alt"
              class="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 제로아이 상세정보 모달 -->
    <!-- 모달 제거됨 -->
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      showZeroiModal: false,
      selectedZeroiProduct: null,

      tabs: [
        { id: 'powerplate', name: 'PowerPlate' },
        { id: 'zeroi', name: 'Zero-i' },
        { id: 'towerpully', name: 'Tower Pully' },
      ],

      zeroiDetailImages: [
        { url: '/products/zeroi/zeroi1.png', alt: '제로아이 상세 이미지 1' },
        { url: '/products/zeroi/zeroi2.png', alt: '제로아이 상세 이미지 2' },
        { url: '/products/zeroi/zeroi3.png', alt: '제로아이 상세 이미지 3' },
        { url: '/products/zeroi/zeroi4.png', alt: '제로아이 상세 이미지 4' },
        { url: '/products/zeroi/zeroi5.png', alt: '제로아이 상세 이미지 5' },
        { url: '/products/zeroi/zeroi6.png', alt: '제로아이 상세 이미지 6' },
      ],

      zeroiProducts: [
        {
          id: 1,
          name: 'Chest Extension',
          description:
            '가슴과 어깨 스트레칭으로 견갑골 가동성을 개선하고 심폐기능을 강화합니다.',
          targetMuscles: ['대흉근', '삼각근', '복직근', '상완삼두근'],
          size: 'W 950 × D 1,350 × H 1,650 mm',
          weight: '71kg',
          color: '화이트 / 블랙',
          system: '스프링식 (스프링 5개)',
          purpose:
            '가슴과 어깨 스트레칭 머신입니다. 견갑골을 뒤로 가동시켜 흉곽이 열립니다. 호흡근 활동을 개선시켜 심폐기능을 강화시킵니다.',
          specifications: '스프링식 / 스프링 개수 5개 / 이동용 바퀴',
          image: '/products/zeroi/chest-extention.png',
        },
        {
          id: 2,
          name: 'Shoulder Elevation',
          description:
            '등 상부와 어깨 주위 스트레칭으로 견갑골 움직임을 개선합니다.',
          targetMuscles: ['광배근', '능형근', '견갑거근', '삼각근'],
          size: 'W 920 × D 1,300 × H 1,300 mm',
          weight: '62kg',
          color: '화이트 / 블랙',
          system: '스프링식 (스프링 5개)',
          purpose:
            '등 상부·어깨 주위를 스트레칭하는 머신입니다. 팔의 움직임과 동시에 견갑골을 움직이면 상체가 편안합니다.',
          specifications:
            '스프링식 / 스프링 개수 5개 / 이동용 바퀴, 착석 높이 조정 / 손잡이(반월 모양) 가동영역 조정',
          image: '/products/zeroi/shoulder-elevation.png',
        },
        {
          id: 3,
          name: 'Adductor Extension',
          description:
            '고관절 주위 근육을 부드럽게 스트레칭하는 대형 머신입니다.',
          targetMuscles: ['고관절 주변근육', '내전근군'],
          size: 'W 1,450 × D 1,430 × H 1,150 mm',
          weight: '93kg',
          color: '화이트 / 블랙',
          system: '스프링식 (스프링 5개)',
          purpose:
            '고관절 주위를 스트레칭하는 머신입니다. 고관절 주변의 근육을 부드럽게 합니다.',
          specifications:
            '스프링식 / 스프링 개수 5개 / 이동용 바퀴 / 엉덩관절 가동영역 조정',
          image: '/products/zeroi/adductor-extention.png',
        },
        {
          id: 4,
          name: 'Hip Flex',
          description:
            '엉덩이 전체 스트레칭으로 스포츠에 중요한 트위스트 동작을 촉진합니다.',
          targetMuscles: ['고관절', '엉덩이 주변근육', '내전근군', '외전근'],
          size: 'W 600 × D 950 × H 1,100 mm',
          weight: '60kg',
          color: '화이트 / 블랙',
          system: '스프링식 (스프링 5개)',
          purpose:
            '엉덩이 전체를 스트레칭하는 머신입니다. 야구 타격 골프스윙으로 대표되는 모든 스포츠에 중요한 트위스트 동작을 촉진합니다.',
          specifications: '스프링식 / 스프링 개수 5개 / 이동용 캐스터',
          image: '/products/zeroi/hip-flex.png',
        },
        {
          id: 5,
          name: 'Crus Extension',
          description:
            '하체 중심 스트레칭으로 운동 시 하지 부상 예방에 효과적입니다.',
          targetMuscles: ['햄스트링', '하퇴 삼두근', '대둔근', '대퇴사두근'],
          size: 'W 600 × D 1,930 × H 1,500 mm',
          weight: '135kg',
          color: '화이트 / 블랙',
          system: '스프링식 (스프링 5개)',
          purpose:
            '하체를 중심으로 스트레칭을 하는 머신입니다. 운동시 하지 부상 예방을 기대할 수 있습니다.',
          specifications:
            '스프링식 / 스프링 개수 5개 / 착석 높이 조절 / 이동용 캐스터',
          image: '/products/zeroi/crus-extention.png',
        },
        {
          id: 6,
          name: 'Spiral',
          description:
            '견갑골 상하 슬라이드와 비틀림 동작으로 상체 전체를 스트레칭합니다.',
          targetMuscles: ['척추부', '승모근', '상완삼두근'],
          size: 'W 1,100 × D 1,450 × H 2,280 mm',
          weight: '93kg',
          color: '화이트 / 블랙',
          system: '스프링식 (스프링 5개)',
          purpose:
            '견갑골을 상하로 슬라이드 시키는 머신입니다. 좌우 견갑골을 분리하여 동작하기 때문에 상체 전체를 스트레칭하는 것이 가능합니다. 또한, 비틀림 동작을 할 수 있기 때문에 척추에 대한 접근법과 어깨의 피로, 자세의 개선을 기대할 수 있습니다.',
          specifications: '스프링식 / 스프링 개수 5개 / 이동용 캐스터',
          image: '/products/zeroi/spiral.jpg',
        },
        {
          id: 7,
          name: 'Rotation',
          description:
            '척추부 스트레칭과 골반 움직임으로 상하반신 연동을 개선합니다.',
          targetMuscles: ['척추부', '골반'],
          size: 'W 600 × D 1,100 × H 950 mm',
          weight: '30kg',
          color: '화이트 / 블랙',
          system: '스프링식',
          purpose:
            '척추부(주변)를 스트레치하는 머신입니다. 비틀림 동작이나 골반 주위를 전후 좌우로 움직이는 것으로 상반신과 하반신의 연동을 기대할 수 있습니다.',
          specifications: 'W 600 × D 1,100 × H 950 mm',
          image: '/products/zeroi/rotation.png',
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    showZeroiDetail(product) {
      this.selectedZeroiProduct = product;
      this.showZeroiModal = true;
    },

    handleInquiry(productName) {
      const message = `안녕하세요! ${productName} 제품에 대해 문의드리고 싶습니다.`;
      const phone = '02-715-0607';

      if (confirm(`${productName} 제품 문의를 위해 전화 연결하시겠습니까?`)) {
        window.location.href = `tel:${phone}`;
      }
    },

    handleZeroiInquiry(productName) {
      if (
        confirm(
          `${productName} 제품 문의를 위해 카카오톡으로 연결하시겠습니까?`
        )
      ) {
        window.open('http://pf.kakao.com/_RJVsn', '_blank');
      }
    },

    handleTowerPullyInquiry() {
      if (confirm('타워풀리 제품 문의를 위해 카카오톡으로 연결하시겠습니까?')) {
        window.open('http://pf.kakao.com/_RJVsn', '_blank');
      }
    },
  },
};
</script>

<style scoped>
.program-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
