<template>
  <div>
    <!-- ═══════════ 히어로 ═══════════ -->
    <section class="relative isolate h-[100svh] min-h-[560px] overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="../img/video-poster.jpg"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          :class="videoPlaying ? 'opacity-0' : 'opacity-100'"
        />

        <video
          ref="videoEl"
          src="../video/mainVideo.mp4"
          poster="../img/video-poster.jpg"
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
          preload="auto"
          class="h-full w-full object-cover transition-opacity duration-1000"
          :class="videoPlaying ? 'opacity-100' : 'opacity-0'"
          @playing="videoPlaying = true"
          @pause="videoPlaying = false"
        />

        <!-- 텍스트 대비 확보 -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/45 to-ink-950/85"
        />
      </div>

      <!-- 히어로 콘텐츠 -->
      <div
        class="container-page relative flex h-full flex-col items-center justify-center text-center"
      >
        <div
          class="transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          :class="heroIn ? 'opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-sm'"
        >
          <p
            class="mb-6 text-[0.6875rem] font-semibold uppercase tracking-[0.35em] text-white/50 md:text-xs"
          >
            Resonance Gym
          </p>

          <h1 class="logo-korean text-display font-light text-white">
            함께 울리는,<br class="sm:hidden" />
            <span class="font-normal"> 더 큰 울림</span>
          </h1>

          <p
            class="mx-auto mt-7 max-w-md text-sm leading-relaxed text-white/65 md:max-w-lg md:text-base"
          >
            공명(共鳴) — 함께 공, 울 명.<br />
            진동 운동으로 몸과 마음을 함께 깨우는 공간입니다.
          </p>

          <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <RouterLink to="/about" class="btn btn-ghost-light">
              공명짐 소개
              <i class="fas fa-arrow-right text-xs" />
            </RouterLink>
            <a
              :href="contact.kakao"
              target="_blank"
              rel="noopener noreferrer"
              class="btn bg-white text-ink-900 hover:-translate-y-0.5 hover:shadow-lift"
            >
              무료 상담 받기
            </a>
          </div>
        </div>
      </div>

      <!-- 스크롤 인디케이터 -->
      <div
        class="absolute inset-x-0 bottom-8 flex justify-center transition-opacity duration-500"
        :class="scrolledPast ? 'opacity-0' : 'opacity-100'"
      >
        <div
          class="flex h-10 w-6 justify-center rounded-full border border-white/25 pt-2"
        >
          <span class="animate-scroll-hint h-1.5 w-1.5 rounded-full bg-white/70" />
        </div>
      </div>
    </section>

    <!-- ═══════════ 지표 ═══════════ -->
    <section ref="statsEl" class="section-y-sm border-b border-ink-100 bg-white">
      <div class="container-page">
        <dl class="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-8">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            data-reveal="up"
            :data-reveal-delay="i * 90"
            class="group text-center md:text-left"
          >
            <div
              class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white max-md:mx-auto"
            >
              <i :class="stat.icon" class="text-base" />
            </div>

            <dd class="flex items-baseline justify-center gap-1 md:justify-start">
              <span
                class="program-title text-4xl tabular-nums text-ink-900 md:text-5xl"
              >
                {{ Math.round(counts[i]) }}
              </span>
              <span class="text-lg font-semibold text-brand-600">
                {{ stat.suffix }}
              </span>
            </dd>

            <dt class="mt-2 text-sm font-medium text-ink-500">
              {{ stat.label }}
            </dt>
          </div>
        </dl>
      </div>
    </section>

    <!-- ═══════════ 브랜드 스테이트먼트 ═══════════ -->
    <section class="relative isolate overflow-hidden bg-ink-950">
      <div class="absolute inset-0">
        <img
          src="/main/powerplate-wide.jpg"
          alt="공명짐 파워플레이트 트레이닝"
          class="h-full w-full object-cover"
          loading="lazy"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/35"
        />
      </div>

      <div class="container-page relative py-24 md:py-36">
        <div class="max-w-xl">
          <p data-reveal="fade" class="eyebrow !text-brand-300">Philosophy</p>

          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="logo-korean mt-6 text-h1 font-light text-white"
          >
            내게 꼭 맞는 운동을<br />
            찾고 계신가요?
          </h2>

          <div
            data-reveal="up"
            data-reveal-delay="160"
            class="mt-7 space-y-4 text-lead text-white/60"
          >
            <p>
              조용하고 프라이빗한 공간에서, 온전히 나 자신에게 집중하며 운동하고
              싶으신가요?
            </p>
            <p>
              공명짐은 그런 분들을 위한
              <span class="font-semibold text-white">맞춤형 스튜디오</span>입니다.
            </p>
          </div>

          <!-- 핵심 가치 -->
          <ul
            data-reveal="up"
            data-reveal-delay="240"
            class="mt-9 grid gap-x-6 gap-y-3 sm:grid-cols-2"
          >
            <li
              v-for="value in values"
              :key="value"
              class="flex items-center gap-2.5 text-sm text-white/75"
            >
              <span class="h-1 w-1 shrink-0 rounded-full bg-brand-400" />
              {{ value }}
            </li>
          </ul>

          <RouterLink
            data-reveal="up"
            data-reveal-delay="320"
            to="/about"
            class="btn btn-ghost-light mt-10"
          >
            회사 소개 보기
            <i class="fas fa-arrow-right text-xs" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══════════ 프리미엄 제품 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <!-- 섹션 헤더 -->
        <header class="mb-16 max-w-2xl md:mb-20">
          <p data-reveal="fade" class="eyebrow">Premium Products</p>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-5 text-h2 text-ink-900"
          >
            당신의 가치를,<br />공명짐에서 울리다
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="160"
            class="mt-5 text-lead text-ink-500"
          >
            전문가가 직접 선별한 프리미엄 건강 기기를 신뢰로 선별하고 합리로
            제안합니다.
          </p>
        </header>

        <!-- 제품 목록 — 좌우 교차 배치 -->
        <div class="space-y-20 md:space-y-28">
          <article
            v-for="(product, i) in products"
            :key="product.to"
            class="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <!-- 이미지 -->
            <div
              :data-reveal="i % 2 === 0 ? 'right' : 'left'"
              class="zoom-frame relative overflow-hidden rounded-2xl shadow-card"
              :class="i % 2 === 0 ? 'md:order-2' : ''"
            >
              <img
                :src="product.image"
                :alt="product.title"
                class="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/25 to-transparent"
              />
              <span
                class="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-wider text-ink-800 backdrop-blur"
              >
                {{ product.tag }}
              </span>
            </div>

            <!-- 설명 -->
            <div :data-reveal="i % 2 === 0 ? 'left' : 'right'">
              <h3 class="program-title text-h3 text-ink-900">
                {{ product.title }}
              </h3>
              <div
                class="mt-4 h-0.5 w-12 rounded-full"
                :class="product.accent"
              />

              <p class="mt-5 text-[0.9375rem] leading-relaxed text-ink-500">
                {{ product.description }}
              </p>

              <ul class="mt-6 space-y-2.5">
                <li
                  v-for="benefit in product.benefits"
                  :key="benefit"
                  class="flex items-center gap-3 text-sm text-ink-700"
                >
                  <i class="fas fa-check text-xs" :class="product.iconColor" />
                  {{ benefit }}
                </li>
              </ul>

              <RouterLink :to="product.to" class="btn btn-primary mt-8">
                제품 자세히 보기
                <i class="fas fa-arrow-right text-xs" />
              </RouterLink>
            </div>
          </article>
        </div>

        <!-- 전체 제품 링크 -->
        <div data-reveal="up" class="mt-16 flex flex-wrap justify-center gap-2.5">
          <RouterLink
            v-for="link in otherProducts"
            :key="link.to"
            :to="link.to"
            class="rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-900 hover:bg-ink-900 hover:text-white"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══════════ 갤러리 ═══════════ -->
    <section class="section-y bg-ink-50">
      <div class="container-page">
        <header
          class="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12"
        >
          <div>
            <p data-reveal="fade" class="eyebrow">Why Resonance</p>
            <h2
              data-reveal="up"
              data-reveal-delay="80"
              class="program-title mt-5 text-h2 text-ink-900"
            >
              공명짐을 선택하는 이유
            </h2>
            <p
              data-reveal="up"
              data-reveal-delay="140"
              class="mt-3 text-[0.9375rem] text-ink-500"
            >
              위례에서 공명짐만이 갖춘 전문성을 확인해보세요
            </p>
          </div>

          <!-- 네비게이션 (데스크톱) -->
          <div data-reveal="fade" class="hidden gap-2 md:flex">
            <button
              type="button"
              @click="go(-1)"
              aria-label="이전 사진"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition-all hover:border-ink-900 hover:bg-ink-900 hover:text-white"
            >
              <i class="fas fa-chevron-left text-sm" />
            </button>
            <button
              type="button"
              @click="go(1)"
              aria-label="다음 사진"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition-all hover:border-ink-900 hover:bg-ink-900 hover:text-white"
            >
              <i class="fas fa-chevron-right text-sm" />
            </button>
          </div>
        </header>

        <!-- 슬라이더 — 원본이 4:5 세로형이라 같은 비율로 맞춰 잘리지 않게 한다.
             캡션이 이미지 안에 있으므로 글자가 깎이지 않는 게 중요하다. -->
        <div
          data-reveal="scale"
          class="group relative mx-auto max-w-[min(100%,26rem)] overflow-hidden rounded-2xl bg-ink-900 shadow-card md:max-w-[30rem]"
          @mouseenter="pauseAuto"
          @mouseleave="resumeAuto"
        >
          <div
            class="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            :style="{ transform: `translateX(-${slide * 100}%)` }"
          >
            <div
              v-for="(item, i) in gallery"
              :key="item.src"
              class="w-full shrink-0"
            >
              <img
                :src="item.src"
                :alt="item.alt"
                class="aspect-[4/5] w-full object-contain"
                :loading="i === 0 ? 'eager' : 'lazy'"
              />
            </div>
          </div>

          <!-- 모바일 좌우 버튼 -->
          <button
            type="button"
            @click="go(-1)"
            aria-label="이전 사진"
            class="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink-800 backdrop-blur transition-opacity md:opacity-0 md:group-hover:opacity-100"
          >
            <i class="fas fa-chevron-left text-sm" />
          </button>
          <button
            type="button"
            @click="go(1)"
            aria-label="다음 사진"
            class="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink-800 backdrop-blur transition-opacity md:opacity-0 md:group-hover:opacity-100"
          >
            <i class="fas fa-chevron-right text-sm" />
          </button>

          <!-- 현재 위치 표시 -->
          <div
            class="absolute right-3 top-3 rounded-full bg-ink-950/55 px-2.5 py-1 text-xs font-medium tabular-nums text-white/85 backdrop-blur"
          >
            {{ slide + 1 }} / {{ gallery.length }}
          </div>

          <!-- 진행 인디케이터 -->
          <div class="absolute inset-x-0 bottom-0 flex gap-0.5 p-3 md:gap-1 md:p-4">
            <button
              v-for="(item, i) in gallery"
              :key="item.src"
              type="button"
              @click="goTo(i)"
              :aria-label="item.alt"
              :aria-current="i === slide"
              class="group/dot h-4 flex-1 py-1.5"
            >
              <span
                class="block h-1 overflow-hidden rounded-full bg-white/25 transition-colors group-hover/dot:bg-white/45"
              >
                <span
                  class="block h-full rounded-full bg-white transition-transform duration-500 ease-out"
                  :class="i === slide ? 'scale-x-100' : 'scale-x-0'"
                  style="transform-origin: left"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 마무리 CTA ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <div
          data-reveal="scale"
          class="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-16 text-center md:px-16 md:py-24"
        >
          <!-- 은은한 배경 광원 -->
          <div
            class="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-600/18 blur-3xl"
          />
          <div
            class="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-accent-500/12 blur-3xl"
          />

          <div class="relative mx-auto max-w-xl">
            <h2 class="logo-korean text-h2 font-light text-white">
              건강한 변화를<br class="sm:hidden" /> 시작해보세요
            </h2>
            <p class="mt-5 text-[0.9375rem] leading-relaxed text-white/60">
              맞춤형 건강 솔루션과 프리미엄 기기 체험이 궁금하시다면
              <br class="hidden sm:block" />
              지금 바로 문의해주세요.
            </p>

            <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
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

            <RouterLink
              to="/location"
              class="link-underline mt-8 inline-block text-sm text-white/45 transition-colors hover:text-white"
            >
              오시는 길 안내
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  inject,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import { useReveal, animateCount } from '../composables/useReveal';

