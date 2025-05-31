<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <div class="mb-6 relative">
          <img
            src="/products/cap/cap1.jpg"
            alt="산소캡슐"
            class="w-full h-64 md:h-80 object-cover object-bottom shadow-2xl"
          />
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-12 md:mt-30">
              <span class="text-xl md:text-2xl text-white">OXYGEN CAPSULE</span>
              <h1 class="text-4xl md:text-5xl font-bold mt-5 mb-6 text-white">
                산소캡슐
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
            src="/mainLogo.png"
            alt="Lexco Logo"
            class="w-50 mx-auto mb-4 p-3"
          />
          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              ※ 품절유무, 할인유무, 상세페이지 내용은 링크접속하여 확인
              부탁드립니다.
            </p>
          </div>
        </div>

        <!-- 고압 산소캡슐 섹션 -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              고압 산소캡슐
            </h3>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div class="space-y-16">
            <div
              v-for="(product, index) in oxygenProducts"
              :key="product.id"
              class="bg-white rounded-2xl shadow-lg p-8"
            >
              <!-- 상단: 이미지 + 제품정보 (1:1 레이아웃) -->
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

                <!-- 제품 정보 -->
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
                      class="flex items-start"
                    >
                      <div
                        class="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"
                      ></div>
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

        <!-- 펫 챔버 섹션 -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              펫 챔버
            </h3>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <!-- 펫 챔버 카드 -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <!-- 상단: 이미지 + 제품정보 (1:1 레이아웃) -->
            <div class="flex flex-col lg:flex-row items-center gap-8 mb-8">
              <!-- 이미지 -->
              <div class="w-full lg:w-1/2">
                <img
                  :src="petChamber.image"
                  :alt="petChamber.name"
                  class="w-full h-80 object-contain rounded-2xl shadow-lg"
                />
              </div>

              <!-- 제품 정보 -->
              <div class="w-full lg:w-1/2 space-y-6">
                <div>
                  <h4 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    {{ petChamber.name }}
                  </h4>
                  <p class="text-gray-600 leading-relaxed mb-4">
                    {{ petChamber.description }}
                  </p>
                </div>

                <!-- 주요 효능 -->
                <div class="space-y-2">
                  <h5 class="font-semibold text-gray-800 mb-3">주요 효능</h5>
                  <div
                    v-for="(benefit, benefitIndex) in petChamber.benefits"
                    :key="benefitIndex"
                    class="flex items-start"
                  >
                    <div
                      class="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"
                    ></div>
                    <span class="text-gray-700">{{ benefit }}</span>
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
                <div v-for="(spec, key) in petChamber.specs" :key="key">
                  <span class="text-gray-600">{{ key }}:</span>
                  <p class="font-medium">{{ spec }}</p>
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
              산소캡슐 전문 컨설턴트인 공명짐이 최적의 솔루션을 제공해드립니다.
            </p>
            <button
              @click="handleGeneralInquiry"
              class="bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              종합 상담 문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OxygenCapsule',
  inject: ['inquiryLink'], // App.vue에서 provide한 값 주입
  data() {
    return {
      oxygenProducts: [
        {
          id: 1,
          name: '공명 Q31/Q32',
          description:
            '순산소 호흡을 위한 챔버 내부 독립 호흡 시스템과 BIBS 산소마스크를 장착한 고압 산소캡슐입니다. 거동이 불편한 클라이언트의 출입이 편리하도록 슬라이딩 도어가 적용되었습니다.',
          features: [
            '순산소 호흡을 위한 챔버 내부 독립 호흡 시스템',
            'BIBS 산소마스크 장착',
            '거동이 불편한 클라이언트의 출입이 편리',
            '슬라이딩 도어 적용으로 공간 효율성 향상',
            '부대 설비 및 컨트롤 콘솔, 공기공급시스템',
            '챔버 내/외부 통신 시스템 및 화재예방 시스템',
            '자동/수동 모드 선택 운용 가능',
            'TV, 음향장치 등 엔터테인먼트 시스템 제공',
            '챔버 내부 모니터링이 가능한 CCTV 시스템',
            '무소음, 무진동 에어컨 시스템',
          ],
          specs: {
            모델명: 'Q31 / Q32',
            수용인원: '1인 / 2인',
            길이: '1824mm / 2340mm',
            폭: '1024mm / 1850mm',
            높이: '2219mm / 2210mm',
            무게: '1611kg / 3500kg',
            '정격 전원전압': 'AC 220V',
            압력: '1.1~3.0ATA',
            소비전력: '600VA / 500VA',
            '클라이언트 호흡장치': 'BIBS 산소마스크 장착',
            주파수: '60Hz',
          },
          image: '/products/cap/cap1.jpg',
        },
        {
          id: 2,
          name: '공명 H3000',
          description:
            '베드슬라이드 방식으로 외상을 입은 클라이언트 및 거동이 불편한 클라이언트 출입이 편리합니다. 세계적 수준의 유럽 압력용기 규격인 PED를 획득하여 안정성을 확보했습니다.',
          features: [
            '베드슬라이드 방식으로 외상을 입은 클라이언트 및 거동이 불편한 클라이언트 출입 편리',
            '세계적 수준의 유럽 압력용기 규격인 PED를 획득하여 안정성 확보',
            'ASME-PVHO-1 절차에 의한 설계 및 제작',
            '100% 고순도 산소 주입으로 치료 효과 극대화',
            '레이아웃 변경이 가능하도록 캐스터 장착 및 주변장치 간소화',
            '수동 / 자동 프로그램 모드 제공으로 클라이언트 케어에 용이',
            '기타옵션장치 장착 가능하도록 예비 연결구 다수 확보',
            '관찰창 확보로 환자 감시 용이',
            '고압을 견딜 수 있는 안전한 전신 산소 캡슐',
            '클라이언트와의 소통이 용이하도록 특수 제작된 통신시스템',
          ],
          specs: {
            최대허용작동압력: '3.0ATA',
            최대수용인원: '1인',
            길이: '2250mm',
            폭: '1400mm',
            높이: '1346.5mm',
            무게: '1000kg',
            '정격 전원전압/주파수/소비전력': '220V/50~60Hz/65VA',
            설치공간: '2m x 4.6m',
            '클라이언트 호흡장치': '산소마스크 착용 가능 홀더 장착',
            통신장치: '클라이언트와 오퍼레이터 간 통화가능',
            기타: '공기 및 산소압력 측정장치 및 수동제어장치 설치',
          },
          image: '/products/cap/cap2.jpg',
        },
        {
          id: 3,
          name: '공명 H3100',
          description:
            '1.1ATA~3.0 ATA 압력조절이 가능하며, BIBS 마스크가 장착되어 있습니다. 응급 상황 발생 시 압력해제노브가 적용되어 안전성이 확보되었습니다.',
          features: [
            '1.1ATA~3.0 ATA 압력조절 가능',
            'BIBS 마스크 장착',
            '응급 상황 발생 시 압력해제노브 적용',
            '고압·고온 상태의 산소 온도를 낮추는 쿨링시스템',
            '사용자의 상태 파악이 용이한 와이드 윈도우',
            '산소 캡슐 시간 설정 시간 자동제어 시스템',
            '클라이언트와 소통이 가능한 내외부 인터폰 장착',
            '설치 및 이동이 간편한 튼튼한 외형',
            '산소흡입 유량조절 가능',
            '챔버 내/외부 컬러 터치 디스플레이를 적용하여 작동이 편리하고 내부에서도 모니터링 및 제어가 가능',
            '챔버 내부 클라이언트의 오조작을 방지하는 Lock 기능',
          ],
          specs: {
            최대허용작동압력: '3.0ATA',
            최대수용인원: '1인',
            챔버: '225cm×ø810cm, 290kg',
            시스템: 'W 530cm×H988cm×D635cm, 150kg',
            '정격 전원전압/주파수/소비전력': '220V/50~60Hz/65VA',
            설치공간: '1.5m x 2.5m',
            '클라이언트 호흡장치': 'BIBS 산소마스크 착용',
            통신장치: '클라이언트와 오퍼레이터 간 통화가능',
          },
          image: '/products/cap/cap3.jpg',
        },
        {
          id: 4,
          name: '공명 H2000',
          description:
            '1.1ATA~2.0 ATA 압력조절이 가능하며, 산소마스크 사용이 가능합니다. 응급 상황 발생 시 압력해제노브가 적용되어 안전성이 확보되었습니다.',
          features: [
            '1.1ATA~2.0 ATA 압력조절 가능',
            '산소마스크 사용 가능',
            '응급 상황 발생 시 압력해제노브 적용',
            '고압·고온 상태의 산소 온도를 낮추는 쿨링시스템',
            '사용자의 상태 파악이 용이한 와이드 윈도우',
            '산소캡슐 시간 설정 시간 자동제어 시스템',
            '클라이언트와 소통이 가능한 내외부 인터폰 장착',
            '설치 및 이동이 간편한 튼튼한 외형',
            '산소흡입 유량조절 가능',
            '챔버 내/외부 컬러 터치 디스플레이를 적용하여 작동이 편리하고 내부에서도 모니터링 및 제어가 가능',
            '내부 디스플레이 조작부는 외부에서 Lock기능을 사용하여 잠글 수 있어 클라이언트가 실수로 조작하지 않도록 설정가능',
          ],
          specs: {
            최대수용인원: '1인',
            '챔버 사이즈/중량': '225cm x 81cm / 113kg',
            '산소발생기 사이즈/중량': 'W390mm x D445mm x H625mm, 40kg',
            '시스템+에어쿨러': 'W530mm x D455mm x H1070mm, 84kg',
            압력: '1.1 ~ 2.0ATA',
            유량: '10Liters / Min',
            '산소 실린더(옵션) 산소농도': '40.7Liters / 100%',
            '설치 여유 공간': '1.5m x 2.5m',
          },
          image: '/products/cap/cap4.jpg',
        },
        {
          id: 5,
          name: '공명 H750/810/950',
          description:
            '편리한 슬라이드 엔트리 도어와 내부 압력해제 안전버튼이 적용되었습니다. 1.1ATA ~ 1.5ATA에 이르는 압력과 시간, 온도를 자동 조절하는 컬러 제어시스템을 갖추고 있습니다.',
          features: [
            '편리한 슬라이드 엔트리 도어',
            '내부 압력해제 안전버튼 적용',
            '사용자의 상태 파악이 용이한 와이드 윈도우',
            '1.1ATA ~ 1.5ATA에 이르는 압력과 시간, 온도를 자동 조절하는 컬러 제어시스템',
            '세계 수준의 챔버 기술로 안전성 확보',
            '고압ㆍ고온 상태의 산소 온도를 낮추는 쿨링시스템',
            '시간, 압력, 온도 조절 가능한 스마트 리모컨',
            '압력, 산소농도, 이산화탄소 농도, 온/습도를 제어할 수 있는 컬러 모니터링시스템',
          ],
          specs: {
            최대수용인원: '1인',
            '공명H750 챔버 사이즈/중량': '225cm x 75cm / 109kg',
            '공명H810 챔버 사이즈/중량': '225cm x 81cm / 112kg',
            '공명H950 챔버 사이즈/중량': '225cm x 95cm / 127kg',
            압력: '1.1 ~ 1.5ATA',
            유량: '5Liters / Min',
            산소농도: '93±3%',
            '산소발생기 사이즈/중량': 'W273mm x D392mm X H496mm/17kg',
            '시스템+에어쿨러 사이즈/중량': 'W530cm X D455mm x H1075mm,86kg',
            '설치 여유 공간': '1.5m x 2.5m',
          },
          image: '/products/cap/cap5.jpg',
        },
      ],

      petChamber: {
        id: 6,
        name: '펫 챔버',
        description:
          '애완동물을 위한 전용 산소캡슐로, 동물들의 스트레스 해소와 재활치료, 피로 회복에 효과적입니다. 폴리카보네이트와 알루미늄 재질로 견고하게 제작되었습니다.',
        benefits: [
          '애완동물의 스트레스 해소',
          '동물들의 탈골, 골절 회복 등 재활치료',
          '찰과상 등의 가벼운 상처 회복',
          '경주견 등의 체력소모가 많은 동물의 피로 및 체력 회복',
          '병약한 동물들의 신진대사 증진',
          '애완견 미용 후 털의 상태 개선과 피부미용에 효과적',
          '기타 효능: 뇌 기능 및 집중력 향상, 노폐물 배출',
        ],
        specs: {
          '챔버 수용': '1마리',
          재질: '폴리 카보네이트, 알루미늄',
          '사이즈/중량': 'L1140mm x W720mm x H810mm, 92kg',
          압력: '1.2 ATA',
          유량: '10 Liters / min',
          전력: '220VAC ± 10%, 60Hz, 350VA',
          '산소발생기 사이즈/중량': 'L655mm x W380mm x H650mm,48kg',
          '여유 설치 공간': '1.5m x 2.5m',
        },
        image: '/products/cap/cap6.jpg',
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleGeneralInquiry() {
      if (confirm('산소캡슐 종합 상담을 위해 카카오톡으로 연결하시겠습니까?')) {
        window.open(this.inquiryLink, '_blank');
      }
    },
  },
};
</script>

<style scoped>
/* 추가적인 스타일이 필요한 경우 여기에 작성 */
</style>
