<template>
  <section class="section-y bg-white pb-20 md:pb-28">
    <div class="container-page">
      <div
        data-reveal="scale"
        class="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-14 text-center md:px-14 md:py-18"
      >
        <div
          class="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-600/18 blur-3xl"
        />
        <div
          class="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent-500/12 blur-3xl"
        />

        <div class="relative mx-auto max-w-xl">
          <h2 class="program-title text-h3 text-white">
            {{ title }}
          </h2>
          <p class="mt-4 text-[0.9375rem] leading-relaxed text-white/60">
            {{ description }}
          </p>

          <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              :href="contact.kakao"
              target="_blank"
              rel="noopener noreferrer"
              class="btn bg-white text-ink-900 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <i class="fas fa-comment" />
              카카오톡 상담
            </a>
            <a :href="`tel:${contact.phone}`" class="btn btn-ghost-light">
              <i class="fas fa-phone" />
              {{ contact.phone }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';

defineProps({
  title: { type: String, default: '지금 바로 공명짐에 문의하세요' },
  description: {
    type: String,
    default:
      '전문 컨설턴트가 사용 목적과 공간에 맞는 최적의 솔루션을 제안해드립니다.',
  },
});

const contact = inject('contact');
</script>
