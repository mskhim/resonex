<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <div class="mb-6 relative">
          <img
            src="/products/tower/hero.png"
            alt="공명짐 제품"
            class="w-full h-64 md:h-80 object-cover object-bottom shadow-2xl"
          />
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-12 md:mt-30">
              <span class="text-1xl md:text-2xl text-white"> Tower Pully </span>
              <h1
                class="text-4xl md:text-5xl font-bold mt-5 mb-6 text-white program-title"
              >
                타워풀리
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 제품 이미지 갤러리 -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-16">
          <img
            src="/products/tower/aceBodyLogo.png"
            alt="타워풀리 로고"
            class="w-50 mx-auto mb-4"
          />
          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              ※ 품절유무, 할인유무, 상세페이지 내용은 링크접속하여 확인
              부탁드립니다.
            </p>
          </div>
        </div>
        <!-- 제품 이미지들 -->
        <div class="space-y-4">
          <div
            v-for="(image, index) in productImages"
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

        <!-- 문의 버튼 -->
        <div class="text-center mt-12">
          <button
            @click="handleInquiry"
            class="bg-indigo-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-indigo-700 transition-colors duration-200 text-lg"
          >
            제품 문의하기
          </button>
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
      productImages: [
        {
          url: '/products/tower/tower1.jpg',
          alt: '타워풀리 제품 이미지 1',
        },
        {
          url: '/products/tower/tower2.jpg',
          alt: '타워풀리 제품 이미지 2',
        },
        {
          url: '/products/tower/tower3.jpg',
          alt: '타워풀리 제품 이미지 3',
        },
        {
          url: '/products/tower/tower4.jpg',
          alt: '타워풀리 제품 이미지 4',
        },
        {
          url: '/products/tower/tower5.jpg',
          alt: '타워풀리 제품 이미지 5',
        },
        {
          url: '/products/tower/tower6.jpg',
          alt: '타워풀리 제품 이미지 6',
        },
        {
          url: '/products/tower/tower7.jpg',
          alt: '타워풀리 제품 이미지 7',
        },
        {
          url: '/products/tower/tower8.jpg',
          alt: '타워풀리 제품 이미지 8',
        },
        {
          url: '/products/tower/tower9.jpg',
          alt: '타워풀리 제품 이미지 9',
        },
        {
          url: '/products/tower/tower10.jpg',
          alt: '타워풀리 제품 이미지 10',
        },
        {
          url: '/products/tower/tower11.png',
          alt: '타워풀리 제품 이미지 11',
        },
        {
          url: '/products/tower/tower12.png',
          alt: '타워풀리 제품 이미지 12',
        },
        {
          url: '/products/tower/tower13.png',
          alt: '타워풀리 제품 이미지 13',
        },
        {
          url: '/products/tower/tower14.png',
          alt: '타워풀리 제품 이미지 14',
        },
        {
          url: '/products/tower/tower15.png',
          alt: '타워풀리 제품 이미지 15',
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleInquiry() {
      if (confirm('제품 문의를 위해 카카오톡으로 연결하시겠습니까?')) {
        window.open('http://pf.kakao.com/_RJVsn', '_blank');
      }
    },
  },
};
</script>
