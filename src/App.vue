<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  provide() {
    return {
      inquiryLink: 'http://pf.kakao.com/_RJVsn',
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap');

.logo-korean {
  font-family: 'Noto Serif KR', serif !important;
  font-weight: 300 !important;
  letter-spacing: -0.02em;
}
@import url('https://fonts.googleapis.com/css2?family=Nanum+Square:wght@700&display=swap');

.program-title {
  font-family: 'Nanum Square', sans-serif !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em;
}
</style>
