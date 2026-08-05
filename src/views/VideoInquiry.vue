<template>
  <div>
    <!-- ═══════════ 히어로 (영상 배경) ═══════════ -->
    <PageHero
      eyebrow="Video Production"
      subtitle="브랜드 가치를 높이는 고품질 영상 콘텐츠 제작"
    >
      <template #media>
        <video
          src="/video/hero-video.mp4"
          poster="/video-poster.jpg"
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 h-full w-full object-cover"
        />
      </template>

      <template #title>전문 영상 제작 서비스</template>

      <template #actions>
        <a
          :href="contact.kakao"
          target="_blank"
          rel="noopener noreferrer"
          class="btn bg-white text-ink-900 hover:-translate-y-0.5"
        >
          제작 문의하기
        </a>
        <a href="#portfolio" class="btn btn-ghost-light">
          제작 사례 보기
          <i class="fas fa-arrow-down text-xs" />
        </a>
      </template>
    </PageHero>

    <!-- ═══════════ 서비스 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <header class="mx-auto mb-14 max-w-2xl text-center">
          <p data-reveal="fade" class="eyebrow justify-center before:hidden">
            Services
          </p>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-4 text-h2 text-ink-900"
          >
            프리미엄 영상 제작 서비스
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="140"
            class="mt-4 text-lead text-ink-500"
          >
            부산국제영화제 촬영팀과 인플루언서들이 함께하는<br />
            최고 품질의 바이럴 콘텐츠 제작
          </p>
        </header>

        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="(service, i) in services"
            :key="service.title"
            data-reveal="up"
            :data-reveal-delay="i * 110"
            class="card card-hover group p-7 md:p-8"
          >
            <span
              class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-105"
              :class="service.color"
            >
              <i :class="service.icon" class="text-lg" />
            </span>
            <h3 class="program-title text-lg text-ink-900">
              {{ service.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-500">
              {{ service.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 제작 사례 ═══════════ -->
    <section id="portfolio" class="section-y bg-ink-50">
      <div class="container-page">
        <header class="mx-auto mb-14 max-w-2xl text-center">
          <p data-reveal="fade" class="eyebrow justify-center before:hidden">
            Portfolio
          </p>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-4 text-h2 text-ink-900"
          >
            제작 사례
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="140"
            class="mt-3 text-[0.9375rem] text-ink-500"
          >
            실제 제작된 영상을 통해 결과물을 확인해보세요
          </p>
        </header>

        <div class="space-y-16 md:space-y-24">
          <!-- 세로형 SNS 콘텐츠 -->
          <article class="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <div data-reveal="right" class="md:order-2">
              <div
                class="mx-auto max-w-[19rem] overflow-hidden rounded-3xl bg-ink-950 shadow-lift"
              >
                <video
                  src="/video/vertical-video.mp4"
                  controls
                  playsinline
                  preload="metadata"
                  class="aspect-[9/16] w-full object-cover"
                />
              </div>
            </div>

            <div data-reveal="left">
              <span
                class="inline-flex rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700"
              >
                9:16 세로형
              </span>
              <h3 class="program-title mt-4 text-h3 text-ink-900">
                SNS 최적화 콘텐츠
              </h3>
              <ul class="mt-6 space-y-3">
                <li
                  v-for="point in verticalPoints"
                  :key="point"
                  class="flex gap-3 text-sm text-ink-600"
                >
                  <i class="fas fa-check mt-0.5 shrink-0 text-xs text-brand-600" />
                  {{ point }}
                </li>
              </ul>
            </div>
          </article>

          <!-- 숏폼 -->
          <article class="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <div data-reveal="left">
              <div class="overflow-hidden rounded-2xl bg-ink-950 shadow-lift">
                <video
                  src="/video/short-promo-video.mp4"
                  controls
                  playsinline
                  preload="metadata"
                  class="aspect-video w-full object-cover"
                />
              </div>
            </div>

            <div data-reveal="right">
              <span
                class="inline-flex rounded-full bg-accent-500/12 px-3 py-1.5 text-xs font-semibold text-accent-700"
              >
                20초 숏폼
              </span>
              <h3 class="program-title mt-4 text-h3 text-ink-900">
                바이럴 숏폼 콘텐츠
              </h3>
              <ul class="mt-6 space-y-3">
                <li
                  v-for="point in shortPoints"
                  :key="point"
                  class="flex gap-3 text-sm text-ink-600"
                >
                  <i
                    class="fas fa-check mt-0.5 shrink-0 text-xs text-accent-600"
                  />
                  {{ point }}
                </li>
              </ul>
            </div>
          </article>

          <!-- 브랜드 스토리 (유튜브) -->
          <article class="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <div data-reveal="right" class="md:order-2">
              <div class="overflow-hidden rounded-2xl bg-ink-950 shadow-lift">
                <iframe
                  class="aspect-video w-full"
                  src="https://www.youtube.com/embed/rWMxEA6RjzU"
                  title="댄스스포츠 대회 하이라이트"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                />
              </div>
            </div>

            <div data-reveal="left">
              <span
                class="inline-flex rounded-full bg-ink-900 px-3 py-1.5 text-xs font-semibold text-white"
              >
                브랜드 필름
              </span>
              <h3 class="program-title mt-4 text-h3 text-ink-900">
                브랜드 스토리 영상
              </h3>
              <ul class="mt-6 space-y-3">
                <li
                  v-for="point in storyPoints"
                  :key="point"
                  class="flex gap-3 text-sm text-ink-600"
                >
                  <i class="fas fa-check mt-0.5 shrink-0 text-xs text-ink-900" />
                  {{ point }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 제작 프로세스 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <header class="mx-auto mb-14 max-w-2xl text-center">
          <p data-reveal="fade" class="eyebrow justify-center before:hidden">
            Process
          </p>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-4 text-h2 text-ink-900"
          >
            제작 프로세스
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="140"
            class="mt-3 text-[0.9375rem] text-ink-500"
          >
            체계적인 프로세스로 고품질 영상을 제작합니다
          </p>
        </header>

        <ol class="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- 연결선 (데스크톱) -->
          <span
            class="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-ink-200 lg:block"
          />

          <li
            v-for="(step, i) in process"
            :key="step.title"
            data-reveal="up"
            :data-reveal-delay="i * 110"
            class="relative text-center"
          >
            <span
              class="relative z-10 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-ink-900 text-sm font-bold text-white ring-1 ring-ink-200"
            >
              {{ i + 1 }}
            </span>
            <h3 class="font-bold text-ink-900">{{ step.title }}</h3>
            <p
              class="mt-2 text-sm leading-relaxed text-ink-500"
              v-html="step.description"
            />
          </li>
        </ol>
      </div>
    </section>

    <!-- ═══════════ 문의 ═══════════ -->
    <section class="section-y bg-ink-50 pb-20 md:pb-28">
      <div class="container-page">
        <div
          data-reveal="scale"
          class="card mx-auto max-w-3xl px-6 py-14 text-center md:px-14 md:py-16"
        >
          <span
            class="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-900 text-white"
          >
            <i class="fas fa-video text-2xl" />
          </span>

          <h2 class="program-title text-h2 text-ink-900">영상 제작 문의</h2>
          <p class="mx-auto mt-5 max-w-lg text-lead text-ink-500">
            브랜드의 특별함을 담은 전문 영상으로<br />
            마케팅 효과를 극대화하세요
          </p>

          <div class="mt-10 grid gap-6 sm:grid-cols-3">
            <div v-for="strength in strengths" :key="strength.title">
              <span
                class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
              >
                <i :class="strength.icon" class="text-lg" />
              </span>
              <h3 class="font-semibold text-ink-900">{{ strength.title }}</h3>
              <p class="mt-1 text-sm leading-relaxed text-ink-500">
                {{ strength.description }}
              </p>
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
  </div>
</template>

<script setup>
import { inject } from 'vue';
import PageHero from '../components/PageHero.vue';
import { useReveal } from '../composables/useReveal';

useReveal();

const contact = inject('contact');

const services = [
  {
    icon: 'fas fa-video',
    color: 'bg-brand-600',
    title: '홍보 영상',
    description:
      '브랜드의 가치와 특징을 담은 전문적인 홍보 영상으로 인지도를 높여드립니다.',
  },
  {
    icon: 'fas fa-star',
    color: 'bg-accent-600',
    title: '인플루언서 콜라보',
    description:
      '틱톡 팔로워 10만+ 인플루언서들과의 협업으로 바이럴 효과를 극대화합니다.',
  },
  {
    icon: 'fas fa-trophy',
    color: 'bg-ink-900',
    title: '영화제급 퀄리티',
    description:
      '부산국제영화제 촬영팀이 참여하는 최고 수준의 전문 영상을 제작합니다.',
  },
];

const verticalPoints = [
  '세로형 9:16 비율로 모바일에 최적화',
  '팔로워 10만+ 인플루언서와의 협업',
  '트렌디한 편집과 음악으로 바이럴 유도',
  '인스타그램, 틱톡, 유튜브 쇼츠 동시 활용',
];

const shortPoints = [
  '20초 내외의 임팩트 있는 숏폼 영상',
  '인플루언서와의 협업으로 바이럴 효과 극대화',
  '트렌디한 콘텐츠로 젊은 층 어필',
  'SNS 플랫폼 최적화 편집',
];

const storyPoints = [
  '부산국제영화제 촬영팀의 전문 퀄리티',
  '전문 카메라 10대로 다각도 촬영',
  '브랜드 철학과 가치를 스토리텔링으로 표현',
  '감동적인 내러티브로 시청자 몰입도 향상',
];

const process = [
  {
    title: '상담 및 기획',
    description: '센터 특성 파악 및<br />촬영 컨셉 기획',
  },
  { title: '촬영 진행', description: '전문 장비와 기술로<br />현장 촬영 진행' },
  {
    title: '편집 및 후작업',
    description: '전문적인 편집과<br />사운드 후작업',
  },
  {
    title: '최종 전달',
    description: '고품질 영상 파일<br />및 활용 가이드 제공',
  },
];

const strengths = [
  {
    icon: 'fas fa-film',
    title: '영화제급 퀄리티',
    description: '부산국제영화제 촬영팀 참여',
  },
  {
    icon: 'fas fa-camera',
    title: '전문 장비',
    description: '전문 카메라 10대 +@ 보유',
  },
  {
    icon: 'fas fa-star',
    title: '인플루언서 협업',
    description: '틱톡 팔로워 10만+ 크리에이터',
  },
];
</script>
