<template>
  <div>
    <PageHero
      image="/franchise/img1.jpg"
      eyebrow="Franchise"
      subtitle="대형 체인점과는 다른, 동네와 가까운 운동 센터를 함께 만들어갈 분을 기다립니다."
    >
      <template #title>
        함께 성장하는<br />
        <span class="text-brand-300">파트너</span>를 찾습니다
      </template>

      <template #actions>
        <button type="button" class="btn bg-white text-ink-900 hover:-translate-y-0.5" @click="openForm">
          <i class="fas fa-comments" />
          창업 상담 신청
        </button>
        <a :href="`tel:${contact.phone}`" class="btn btn-ghost-light">
          <i class="fas fa-phone" />
          전화로 문의
        </a>
      </template>
    </PageHero>

    <!-- ═══════════ 현재 모습 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <div class="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div data-reveal="left">
            <p class="eyebrow">Now</p>
            <h2 class="program-title mt-5 text-h2 text-ink-900">
              공명짐의 현재 모습
            </h2>
            <p class="mt-4 text-lead text-ink-500">
              과장 없이, 있는 그대로 말씀드립니다.
            </p>

            <dl class="mt-8 space-y-1">
              <div
                v-for="(fact, i) in facts"
                :key="fact.label"
                data-reveal="up"
                :data-reveal-delay="i * 70"
                class="flex gap-4 border-b border-ink-100 py-4 last:border-0"
              >
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600"
                >
                  <i :class="fact.icon" class="text-sm" />
                </span>
                <div class="min-w-0">
                  <dt class="text-sm font-semibold text-ink-900">
                    {{ fact.label }}
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-relaxed text-ink-500"
                    v-html="fact.value"
                  />
                </div>
              </div>
            </dl>
          </div>

          <div data-reveal="right">
            <div class="overflow-hidden rounded-2xl shadow-card">
              <img
                src="/franchise/img1.jpg"
                alt="공명짐 내부 모습"
                class="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 창업 조건 ═══════════ -->
    <section class="section-y bg-ink-50">
      <div class="container-page">
        <header class="mx-auto mb-12 max-w-2xl text-center">
          <p data-reveal="fade" class="eyebrow justify-center before:hidden">
            Conditions
          </p>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-4 text-h2 text-ink-900"
          >
            공명짐 프랜차이즈 조건
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="140"
            class="mt-3 text-sm text-ink-400"
          >
            아래 금액은 예상치이며, 현장 환경에 따라 달라질 수 있습니다.
          </p>
        </header>

        <div class="grid gap-6 lg:grid-cols-2">
          <!-- 비용 -->
          <div data-reveal="up" class="card p-7 md:p-8">
            <h3
              class="flex items-center gap-3 text-[0.9375rem] font-bold text-ink-900"
            >
              <span
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white"
              >
                <i class="fas fa-calculator text-sm" />
              </span>
              예상 초기 투자 비용
            </h3>

            <dl class="mt-6 space-y-4">
              <div class="flex items-baseline justify-between gap-4">
                <dt class="text-sm text-ink-500">가맹금 (교육비 포함)</dt>
                <dd class="shrink-0 text-sm font-semibold text-ink-900">
                  300~500만원
                </dd>
              </div>

              <!-- 인테리어 (하위 항목) -->
              <div>
                <dt class="text-sm text-ink-500">인테리어 (20평 기준)</dt>
                <dd class="mt-2 space-y-2 rounded-xl bg-ink-50 p-3.5">
                  <div class="flex items-baseline justify-between gap-4">
                    <span class="text-xs text-ink-400">
                      스탠다드형 (평단가 250)
                    </span>
                    <span class="shrink-0 text-sm font-semibold text-ink-900">
                      5,000만원
                    </span>
                  </div>
                  <div class="flex items-baseline justify-between gap-4">
                    <span class="text-xs text-ink-400">
                      프리미엄형 (평단가 350)
                    </span>
                    <span class="shrink-0 text-sm font-semibold text-ink-900">
                      7,000만원
                    </span>
                  </div>
                </dd>
              </div>

              <div class="flex items-baseline justify-between gap-4">
                <dt class="text-sm text-ink-500">운동 기구 및 장비</dt>
                <dd class="shrink-0 text-sm font-semibold text-ink-900">
                  2,500~10,000만원
                </dd>
              </div>

              <div class="flex items-baseline justify-between gap-4">
                <dt class="text-sm text-ink-500">
                  기타 (간판, 사인물, 가구, 냉난방)
                </dt>
                <dd class="shrink-0 text-sm font-semibold text-ink-900">
                  현장협의
                </dd>
              </div>

              <div
                class="flex items-baseline justify-between gap-4 border-t border-ink-200 pt-4"
              >
                <dt class="font-bold text-ink-900">총 예상 비용</dt>
                <dd class="program-title shrink-0 text-lg text-brand-600">
                  7,800~17,500만원
                </dd>
              </div>
            </dl>
          </div>

          <!-- 지원 사항 -->
          <div data-reveal="up" data-reveal-delay="120" class="card p-7 md:p-8">
            <h3
              class="flex items-center gap-3 text-[0.9375rem] font-bold text-ink-900"
            >
              <span
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-600 text-white"
              >
                <i class="fas fa-handshake-angle text-sm" />
              </span>
              공명짐이 도와드릴 수 있는 것
            </h3>

            <ul class="mt-6 space-y-3">
              <li
                v-for="item in supports"
                :key="item"
                class="flex gap-3 text-sm text-ink-600"
              >
                <i class="fas fa-circle-check mt-0.5 shrink-0 text-accent-500" />
                {{ item }}
              </li>
            </ul>

            <!-- 솔직한 한계 -->
            <div class="mt-6 rounded-xl border border-ink-200 bg-ink-50 p-4">
              <p class="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">
                솔직하게 말씀드립니다
              </p>
              <ul class="space-y-2.5">
                <li
                  v-for="item in limits"
                  :key="item"
                  class="flex gap-3 text-sm text-ink-500"
                >
                  <i class="fas fa-circle-xmark mt-0.5 shrink-0 text-ink-300" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 왜 프랜차이즈인가 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <header class="mx-auto mb-12 max-w-2xl text-center">
          <p data-reveal="fade" class="eyebrow justify-center before:hidden">
            Why
          </p>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-4 text-h2 text-ink-900"
          >
            왜 체육 시설 프랜차이즈를<br class="sm:hidden" /> 시작하나요?
          </h2>
        </header>

        <div class="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <article
            v-for="(reason, i) in reasons"
            :key="reason.title"
            data-reveal="up"
            :data-reveal-delay="i * 120"
            class="card card-hover p-7 text-center md:p-8"
          >
            <span
              class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600"
            >
              <i :class="reason.icon" class="text-xl" />
            </span>
            <h3 class="program-title text-lg text-ink-900">
              {{ reason.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-500">
              {{ reason.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 이런 분을 찾습니다 ═══════════ -->
    <section class="section-y bg-ink-50">
      <div class="container-page">
        <header class="mx-auto mb-12 max-w-2xl text-center">
          <p data-reveal="fade" class="eyebrow justify-center before:hidden">
            Partner
          </p>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            class="program-title mt-4 text-h2 text-ink-900"
          >
            이런 분과 함께하고 싶어요
          </h2>
        </header>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(partner, i) in idealPartners"
            :key="partner.title"
            data-reveal="up"
            :data-reveal-delay="(i % 3) * 100"
            class="card card-hover p-6"
          >
            <div class="mb-4 flex items-center gap-3">
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-white"
              >
                <i :class="partner.icon" class="text-sm" />
              </span>
              <h3 class="font-bold text-ink-900">{{ partner.title }}</h3>
            </div>
            <p class="text-sm leading-relaxed text-ink-500">
              {{ partner.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 운영 핵심 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <div class="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div data-reveal="right" class="md:order-2">
            <div class="overflow-hidden rounded-2xl shadow-card">
              <img
                src="/franchise/img2.png"
                alt="성공적인 운동 센터 운영"
                class="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div data-reveal="left">
            <p class="eyebrow">Know-how</p>
            <h2 class="program-title mt-5 text-h2 text-ink-900">
              저희가 배운<br />
              <span class="text-brand-600">운동 센터 운영의 핵심</span>
            </h2>

            <ul class="mt-8 space-y-6">
              <li
                v-for="(tip, i) in operationTips"
                :key="tip.title"
                data-reveal="up"
                :data-reveal-delay="i * 80"
                class="flex gap-4"
              >
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
                >
                  <i :class="tip.icon" class="text-sm" />
                </span>
                <div>
                  <h3 class="font-bold text-ink-900">{{ tip.title }}</h3>
                  <p class="mt-1.5 text-sm leading-relaxed text-ink-500">
                    {{ tip.description }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 문의 CTA ═══════════ -->
    <section class="section-y bg-ink-950 text-white">
      <div class="container-page text-center">
        <h2 data-reveal="up" class="logo-korean text-h2 font-light">
          공명짐 창업에<br class="sm:hidden" /> 관심이 있으시다면
        </h2>

        <p
          data-reveal="up"
          data-reveal-delay="100"
          class="mx-auto mt-5 max-w-md text-lead text-white/55"
        >
          부담 없이 편하게 대화해요.<br />
          공명짐 운영에 대한 궁금한 점들을 함께 나눠봐요.
        </p>

        <div
          data-reveal="up"
          data-reveal-delay="180"
          class="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <button
            type="button"
            @click="openForm"
            class="btn bg-white text-ink-900 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <i class="fas fa-comments" />
            대화해보기
          </button>
          <a :href="`tel:${contact.phone}`" class="btn btn-ghost-light">
            <i class="fas fa-phone" />
            전화로 상담
          </a>
        </div>

        <!-- 연락처 -->
        <div
          data-reveal="up"
          data-reveal-delay="260"
          class="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2"
        >
          <a
            :href="`tel:${contact.phone}`"
            class="flex items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
          >
            <i class="fas fa-phone text-white/40" />
            <span class="text-left">
              <span class="block text-xs text-white/45">전화 문의</span>
              <span class="block font-semibold">{{ contact.phone }}</span>
            </span>
          </a>
          <a
            :href="`mailto:${contact.email}`"
            class="flex items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
          >
            <i class="fas fa-envelope text-white/40" />
            <span class="text-left">
              <span class="block text-xs text-white/45">이메일 문의</span>
              <span class="block break-all font-semibold">
                {{ contact.email }}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════ 문의 폼 모달 ═══════════ -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showForm"
          class="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/65 backdrop-blur-sm sm:items-center sm:p-6"
          @click.self="closeForm"
        >
          <div
            class="flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl bg-white shadow-lift sm:rounded-2xl"
            role="dialog"
            aria-modal="true"
          >
            <header
              class="flex items-center justify-between gap-4 border-b border-ink-100 px-6 py-5"
            >
              <div>
                <h3 class="program-title text-lg text-ink-900">
                  편하게 대화해요
                </h3>
                <p class="mt-0.5 text-sm text-ink-500">
                  남겨주시면 연락드릴게요
                </p>
              </div>
              <button
                type="button"
                @click="closeForm"
                aria-label="닫기"
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-700"
              >
                <i class="fas fa-times" />
              </button>
            </header>

            <!-- 전송 완료 -->
            <div v-if="sent" class="px-6 py-12 text-center">
              <div
                class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/12 text-accent-600"
              >
                <i class="fas fa-check text-xl" />
              </div>
              <p class="program-title text-lg text-ink-900">
                메시지가 전송되었습니다
              </p>
              <p class="mt-2 text-sm text-ink-500">
                공명짐 운영에 대해 편한 시간에 대화해요!
              </p>
              <button type="button" class="btn btn-outline mt-6" @click="closeForm">
                닫기
              </button>
            </div>

            <!-- 폼 -->
            <form
              v-else
              class="thin-scrollbar space-y-4 overflow-y-auto p-6"
              novalidate
              @submit.prevent="submit"
            >
              <div>
                <label for="fr-name" class="mb-2 block text-sm font-medium text-ink-700">
                  성함
                </label>
                <input
                  id="fr-name"
                  v-model.trim="form.name"
                  type="text"
                  required
                  placeholder="편하게 불러드릴 이름을 알려주세요"
                  class="w-full rounded-xl border border-ink-200 bg-ink-50/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/15"
                />
              </div>

              <div>
                <label for="fr-phone" class="mb-2 block text-sm font-medium text-ink-700">
                  연락처
                </label>
                <input
                  id="fr-phone"
                  v-model.trim="form.phone"
                  type="tel"
                  inputmode="tel"
                  required
                  placeholder="편한 시간에 연락드릴게요"
                  class="w-full rounded-xl border border-ink-200 bg-ink-50/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/15"
                />
              </div>

              <div>
                <label for="fr-msg" class="mb-2 block text-sm font-medium text-ink-700">
                  궁금한 점이나 하고 싶은 말씀
                </label>
                <textarea
                  id="fr-msg"
                  v-model.trim="form.message"
                  rows="4"
                  placeholder="공명짐 창업에 대해 궁금한 것들을 편하게 말씀해주세요"
                  class="w-full resize-none rounded-xl border border-ink-200 bg-ink-50/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/15"
                />
              </div>

              <p v-if="error" class="text-sm font-medium text-red-600">
                {{ error }}
              </p>

              <button
                type="submit"
                :disabled="sending"
                class="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:translate-y-0"
              >
                <span
                  v-if="sending"
                  class="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                />
                {{ sending ? '전송 중' : '메시지 보내기' }}
              </button>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive, inject, watch } from 'vue';
import emailjs from '@emailjs/browser';
import PageHero from '../components/PageHero.vue';
import { useReveal } from '../composables/useReveal';

useReveal();

const contact = inject('contact');

const showForm = ref(false);
const sending = ref(false);
const sent = ref(false);
const error = ref('');
const form = reactive({ name: '', phone: '', message: '' });

const openForm = () => {
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
  // 닫힘 애니메이션이 끝난 뒤 초기화
  setTimeout(() => {
    sent.value = false;
    error.value = '';
    form.name = '';
    form.phone = '';
    form.message = '';
  }, 300);
};

watch(showForm, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

const submit = async () => {
  error.value = '';

  if (!form.name) {
    error.value = '성함을 입력해주세요.';
    return;
  }
  if (form.phone.replace(/\D/g, '').length < 9) {
    error.value = '연락처를 정확히 입력해주세요.';
    return;
  }

  sending.value = true;

  try {
    await emailjs.send(
      'resonex',
      'template_bvfq6hg',
      {
        name: form.name,
        number: form.phone,
        message: form.message || '특별한 문의사항 없음',
        type: '프렌차이즈문의',
      },
      'gAoL9uCniHayhdwIg'
    );
    sent.value = true;
  } catch (e) {
    console.error('이메일 전송 실패:', e);
    error.value = '전송에 실패했습니다. 전화나 카카오톡으로 문의해주세요.';
  } finally {
    sending.value = false;
  }
};

/* ─────────── 콘텐츠 ─────────── */

const facts = [
  { icon: 'fas fa-calendar-days', label: '운영 기간', value: '2023년 창업' },
  {
    icon: 'fas fa-dumbbell',
    label: '현재 규모',
    value: '성남 본점, 고덕점<br />(소규모 통합 트레이닝 센터 운영)',
  },
  {
    icon: 'fas fa-heart',
    label: '운영 철학',
    value: '개인별 맞춤 관리와 건강한 문화 조성',
  },
  {
    icon: 'fas fa-users',
    label: '회원 특징',
    value: '동네 주민 중심의 가족 같은 분위기',
  },
  { icon: 'fas fa-seedling', label: '목표', value: '파트너와 함께 천천히 확장' },
];

const supports = [
  '운동 센터 운영 노하우 공유',
  '트레이너 교육 및 멘토링',
  '장비 업체 연결 및 정보',
  '회원 관리 시스템 공유',
  '지속적인 소통과 상담',
  '기타 부가 수익을 위한 공명짐 제안',
];

const limits = [
  '수익이나 회원 수 보장은 어렵습니다',
  '대규모 마케팅 지원은 한계가 있습니다',
];

const reasons = [
  {
    icon: 'fas fa-house',
    title: '지역 밀착형 운영',
    description:
      '대형 체인점과는 다른, 동네 주민들과 가까워질 수 있는 친근한 운동 센터를 만들고 싶어요.',
  },
  {
    icon: 'fas fa-heart',
    title: '건강한 지역 커뮤니티',
    description:
      '운동을 통해 이웃과 만나고, 서로 격려하며 함께 건강해지는 지역 커뮤니티를 만들어가고 싶어요.',
  },
];

const idealPartners = [
  {
    icon: 'fas fa-dumbbell',
    title: '운동을 좋아하는 분',
    description:
      '운동 센터 운영 경험보다는 운동과 건강에 대한 진정한 관심과 열정을 가진 분',
  },
  {
    icon: 'fas fa-users',
    title: '사람과의 소통을 즐기는 분',
    description:
      '회원들과 진심으로 소통하며, 각자의 목표 달성을 도와주고 싶어하는 분',
  },
  {
    icon: 'fas fa-clock',
    title: '꾸준함을 중시하는 분',
    description:
      '빠른 수익보다는 지역에 뿌리내리며 꾸준히 운영해나가고 싶은 분',
  },
  {
    icon: 'fas fa-face-smile',
    title: '긍정적이고 성실한 분',
    description:
      '어려운 상황에서도 긍정적으로 해결책을 찾고, 성실하게 운영하실 분',
  },
  {
    icon: 'fas fa-lightbulb',
    title: '함께 발전하고 싶은 분',
    description: '서로의 경험을 나누며 더 나은 운동 센터를 만들어가고 싶은 분',
  },
  {
    icon: 'fas fa-compass',
    title: '지역 밀착형 운영을 원하는 분',
    description:
      '대형 프랜차이즈보다는 동네 사람들과 가까운 운동 센터를 만들고 싶은 분',
  },
];

const operationTips = [
  {
    icon: 'fas fa-user-group',
    title: '회원과의 관계가 가장 중요',
    description:
      '단순히 운동 공간을 제공하는 것이 아니라, 회원 한 분 한 분과 진심으로 소통하는 것이 핵심이에요.',
  },
  {
    icon: 'fas fa-chart-line',
    title: '꾸준한 관리와 개선',
    description:
      '시설과 서비스를 지속적으로 점검하고 개선해나가는 것이 회원 만족도를 높이는 길이에요.',
  },
  {
    icon: 'fas fa-heart',
    title: '진정성 있는 서비스',
    description:
      '회원들의 목표와 상황을 이해하고, 각자에게 맞는 운동 방법을 제안하는 것이 중요해요.',
  },
  {
    icon: 'fas fa-house',
    title: '지역 커뮤니티 중심',
    description:
      '동네 주민들이 편하게 찾을 수 있는 친근한 분위기를 만드는 것이 장기적으로 도움이 돼요.',
  },
  {
    icon: 'fas fa-scale-balanced',
    title: '적정한 가격과 서비스',
    description:
      '과도한 수익 추구보다는 합리적인 가격으로 양질의 서비스를 제공하는 것이 지속가능해요.',
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
