<template>
  <div>
    <PageHero
      image="/academy/hero.jpg"
      eyebrow="Academy"
      title="교육 아카데미"
      subtitle="파트너 센터 및 전문가를 대상으로 한 전문 교육 출강 프로그램"
    />

    <!-- ═══════════ 교육 프로그램 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <header class="mx-auto mb-14 max-w-2xl text-center">
          <p data-reveal="fade" class="eyebrow justify-center before:hidden">
            Programs
          </p>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-4 text-h2 text-ink-900"
          >
            전문 교육 프로그램
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="140"
            class="mt-4 text-lead text-ink-500"
          >
            센터 유형과 구성원에 맞춰 설계된<br class="sm:hidden" />
            이론과 실습 병행 커리큘럼입니다.
          </p>
        </header>

        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="(program, i) in programs"
            :key="program.title"
            data-reveal="up"
            :data-reveal-delay="i * 120"
            class="card card-hover group overflow-hidden"
          >
            <!-- 컬러 헤더 -->
            <div class="flex items-center gap-4 p-7 pb-0 md:p-8 md:pb-0">
              <span
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-105"
                :class="program.color"
              >
                <i :class="program.icon" class="text-xl" />
              </span>
              <div>
                <p
                  class="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-400"
                >
                  {{ program.eyebrow }}
                </p>
                <h3 class="program-title mt-1 text-h3 text-ink-900">
                  {{ program.title }}
                </h3>
              </div>
            </div>

            <ul class="space-y-3.5 p-7 md:p-8">
              <li
                v-for="point in program.points"
                :key="point"
                class="flex gap-3 text-sm leading-relaxed text-ink-600"
              >
                <span
                  class="mt-2 h-1 w-1 shrink-0 rounded-full"
                  :class="program.dot"
                />
                {{ point }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 교육 현장 갤러리 ═══════════ -->
    <section class="section-y bg-ink-50">
      <div class="container-page">
        <header class="mx-auto mb-12 max-w-2xl text-center">
          <p data-reveal="fade" class="eyebrow justify-center before:hidden">
            Gallery
          </p>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-4 text-h2 text-ink-900"
          >
            교육 현장
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="140"
            class="mt-3 text-[0.9375rem] text-ink-500"
          >
            전문적이고 체계적인 교육 프로그램의 현장을 확인하세요
          </p>
        </header>

        <!-- 그리드 갤러리 — 첫 항목을 크게 배치해 리듬을 만든다 -->
        <div class="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <button
            v-for="(image, i) in visibleImages"
            :key="image"
            type="button"
            data-reveal="scale"
            :data-reveal-delay="(i % 4) * 70"
            class="zoom-frame group relative overflow-hidden rounded-xl bg-ink-200 shadow-soft transition-shadow hover:shadow-lift"
            :class="i === 0 ? 'col-span-2 row-span-2' : ''"
            @click="openLightbox(i)"
          >
            <img
              :src="image"
              :alt="`교육 현장 ${i + 1}`"
              class="h-full w-full object-cover"
              :class="i === 0 ? 'aspect-square' : 'aspect-square'"
              loading="lazy"
            />
            <span
              class="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/25"
            />
            <span
              class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
            >
              <i class="fas fa-expand text-xs" />
            </span>
          </button>
        </div>

        <!-- 더보기 -->
        <div v-if="!showAll" class="mt-10 text-center">
          <button type="button" class="btn btn-outline" @click="showAll = true">
            사진 더보기
            <span class="text-ink-400">({{ images.length - LIMIT }}장)</span>
          </button>
        </div>
      </div>
    </section>

    <!-- ═══════════ 출장 교육 문의 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <div
          data-reveal="scale"
          class="card mx-auto max-w-3xl px-6 py-14 text-center md:px-14 md:py-16"
        >
          <span
            class="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-900 text-white"
          >
            <i class="fas fa-handshake text-2xl" />
          </span>

          <h2 class="program-title text-h2 text-ink-900">출장 교육 문의</h2>

          <p class="mx-auto mt-5 max-w-lg text-lead text-ink-500">
            출장 교육은 센터 일정 및 공간 여건에 맞춰 유연하게 조율됩니다.
            전문적인 교육이 필요하시다면 언제든 연락주세요.
          </p>

          <!-- 특징 -->
          <div class="mt-10 grid gap-6 sm:grid-cols-3">
            <div v-for="feature in features" :key="feature.title">
              <span
                class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
              >
                <i :class="feature.icon" class="text-lg" />
              </span>
              <h3 class="font-semibold text-ink-900">{{ feature.title }}</h3>
              <p class="mt-1 text-sm text-ink-500">{{ feature.description }}</p>
            </div>
          </div>

          <div class="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              :href="contact.kakao"
              target="_blank"
              rel="noopener noreferrer"
              class="btn bg-[#FEE500] text-ink-900 hover:-translate-y-0.5 hover:brightness-105"
            >
              <i class="fas fa-comment" />
              카카오톡 문의
            </a>
            <a :href="`tel:${contact.phone}`" class="btn btn-primary">
              <i class="fas fa-phone" />
              전화 문의
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 라이트박스 ═══════════ -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightbox !== null"
          class="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/94 p-4"
          @click.self="closeLightbox"
        >
          <!-- 닫기 -->
          <button
            type="button"
            @click="closeLightbox"
            aria-label="닫기"
            class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <i class="fas fa-times" />
          </button>

          <!-- 이전 -->
          <button
            type="button"
            @click.stop="step(-1)"
            aria-label="이전 사진"
            class="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 md:left-8"
          >
            <i class="fas fa-chevron-left" />
          </button>

          <img
            :src="images[lightbox]"
            :alt="`교육 현장 ${lightbox + 1}`"
            class="max-h-[85vh] max-w-full rounded-xl object-contain"
            @click.stop
          />

          <!-- 다음 -->
          <button
            type="button"
            @click.stop="step(1)"
            aria-label="다음 사진"
            class="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 md:right-8"
          >
            <i class="fas fa-chevron-right" />
          </button>

          <!-- 순번 -->
          <p
            class="absolute bottom-6 text-sm tabular-nums text-white/55"
            @click.stop
          >
            {{ lightbox + 1 }} / {{ images.length }}
          </p>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch, onMounted, onUnmounted } from 'vue';
