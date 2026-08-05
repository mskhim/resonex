<template>
  <div>
    <PageHero
      image="/products/saso/sasoHero.png"
      eyebrow="SASO M7"
      title="SASO M7"
      subtitle="진동 근막이완 기반의 프리미엄 리커버리 솔루션"
      compact
    />

    <section class="section-y-sm bg-white">
      <div class="container-page">
        <div data-reveal="up" class="mb-8 text-center">
          <img
            src="/products/saso/01mlogo.png"
            alt="SASO M7"
            class="mx-auto h-12 w-auto object-contain"
          />
        </div>
        <ProductNotice data-reveal="up" />
      </div>
    </section>

    <!-- ═══════════ 제품 개요 ═══════════ -->
    <section class="section-y-sm bg-white">
      <div class="container-page">
        <div class="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div data-reveal="left">
            <div
              class="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-ink-200 bg-ink-50 p-8"
            >
              <img
                src="/products/saso/01M7.png"
                alt="SASO M7"
                class="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div data-reveal="right">
            <p class="eyebrow">Overview</p>
            <h2 class="program-title mt-5 text-h2 text-ink-900">SASO M7</h2>

            <p class="mt-5 text-lead text-ink-500">
              근막이완(SMR)과 진동 자극을 결합해 운동 전 준비와 운동 후 회복을
              모두 지원하는 리커버리 장비입니다. 공명짐 리커버리 루틴의 핵심
              장비로 활용됩니다.
            </p>

            <ul class="mt-7 space-y-3">
              <li
                v-for="feature in features"
                :key="feature"
                class="flex gap-3 text-sm text-ink-700"
              >
                <i class="fas fa-check mt-0.5 shrink-0 text-xs text-brand-600" />
                {{ feature }}
              </li>
            </ul>

            <a
              :href="contact.kakao"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary mt-8"
            >
              제품 문의하기
              <i class="fas fa-arrow-right text-xs" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 시연 영상 ═══════════ -->
    <section class="section-y-sm bg-ink-50">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Demo</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">제품 시연 영상</h2>
          <p class="mt-3 text-[0.9375rem] text-ink-500">
            실제 동작과 사용법을 영상으로 확인해보세요
          </p>
        </header>

        <div
          data-reveal="scale"
          class="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-ink-950 shadow-card"
        >
          <video
            src="/products/saso/01mVideo.mp4"
            controls
            playsinline
            preload="metadata"
            class="aspect-video w-full object-contain"
          />
        </div>
      </div>
    </section>

    <!-- ═══════════ 상세 이미지 ═══════════ -->
    <section class="section-y-sm bg-white">
      <div class="container-page">
        <header data-reveal="up" class="mb-10 text-center">
          <p class="eyebrow justify-center before:hidden">Detail</p>
          <h2 class="program-title mt-4 text-h2 text-ink-900">제품 상세 정보</h2>
        </header>

        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="(image, i) in detailImages"
            :key="image"
            data-reveal="up"
            :data-reveal-delay="(i % 2) * 110"
            class="overflow-hidden rounded-2xl border border-ink-200 bg-white"
          >
            <img
              :src="image"
              :alt="`SASO M7 상세 ${i + 1}`"
              class="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <ProductCTA
      title="SASO M7 도입 문의"
      description="사용 목적과 운영 환경에 맞는 활용 방법을 안내해드립니다."
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

const features = [
  '진동 자극 기반의 근막이완(SMR)',
  '운동 전 준비 운동 및 운동 후 회복에 활용',
  '개인 / 소그룹 수업에서 바로 적용 가능',
  '교정 운동학 관점의 리커버리 루틴 구성',
];

const detailImages = [
  '/products/saso/detail1.png',
  '/products/saso/detail2.png',
  '/products/saso/detail3.png',
  '/products/saso/detail4.png',
];
</script>
