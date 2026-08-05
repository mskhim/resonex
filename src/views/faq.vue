<template>
  <div>
    <PageHero
      image="/main/mainImg4.jpg"
      eyebrow="Support"
      title="자주 묻는 질문"
      subtitle="궁금하신 점을 빠르게 찾아보세요."
      compact
    />

    <section class="section-y bg-white">
      <div class="container-page max-w-3xl">
        <!-- 검색 -->
        <div data-reveal="up" class="relative">
          <i
            class="fas fa-magnifying-glass pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-400"
          />
          <input
            v-model.trim="query"
            type="search"
            placeholder="궁금한 내용을 검색해보세요"
            aria-label="질문 검색"
            class="w-full rounded-xl border border-ink-200 bg-ink-50/60 py-3.5 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/15"
          />
        </div>

        <!-- 카테고리 탭 -->
        <div
          data-reveal="up"
          data-reveal-delay="80"
          class="no-scrollbar -mx-5 mt-5 flex gap-2 overflow-x-auto px-5 pb-1"
        >
          <button
            v-for="category in categories"
            :key="category.key"
            type="button"
            @click="activeCategory = category.key"
            class="shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200"
            :class="
              activeCategory === category.key
                ? 'bg-ink-900 text-white shadow-soft'
                : 'border border-ink-200 text-ink-600 hover:border-ink-900 hover:text-ink-900'
            "
          >
            {{ category.name }}
          </button>
        </div>

        <!-- 결과 없음 -->
        <p
          v-if="!filtered.length"
          class="mt-14 text-center text-sm text-ink-500"
        >
          검색 결과가 없습니다.
          <button
            type="button"
            class="ml-1 font-semibold text-brand-600 hover:underline"
            @click="resetFilters"
          >
            전체 보기
          </button>
        </p>

        <!-- 아코디언 -->
        <div v-else class="mt-8 space-y-3">
          <article
            v-for="faq in filtered"
            :key="faq.question"
            data-reveal="up"
            class="overflow-hidden rounded-xl border border-ink-200 bg-white transition-colors"
            :class="{ 'border-brand-300 shadow-soft': isOpen(faq.question) }"
          >
            <h3>
              <button
                type="button"
                @click="toggle(faq.question)"
                :aria-expanded="isOpen(faq.question)"
                class="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-ink-50/70"
              >
                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors"
                  :class="
                    isOpen(faq.question)
                      ? 'bg-brand-600 text-white'
                      : 'bg-ink-100 text-ink-500'
                  "
                >
                  Q
                </span>

                <span class="flex-1 font-semibold text-ink-900">
                  {{ faq.question }}
                </span>

                <span
                  class="mt-0.5 shrink-0 text-ink-400 transition-transform duration-300"
                  :class="{ 'rotate-180': isOpen(faq.question) }"
                >
                  <svg
                    class="h-4 w-4"
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
            </h3>

            <!-- grid-rows 트릭으로 높이를 모르는 콘텐츠도 부드럽게 열고 닫는다 -->
            <div
              class="grid transition-[grid-template-rows] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]"
              :class="isOpen(faq.question) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="overflow-hidden">
                <div class="flex gap-4 px-5 pb-5">
                  <span
                    class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-500/12 text-xs font-bold text-accent-600"
                  >
                    A
                  </span>
                  <div
                    class="faq-answer flex-1 text-sm leading-relaxed text-ink-600"
                    v-html="faq.answer"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- 추가 문의 -->
        <div
          data-reveal="scale"
          class="mt-14 rounded-2xl bg-ink-950 px-6 py-12 text-center md:px-12"
        >
          <h2 class="program-title text-h3 text-white">
            더 궁금한 점이 있으신가요?
          </h2>
          <p class="mt-3 text-sm text-white/55">
            언제든지 편하게 문의해 주세요. 친절하게 상담해드리겠습니다.
          </p>

          <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              :href="contact.kakao"
              target="_blank"
              rel="noopener noreferrer"
              class="btn bg-[#FEE500] text-ink-900 hover:-translate-y-0.5 hover:brightness-105"
            >
              <i class="fas fa-comment" />
              카카오톡 문의
            </a>
            <a :href="`tel:${contact.phone}`" class="btn btn-ghost-light">
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
import { ref, computed, inject } from 'vue';
import PageHero from '../components/PageHero.vue';
import { useReveal } from '../composables/useReveal';

useReveal();

const contact = inject('contact');

const activeCategory = ref('all');
const query = ref('');
// 질문 텍스트를 키로 써서 필터가 바뀌어도 열림 상태가 엉키지 않게 한다
const openSet = ref(new Set());

