<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <div class="mb-6 relative">
          <img
            src="/products/fitness/hero.jpg"
            alt="렉스코 헬스기구"
            class="w-full h-64 md:h-80 object-cover object-bottom shadow-2xl"
          />
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-12 md:mt-30">
              <span class="text-xl md:text-2xl text-white">LEXCO</span>
              <h1 class="text-4xl md:text-5xl font-bold mt-5 mb-6 text-white">
                렉스코 헬스기구
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 브랜드 소개 섹션 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <img
            src="/products/fitness/lexcologo.png"
            alt="Lexco Logo"
            class="w-50 mx-auto mb-4 bg-black p-3"
          />
          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              ※ 품절유무, 할인유무, 상세페이지 내용은 링크접속하여 확인
              부탁드립니다.
            </p>
          </div>
        </div>

        <!-- 유산소 기구 섹션 -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              유산소 기구
            </h3>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div class="space-y-16">
            <div
              v-for="(product, index) in cardioProducts"
              :key="product.id"
              class="bg-white rounded-2xl shadow-lg p-8"
            >
              <!-- 상단: 이미지 + 제품정보 + 주요기능 (2/1 레이아웃) -->
              <div
                :class="[
                  'flex flex-col lg:flex-row items-center gap-8 mb-8',
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

                <!-- 제품 정보 + 주요 기능 -->
                <div class="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h4
                      class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3"
                    >
                      {{ product.name }}
                    </h4>
                    <p class="text-gray-600 leading-relaxed mb-4">
                      {{ product.description }}
                    </p>
                  </div>

                  <!-- 주요 기능 -->
                  <div class="space-y-2">
                    <h5 class="font-semibold text-gray-800 mb-3">주요 기능</h5>
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

              <!-- 하단: 제품 스펙 (전체 너비) -->
              <div class="bg-gray-50 p-6 rounded-xl">
                <h5 class="font-semibold text-gray-800 mb-4">제품 스펙</h5>
                <div
                  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm"
                >
                  <div v-for="(spec, key) in product.specs" :key="key">
                    <span class="text-gray-600">{{ key }}:</span>
                    <p class="font-medium">{{ spec }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 모던한 섹션 구분선 -->
        <div class="relative mb-20">
          <div class="absolute inset-0 flex items-center">
            <div
              class="w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"
            ></div>
          </div>
          <div class="relative flex justify-center">
            <div class="bg-white px-8">
              <div class="flex items-center space-x-4">
                <div class="w-3 h-3 bg-blue-600 rounded-full opacity-60"></div>
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div class="w-3 h-3 bg-blue-600 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 웨이트 기구 섹션 -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              웨이트 기구
            </h3>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <!-- 웨이트 시리즈 소개 -->
          <div class="mb-12 p-6 bg-blue-50 rounded-2xl">
            <h4 class="text-xl font-bold text-gray-900 mb-4">
              렉스코 웨이트 시리즈
            </h4>
            <p class="text-gray-600 leading-relaxed">
              인체공학적 디자인을 추가함으로써 운동효과와 편의성의 극대화를
              추구합니다. ABS 사출커버, 와이어 이탈방지 롤러, 그리고 곡선형
              메모리 폼 등을 적용되어 기능성과 안정성에 미적 요소가 통합된
              렉스코 최고의 웨이트 시리즈입니다.
            </p>
          </div>

          <!-- 웨이트 시리즈 카드 -->
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="series in weightSeries"
              :key="series.id"
              class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h4 class="text-xl font-bold text-gray-900">
                    {{ series.name }}
                  </h4>
                </div>
                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ series.description }}
                </p>

                <!-- 특징 -->
                <div class="space-y-2 mb-6">
                  <div
                    v-for="(feature, index) in series.features"
                    :key="index"
                    class="flex items-start"
                  >
                    <div
                      class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2"
                    ></div>
                    <span class="text-sm text-gray-700">{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 연락처 CTA -->
        <div class="text-center">
          <div
            class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
          >
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              지금 바로 공명짐에게 문의하세요!
            </h3>
            <p class="text-gray-600 mb-6">
              렉스코 대표 컨설턴트인 공명짐이 최적의 솔루션을 제공해드립니다.
            </p>
            <button
              @click="handleGeneralInquiry"
              class="bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              제품 문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LexcoFitness',
  inject: ['inquiryLink'], // App.vue에서 provide한 값 주입
  data() {
    return {
      cardioProducts: [
        {
          id: 1,
          name: '트레드밀 - LT8xA',
          description:
            '23인치 정전식 터치스크린 안드로이드 OS 기반으로 30개의 트레킹코스, 인터넷 유튜브, TV 시청 및 휴대폰을 이용한 스마트 미러링, 블루투스 기능을 제공합니다.',
          features: [
            '듀얼 속도 경사 버튼',
            '첨단 무급 유데크',
            '휴대폰 무선충전시스템',
            '미끄럼방지 벨트',
            '후방안전가드',
            '자동 장력조절 기능의 벨트 오토텐셔너',
            'TV 전용 이어폰단자',
            'USB 단자 (데이터 전송 및 휴대폰 충전)',
            '비상정지 버튼 & 클립',
          ],
          specs: {
            경사도: '0 ~ 16%',
            속도: '0.5 ~ 20km/h',
            '제품 크기': 'L2,110 x W920 x H1,620mm',
            '런닝 면적': 'L1,600 x W540mm',
            '제품 무게': '200kg(440lbs)',
            최대허용중량: '200kg',
            '제품 정격': 'AC 220V, 50Hz ~ 60Hz, 10A',
          },
          image: '/products/fitness/lt8xa.jpg',
        },
        {
          id: 2,
          name: '입식 싸이클 - LU8A',
          description:
            '15.6인치 정전식 터치스크린 안드로이드OS기반으로 인터넷, 동영상, TV시청, 휴대폰을 이용한 스마트 미러링, 블루투스 기능을 제공합니다.',
          features: [
            '30단계 부하조절시스템',
            '속도, 시간, 거리, WATTS, RPM, CAL, LEVEL 정보 제공',
            '3개의 사용자프로그램',
            '10개의 운동프로그램',
            '자가발전식 부하조절시스템',
            '휴대폰 거치대',
            '휴대폰 충전 전용 USB단자',
            '듀얼 강도조절 버튼',
            '접촉식 심박측정 손잡이',
          ],
          specs: {
            모니터: '내장형 15.6 터치스크린 LED',
            디스플레이: '안드로이드 UI',
            부하시스템: '자가발전',
            '입력 전원': 'AC220V, 50Hz ~ 60Hz',
            '제품 크기': 'L1,040 x W615 x H1,490mm',
            '제품 무게': '65.5kg(144lbs)',
            '최대 허용 중량': '180kg(397lbs)',
          },
          image: '/products/fitness/lu8a.jpg',
        },
        {
          id: 3,
          name: '좌식 사이클 - LR8A',
          description:
            '15.6인치 정전식 터치스크린 안드로이드OS기반으로 인터넷, 동영상, TV시청, 휴대폰을 이용한 스마트 미러링, 블루투스 기능을 제공합니다.',
          features: [
            '30단계 부하조절시스템',
            '속도, 시간, 거리, WATTS, RPM, CAL, LEVEL 정보 제공',
            '3개의 사용자프로그램',
            '10개의 운동프로그램',
            '자가발전식 부하조절시스템',
            '휴대폰 거치대',
            '휴대폰 충전 전용 USB단자',
            '듀얼 강도조절 버튼',
            '접촉식 심박측정 손잡이',
          ],
          specs: {
            모니터: '내장형 15.6 터치스크린 LED',
            디스플레이: '안드로이드 UI',
            부하시스템: '자가발전',
            '입력 전원': 'AC220V, 50Hz ~ 60Hz',
            '제품 크기': 'L1,740 x W640 x H1,380mm',
            '제품 무게': '87.5kg(193lbs)',
            '최대 허용 중량': '180kg(397lbs)',
          },
          image: '/products/fitness/lr8a.jpg',
        },
      ],

      weightSeries: [
        {
          id: 1,
          name: 'FALCON',
          description:
            '신체 부위별 근육 발달에 특화된 구동방식이 적용된 최고급 웨이트 시리즈입니다.',
          features: [
            '가스 스프링 쇼바 방식의 조절 레버',
            '푸시 버튼 피넛 모션',
            '스타트바',
            '좌우 독립 구동핸들',
            '곡선형 메모리 시트',
            'ABS 사출 커버',
            '인체공학적 디자인',
          ],
        },
        {
          id: 2,
          name: 'MASTER PRO',
          description:
            '더 기능적인 훈련을 목표로 설계된 프로페셔널 웨이트 시리즈입니다.',
          features: [
            '조절 가능한 시트 포지션',
            '등받이 포지션 조절',
            '10단 가스 스프링 렉 기어 장치',
            '푸시버 피벗',
            '다양한 핸드 그립',
            '목표 근육 고립화',
            '전문가용 설계',
          ],
        },
        {
          id: 3,
          name: 'MASTER',
          description:
            '다이렉트한 움직임으로 목표 근육에 자극이 최대로 집중되는 시리즈입니다.',
          features: [
            '다이렉트한 움직임',
            '목표 근육 최대 자극',
            '고급 ABS 사출 커버',
            '견고한 프레임',
            '곡선형 메모리 폼 시트',
            '전문가와 일반 사용자 최적화',
            '최적의 상호작용',
          ],
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleGeneralInquiry() {
      if (confirm('렉스코 종합 상담을 위해 카카오톡으로 연결하시겠습니까?')) {
        window.open(this.inquiryLink, '_blank');
      }
    },
  },
};
</script>

<style scoped>
/* 추가적인 스타일이 필요한 경우 여기에 작성 */
</style>
