<template>
  <div>
    <PageHero
      image="/products/tower/hero.png"
      object-position="object-bottom"
      eyebrow="Tower Pulley"
      title="타워풀리"
      subtitle="에이스바디 타워풀리 — 재활과 기능 훈련을 아우르는 대한민국 재활 기구"
      compact
    />

    <section class="section-y-sm bg-white">
      <div class="container-page">
        <div data-reveal="up" class="mb-8 text-center">
          <img
            src="/products/tower/aceBodyLogo.png"
            alt="에이스바디"
            class="mx-auto h-12 w-auto object-contain"
          />
        </div>
        <ProductNotice data-reveal="up" />
      </div>
    </section>

    <!-- ═══════════ 제품 상세 이미지 ═══════════ -->
    <section class="section-y-sm bg-white">
      <div class="container-page max-w-4xl">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Detail</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">제품 상세</h2>
        </header>

        <div class="space-y-5">
          <div
            v-for="(image, i) in productImages"
            :key="image"
            data-reveal="up"
            class="overflow-hidden rounded-2xl border border-ink-200 bg-white"
          >
            <img
              :src="image"
              :alt="`타워풀리 상세 ${i + 1}`"
              class="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <ProductCTA
      title="타워풀리 도입 문의"
      description="에이스바디 타워풀리 컨설팅 이사가 직접 상담해드립니다."
    />
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue';
import ProductNotice from '../../components/ProductNotice.vue';
import ProductCTA from '../../components/ProductCTA.vue';
import { useReveal } from '../../composables/useReveal';

useReveal();

// tower1~10 (jpg), tower11~15 (png)
const productImages = [
  ...Array.from({ length: 10 }, (_, i) => `/products/tower/tower${i + 1}.jpg`),
  ...Array.from({ length: 5 }, (_, i) => `/products/tower/tower${i + 11}.png`),
];
</script>