const isOpen = (key) => openSet.value.has(key);

const toggle = (key) => {
  const next = new Set(openSet.value);
  next.has(key) ? next.delete(key) : next.add(key);
  openSet.value = next;
};

const resetFilters = () => {
  query.value = '';
  activeCategory.value = 'all';
};

const categories = [
  { key: 'all', name: '전체' },
  { key: 'price', name: '가격·이용료' },
  { key: 'training', name: '운동·트레이닝' },
  { key: 'facility', name: '시설·장비' },
  { key: 'reservation', name: '예약·상담' },
  { key: 'etc', name: '기타' },
];

const faqs = [
  {
    category: 'price',
    question: '퍼스널 트레이닝 가격이 어떻게 되나요?',
    answer: `<strong>퍼스널 트레이닝 가격</strong>
      <ul>
        <li>2:1 듀엣 4회 — 150,000원</li>
        <li>2:1 듀엣 8회 — 280,000원</li>
        <li>2:1 듀엣 16회 — 520,000원</li>
      </ul>
      <strong>1:1 전문강습</strong>
      <ul>
        <li>최저 55,000원 / 최대 88,000원</li>
        <li>전문상담 컨설팅 30,000원</li>
      </ul>
      <p class="note">※ 개인별 맞춤 프로그램에 따라 가격이 달라질 수 있습니다.</p>`,
  },
  {
    category: 'price',
    question: '개인 운동 입장권은 얼마인가요?',
    answer: `<strong>개인 운동 입장권</strong>
      <ul>
        <li>4회 입장권 (1달 소진) — 80,000원</li>
        <li>8회 입장권 (2달 소진) — 144,000원</li>
        <li>16회 입장권 (3달 소진) — 256,000원</li>
      </ul>
      <p class="note">※ 모든 전문 장비 자유 이용 가능 (파워플레이트, 재활기구 포함)</p>`,
  },
  {
    category: 'price',
    question: '할인 혜택이 있나요?',
    answer: `<strong>다양한 할인 혜택</strong>
      <ul>
        <li>리뷰 등록 시 — 1회 체험 무료</li>
        <li>남위례 협력 업체 — 할인 혜택</li>
        <li>남위례 사업자 — 특별 할인</li>
        <li>의료 종사자 — 할인 혜택</li>
        <li>가족 세션 — 공유 무료</li>
      </ul>
      <p class="note">※ 자세한 할인율은 카카오톡 상담을 통해 확인하세요.</p>`,
  },
  {
    category: 'training',
    question: '운동 초보자도 가능한가요?',
    answer: `<strong>물론 가능합니다.</strong>
      <ul>
        <li>미국 스포츠 의학회 자격 보유 트레이너</li>
        <li>개인별 맞춤 운동 프로그램 제공</li>
        <li>안전하고 체계적인 운동 지도</li>
        <li>기초부터 차근차근 교육</li>
      </ul>
      <p>운동 경험이 전혀 없어도 걱정하지 마세요. 전문 트레이너가 안전하게 지도해드립니다.</p>`,
  },
  {
    category: 'training',
    question: '어떤 운동을 할 수 있나요?',
    answer: `<strong>다양한 운동 프로그램</strong>
      <ul>
        <li>퍼스널 트레이닝 — 1:1, 2:1 맞춤 지도</li>
        <li>필라테스 — Align Pilates 프리미엄 장비</li>
        <li>파워플레이트 — 진동 운동 및 사이클</li>
        <li>재활 운동 — 체형교정, 재활 전문</li>
        <li>기능성 운동 — 다양한 소도구 활용</li>
      </ul>
      <p>위례 유일의 종합 운동 센터입니다.</p>`,
  },
  {
    category: 'training',
    question: '재활 운동도 가능한가요?',
    answer: `<strong>전문 재활 운동 가능</strong>
      <ul>
        <li>타워풀리 — 대한민국 재활 기구</li>
        <li>SASO — 진동 마사지 재활 기구</li>
        <li>제로아이 — 일본 재활 기구</li>
        <li>독일 재활 소도구 다수 보유</li>
        <li>파워플레이트 — FDA 1등급 MDD 머신</li>
      </ul>
      <p>미국 스포츠 의학회 자격 보유 트레이너가 전문 재활 운동을 지도합니다.</p>`,
  },
  {
    category: 'facility',
    question: '어떤 전문 장비가 있나요?',
    answer: `<strong>위례 유일 보유 장비</strong>
      <ul>
        <li>파워플레이트 — 미국 전문 진동 플랫폼</li>
        <li>파워플레이트 싸이클 — 진동 사이클</li>
        <li>Align Pilates — 프리미엄 필라테스 장비</li>
        <li>타워풀리 — 재활 전문 기구</li>
        <li>SASO — 독일 진동 마사지 기구</li>
        <li>제로아이 — 일본 재활 기구</li>
      </ul>
      <p class="note">※ 모든 장비는 FDA 1등급, MDD 인증 제품입니다.</p>`,
  },
  {
    category: 'facility',
    question: '공명짐만의 특별한 점이 있나요?',
    answer: `<strong>공명짐의 특별함</strong>
      <ul>
        <li>남위례 파워플레이트 전문 스튜디오</li>
        <li>위례 유일 필라테스 + PT + 파워플레이트</li>
        <li>미국 스포츠 의학회 자격 보유 트레이너</li>
        <li>FDA 1등급, MDD 머신 보유</li>
        <li>위례 유일 재활기구 종합 보유</li>
      </ul>
      <p>차별화된 전문 장비와 자격을 갖춘 위례 최고의 PT 센터입니다.</p>`,
  },
  {
    category: 'reservation',
    question: '어떻게 예약하고 상담받을 수 있나요?',
    answer: `<strong>예약 및 상담 방법</strong>
      <ul>
        <li>카카오톡 채널 — '공명짐' 검색 후 무료 상담</li>
        <li>전화 상담 — 010-4429-2889</li>
        <li>이메일 — cprh7677@naver.com</li>
      </ul>
      <strong>상담 내용</strong>
      <ul>
        <li>개인별 맞춤 운동 계획</li>
        <li>체형 분석 및 목표 설정</li>
        <li>가격 및 할인 혜택 안내</li>
        <li>무료 체험 예약</li>
      </ul>`,
  },
  {
    category: 'reservation',
    question: '체험 이용이 가능한가요?',
    answer: `<strong>무료 체험 이용 가능</strong>
      <ul>
        <li>리뷰 등록 시 1회 체험 무료</li>
        <li>전문 트레이너 상담 포함</li>
        <li>모든 장비 체험 가능</li>
        <li>개인별 맞춤 운동 계획 수립</li>
      </ul>
      <p class="note">※ 카카오톡 '공명짐' 또는 전화로 사전 예약 필수. 운동복과 운동화를 준비해 주세요.</p>`,
  },
  {
    category: 'etc',
    question: '위치와 주차는 어떻게 되나요?',
    answer: `<strong>위치 안내</strong>
      <p>(13647) 경기도 성남시 수정구 창곡동 555, B1호</p>
      <strong>교통편</strong>
      <ul>
        <li>8호선 남위례역 3번 출구 도보 5분</li>
        <li>대중교통 이용 편리</li>
        <li>건물 앞 공영주차장 이용 가능</li>
      </ul>`,
  },
  {
    category: 'etc',
    question: '결제는 어떻게 하나요?',
    answer: `<strong>결제 방법</strong>
      <ul>
        <li>현금 결제</li>
        <li>카드 결제 (모든 카드 가능)</li>
        <li>계좌 이체 — 국민은행 229101-04-339256 (고종관)</li>
      </ul>
      <strong>결제 시기</strong>
      <ul>
        <li>첫 이용 전 결제</li>
        <li>분할 결제 상담 가능</li>
      </ul>
      <p class="note">※ 자세한 결제 방법은 상담 시 안내드립니다.</p>`,
  },
];

