<template>
  <div>
    <PageHero
      image="/products/cap/cap1.jpg"
      object-position="object-center"
      eyebrow="Oxygen Capsule"
      title="산소캡슐"
      subtitle="고농도 산소 공급으로 피로회복과 면역력 강화, 운동 후 빠른 회복을 지원합니다."
      compact
    />

    <section class="section-y-sm bg-white">
      <div class="container-page">
        <ProductNotice data-reveal="up" />
      </div>
    </section>

    <!-- ═══════════ 고압 산소캡슐 ═══════════ -->
    <section class="section-y-sm bg-white">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Hyperbaric</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">고압 산소캡슐</h2>
        </header>

        <div class="space-y-8">
          <ProductShowcase
            v-for="(product, i) in oxygenProducts"
            :key="product.name"
            :product="product"
            :reversed="i % 2 === 1"
          />
        </div>
      </div>
    </section>

    <!-- ═══════════ 펫 챔버 ═══════════ -->
    <section class="section-y-sm bg-ink-50">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Pet Care</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">펫 챔버</h2>
          <p class="mt-3 text-[0.9375rem] text-ink-500">
            반려동물을 위한 전용 산소캡슐
          </p>
        </header>

        <ProductShowcase :product="petChamber" />
      </div>
    </section>

    <ProductCTA
      title="산소캡슐, 무엇이 맞을까요?"
      description="설치 공간과 사용 목적에 따라 최적의 모델을 안내해드립니다."
    />
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue';
import ProductNotice from '../../components/ProductNotice.vue';
import ProductShowcase from '../../components/ProductShowcase.vue';
import ProductCTA from '../../components/ProductCTA.vue';
import { useReveal } from '../../composables/useReveal';

useReveal();

