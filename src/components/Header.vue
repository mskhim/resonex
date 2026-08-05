<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500"
    :class="
      solid
        ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgb(15_23_42/0.08),0_8px_32px_-16px_rgb(15_23_42/0.2)]'
        : 'bg-gradient-to-b from-black/45 to-transparent'
    "
    @mouseleave="scheduleClose"
  >
    <!-- ================= 데스크톱 ================= -->
    <div class="hidden md:block">
      <div class="container-wide">
        <!-- 로고: 높이를 고정해 스크롤 시 레이아웃이 흔들리지 않게 한다 -->
        <div class="flex h-16 items-center justify-center">
          <RouterLink to="/" aria-label="공명짐 홈" class="shrink-0">
            <img
              src="../img/mainLogo.png"
              alt="공명짐"
              class="h-9 w-auto object-contain transition-[filter,opacity] duration-500"
              :class="solid ? '' : 'brightness-0 invert'"
            />
          </RouterLink>
        </div>

        <!-- 내비게이션 -->
        <nav
          class="flex justify-center border-t transition-colors duration-500"
          :class="solid ? 'border-ink-200/70' : 'border-white/15'"
        >
          <ul class="flex items-center gap-1 py-1">
            <li
              v-for="group in menu"
              :key="group.key"
              @mouseenter="openMenu(group.key)"
            >
              <button
                type="button"
                class="group relative flex items-center gap-1.5 px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200"
                :class="[
                  solid ? 'text-ink-700' : 'text-white/90',
                  activeMenu === group.key || isGroupActive(group)
                    ? solid
                      ? 'text-brand-600'
                      : 'text-white'
                    : solid
                    ? 'hover:text-brand-600'
                    : 'hover:text-white',
                ]"
                :aria-expanded="activeMenu === group.key"
              >
                {{ group.label }}
                <svg
                  class="h-3 w-3 transition-transform duration-300"
                  :class="{ 'rotate-180': activeMenu === group.key }"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

                <!-- 활성 표시 밑줄 -->
                <span
                  class="pointer-events-none absolute inset-x-4 bottom-1 h-0.5 origin-left rounded-full bg-current transition-transform duration-300"
                  :class="
                    activeMenu === group.key || isGroupActive(group)
                      ? 'scale-x-100'
                      : 'scale-x-0'
                  "
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <!-- 메가 메뉴 -->
      <div
        class="absolute inset-x-0 top-full overflow-hidden transition-[max-height,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
        :class="[
          activeMenu ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0',
          solid
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_16px_40px_-16px_rgb(15_23_42/0.25)]'
            : 'bg-ink-950/80 backdrop-blur-xl',
        ]"
        @mouseenter="cancelClose"
      >
        <div class="container-wide py-5">
          <ul class="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            <li v-for="item in activeItems" :key="item.to">
              <RouterLink
                :to="item.to"
                @click="closeMenu"
                class="block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200"
                :class="
                  solid
                    ? 'text-ink-600 hover:bg-brand-50 hover:text-brand-700'
                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                "
                active-class="!text-brand-600"
              >
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ================= 모바일 ================= -->
    <div class="md:hidden">
      <div class="flex h-16 items-center justify-between px-5">
        <RouterLink to="/" aria-label="공명짐 홈" @click="closeDrawer">
          <img
            src="../img/mainLogo.png"
            alt="공명짐"
            class="h-8 w-auto object-contain transition-[filter] duration-500"
            :class="solid || drawerOpen ? '' : 'brightness-0 invert'"
          />
        </RouterLink>

        <button
          type="button"
          @click="toggleDrawer"
          class="relative -mr-2 flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
          :class="solid || drawerOpen ? 'text-ink-800' : 'text-white'"
          :aria-expanded="drawerOpen"
          aria-label="메뉴 열기"
        >
          <!-- 햄버거 → X 모핑 -->
          <span class="relative block h-4 w-6">
            <span
              class="absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300"
              :class="drawerOpen ? 'top-[7px] rotate-45' : 'top-0'"
            />
            <span
              class="absolute left-0 top-[7px] block h-0.5 w-6 rounded-full bg-current transition-all duration-200"
              :class="drawerOpen ? 'opacity-0 scale-x-0' : 'opacity-100'"
            />
            <span
              class="absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300"
              :class="drawerOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'"
            />
          </span>
        </button>
      </div>

      <!-- 드로어 -->
      <Transition name="drawer">
        <div
          v-if="drawerOpen"
          class="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-ink-200/70 bg-white/97 backdrop-blur-xl shadow-[0_24px_48px_-16px_rgb(15_23_42/0.3)]"
        >
          <nav class="px-4 pb-6 pt-2">
            <div
              v-for="group in menu"
              :key="group.key"
              class="border-b border-ink-100 last:border-0"
            >
              <button
                type="button"
                @click="toggleSection(group.key)"
                class="flex w-full items-center justify-between py-4 text-left"
              >
                <span
                  class="text-[0.9375rem] font-bold tracking-wide text-ink-800"
                >
                  {{ group.label }}
                </span>
                <span
                  class="flex h-7 w-7 items-center justify-center rounded-full bg-ink-100 transition-all duration-300"
                  :class="{
                    'rotate-180 bg-brand-100 text-brand-600':
                      expanded === group.key,
                  }"
                >
                  <svg
                    class="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                class="grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                :class="
                  expanded === group.key
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                "
              >
                <div class="overflow-hidden">
                  <ul class="space-y-0.5 pb-3">
                    <li v-for="item in group.items" :key="item.to">
                      <RouterLink
                        :to="item.to"
                        @click="closeDrawer"
                        class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ink-600 transition-colors active:bg-brand-50"
                        active-class="bg-brand-50 !text-brand-700 font-semibold"
                      >
                        <span
                          class="h-1 w-1 shrink-0 rounded-full bg-ink-300"
                        />
                        {{ item.label }}
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 드로어 하단 빠른 연락 -->
            <div class="mt-5 grid grid-cols-2 gap-2.5">
              <a
                :href="`tel:${contact.phone}`"
                class="btn btn-outline !py-3 !text-sm"
              >
                <i class="fas fa-phone text-xs" />
                전화 문의
              </a>
              <a
                :href="contact.kakao"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary !py-3 !text-sm"
              >
                <i class="fas fa-comment text-xs" />
                카톡 상담
              </a>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, inject, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const contact = inject('contact');

