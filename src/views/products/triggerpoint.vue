<template>
  <div>
    <PageHero
      image="/products/zeroi/hero.jpg"
      eyebrow="Zero-i"
      title="제로아이"
      subtitle="부위별 정밀 스트레칭으로 가동성을 회복시키는 일본 재활 스트레칭 머신"
      compact
    />

    <section class="section-y-sm bg-white">
      <div class="container-page">
        <div data-reveal="up" class="mb-8 text-center">
          <img
            src="/products/zeroi/zeroiLogo.png"
            alt="Zero-i"
            class="mx-auto h-12 w-auto object-contain"
          />
        </div>
        <ProductNotice data-reveal="up" />
      </div>
    </section>

    <!-- ═══════════ 머신 라인업 ═══════════ -->
    <section class="section-y-sm bg-white">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Line-up</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">머신 라인업</h2>
          <p class="mt-3 text-[0.9375rem] text-ink-500">
            부위별로 설계된 7종의 스트레칭 머신
          </p>
        </header>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(product, i) in products"
            :key="product.name"
            data-reveal="up"
            :data-reveal-delay="(i % 3) * 100"
            class="card card-hover flex flex-col overflow-hidden"
          >
            <!-- 이미지 -->
            <div
              class="flex aspect-[4/3] items-center justify-center bg-ink-50 p-5"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-contain"
                loading="lazy"
              />
            </div>

            <div class="flex flex-1 flex-col p-6">
              <h3 class="program-title text-lg text-ink-900">
                {{ product.name }}
              </h3>

              <p class="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                {{ product.description }}
              </p>

              <!-- 타겟 근육 -->
              <div class="mt-5">
                <p
                  class="mb-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-400"
                >
                  타겟 부위
                </p>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="muscle in product.targetMuscles"
                    :key="muscle"
                    class="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                  >
                    {{ muscle }}
                  </span>
                </div>
              </div>

              <!-- 규격 -->
              <dl
                class="mt-5 grid grid-cols-2 gap-3 border-t border-ink-100 pt-4 text-xs"
              >
                <div>
                  <dt class="text-ink-400">사이즈</dt>
                  <dd class="mt-1 font-medium text-ink-800">
                    {{ product.size }}
                  </dd>
                </div>
                <div>
                  <dt class="text-ink-400">중량</dt>
                  <dd class="mt-1 font-medium text-ink-800">
                    {{ product.weight }}
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 효과 & 사례 ═══════════ -->
    <section class="section-y-sm bg-ink-50">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">
            Brand Experience
          </p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">
            Zero-i 효과 &amp; 사례
          </h2>
        </header>

        <div class="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          <div
            v-for="(image, i) in detailImages"
            :key="image"
            data-reveal="up"
            :data-reveal-delay="(i % 2) * 110"
            class="overflow-hidden rounded-2xl border border-ink-200 bg-white"
          >
            <img
              :src="image"
              :alt="`제로아이 상세 ${i + 1}`"
              class="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <ProductCTA
      title="제로아이 도입 문의"
      description="센터 공간과 회원 구성에 맞는 머신 조합을 제안해드립니다."
    />
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue';
import ProductNotice from '../../components/ProductNotice.vue';
import ProductCTA from '../../components/ProductCTA.vue';
import { useReveal } from '../../composables/useReveal';

useReveal();

const products = [
  {
    name: 'Chest Extension',
    image: '/products/zeroi/chest-extention.png',
    description:
      '가슴과 어깨 스트레칭으로 견갑골 가동성을 개선하고 심폐기능을 강화합니다.',
    targetMuscles: ['대흉근', '삼각근', '복직근', '상완삼두근'],
    size: 'W950 × D1,350 × H1,650mm',
    weight: '71kg',
  },
  {
    name: 'Shoulder Elevation',
    image: '/products/zeroi/shoulder-elevation.png',
    description:
      '등 상부와 어깨 주위 스트레칭으로 견갑골 움직임을 개선합니다.',
    targetMuscles: ['광배근', '능형근', '견갑거근', '삼각근'],
    size: 'W920 × D1,300 × H1,300mm',
    weight: '62kg',
  },
  {
    name: 'Adductor Extension',
    image: '/products/zeroi/adductor-extention.png',
    description: '고관절 주위 근육을 부드럽게 스트레칭하는 대형 머신입니다.',
    targetMuscles: ['고관절 주변근육', '내전근군'],
    size: 'W1,450 × D1,430 × H1,150mm',
    weight: '93kg',
  },
  {
    name: 'Hip Flex',
    image: '/products/zeroi/hip-flex.png',
    description:
      '엉덩이 전체 스트레칭으로 스포츠에 중요한 트위스트 동작을 촉진합니다.',
    targetMuscles: ['고관절', '엉덩이 주변근육', '내전근군', '외전근'],
    size: 'W600 × D950 × H1,100mm',
    weight: '60kg',
  },
  {
    name: 'Crus Extension',
    image: '/products/zeroi/crus-extention.png',
    description: '하체 중심 스트레칭으로 운동 시 하지 부상 예방에 효과적입니다.',
    targetMuscles: ['햄스트링', '하퇴 삼두근', '대둔근', '대퇴사두근'],
    size: 'W600 × D1,930 × H1,500mm',
    weight: '135kg',
  },
  {
    name: 'Spiral',
    image: '/products/zeroi/spiral.jpg',
    description:
      '견갑골 상하 슬라이드와 비틀림 동작으로 상체 전체를 스트레칭합니다.',
    targetMuscles: ['척추부', '승모근', '상완삼두근'],
    size: 'W1,100 × D1,450 × H2,280mm',
    weight: '93kg',
  },
  {
    name: 'Rotation',
    image: '/products/zeroi/rotation.png',
    description: '척추부 스트레칭과 골반 움직임으로 상하반신 연동을 개선합니다.',
    targetMuscles: ['척추부', '골반'],
    size: 'W600 × D1,100 × H950mm',
    weight: '30kg',
  },
];

const detailImages = [
  '/products/zeroi/zeroi1.png',
  '/products/zeroi/zeroi2.png',
  '/products/zeroi/zeroi3.png',
  '/products/zeroi/zeroi4.png',
  '/products/zeroi/zeroi5.png',
  '/products/zeroi/zeroi6.png',
];
</script>
