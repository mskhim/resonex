<template>
  <div ref="rootEl" class="fixed bottom-6 right-5 z-40 md:bottom-8 md:right-8">
    <!-- 문의 패널 -->
    <Transition name="panel">
      <div
        v-if="open"
        class="absolute bottom-16 right-0 w-[min(21rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-lift md:bottom-[4.25rem]"
      >
        <!-- 헤더 -->
        <div class="bg-ink-900 px-5 py-4 text-white">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="text-[0.9375rem] font-bold">상담 문의</h3>
              <p class="mt-0.5 text-xs text-white/55">
                PT · 제품 문의 모두 환영합니다
              </p>
            </div>
            <button
              type="button"
              @click="open = false"
              aria-label="닫기"
              class="-mr-1 -mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <i class="fas fa-times text-sm" />
            </button>
          </div>
        </div>

        <!-- 전송 완료 -->
        <div v-if="sent" class="px-5 py-9 text-center">
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/12 text-accent-600"
          >
            <i class="fas fa-check text-lg" />
          </div>
          <p class="font-semibold text-ink-900">문의가 접수되었습니다</p>
          <p class="mt-1.5 text-sm text-ink-500">
            빠른 시간 내에 연락드리겠습니다.
          </p>
          <button type="button" class="btn btn-outline mt-5 !py-2.5 !text-sm" @click="reset">
            새 문의 작성
          </button>
        </div>

        <!-- 폼 -->
        <form v-else class="space-y-3 p-5" @submit.prevent="submit" novalidate>
          <div>
            <label for="fi-name" class="sr-only">성함</label>
            <input
              id="fi-name"
              v-model.trim="form.name"
              type="text"
              required
              placeholder="성함"
              class="w-full rounded-xl border border-ink-200 bg-ink-50/60 px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/15"
            />
          </div>

          <div>
            <label for="fi-phone" class="sr-only">연락처</label>
            <input
              id="fi-phone"
              v-model.trim="form.phone"
              type="tel"
              inputmode="tel"
              required
              placeholder="연락처"
              class="w-full rounded-xl border border-ink-200 bg-ink-50/60 px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/15"
            />
          </div>

          <div>
            <label for="fi-msg" class="sr-only">문의 내용</label>
            <textarea
              id="fi-msg"
              v-model.trim="form.message"
              rows="3"
              placeholder="문의 내용 (선택)"
              class="w-full resize-none rounded-xl border border-ink-200 bg-ink-50/60 px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/15"
            />
          </div>

          <p v-if="error" class="text-xs font-medium text-red-600">
            {{ error }}
          </p>

          <button
            type="submit"
            :disabled="sending"
            class="btn btn-primary w-full !py-3 disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:translate-y-0"
          >
            <span
              v-if="sending"
              class="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
            />
            {{ sending ? '전송 중' : '문의 보내기' }}
          </button>

          <!-- 대체 연락 수단 -->
          <div class="flex items-center gap-3 pt-1">
            <span class="h-px flex-1 bg-ink-200" />
            <span class="text-[0.6875rem] text-ink-400">또는</span>
            <span class="h-px flex-1 bg-ink-200" />
          </div>

          <div class="grid grid-cols-2 gap-2">
            <a
              :href="contact.kakao"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-1.5 rounded-xl bg-[#FEE500] py-2.5 text-xs font-semibold text-ink-900 transition-transform hover:-translate-y-0.5"
            >
              <i class="fas fa-comment" />
              카카오톡
            </a>
            <a
              :href="`tel:${contact.phone}`"
              class="flex items-center justify-center gap-1.5 rounded-xl border border-ink-200 py-2.5 text-xs font-semibold text-ink-700 transition-all hover:-translate-y-0.5 hover:border-ink-900"
            >
              <i class="fas fa-phone" />
              전화
            </a>
          </div>
        </form>
      </div>
    </Transition>

    <!-- 토글 버튼 -->
    <button
      type="button"
      @click="open = !open"
      :aria-expanded="open"
      aria-label="문의하기"
      class="relative flex h-13 w-13 items-center justify-center rounded-full bg-ink-900 text-white shadow-lift transition-all duration-300 hover:scale-105 hover:bg-brand-600"
      style="height: 3.25rem; width: 3.25rem"
    >
      <!-- 주의를 끄는 펄스 링 (닫혀 있을 때만) -->
      <span
        v-if="!open"
        class="animate-pulse-ring absolute inset-0 rounded-full bg-ink-900/40"
      />
      <i
        :class="open ? 'fas fa-times' : 'fas fa-comment-dots'"
        class="relative text-lg transition-transform duration-300"
      />
    </button>
  </div>
</template>

<script setup>
import { ref, reactive, inject, watch, onMounted, onUnmounted } from 'vue';
import emailjs from '@emailjs/browser';

const contact = inject('contact');

const rootEl = ref(null);
const open = ref(false);
const sending = ref(false);
const sent = ref(false);
const error = ref('');

const form = reactive({ name: '', phone: '', message: '' });

const reset = () => {
  form.name = '';
  form.phone = '';
  form.message = '';
  sent.value = false;
  error.value = '';
};

const submit = async () => {
  error.value = '';

  if (!form.name) {
    error.value = '성함을 입력해주세요.';
    return;
  }
  // 숫자 9자리 이상이면 유효한 연락처로 본다 (하이픈·공백 허용)
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
        type: 'PT & 제품 상담 문의',
      },
      'gAoL9uCniHayhdwIg'
    );
    sent.value = true;
  } catch (e) {
    console.error('이메일 전송 실패:', e);
    error.value = '전송에 실패했습니다. 카카오톡이나 전화로 문의해주세요.';
  } finally {
    sending.value = false;
  }
};

// 패널 밖을 클릭하면 닫기
const handleClickOutside = (e) => {
  if (open.value && rootEl.value && !rootEl.value.contains(e.target)) {
    open.value = false;
  }
};

const handleKeydown = (e) => {
  if (e.key === 'Escape') open.value = false;
};

// 닫았다 다시 열면 완료 화면이 남아 있지 않도록
watch(open, (isOpen) => {
  if (!isOpen && sent.value) setTimeout(reset, 300);
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
.panel-enter-active,
.panel-leave-active {
  transition: opacity 0.28s var(--ease-out-quint),
    transform 0.28s var(--ease-out-quint);
  transform-origin: bottom right;
}

.panel-enter-from,
.panel-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}
</style>
