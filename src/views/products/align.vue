<template>
  <div>
    <PageHero
      image="/products/align/hero.png"
      object-position="object-bottom"
      eyebrow="Align Pilates"
      title="얼라인 필라테스"
      subtitle="정밀한 움직임과 견고한 설계로 완성된 프리미엄 필라테스 장비"
      compact
    />

    <section class="section-y-sm bg-white">
      <div class="container-page">
        <div data-reveal="up" class="mb-8 text-center">
          <img
            src="/products/align/alignpilateslogo.svg"
            alt="Align Pilates"
            class="mx-auto h-12 w-auto object-contain"
          />
        </div>
        <ProductNotice data-reveal="up" />
      </div>
    </section>

    <!-- ═══════════ 제품 라인업 ═══════════ -->
    <section class="section-y-sm bg-white">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Line-up</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">제품 라인업</h2>
        </header>

        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="(product, i) in products"
            :key="product.name"
            data-reveal="up"
            :data-reveal-delay="(i % 2) * 110"
            class="card card-hover flex flex-col overflow-hidden"
          >
            <!-- 이미지 -->
            <div
              class="flex aspect-[4/3] items-center justify-center bg-ink-50 p-6"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-contain"
                loading="lazy"
              />
            </div>

            <!-- 내용 -->
            <div class="flex flex-1 flex-col p-6">
              <div class="flex flex-wrap items-start gap-2">
                <h3 class="program-title flex-1 text-lg text-ink-900">
                  {{ product.name }}
                </h3>
                <span
                  v-if="product.badge"
                  class="shrink-0 rounded-full bg-accent-500/12 px-2.5 py-1 text-xs font-bold text-accent-700"
                >
                  {{ product.badge }}
                </span>
              </div>

              <ul class="mt-5 flex-1 space-y-2.5">
                <li
                  v-for="feature in product.features"
                  :key="feature"
                  class="flex gap-3 text-sm text-ink-600"
                >
                  <i
                    class="fas fa-check mt-0.5 shrink-0 text-xs text-brand-600"
                  />
                  {{ feature }}
                </li>
              </ul>

              <!-- 가격 -->
              <div class="mt-6 border-t border-ink-100 pt-5">
                <div class="flex items-baseline gap-2.5">
                  <span class="program-title text-xl text-ink-900">
                    {{ product.price }}
                  </span>
                  <span
                    v-if="product.originalPrice"
                    class="text-sm text-ink-400 line-through"
                  >
                    {{ product.originalPrice }}
                  </span>
                </div>

                <a
                  :href="contact.kakao"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary mt-4 w-full"
                >
                  제품 문의하기
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 상세 이미지 ═══════════ -->
    <section class="section-y-sm bg-ink-50">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Detail</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">제품 상세</h2>
        </header>

        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="(image, i) in detailImages"
            :key="image"
            data-reveal="up"
            :data-reveal-delay="i * 110"
            class="overflow-hidden rounded-2xl border border-ink-200 bg-white"
          >
            <img
              :src="image"
              :alt="`얼라인 필라테스 상세 ${i + 1}`"
              class="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <ProductCTA
      title="필라테스 장비 상담"
      description="센터 규모와 수업 구성에 맞는 장비 조합을 제안해드립니다."
    />
  </div>
</template>

<script setup>
import { inject } from 'vue';
import PageHero from '../../components/PageHero.vue';
import ProductNotice from '../../components/ProductNotice.vue';
import ProductCTA from '../../components/ProductCTA.vue';
import { useReveal } from '../../composables/useReveal';

useReveal();

const contact = inject('contact');

const products = [
  {
    name: 'A2 Full Pilates Cadillac',
    image: '/products/align/a2.png',
    price: '₩2,900,000',
    features: [
      '풀 스테인리스 프레임',
      '조절 가능한 팔걸이',
      '효과적인 다섯 가지 포지션',
      '높이 조절 가능',
    ],
  },
  {
    name: 'A8-Pro Pilates Reformer With Half Cadillac',
    image: '/products/align/a8.png',
    price: '₩7,700,000',
    features: [
      '래피드 체인지 스프링 바 장착',
      '편안한 라지 사이즈 베드',
      '플랫 포지션 포함 6가지 풋바 포지션',
      '간편한 로프 조절 시스템',
    ],
  },
  {
    name: 'Combo Chair III – Flat Packed',
    image: '/products/align/combo.jpg',
    price: '₩9,680,000',
    originalPrice: '₩12,100,000',
    badge: '20% 할인',
    features: [
      '완벽한 견고함',
      '팔 운동을 위한 저항 밴드 연결 가능',
      '부드러운 움직임',
      '핸들로 추가적인 운동 동작 수행',
    ],
  },
  {
    name: 'Ladder Barrel RC',
    image: '/products/align/barrel.jpg',
    price: '₩10,340,000',
    features: [
      '더 발전된 안정성과 내구성',
      '메이플우드 소재의 사다리 디딤대',
      '부드러운 촉감의 발디딤대',
    ],
  },
];

const detailImages = [
  '/products/align/detail1.png',
  '/products/align/detail2.png',
];
</script>
