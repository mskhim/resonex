<template>
  <article
    data-reveal="up"
    class="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft"
  >
    <div class="grid gap-8 p-6 md:grid-cols-2 md:gap-10 md:p-9">
      <!-- 이미지 -->
      <div :class="reversed ? 'md:order-2' : ''">
        <div
          class="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-ink-50 p-6"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <!-- 설명 -->
      <div :class="reversed ? 'md:order-1' : ''">
        <div class="flex flex-wrap items-center gap-2">
          <h3 class="program-title text-h3 text-ink-900">
            {{ product.name }}
          </h3>
          <span
            v-if="product.badge"
            class="rounded-full bg-accent-500/12 px-2.5 py-1 text-xs font-bold text-accent-700"
          >
            {{ product.badge }}
          </span>
        </div>

        <p class="mt-4 text-sm leading-relaxed text-ink-500">
          {{ product.description }}
        </p>

        <div v-if="product.features?.length" class="mt-6">
          <h4
            class="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-ink-400"
          >
            주요 특징
          </h4>
          <ul class="space-y-2.5">
            <li
              v-for="feature in product.features"
              :key="feature"
              class="flex gap-3 text-sm text-ink-700"
            >
              <i class="fas fa-check mt-0.5 shrink-0 text-xs text-brand-600" />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 스펙 -->
    <div
      v-if="product.specs"
      class="border-t border-ink-200 bg-ink-50 px-6 py-6 md:px-9 md:py-7"
    >
      <h4
        class="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-ink-400"
      >
        제품 스펙
      </h4>
      <dl class="grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(value, key) in product.specs"
          :key="key"
          class="border-b border-ink-200/70 pb-3"
        >
          <dt class="text-xs text-ink-400">{{ key }}</dt>
          <dd class="mt-1 text-sm font-medium text-ink-800">{{ value }}</dd>
        </div>
      </dl>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
  /** 좌우 배치를 번갈아 주기 위한 플래그 */
  reversed: { type: Boolean, default: false },
});
</script>