// HTML 태그를 걷어낸 본문까지 검색 대상에 포함한다
const stripHtml = (html) => html.replace(/<[^>]*>/g, ' ');

const filtered = computed(() => {
  const q = query.value.toLowerCase();

  return faqs.filter((faq) => {
    const matchesCategory =
      activeCategory.value === 'all' || faq.category === activeCategory.value;

    if (!q) return matchesCategory;

    const haystack = `${faq.question} ${stripHtml(faq.answer)}`.toLowerCase();
    return matchesCategory && haystack.includes(q);
  });
});
</script>

<style scoped>
/* v-html로 들어오는 답변 본문 스타일 */
.faq-answer :deep(strong) {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-ink-900);
  font-weight: 600;
}

.faq-answer :deep(strong ~ strong) {
  margin-top: 1.125rem;
}

.faq-answer :deep(ul) {
  margin-bottom: 0.25rem;
  display: grid;
  gap: 0.375rem;
}

.faq-answer :deep(li) {
  position: relative;
  padding-left: 0.875rem;
}

.faq-answer :deep(li)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-brand-400);
}

.faq-answer :deep(p) {
  margin-top: 0.625rem;
}

.faq-answer :deep(.note) {
  margin-top: 0.875rem;
  font-size: 0.8125rem;
  color: var(--color-ink-400);
}
</style>
