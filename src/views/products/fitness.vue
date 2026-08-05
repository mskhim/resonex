<template>
  <div>
    <PageHero
      image="/products/fitness/hero.jpg"
      object-position="object-bottom"
      eyebrow="Lexco"
      title="렉스코 헬스기구"
      subtitle="인체공학적 설계로 운동 효과와 편의성을 극대화한 프리미엄 피트니스 장비"
      compact
    />

    <section class="section-y-sm bg-white">
      <div class="container-page">
        <div data-reveal="up" class="mb-8 flex justify-center">
          <div class="rounded-xl bg-ink-950 px-8 py-5">
            <img
              src="/products/fitness/lexcologo.png"
              alt="Lexco"
              class="h-9 w-auto object-contain"
            />
          </div>
        </div>
        <ProductNotice data-reveal="up" />
      </div>
    </section>

    <!-- ═══════════ 유산소 기구 ═══════════ -->
    <section class="section-y-sm bg-white">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Cardio</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">유산소 기구</h2>
        </header>

        <div class="space-y-8">
          <ProductShowcase
            v-for="(product, i) in cardioProducts"
            :key="product.name"
            :product="product"
            :reversed="i % 2 === 1"
          />
        </div>
      </div>
    </section>

    <!-- ═══════════ 웨이트 기구 ═══════════ -->
    <section class="section-y-sm bg-ink-50">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Weight</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">웨이트 기구</h2>
        </header>

        <!-- 시리즈 소개 -->
        <div
          data-reveal="up"
          class="mx-auto mb-10 max-w-3xl rounded-2xl border border-ink-200 bg-white p-7 md:p-8"
        >
          <h3 class="program-title text-lg text-ink-900">
            렉스코 웨이트 시리즈
          </h3>
          <p class="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">
            인체공학적 디자인을 추가함으로써 운동효과와 편의성의 극대화를
            추구합니다. ABS 사출커버, 와이어 이탈방지 롤러, 그리고 곡선형 메모리
            폼 등이 적용되어 기능성과 안정성에 미적 요소가 통합된 렉스코 최고의
            웨이트 시리즈입니다.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="(series, i) in weightSeries"
            :key="series.name"
            data-reveal="up"
            :data-reveal-delay="i * 110"
            class="card card-hover flex flex-col p-7"
          >
            <div class="flex items-center gap-3">
              <span class="h-2 w-2 rounded-full bg-brand-500" />
              <h3 class="program-title text-lg text-ink-900">
                {{ series.name }}
              </h3>
            </div>

            <p class="mt-4 text-sm leading-relaxed text-ink-500">
              {{ series.description }}
            </p>

            <ul class="mt-5 flex-1 space-y-2.5">
              <li
                v-for="feature in series.features"
                :key="feature"
                class="flex gap-3 text-sm text-ink-600"
              >
                <i class="fas fa-check mt-0.5 shrink-0 text-xs text-brand-600" />
                {{ feature }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <ProductCTA
      title="헬스기구 도입 상담"
      description="렉스코 대표 컨설턴트가 센터 규모에 맞는 장비 구성을 제안해드립니다."
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

const cardioProducts = [
  {
    name: '트레드밀 LT8xA',
    image: '/products/fitness/lt8xa.jpg',
    description:
      '23인치 정전식 터치스크린 안드로이드 OS 기반으로 30개의 트레킹 코스, 인터넷·유튜브·TV 시청 및 휴대폰을 이용한 스마트 미러링, 블루투스 기능을 제공합니다.',
    features: [
      '듀얼 속도 경사 버튼',
      '첨단 무급유 데크',
      '휴대폰 무선충전 시스템',
      '미끄럼방지 벨트 / 후방안전가드',
      '자동 장력조절 벨트 오토텐셔너',
      'TV 전용 이어폰 단자',
      'USB 단자 (데이터 전송 및 충전)',
      '비상정지 버튼 & 클립',
    ],
    specs: {
      경사도: '0 ~ 16%',
      속도: '0.5 ~ 20km/h',
      '제품 크기': 'L2,110 × W920 × H1,620mm',
      '런닝 면적': 'L1,600 × W540mm',
      '제품 무게': '200kg (440lbs)',
      최대허용중량: '200kg',
      '제품 정격': 'AC 220V, 50~60Hz, 10A',
    },
  },
  {
    name: '입식 사이클 LU8A',
    image: '/products/fitness/lu8a.jpg',
    description:
      '15.6인치 정전식 터치스크린 안드로이드 OS 기반으로 인터넷, 동영상, TV 시청, 휴대폰을 이용한 스마트 미러링, 블루투스 기능을 제공합니다.',
    features: [
      '30단계 부하조절 시스템',
      '속도·시간·거리·WATTS·RPM·CAL·LEVEL 정보 제공',
      '3개의 사용자 프로그램',
      '10개의 운동 프로그램',
      '자가발전식 부하조절 시스템',
      '휴대폰 거치대 및 충전 전용 USB 단자',
      '듀얼 강도조절 버튼',
      '접촉식 심박측정 손잡이',
    ],
    specs: {
      모니터: '내장형 15.6" 터치스크린 LED',
      디스플레이: '안드로이드 UI',
      부하시스템: '자가발전',
      '입력 전원': 'AC 220V, 50~60Hz',
      '제품 크기': 'L1,040 × W615 × H1,490mm',
      '제품 무게': '65.5kg (144lbs)',
      '최대 허용 중량': '180kg (397lbs)',
    },
  },
  {
    name: '좌식 사이클 LR8A',
    image: '/products/fitness/lr8a.jpg',
    description:
      '15.6인치 정전식 터치스크린 안드로이드 OS 기반으로 인터넷, 동영상, TV 시청, 휴대폰을 이용한 스마트 미러링, 블루투스 기능을 제공합니다.',
    features: [
      '30단계 부하조절 시스템',
      '속도·시간·거리·WATTS·RPM·CAL·LEVEL 정보 제공',
      '3개의 사용자 프로그램',
      '10개의 운동 프로그램',
      '자가발전식 부하조절 시스템',
      '휴대폰 거치대 및 충전 전용 USB 단자',
      '듀얼 강도조절 버튼',
      '접촉식 심박측정 손잡이',
    ],
    specs: {
      모니터: '내장형 15.6" 터치스크린 LED',
      디스플레이: '안드로이드 UI',
      부하시스템: '자가발전',
      '입력 전원': 'AC 220V, 50~60Hz',
      '제품 크기': 'L1,740 × W640 × H1,380mm',
      '제품 무게': '87.5kg (193lbs)',
      '최대 허용 중량': '180kg (397lbs)',
    },
  },
];

const weightSeries = [
  {
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
    ],
  },
  {
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
    ],
  },
  {
    name: 'MASTER',
    description:
      '다이렉트한 움직임으로 목표 근육에 자극이 최대로 집중되는 시리즈입니다.',
    features: [
      '다이렉트한 움직임',
      '목표 근육 최대 자극',
      '고급 ABS 사출 커버',
      '견고한 프레임',
      '곡선형 메모리 폼 시트',
      '전문가와 일반 사용자 모두에 최적화',
    ],
  },
];
</script>
