<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <div class="mb-6 relative">
          <img
            src="/products/powerplate/powerplateHr.jpg"
            alt="파워플레이트"
            class="w-full h-64 md:h-80 object-cover object-bottom shadow-2xl"
          />
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-12 md:mt-30">
              <span class="text-xl md:text-2xl text-white">POWER PLATE</span>
              <h1 class="text-4xl md:text-5xl font-bold mt-5 mb-6 text-white">
                파워플레이트
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
            src="/products/powerplate/powerPlateLogo.png"
            alt="Power Plate Logo"
            class="w-50 mx-auto mb-4 p-3"
          />
          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              ※ 품절유무, 할인유무, 상세페이지 내용은 링크접속하여 확인
              부탁드립니다.
            </p>
          </div>
        </div>

        <!-- 가정용 모델 섹션 -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              가정용 모델
            </h3>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div class="space-y-16">
            <div
              v-for="(product, index) in homeProducts"
              :key="product.id"
              :class="['bg-white rounded-2xl shadow-lg p-8']"
            >
              <div
                :class="[
                  'flex flex-col lg:flex-row items-center gap-8 mb-8',
                  index % 2 === 1 ? 'lg:flex-row-reverse' : '',
                ]"
              >
                <div class="w-full lg:w-1/2">
                  <div class="relative">
                    <img
                      :src="product.image"
                      :alt="product.name"
                      class="w-full h-80 object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
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
                  <div class="space-y-2">
                    <h5 class="font-semibold text-gray-800 mb-3">주요 특징</h5>
                    <div
                      v-for="(feature, featureIndex) in product.features"
                      :key="featureIndex"
                      class="flex items-start"
                    >
                      <div
                        :class="[
                          'w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0',
                        ]"
                      ></div>
                      <span class="text-gray-700">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="['p-6 rounded-xl', 'bg-gray-50']">
                <h5 class="font-semibold text-gray-800 mb-4">제품 스펙</h5>
                <div
                  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm"
                >
                  <div v-for="(value, key) in product.specs" :key="key">
                    <span class="text-gray-600">{{ key }}:</span>
                    <p class="font-medium">{{ value }}</p>
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

        <!-- 프로페셔널 모델 섹션 -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              전문가 모델
            </h3>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div class="space-y-16">
            <div
              v-for="(product, index) in proProducts"
              :key="product.id"
              :class="['bg-white rounded-2xl shadow-lg p-8']"
            >
              <div
                :class="[
                  'flex flex-col lg:flex-row items-center gap-8 mb-8',
                  index % 2 === 1 ? 'lg:flex-row-reverse' : '',
                ]"
              >
                <div class="w-full lg:w-1/2">
                  <div class="relative">
                    <img
                      :src="product.image"
                      :alt="product.name"
                      class="w-full h-80 object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
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
                  <div class="space-y-2">
                    <h5 class="font-semibold text-gray-800 mb-3">주요 특징</h5>
                    <div
                      v-for="(feature, featureIndex) in product.features"
                      :key="featureIndex"
                      class="flex items-start"
                    >
                      <div
                        :class="[
                          'w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0',
                        ]"
                      ></div>
                      <span class="text-gray-700">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="['p-6 rounded-xl', 'bg-gray-50']">
                <h5 class="font-semibold text-gray-800 mb-4">제품 스펙</h5>
                <div
                  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm"
                >
                  <div v-for="(value, key) in product.specs" :key="key">
                    <span class="text-gray-600">{{ key }}:</span>
                    <p class="font-medium">{{ value }}</p>
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
              파워플레이트 전문 컨설턴트인 공명짐이 최적의 솔루션을
              제공해드립니다.
            </p>
            <button
              @click="handleGeneralInquiry"
              class="bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              제품 상담 문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PowerPlate',
  inject: ['inquiryLink'],
  data() {
    return {
      homeProducts: [
        {
          id: 1,
          name: 'PowerPlate MOVE',
          description:
            "파워플레이트 무브로 '무브' 할 준비를 하라! 크기와 기능 면에서 완벽한 조화를 이루는 제품입니다. 성능 저하 없이 최대한 공간을 절약할 수 있도록 설계되었습니다.",
          features: [
            '약 136kg까지 지탱 가능한 내구성',
            '쉽게 옮길 수 있을 정도로 가벼운 무게',
            '9분 타이머와 간단한 플레이 버튼 조작',
            '단체 수업에 최적화된 설계',
          ],
          specs: {
            색상: '레드, 화이트, 블랙',
            크기: '77cm×61cm×23cm',
            '플랫폼 크기': '77cm×57.6cm',
            무게: '39.5kg (패키지포함: 45.3kg)',
            전원: 'AC 100-240V, 50/60Hz',
            '출력 전력': '180W',
            진동수: '레벨 6개 (30-40Hz)',
            진폭: '30Hz, 35Hz, 40Hz',
            보증기간: '하드웨어 3년/전자기기 1년/AS 1년',
          },
          image: '/products/powerplate/move.png',
          isDiscount: false,
        },
        {
          id: 2,
          name: 'PowerPlate MY7',
          description:
            '퍼포먼스에 영감을 받다. 250가지 이상의 프로그램과 1000가지 이상의 운동 비디오, 백만 가지 이상의 조합을 탑재한 혁신적인 운동기구입니다.',
          features: [
            '250가지 이상의 프로그램',
            '1000가지 이상의 운동 비디오',
            '통합된 터치 스크린 컴퓨터 내장',
            '저항 케이블을 이용한 프로모션 기술',
          ],
          specs: {
            색상: '실버, 화이트, 블랙',
            크기: '84cm×98cm×150cm',
            '플랫폼 크기': '84cm×70cm',
            무게: '150kg',
            전원: 'AC 100-240V, 160-320VA',
            '출력 전력': '180W',
            진동수: '레벨 7개 (30~40Hz)',
            보증서: 'CE, EMC, RoHS/WEEE, FDA 1등급',
            보증기간: '하드웨어 3년/전자기기 1년/AS 1년',
          },
          image: '/products/powerplate/my7.png',
          isDiscount: false,
        },
      ],
      proProducts: [
        {
          id: 4,
          name: 'PowerPlate Pro5',
          description:
            '상급 피트니스 레벨을 위한 전신 진동 운동 분야의 최고점. 최신 기술로 넓은 범위의 효용성과 시간 세팅을 한 데 모았습니다.',
          features: [
            '가정에서의 건강 관리에 최적',
            '큰 플레이트판으로 더 많은 진동 전달',
            '미용, 피트니스, 의료 재활 운동 지원',
            '액티브 에이징 프로그램 포함',
          ],
          specs: {
            색상: '실버, 화이트',
            크기: '87cm×107cm×156cm',
            '플랫폼 크기': '86.3cm×76.2cm',
            무게: '162kg (패키지포함)',
            전원: 'AC 100-240V',
            '공진 전력': '160-265VA',
            진동수: '25-50Hz (5Hz씩 증가)',
            보증서: 'CE, PSE',
            보증기간: '하드웨어 3년/전자기기 1년/AS 1년',
          },
          image: '/products/powerplate/pro5.png',
          isDiscount: false,
        },
        {
          id: 5,
          name: 'PowerPlate Pro5HP',
          description:
            '실용적인 운동기구로 하는 운동. 전 세계 운동선수들의 니즈를 충족시키려는 목적으로 디자인된 하이 퍼포먼스 모델입니다.',
          features: [
            '기둥을 없앤 혁신적 디자인',
            '360가지 단계의 정렬된 모션',
            '다른 장비들과 결합 가능',
            '리모컨으로 간편한 세팅 조절',
          ],
          specs: {
            색상: '매트 블랙',
            크기: '96cm×116cm×30cm',
            '플랫폼 크기': '96cm×95cm',
            무게: '180kg (패키지포함)',
            전원: '100-240 VAC, 50/60Hz',
            전압량: '160-265VA',
            진동수: '25-50Hz',
            보증서: 'CE, PSE',
            보증기간: '하드웨어 3년/전자기기 1년/AS 1년',
          },
          image: '/products/powerplate/pro5hp.png',
          isDiscount: false,
        },
        {
          id: 6,
          name: 'PowerPlate Pro7',
          description:
            '운동 퍼포먼스를 위한 24년 궁극의 모델. 기존 프로그램의 절반 시간 안에 단 한 세션만으로 변화를 느낄 수 있습니다.',
          features: [
            'LCD 터치스크린 장착',
            '기능적 상호작용 트레이닝 소프트웨어(F.I.T)',
            '내장형 프로모션 다방향 케이블',
            '가장 거대한 파워플레이트 플랫폼',
          ],
          specs: {
            색상: '매트 블랙, 화이트',
            크기: '96cm×116cm×152cm',
            '플랫폼 크기': '96cm×81cm',
            무게: '186kg (패키지포함)',
            전원: '100-240 VAC, 50/60Hz',
            전압량: '160-265VA',
            진동수: '25-50Hz (1Hz씩 증가)',
            보증서: 'CE, PSE',
            보증기간: '하드웨어 3년/전자기기 1년/AS 1년',
          },
          image: '/products/powerplate/pro7.png',
          isDiscount: false,
        },
        {
          id: 7,
          name: 'PowerPlate Pro8',
          description:
            '운동 퍼포먼스를 위한 25년 궁극의 모델. 최상급 프로페셔널 모델로 신제품 출시 기념 특가 할인 중입니다.',
          features: [
            '최상급 성능',
            '최신 기술 적용',
            '전문가 추천 모델',
            '프리미엄 설계',
          ],
          specs: {
            상태: '신제품 출시',
            특징: '25년 궁극의 모델',
            등급: '최상급 프로페셔널',
            설계: '프리미엄 설계',
            할인: '20% 특가 할인',
            보증기간: '하드웨어 3년/전자기기 1년/AS 1년',
          },
          image: '/products/powerplate/pro8.png',
          isDiscount: true,
          discount: '20% 할인',
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleGeneralInquiry() {
      if (
        confirm('파워플레이트 제품 상담을 위해 카카오톡으로 연결하시겠습니까?')
      ) {
        window.open(this.inquiryLink, '_blank');
      }
    },
  },
};
</script>

<style scoped>
/* 추가적인 스타일이 필요한 경우 여기에 작성 */
</style>
