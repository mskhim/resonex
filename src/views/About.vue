<template>
  <div>
    <PageHero
      image="/main/mainImg3.jpg"
      eyebrow="About Resonance Gym"
      serif
      subtitle="함께 공, 울 명 — 함께 울리는, 더 큰 울림"
    >
      <template #title>[공명 · 共鳴]</template>
    </PageHero>

    <!-- ═══════════ 브랜드 의미 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <div class="mx-auto max-w-3xl text-center">
          <p data-reveal="fade" class="eyebrow justify-center before:hidden">
            Meaning
          </p>

          <!-- 한자 풀이 -->
          <div
            data-reveal="up"
            data-reveal-delay="80"
            class="mt-8 flex items-center justify-center gap-5 md:gap-10"
          >
            <div v-for="char in brandChars" :key="char.han" class="text-center">
              <p class="logo-korean text-6xl text-ink-900 md:text-7xl">
                {{ char.han }}
              </p>
              <p class="mt-3 text-sm font-medium text-brand-600">
                {{ char.read }}
              </p>
              <p class="mt-1 text-xs text-ink-400">{{ char.meaning }}</p>
            </div>
          </div>

          <p
            data-reveal="up"
            data-reveal-delay="160"
            class="logo-korean mt-12 text-h2 font-light text-ink-900"
          >
            “함께 울리는, 더 큰 울림”
          </p>

          <p
            data-reveal="up"
            data-reveal-delay="220"
            class="mx-auto mt-6 max-w-xl text-lead text-ink-500"
          >
            하나의 울림이 다른 울림과 만나 더 큰 파동이 되듯, 공명짐은 한 사람의
            변화가 주변으로 퍼져나가는 공간을 지향합니다.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════ 대표 인사말 ═══════════ -->
    <section class="relative isolate overflow-hidden bg-ink-950">
      <!-- 유일한 실사 이미지를 크게 살린다 -->
      <div class="absolute inset-0">
        <img
          src="/about/profile1.png"
          alt=""
          aria-hidden="true"
          class="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/92 to-ink-950/55"
        />
      </div>

      <div class="container-page relative py-20 md:py-28">
        <div class="max-w-2xl">
          <p data-reveal="fade" class="eyebrow !text-brand-300">CEO Message</p>

          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-6 text-h2 text-white"
          >
            몸을 넘어서 삶의 균형까지,<br />
            <span class="text-brand-300">공명짐입니다.</span>
          </h2>

          <div
            data-reveal="up"
            data-reveal-delay="160"
            class="mt-8 space-y-4 text-lead text-white/65"
          >
            <p>공명짐을 찾아주신 모든 분들께 진심으로 감사드립니다.</p>
            <p>
              우리는 단순한 운동을 넘어, 삶의 질을 바꾸는 건강한 변화를 함께
              만들어가고자 합니다.
            </p>
            <p>한 사람, 한 사람의 길에 진심으로 공명하며 동행하겠습니다.</p>
          </div>

          <!-- 서명 -->
          <div
            data-reveal="up"
            data-reveal-delay="240"
            class="mt-9 border-t border-white/12 pt-6"
          >
            <p class="program-title text-xl text-white">고종관</p>
            <p class="mt-1 text-sm text-white/45">
              공명짐 &amp; 파워플레이트 &amp; 필라테스 위례점 대표 원장
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tag in tags"
                :key="tag"
                class="rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-sm text-white/75"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- 이력 열기 -->
          <div
            data-reveal="up"
            data-reveal-delay="320"
            class="mt-8 grid gap-3 sm:grid-cols-2"
          >
            <button
              type="button"
              @click="modal = 'certifications'"
              class="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/5 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
            >
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white transition-transform duration-300 group-hover:scale-105"
              >
                <i class="fas fa-certificate" />
              </span>
              <span class="min-w-0 flex-1">
                <span class="block font-semibold text-white">전문 자격증</span>
                <span class="mt-0.5 block text-xs text-white/45">
                  NASM 국제자격 포함 20여 개
                </span>
              </span>
              <i
                class="fas fa-chevron-right text-xs text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-white"
              />
            </button>

            <button
              type="button"
              @click="modal = 'experience'"
              class="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/5 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
            >
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-600 text-white transition-transform duration-300 group-hover:scale-105"
              >
                <i class="fas fa-briefcase" />
              </span>
              <span class="min-w-0 flex-1">
                <span class="block font-semibold text-white">경력 사항</span>
                <span class="mt-0.5 block text-xs text-white/45">
                  국가대표팀 트레이너 등
                </span>
              </span>
              <i
                class="fas fa-chevron-right text-xs text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 파워플레이트 소개 ═══════════ -->
    <section class="section-y bg-ink-50">
      <div class="container-page">
        <div class="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <!-- 로고 이미지라 잘리지 않도록 여백을 두고 contain으로 배치한다 -->
          <div data-reveal="right" class="md:order-2">
            <div
              class="flex items-center justify-center rounded-2xl border border-ink-200 bg-white p-10 shadow-soft md:p-14"
            >
              <img
                src="/about/profile2.png"
                alt="공명짐 - 진동 운동 전문 센터"
                class="h-auto w-full max-w-sm object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div data-reveal="left">
            <p class="eyebrow">Our Core</p>

            <h2 class="program-title mt-5 text-h2 text-ink-900">
              함께 울리는 더 큰 울림,<br />
              <span class="text-brand-600">공명</span>
            </h2>

            <p class="mt-6 text-lead text-ink-500">
              공명짐의 중심에는 <strong class="text-ink-800">파워플레이트</strong>가
              있습니다. 고유 고주파 진동이 근육에 미세한 자극을 주어, 짧은 시간
              안에 깊은 효과를 만들어내는 최신 트레이닝 방식입니다.
            </p>

            <!-- 효과 목록 -->
            <ul class="mt-8 grid gap-3 sm:grid-cols-2">
              <li
                v-for="(effect, i) in effects"
                :key="effect.label"
                data-reveal="up"
                :data-reveal-delay="i * 80"
                class="flex items-center gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3.5"
              >
                <i :class="effect.icon" class="text-sm text-brand-600" />
                <span class="text-sm font-medium text-ink-700">
                  {{ effect.label }}
                </span>
              </li>
            </ul>

            <RouterLink to="/products/powerplate" class="btn btn-primary mt-8">
              파워플레이트 알아보기
              <i class="fas fa-arrow-right text-xs" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 핵심 서비스 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <header class="mx-auto mb-14 max-w-2xl text-center md:mb-18">
          <p data-reveal="fade" class="eyebrow justify-center before:hidden">
            Services
          </p>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-4 text-h2 text-ink-900"
          >
            공명짐의 핵심 서비스
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="140"
            class="mt-4 text-lead text-ink-500"
          >
            전문 트레이닝부터 프리미엄 헬스케어 기기 체험까지,<br />
            건강과 관련된 모든 것을 한 곳에서 만나보세요
          </p>
        </header>

        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="(service, i) in services"
            :key="service.title"
            data-reveal="up"
            :data-reveal-delay="i * 110"
            class="card card-hover group relative overflow-hidden p-7 md:p-8"
          >
            <!-- 번호 워터마크 -->
            <span
              class="program-title pointer-events-none absolute -right-2 -top-4 text-7xl text-ink-100 transition-colors duration-300 group-hover:text-brand-50"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </span>

            <div class="relative">
              <span
                class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-600"
              >
                <i :class="service.icon" class="text-lg" />
              </span>

              <h3 class="program-title text-lg text-ink-900">
                {{ service.title }}
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-ink-500">
                {{ service.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ CTA ═══════════ -->
    <section class="section-y-sm bg-white pb-20 md:pb-28">
      <div class="container-page">
        <div
          data-reveal="scale"
          class="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-16 text-center md:px-16 md:py-20"
        >
          <div
            class="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-600/18 blur-3xl"
          />
          <div
            class="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent-500/12 blur-3xl"
          />

          <div class="relative mx-auto max-w-xl">
            <h2 class="logo-korean text-h2 font-light text-white">
              공명짐과 함께<br class="sm:hidden" />
              건강한 변화를 시작해보세요
            </h2>
            <p class="mt-5 text-[0.9375rem] text-white/60">
              맞춤형 건강 솔루션과 프리미엄 기기 체험을 원하신다면 지금 바로
              문의하세요
            </p>

            <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                :href="contact.kakao"
                target="_blank"
                rel="noopener noreferrer"
                class="btn bg-white text-ink-900 hover:-translate-y-0.5 hover:shadow-lift"
              >
                트레이닝 문의하기
              </a>
              <a
                :href="contact.kakao"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost-light"
              >
                기기 체험 상담받기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 자격증 / 경력 모달 ═══════════ -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="modal"
          class="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          @click.self="modal = null"
        >
          <div
            class="flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-lift sm:rounded-2xl"
            role="dialog"
            aria-modal="true"
          >
            <!-- 모달 헤더 -->
            <header
              class="flex items-center gap-4 border-b border-ink-100 px-6 py-5"
            >
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                :class="isCert ? 'bg-brand-600' : 'bg-accent-600'"
              >
                <i
                  :class="isCert ? 'fas fa-certificate' : 'fas fa-briefcase'"
                />
              </span>

              <div class="min-w-0 flex-1">
                <h3 class="program-title text-lg text-ink-900">
                  {{ isCert ? '자격증 현황' : '경력사항' }}
                </h3>
                <p class="text-sm text-ink-500">
                  {{ isCert ? '전문 자격증' : '전문 경력' }}
                </p>
              </div>

              <button
                type="button"
                @click="modal = null"
                aria-label="닫기"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-700"
              >
                <i class="fas fa-times" />
              </button>
            </header>

            <!-- 모달 본문 -->
            <div class="thin-scrollbar overflow-y-auto overscroll-contain p-6">
              <!-- 자격증 -->
              <div v-if="isCert" class="space-y-7">
                <section v-for="group in certifications" :key="group.title">
                  <h4
                    class="mb-3 flex items-center gap-2 text-sm font-bold text-ink-900"
                  >
                    <i :class="group.icon" class="text-brand-600" />
                    {{ group.title }}
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="item in group.items"
                      :key="item"
                      class="rounded-xl border-l-[3px] border-brand-400 bg-ink-50 px-4 py-3 text-sm text-ink-700"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </section>
              </div>

              <!-- 경력 -->
              <div v-else class="space-y-8">
                <section>
                  <h4
                    class="mb-4 flex items-center gap-2 text-sm font-bold text-ink-900"
                  >
                    <i class="fas fa-clock-rotate-left text-accent-600" />
                    주요 경력
                  </h4>

                  <!-- 타임라인 -->
                  <ol class="relative space-y-5 border-l border-ink-200 pl-6">
                    <li
                      v-for="job in career"
                      :key="job.org"
                      class="relative"
                    >
                      <span
                        class="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-white"
                        :class="job.latest ? 'bg-accent-500' : 'bg-ink-300'"
                      />
                      <div class="flex flex-wrap items-center gap-2">
                        <span
                          class="rounded-full bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-600"
                        >
                          {{ job.period }}
                        </span>
                        <span
                          v-if="job.latest"
                          class="rounded-full bg-accent-500/12 px-2.5 py-1 text-xs font-semibold text-accent-600"
                        >
                          최신
                        </span>
                      </div>
                      <p class="mt-2 font-bold text-ink-900">{{ job.org }}</p>
                      <p class="mt-0.5 text-sm text-ink-500">{{ job.role }}</p>
                    </li>
                  </ol>
                </section>

                <section class="space-y-3">
                  <div
                    v-for="note in careerNotes"
                    :key="note.title"
                    class="rounded-xl bg-ink-50 p-4"
                  >
                    <p class="font-semibold text-ink-900">{{ note.title }}</p>
                    <p
                      class="mt-1.5 text-sm leading-relaxed text-ink-500"
                      v-html="note.body"
                    />
                  </div>
                </section>

                <section>
                  <h4
                    class="mb-4 flex items-center gap-2 text-sm font-bold text-ink-900"
                  >
                    <i class="fas fa-star text-accent-600" />
                    현재 활동
                  </h4>
                  <ul class="space-y-3.5">
                    <li
                      v-for="item in current"
                      :key="item.title"
                      class="flex gap-3"
                    >
                      <i
                        class="fas fa-circle-check mt-0.5 shrink-0 text-accent-500"
                      />
                      <div>
                        <p class="font-medium text-ink-900">{{ item.title }}</p>
                        <p
                          class="mt-0.5 text-sm leading-relaxed text-ink-500"
                          v-html="item.body"
                        />
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue';
import PageHero from '../components/PageHero.vue';
import { useReveal } from '../composables/useReveal';

useReveal();

const contact = inject('contact');
const modal = ref(null);
const isCert = computed(() => modal.value === 'certifications');

// 모달이 열려 있는 동안 배경 스크롤 잠금
watch(modal, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

const tags = ['퍼스널트레이닝', '체형교정', '건강관리'];

// 브랜드명 '공명(共鳴)' 한자 풀이
const brandChars = [
  { han: '共', read: '함께 공', meaning: '함께한다' },
  { han: '鳴', read: '울 명', meaning: '울린다' },
];

const effects = [
  { icon: 'fas fa-bolt', label: '근육 활성화' },
  { icon: 'fas fa-person', label: '체형 교정' },
  { icon: 'fas fa-fire', label: '체지방 감량' },
  { icon: 'fas fa-heart-pulse', label: '혈류 & 림프 순환' },
];

const services = [
  {
    icon: 'fas fa-spa',
    title: '정교한 코어 운동 – 필라테스',
    description:
      '작은 움직임 하나에도 집중하며, 몸의 정렬과 중심을 바로잡는 정밀한 운동. 파워플레이트의 진동과 결합해 깊은 코어 자극까지 더합니다.',
  },
  {
    icon: 'fas fa-dumbbell',
    title: '기능 중심 웨이트 트레이닝',
    description:
      "기계적인 루틴이 아닌, '내 삶을 더 편안하게 만들어주는 움직임'을 위한 웨이트 트레이닝을 지향합니다.",
  },
  {
    icon: 'fas fa-wind',
    title: '공명짐 리커버리 루틴',
    description:
      '고요한 진동 속에서 호흡을 정리하고 몸의 긴장을 풀어내는 회복 루틴. 신경을 안정시키고 스트레스를 덜어주는 내면적인 리셋을 선사합니다.',
  },
];

const certifications = [
  {
    title: '기본 자격증',
    icon: 'fas fa-star',
    items: ['생활 체육 지도자 자격 2급 보디빌딩'],
  },
  {
    title: '국제 자격증 (NASM)',
    icon: 'fas fa-globe',
    items: [
      'NASM-CPT 미국 스포츠 의학회 트레이너 자격',
      'NASM-CES 미국 스포츠 의학회 재활 운동 전문가 자격',
      'NASM-PES 미국 스포츠 의학회 선수 운동 전문가 자격',
      'NASM-GFS 미국 스포츠 의학회 골프 피트니스 전문가 자격',
      'NASM-WFS 미국 스포츠 의학회 여성 운동 전문가 수료',
    ],
  },
  {
    title: '전문 트레이너 자격증',
    icon: 'fas fa-dumbbell',
    items: [
      'NSCA - Bosu Master Trainer 보수 마스터 트레이너',
      'Trigger Point Master Trainer 트리거 포인트 마스터 트레이너',
      'POWER PLATE Master Trainer 파워 플레이트 마스터 트레이너',
      'POWER PLATE ON Pilates 파워 플레이트 필라테스 강사',
    ],
  },
  {
    title: '필라테스 & 요가 자격증',
    icon: 'fas fa-spa',
    items: [
      "M's Body Pilates Instructor 문지숙 필라테스 강사",
      "M's Body Pilates Educator 문지숙 필라테스 강사 경력",
      '요가 그릿 - 요가 TTC 강사 자격 (아쉬탕가, 빈야사, 현대 요가, 고전 요가 등)',
    ],
  },
  {
    title: '기타 전문 자격증',
    icon: 'fas fa-screwdriver-wrench',
    items: [
      'IASTM & CRT & SASO 근막이완 테크닉 트레이너',
      'TRX - STC, SMSTC, YOGA 소도구 서스펜션 트레이너',
      'SuplexKorea Bulgarian Bag Level 1 불가리안백 자격',
      'Club Bell, Kettle Bell, VIPER Trainer 소도구 트레이너',
      '에이스 바디 타워풀리 - 상체/하체 TTC 코스 자격',
    ],
  },
  {
    title: '세미나 참석',
    icon: 'fas fa-graduation-cap',
    items: [
      '각종 세미나 참석 (부정렬 증후군, 요가, FMS 움직임 평가, CES 등)',
    ],
  },
];

const career = [
  {
    period: '2018-2019',
    org: '언더아머 스포츠',
    role: '브랜드 트레이닝 런 트레이너',
  },
  {
    period: '2020-2023',
    org: '코엑스, 킨텍스',
    role: '컨벤션 어시스트 강사',
  },
  {
    period: '2022-2023',
    org: '문체부 & ATZ Sup',
    role: '프로 대회 선수 케어 트레이너',
  },
  {
    period: '2024',
    org: '대한민국 국가대표',
    role: '스탠다드 댄스 스포츠팀 트레이너',
    latest: true,
  },
  {
    period: '2024',
    org: '스타볼 워커힐',
    role: '댄스 스포츠 대회 - 라틴, 스탠다드 선수 케어 부스 운영',
  },
];

const careerNotes = [
  {
    title: '필라테스 & 트레이너 강사 활동',
    body: '압구정, 판교, 역삼, 천호, 군자, 서울숲, 서초 등 다수 지역에서 필라테스 및 트레이너 강사 활동',
  },
  {
    title: '커뮤니티 센터 경영 관리',
    body: '前) 서초, 판교, 위례 센터 경영 및 운영 관리<br />現) 고덕 센터 경영 및 운영 관리',
  },
];

const current = [
  {
    title: '웨이트 필라테스 전문가',
    body: "네이버, 네이트, 다음 '고종관 트레이너' - 웨이트 필라테스 기사",
  },
  {
    title: '미디어 활동',
    body: '더모스트타임즈 - 머슬트리피티스튜디오 - 고종관 대표 "함께 건강한 미래를 설계하는 동반자"',
  },
  {
    title: '교육 강사',
    body: 'Powerplate Master (파워 플레이트) / Trigger Point (트리거 포인트) 교육 강사',
  },
  {
    title: '컨설팅 이사',
    body: '에이스 바디 - 타워 풀리 컨설팅 이사<br />메디코넷 - 고압 산소 챔버 컨설팅 이사<br />영일엠 - Saso 컨설팅 이사',
  },
  {
    title: '센터 운영',
    body: '공명짐 & 파워플레이트 & 필라테스 위례점 대표 원장',
  },
];
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s var(--ease-out-quint);
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.35s var(--ease-out-quint);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: translateY(24px) scale(0.97);
}

@media (max-width: 639px) {
  .modal-enter-from > div,
  .modal-leave-to > div {
    transform: translateY(100%);
  }
}
</style>
