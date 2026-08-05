<template>
  <footer class="mt-auto bg-ink-950 text-white">
    <!-- 상단 CTA 밴드 -->
    <div class="border-b border-white/10">
      <div
        class="container-page flex flex-col items-center gap-6 py-12 text-center md:flex-row md:justify-between md:py-14 md:text-left"
      >
        <div>
          <p class="logo-korean text-2xl text-white md:text-3xl">
            함께 울리는, 더 큰 울림
          </p>
          <p class="mt-2 text-sm text-white/55">
            상담은 언제나 무료입니다. 편하게 문의해주세요.
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <a
            :href="contact.kakao"
            target="_blank"
            rel="noopener noreferrer"
            class="btn bg-[#FEE500] text-ink-900 hover:-translate-y-0.5 hover:brightness-105"
          >
            <i class="fas fa-comment" />
            카카오톡 상담
          </a>
          <a :href="`tel:${contact.phone}`" class="btn btn-ghost-light">
            <i class="fas fa-phone" />
            {{ contact.phone }}
          </a>
        </div>
      </div>
    </div>

    <!-- 정보 영역 -->
    <div class="container-page py-12 md:py-16">
      <div class="grid gap-10 md:grid-cols-12 md:gap-8">
        <!-- 브랜드 -->
        <div class="md:col-span-4">
          <img
            src="../img/mainLogo.png"
            alt="공명짐"
            class="h-9 w-auto object-contain brightness-0 invert"
          />
          <p class="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
            파워플레이트를 중심으로 한 통합 운동 전문 센터.
            <br />
            진동 운동으로 몸과 마음을 함께 깨웁니다.
          </p>

          <div class="mt-6 flex gap-3">
            <a
              :href="contact.instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="인스타그램"
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white"
            >
              <i class="fab fa-instagram text-lg" />
            </a>
            <a
              :href="contact.kakao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡"
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FEE500] hover:text-ink-900"
            >
              <i class="fas fa-comment-dots text-lg" />
            </a>
            <a
              :href="`mailto:${contact.email}`"
              aria-label="이메일"
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink-900"
            >
              <i class="fas fa-envelope text-lg" />
            </a>
          </div>
        </div>

        <!-- 사이트맵 -->
        <nav class="grid grid-cols-2 gap-8 md:col-span-5 md:grid-cols-3">
          <div v-for="col in sitemap" :key="col.title">
            <h3
              class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
            >
              {{ col.title }}
            </h3>
            <ul class="space-y-2.5">
              <li v-for="link in col.links" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </nav>

        <!-- 연락처 / 사업자 정보 -->
        <div class="md:col-span-3">
          <h3
            class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
          >
            Contact
          </h3>
          <ul class="space-y-3 text-sm text-white/65">
            <li class="flex gap-3">
              <i class="fas fa-location-dot mt-1 w-4 shrink-0 text-white/35" />
              <span class="leading-relaxed">{{ contact.address }}</span>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-phone mt-1 w-4 shrink-0 text-white/35" />
              <a
                :href="`tel:${contact.phone}`"
                class="transition-colors hover:text-white"
              >
                {{ contact.phone }}
              </a>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-envelope mt-1 w-4 shrink-0 text-white/35" />
              <a
                :href="`mailto:${contact.email}`"
                class="break-all transition-colors hover:text-white"
              >
                {{ contact.email }}
              </a>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-clock mt-1 w-4 shrink-0 text-white/35" />
              <span class="leading-relaxed">
                평일 06:00–23:00<br />
                주말 08:00–20:00
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 사업자 정보 (작게, 접근 가능하게) -->
      <div
        class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/35 md:flex-row md:items-center md:justify-between"
      >
        <div class="flex flex-wrap gap-x-5 gap-y-1.5">
          <span>공명짐</span>
          <span>대표 고종관</span>
          <span>사업자등록번호 459-23-01817</span>
          <span>개인정보책임자 고종관</span>
          <span>국민은행 229101-04-339256</span>
        </div>
        <p class="shrink-0">&copy; {{ year }} 공명짐. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, inject } from 'vue';

const contact = inject('contact');
const year = computed(() => new Date().getFullYear());

const sitemap = [
  {
    title: 'About',
    links: [
      { to: '/about', label: '회사 소개' },
      { to: '/location', label: '오시는 길' },
    ],
  },
  {
    title: 'Products',
    links: [
      { to: '/products/powerplate', label: '파워플레이트' },
      { to: '/products/oxygen', label: '산소캡슐' },
      { to: '/products/align-pilates', label: '얼라인 필라테스' },
      { to: '/products/ace-body', label: '타워풀리' },
    ],
  },
  {
    title: 'Support',
    links: [
      { to: '/academy', label: '교육 아카데미' },
      { to: '/franchise', label: '체인점 문의' },
      { to: '/video-inquiry', label: '영상 제작 문의' },
      { to: '/faq', label: '자주 묻는 질문' },
    ],
  },
];
</script>
