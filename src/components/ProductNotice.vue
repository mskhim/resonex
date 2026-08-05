<template>
  <div
    class="mx-auto flex max-w-2xl items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/70 px-5 py-4"
  >
    <i class="fas fa-circle-info mt-0.5 shrink-0 text-sm text-brand-500" />
    <p class="text-sm leading-relaxed text-brand-900">
      <slot>
        품절 여부, 할인 여부, 상세 내용은 문의를 통해 확인 부탁드립니다.
      </slot>
    </p>
  </div>
</template>