useReveal();

const contact = inject('contact');

/* ─────────── 콘텐츠 데이터 ─────────── */

const stats = [
  { icon: 'fas fa-calendar-days', label: '운영 연수', value: 2, suffix: '년+' },
  { icon: 'fas fa-medal', label: '자격증 및 수상', value: 20, suffix: '개+' },
  { icon: 'fas fa-rotate-right', label: '재등록율', value: 80, suffix: '%↑' },
  { icon: 'fas fa-star', label: '프리미엄 장비', value: 15, suffix: '대+' },
];

const values = [
  '개인별 맞춤 트레이닝',
  '프라이빗한 운동 환경',
  '전문 자격 보유 트레이너',
  '체계적인 회복 루틴',
];

const products = [
  {
    to: '/products/powerplate',
    title: '파워플레이트 프리미엄',
    tag: 'Power Plate',
    image: '/main/card/powerPlate.jpg',
    description:
      '3차원 진동 기술을 활용한 혁신적인 운동법으로 근력강화, 체중감량, 순환개선에 탁월한 효과를 제공합니다.',
    benefits: [
      '근력 및 근지구력 향상',
      '체지방 감소 및 순환 개선',
      '시간 효율적인 운동',
    ],
    accent: 'bg-brand-600',
    iconColor: 'text-brand-600',
  },
  {
    to: '/products/oxygen',
    title: '고압 산소캡슐',
    tag: 'Oxygen',
    image: '/products/cap/cap2.jpg',
    description:
      '높은 농도의 산소를 공급하여 피로회복과 면역력 강화에 도움을 주며, 운동 후 빠른 회복을 지원합니다.',
    benefits: ['피로회복 및 면역력 강화', '운동 후 빠른 회복', '혈액순환 개선'],
    accent: 'bg-accent-500',
    iconColor: 'text-accent-600',
  },
];