import PageHero from '../components/PageHero.vue';
import { useReveal } from '../composables/useReveal';

useReveal();

const contact = inject('contact');

const LIMIT = 8;
const showAll = ref(false);
const lightbox = ref(null);

// academy10 ~ academy26 (7번 파일은 존재하지 않아 원본에서도 제외되어 있다)
const images = Array.from(
  { length: 17 },
  (_, i) => `/academy/academy${i + 10}.jpg`
);

const visibleImages = computed(() =>
  showAll.value ? images : images.slice(0, LIMIT)
);

const openLightbox = (i) => {
  lightbox.value = i;
};

const closeLightbox = () => {
  lightbox.value = null;
};

const step = (delta) => {
  lightbox.value = (lightbox.value + delta + images.length) % images.length;
};

const handleKeydown = (e) => {
  if (lightbox.value === null) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
};

watch(lightbox, (open) => {
  document.body.style.overflow = open !== null ? 'hidden' : '';
});

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});

/* ─────────── 콘텐츠 ─────────── */

const programs = [
  {
    eyebrow: 'Power Plate',
    title: '파워플레이트 교육',
    icon: 'fas fa-dumbbell',
    color: 'bg-brand-600',
    dot: 'bg-brand-500',
    points: [
      '파워플레이트의 과학적 원리와 핵심 적용 방식 이해',
      '소도구와 함께 구성하는 다이나믹한 기능성 트레이닝',
      '센터 유형에 따라 맞춤 설계된 이론과 실습 병행 수업',
      '센터 구성원 모두를 위한 실전 적용 중심 교육',
    ],
  },
  {
    eyebrow: 'Trigger Point',
    title: '트리거포인트 교육',
    icon: 'fas fa-hand-dots',
    color: 'bg-accent-600',
    dot: 'bg-accent-500',
    points: [
      '현대인에게 필수적인 셀프 근막이완(SMR) 기법',
      '폼롤러, 마사지볼, MB5 등 다양한 도구 활용법',
      '개인/소그룹/단체 수업에서 바로 활용 가능한 구성',
      '교정 운동학 관점의 회복 & 리커버리 커리큘럼',
    ],
  },
];

const features = [
  {
    icon: 'fas fa-location-dot',
    title: '출장 교육',
    description: '센터 현장 방문',
  },
  { icon: 'fas fa-users', title: '맞춤 교육', description: '센터별 특성 반영' },
  {
    icon: 'fas fa-certificate',
    title: '전문 교육',
    description: '이론 + 실습 병행',
  },
];
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.28s var(--ease-out-quint);
}

.lightbox-enter-active img,
.lightbox-leave-active img {
  transition: transform 0.28s var(--ease-out-quint);
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from img,
.lightbox-leave-to img {
  transform: scale(0.94);
}
</style>
