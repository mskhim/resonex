<template>
  <section class="relative isolate overflow-hidden bg-ink-950">
    <!-- 배경 미디어 -->
    <div class="absolute inset-0">
      <img
        v-if="image"
        :src="image"
        :alt="alt || title"
        class="h-full w-full object-cover"
        :class="objectPosition"
        fetchpriority="high"
      />
      <slot name="media" />

      <!-- 가독성 확보용 그라데이션. 아래로 갈수록 어두워져 다음 섹션과 자연스럽게 이어진다 -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-ink-950/75 via-ink-950/55 to-ink-950/80"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgb(2_6_23/0.55)_100%)]"
      />
    </div>

    <!-- 콘텐츠 -->
    <div
      class="container-page relative flex flex-col items-center justify-center text-center"
      :class="compact ? 'min-h-[48vh] py-28 md:min-h-[52vh]' : 'min-h-[62vh] py-32 md:min-h-[68vh]'"
    >
      <p
        v-if="eyebrow"
        data-reveal="fade"
        class="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-300 md:text-sm"
      >
        {{ eyebrow }}
      </p>

      <h1
        data-reveal="up"
        data-reveal-delay="80"
        class="text-h1 font-extrabold text-white"
        :class="serif ? 'logo-korean !font-light' : 'program-title'"
      >
        <slot name="title">{{ title }}</slot>
      </h1>

      <p
        v-if="subtitle || $slots.subtitle"
        data-reveal="up"
        data-reveal-delay="180"
        class="mt-5 max-w-2xl text-lead text-white/75"
      >
        <slot name="subtitle">{{ subtitle }}</slot>
      </p>

      <div
        v-if="$slots.actions"
        data-reveal="up"
        data-reveal-delay="280"
        class="mt-9 flex flex-col gap-3 sm:flex-row"
      >
        <slot name="actions" />
      </div>
    </div>

    <!-- 하단 페이드 — 다음 섹션(흰 배경)으로 부드럽게 전환 -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
    />
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  image: { type: String, default: '' },
  alt: { type: String, default: '' },
  /** 이미지 초점 위치 — 인물/기구가 잘리지 않도록 페이지별로 조정 */
  objectPosition: { type: String, default: 'object-center' },
  /** 제목에 명조체(로고 서체)를 쓸지 */
  serif: { type: Boolean, default: false },
  /** 낮은 히어로 — 제품 상세처럼 본문이 중요한 페이지용 */
  compact: { type: Boolean, default: false },
});
</script>