const oxygenProducts = [
  {
    name: '공명 Q31 / Q32',
    image: '/products/cap/cap1.jpg',
    description:
      '순산소 호흡을 위한 챔버 내부 독립 호흡 시스템과 BIBS 산소마스크를 장착한 고압 산소캡슐입니다. 거동이 불편한 클라이언트의 출입이 편리하도록 슬라이딩 도어가 적용되었습니다.',
    features: [
      '순산소 호흡을 위한 챔버 내부 독립 호흡 시스템',
      'BIBS 산소마스크 장착',
      '슬라이딩 도어 적용으로 공간 효율성 향상',
      '부대 설비 및 컨트롤 콘솔, 공기공급시스템',
      '챔버 내/외부 통신 시스템 및 화재예방 시스템',
      '자동 / 수동 모드 선택 운용 가능',
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
      호흡장치: 'BIBS 산소마스크 장착',
      주파수: '60Hz',
    },
  },
  {
    name: '공명 H3000',
    image: '/products/cap/cap2.jpg',
    description:
      '베드슬라이드 방식으로 외상을 입은 클라이언트 및 거동이 불편한 클라이언트 출입이 편리합니다. 세계적 수준의 유럽 압력용기 규격인 PED를 획득하여 안정성을 확보했습니다.',
    features: [
      '베드슬라이드 방식으로 출입 편리',
      '유럽 압력용기 규격 PED 획득으로 안정성 확보',
      'ASME-PVHO-1 절차에 의한 설계 및 제작',
      '100% 고순도 산소 주입으로 효과 극대화',
      '캐스터 장착 및 주변장치 간소화로 레이아웃 변경 용이',
      '수동 / 자동 프로그램 모드 제공',
      '기타 옵션장치 장착 가능한 예비 연결구 다수 확보',
      '관찰창 확보로 클라이언트 감시 용이',
      '특수 제작된 통신시스템',
    ],
    specs: {
      최대허용작동압력: '3.0ATA',
      최대수용인원: '1인',
      길이: '2250mm',
      폭: '1400mm',
      높이: '1346.5mm',
      무게: '1000kg',
      '전압/주파수/소비전력': '220V / 50~60Hz / 65VA',
      설치공간: '2m × 4.6m',
      호흡장치: '산소마스크 착용 가능 홀더 장착',
      통신장치: '클라이언트-오퍼레이터 간 통화 가능',
    },
  },
  {
    name: '공명 H3100',
    image: '/products/cap/cap3.jpg',
    description:
      '1.1ATA~3.0ATA 압력조절이 가능하며, BIBS 마스크가 장착되어 있습니다. 응급 상황 발생 시 압력해제노브가 적용되어 안전성이 확보되었습니다.',
    features: [
      '1.1ATA~3.0ATA 압력조절 가능',
      'BIBS 마스크 장착',
      '응급 상황 발생 시 압력해제노브 적용',
      '고압·고온 상태의 산소 온도를 낮추는 쿨링시스템',
      '사용자의 상태 파악이 용이한 와이드 윈도우',
      '시간 자동제어 시스템',
      '내외부 인터폰 장착',
      '설치 및 이동이 간편한 튼튼한 외형',
      '챔버 내/외부 컬러 터치 디스플레이',
      '오조작을 방지하는 Lock 기능',
    ],
    specs: {
      최대허용작동압력: '3.0ATA',
      최대수용인원: '1인',
      챔버: '225cm×ø810cm, 290kg',
      시스템: 'W530cm×H988cm×D635cm, 150kg',
      '전압/주파수/소비전력': '220V / 50~60Hz / 65VA',
      설치공간: '1.5m × 2.5m',
      호흡장치: 'BIBS 산소마스크 착용',
      통신장치: '클라이언트-오퍼레이터 간 통화 가능',
    },
  },
  {
    name: '공명 H2000',
    image: '/products/cap/cap4.jpg',
    description:
      '1.1ATA~2.0ATA 압력조절이 가능하며, 산소마스크 사용이 가능합니다. 응급 상황 발생 시 압력해제노브가 적용되어 안전성이 확보되었습니다.',
    features: [
      '1.1ATA~2.0ATA 압력조절 가능',
      '산소마스크 사용 가능',
      '응급 상황 발생 시 압력해제노브 적용',
      '고압·고온 상태의 산소 온도를 낮추는 쿨링시스템',
      '사용자의 상태 파악이 용이한 와이드 윈도우',
      '시간 자동제어 시스템',
      '내외부 인터폰 장착',
      '산소흡입 유량조절 가능',
      '챔버 내/외부 컬러 터치 디스플레이',
      '외부에서 잠글 수 있는 Lock 기능',
    ],
    specs: {
      최대수용인원: '1인',
      '챔버 사이즈/중량': '225cm × 81cm / 113kg',
      '산소발생기': 'W390 × D445 × H625mm, 40kg',
      '시스템+에어쿨러': 'W530 × D455 × H1070mm, 84kg',
      압력: '1.1 ~ 2.0ATA',
      유량: '10 Liters / Min',
      '산소 실린더(옵션)': '40.7Liters / 100%',
      '설치 여유 공간': '1.5m × 2.5m',
    },
  },
  {
    name: '공명 H750 / 810 / 950',
    image: '/products/cap/cap5.jpg',
    description:
      '편리한 슬라이드 엔트리 도어와 내부 압력해제 안전버튼이 적용되었습니다. 1.1ATA~1.5ATA에 이르는 압력과 시간, 온도를 자동 조절하는 컬러 제어시스템을 갖추고 있습니다.',
    features: [
      '편리한 슬라이드 엔트리 도어',
      '내부 압력해제 안전버튼 적용',
      '사용자의 상태 파악이 용이한 와이드 윈도우',
      '압력·시간·온도를 자동 조절하는 컬러 제어시스템',
      '세계 수준의 챔버 기술로 안전성 확보',
      '고압·고온 상태의 산소 온도를 낮추는 쿨링시스템',
      '시간, 압력, 온도 조절 가능한 스마트 리모컨',
      '컬러 모니터링 시스템 (압력·산소·이산화탄소·온습도)',
    ],
    specs: {
      최대수용인원: '1인',
      'H750 챔버': '225cm × 75cm / 109kg',
      'H810 챔버': '225cm × 81cm / 112kg',
      'H950 챔버': '225cm × 95cm / 127kg',
      압력: '1.1 ~ 1.5ATA',
      유량: '5 Liters / Min',
      산소농도: '93±3%',
      산소발생기: 'W273 × D392 × H496mm / 17kg',
      '시스템+에어쿨러': 'W530 × D455 × H1075mm, 86kg',
      '설치 여유 공간': '1.5m × 2.5m',
    },
  },
];

const petChamber = {
  name: '펫 챔버',
  image: '/products/cap/cap6.jpg',
  description:
    '애완동물을 위한 전용 산소캡슐로, 동물들의 스트레스 해소와 재활치료, 피로 회복에 효과적입니다. 폴리카보네이트와 알루미늄 재질로 견고하게 제작되었습니다.',
  features: [
    '애완동물의 스트레스 해소',
    '탈골, 골절 회복 등 재활치료',
    '찰과상 등의 가벼운 상처 회복',
    '경주견 등 체력소모가 많은 동물의 피로 회복',
    '병약한 동물들의 신진대사 증진',
    '애완견 미용 후 털 상태 개선과 피부미용',
    '뇌 기능 및 집중력 향상, 노폐물 배출',
  ],
  specs: {
    '챔버 수용': '1마리',
    재질: '폴리카보네이트, 알루미늄',
    '사이즈/중량': 'L1140 × W720 × H810mm, 92kg',
    압력: '1.2 ATA',
    유량: '10 Liters / min',
    전력: '220VAC ± 10%, 60Hz, 350VA',
    산소발생기: 'L655 × W380 × H650mm, 48kg',
    '여유 설치 공간': '1.5m × 2.5m',
  },
};
</script>
