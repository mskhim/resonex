<template>
  <Transition name="fade-up">
    <button
      v-if="visible"
      type="button"
      @click="toTop"
      aria-label="맨 위로"
      class="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white/90 text-ink-600 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:text-brand-600 hover:shadow-lift md:bottom-8 md:left-8"
    >
      <svg
        class="h-4 w-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);
let ticking = false;

const handleScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    visible.value = window.scrollY > 600;
    ticking = false;
  });
};

const toTop = () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s var(--ease-out-quint),
    transform 0.3s var(--ease-out-quint);
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.9);
}
</style>
