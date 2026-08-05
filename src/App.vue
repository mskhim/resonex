<template>
  <div class="min-h-screen flex flex-col bg-white">
    <SiteHeader />

    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <SiteFooter />
    <FloatingInquiry />
    <BackToTop />
  </div>
</template>

<script setup>
import SiteHeader from './components/Header.vue';
import SiteFooter from './components/Footer.vue';
import FloatingInquiry from './components/FloatingInquiry.vue';
import BackToTop from './components/BackToTop.vue';
import { provide } from 'vue';

// 연락 수단은 여러 페이지에서 쓰이므로 한 곳에서 관리한다.
provide('inquiryLink', 'http://pf.kakao.com/_RJVsn');
provide('contact', {
  kakao: 'http://pf.kakao.com/_RJVsn',
  phone: '010-4429-2889',
  email: 'cprh7677@naver.com',
  instagram:
    'https://www.instagram.com/resonancegym_wirye?igsh=cmVkZGg3a3dyMm8w&utm_source=qr',
  address: '(13647) 경기도 성남시 수정구 창곡동 555, B1호',
});
</script>

<style>
/* 페이지 전환 — 짧고 가볍게 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.28s var(--ease-out-quint),
    transform 0.28s var(--ease-out-quint);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }
}
</style>
