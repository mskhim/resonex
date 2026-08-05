<template>
  <div>
    <PageHero
      image="/products/powerplate/powerplateHr.jpg"
      object-position="object-bottom"
      eyebrow="Power Plate"
      title="파워플레이트"
      subtitle="3차원 진동 기술로 짧은 시간에 깊은 효과를 만들어내는 전신 진동 트레이닝 플랫폼"
      compact
    />

    <!-- ═══════════ 브랜드 ═══════════ -->
    <section class="section-y-sm bg-white">
      <div class="container-page">
        <div data-reveal="up" class="mb-10 text-center">
          <img
            src="/products/powerplate/powerPlateLogo.png"
            alt="Power Plate"
            class="mx-auto h-14 w-auto object-contain"
          />
        </div>
        <ProductNotice data-reveal="up" />
      </div>
    </section>

    <!-- ═══════════ 가정용 모델 ═══════════ -->
    <section class="section-y-sm bg-white">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Home</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">가정용 모델</h2>
        </header>

        <div class="space-y-8">
          <ProductShowcase
            v-for="(product, i) in homeProducts"
            :key="product.name"
            :product="product"
            :reversed="i % 2 === 1"
          />
        </div>
      </div>
    </section>

    <!-- ═══════════ 전문가 모델 ═══════════ -->
    <section class="section-y-sm bg-ink-50">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Professional</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">전문가 모델</h2>
        </header>

        <div class="space-y-8">
          <ProductShowcase
            v-for="(product, i) in proProducts"
            :key="product.name"
            :product="product"
            :reversed="i % 2 === 1"
          />
        </div>
      </div>
    </section>

    <ProductCTA
      title="파워플레이트, 어떤 모델이 맞을까요?"
      description="파워플레이트 마스터 트레이너가 사용 목적과 공간에 맞는 모델을 직접 추천해드립니다."
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

const homeProducts = [
  {
    name: 'PowerPlate MOVE',
    image: '/products/powerplate/move.png',
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
      무게: '39.5kg (패키지포함 45.3kg)',
      전원: 'AC 100-240V, 50/60Hz',
      '출력 전력': '180W',
      진동수: '레벨 6개 (30-40Hz)',
      진폭: '30Hz, 35Hz, 40Hz',
      보증기간: '하드웨어 3년 / 전자기기 1년 / AS 1년',
    },
  },
  {
    name: 'PowerPlate MY7',
    image: '/products/powerplate/my7.png',
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
      진동수: '레벨 7개 (30-40Hz)',
      보증서: 'CE, EMC, RoHS/WEEE, FDA 1등급',
      보증기간: '하드웨어 3년 / 전자기기 1년 / AS 1년',
    },
  },
];

const proProducts = [
  {
    name: 'PowerPlate Pro5',
    image: '/products/powerplate/pro5.png',
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
      보증기간: '하드웨어 3년 / 전자기기 1년 / AS 1년',
    },
  },
  {
    name: 'PowerPlate Pro5HP',
    image: '/products/powerplate/pro5hp.png',
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
      보증기간: '하드웨어 3년 / 전자기기 1년 / AS 1년',
    },
  },
  {
    name: 'PowerPlate Pro7',
    image: '/products/powerplate/pro7.png',
    description:
      '운동 퍼포먼스를 위한 궁극의 모델. 기존 프로그램의 절반 시간 안에 단 한 세션만으로 변화를 느낄 수 있습니다.',
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
      보증기간: '하드웨어 3년 / 전자기기 1년 / AS 1년',
    },
  },
  {
    name: 'PowerPlate Pro8',
    image: '/products/powerplate/pro8.png',
    badge: '2025 신규 출시',
    description:
      '다재다능하고 완전히 새로워진 Pro8로 진동 경험을 다시 한번 향상시킵니다. 기존 프로그램보다 절반의 시간 만에 효과를 볼 수 있다는 것이 과학적으로 입증되었으며, 단 한 번의 세션만으로도 그 차이를 느낄 수 있습니다.',
    features: [
      '통합 LCD 터치스크린 컨트롤',
      '간편하고 편리한 퀵 스타트 옵션',
      '정밀한 전자식 ProMotion 저항 케이블',
      '최대 9분 러닝 타임',
      'Power Plate 라인업 중 가장 큰 플랫폼',
      '250개 이상의 맞춤형 프로그램',
      '1,000개 이상의 운동 영상 제공',
    ],
    specs: {
      색상: '매트 블랙, 화이트',
      크기: '95cm×113cm×154cm',
      '플랫폼 크기': '95cm×84cm×31cm',
      무게: '169kg (패키지포함)',
      전원: '100-240 VAC, 50/60Hz',
      진동수: '25-50Hz (1Hz씩 증가)',
      보증서: 'CE, NRTL, C-NRTL, FDA Class 1 Device',
      보증기간: '하드웨어 3년 / 전자기기 1년 / AS 1년',
    },
  },
];
</script>