const menu = [
  {
    key: 'about',
    label: 'About',
    items: [
      { to: '/about', label: '회사 소개' },
      { to: '/location', label: '오시는 길' },
    ],
  },
  {
    key: 'products',
    label: 'Products',
    items: [
      { to: '/products/powerplate', label: '파워플레이트' },
      { to: '/products/oxygen', label: '산소캡슐' },
      { to: '/products/sasom7', label: 'SASO M7' },
      { to: '/products/ace-body', label: '에이스바디 타워풀리' },
      { to: '/products/align-pilates', label: '얼라인 필라테스' },
      { to: '/products/fitness', label: '헬스 기구' },
      { to: '/products/zeroi', label: '제로아이' },
    ],
  },
  {
    key: 'programs',
    label: 'Programs',
    items: [
      { to: '/academy', label: '교육 아카데미' },
      { to: '/franchise', label: '공명짐 체인점 문의' },
    ],
  },
  {
    key: 'support',
    label: 'Support',
    items: [
      { to: '/video-inquiry', label: '영상 홍보 촬영 문의' },
      { to: '/faq', label: '자주 묻는 질문' },
    ],
  },
];

const scrolled = ref(false);
const activeMenu = ref(null);
const drawerOpen = ref(false);
const expanded = ref(null);

// 홈이 아닌 페이지는 히어로가 밝기 때문에 항상 흰 배경을 쓴다.
const isHome = computed(() => route.name === 'Home');
const solid = computed(() => scrolled.value || !isHome.value);

const activeItems = computed(
  () => menu.find((g) => g.key === activeMenu.value)?.items ?? []
);

const isGroupActive = (group) =>
  group.items.some((item) => route.path === item.to);

/* ---------- 메가 메뉴 ---------- */
let closeTimer = null;

const openMenu = (key) => {
  cancelClose();
  activeMenu.value = key;
};

const cancelClose = () => {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
};

const scheduleClose = () => {
  cancelClose();
  closeTimer = setTimeout(() => (activeMenu.value = null), 160);
};

const closeMenu = () => {
  cancelClose();
  activeMenu.value = null;
};

/* ---------- 모바일 드로어 ---------- */
const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value;
  if (!drawerOpen.value) expanded.value = null;
};

const closeDrawer = () => {
  drawerOpen.value = false;
  expanded.value = null;
};

// 아코디언 — 한 번에 하나만 열리게
const toggleSection = (key) => {
  expanded.value = expanded.value === key ? null : key;
};

// 드로어가 열려 있는 동안 배경 스크롤 잠금
watch(drawerOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

// 라우트가 바뀌면 열린 메뉴를 모두 닫는다
watch(() => route.fullPath, closeDrawer);
watch(() => route.fullPath, closeMenu);

/* ---------- 스크롤 / 키보드 ---------- */
let ticking = false;

const handleScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    scrolled.value = window.scrollY > 24;
    ticking = false;
  });
};

const handleKeydown = (e) => {
  if (e.key !== 'Escape') return;
  closeDrawer();
  closeMenu();
};

const handleResize = () => {
  if (window.innerWidth >= 768) closeDrawer();
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('resize', handleResize);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('resize', handleResize);
  cancelClose();
  document.body.style.overflow = '';
});
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s var(--ease-out-quint),
    transform 0.3s var(--ease-out-quint);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