const otherProducts = [
  { to: '/products/sasom7', label: 'SASO M7' },
  { to: '/products/ace-body', label: '에이스바디 타워풀리' },
  { to: '/products/align-pilates', label: '얼라인 필라테스' },
  { to: '/products/fitness', label: '헬스 기구' },
  { to: '/products/zeroi', label: '제로아이' },
];

// 캡션이 이미지 안에 들어 있는 홍보 카드 (1080×1350, 4:5)
// 앞의 4장은 지정된 순서, 이후는 강사 자격 → 시설·장비 → 기능검사 순으로 이어진다.
const gallery = [
  {
    src: '/main/gallery/01-wirye-only.png',
    alt: '위례 유일 PowerPlate 진동운동 전문센터',
  },
  {
    src: '/main/gallery/02-national-team.png',
    alt: '국가대표 스탠다드 댄스스포츠 코치출신 원장직강',
  },
  {
    src: '/main/gallery/03-nasm.png',
    alt: '미국 스포츠 의학(NASM) 인증센터 · 파워플레이트 교육 전문 센터',
  },
  {
    src: '/main/gallery/04-vibration-academy.png',
    alt: '진동 테라피 전문 교육센터 · 타센터 진동테라피 다수 교육인증',
  },
  {
    src: '/main/gallery/05-exercise-prescription.png',
    alt: '운동처방사 · 국가공인자격증 인증 · 기능성 원탑 베테랑 출신 강사',
  },
  {
    src: '/main/gallery/06-rehab-equipment.png',
    alt: '최신식 재활 기구 완비 · 한국 / 미국 / 독일 / 일본 재활기구',
  },
  {
    src: '/main/gallery/07-therapy-program.png',
    alt: '다양한 전문가 테라피 프로그램 · 글라스톤 · 싸소 · 제로아이 · PNF',
  },
  {
    src: '/main/gallery/08-function-test.png',
    alt: '재활·교정을 위한 다양한 기능검사 · ROM · APG · HRV · BPM TEST',
  },
  {
    src: '/main/gallery/09-ans-test.png',
    alt: '자율신경계 검사 · 맨탈 스트레스 & 피지컬 스트레스 검사',
  },
];

/* ─────────── 히어로 ─────────── */

const videoEl = ref(null);
const videoPlaying = ref(false);
const heroIn = ref(false);
const scrolledPast = ref(false);

// 브라우저가 자동재생을 막으면 첫 사용자 인터랙션 때 다시 시도한다.
const tryPlay = () => videoEl.value?.play().catch(() => {});

/* ─────────── 지표 카운트업 ─────────── */

const statsEl = ref(null);
const counts = reactive(stats.map(() => 0));
let statsObserver = null;
const cancels = [];

/* ─────────── 갤러리 ─────────── */

const slide = ref(0);
let autoTimer = null;

const goTo = (i) => {
  slide.value = (i + gallery.length) % gallery.length;
};

const go = (step) => goTo(slide.value + step);

const startAuto = () => {
  stopAuto();
  // 9장을 한 바퀴 도는 데 너무 오래 걸리지 않도록 간격을 짧게 잡는다
  autoTimer = setInterval(() => go(1), 4000);
};

const stopAuto = () => {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
};

const pauseAuto = stopAuto;
const resumeAuto = startAuto;

/* ─────────── 스크롤 ─────────── */

let ticking = false;
const handleScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    scrolledPast.value = window.scrollY > 120;
    ticking = false;
  });
};

/* ─────────── 라이프사이클 ─────────── */

onMounted(() => {
  requestAnimationFrame(() => (heroIn.value = true));

  tryPlay();
  window.addEventListener('click', tryPlay, { once: true });
  window.addEventListener('touchstart', tryPlay, { once: true });
  window.addEventListener('scroll', handleScroll, { passive: true });

  startAuto();

  // 지표가 화면에 들어올 때 한 번만 카운트업
  statsObserver = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return;
      statsObserver.disconnect();

      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      stats.forEach((stat, i) => {
        if (reduced) {
          counts[i] = stat.value;
          return;
        }
        cancels.push(
          animateCount(stat.value, 1600 + i * 120, (v) => (counts[i] = v))
        );
      });
    },
    { threshold: 0.35 }
  );

  if (statsEl.value) statsObserver.observe(statsEl.value);
});

onBeforeUnmount(() => {
  stopAuto();
  statsObserver?.disconnect();
  cancels.forEach((cancel) => cancel());
  window.removeEventListener('click', tryPlay);
  window.removeEventListener('touchstart', tryPlay);
  window.removeEventListener('scroll', handleScroll);
});
</script>
