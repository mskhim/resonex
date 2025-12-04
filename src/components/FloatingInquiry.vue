<template>
  <!-- 플로팅 문의 버튼 -->
  <div class="fixed bottom-6 right-6 z-40">
    <!-- 확장된 폼 -->
    <div
      v-if="isExpanded"
      class="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 md:p-6 w-72 md:w-80 animate-slideIn"
    >
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold text-gray-900">문의</h3>
      </div>

      <form @submit.prevent="submitInquiry" class="space-y-3">
        <div>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="성함"
          />
        </div>

        <div>
          <input
            v-model="form.phone"
            type="tel"
            required
            class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="연락처"
          />
        </div>

        <div>
          <textarea
            v-model="form.message"
            rows="3"
            class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="문의 내용 (선택)"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSending"
          class="w-full bg-blue-600 text-white font-bold py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
        >
          {{ isSending ? '전송 중...' : '문의하기' }}
        </button>
      </form>
    </div>

    <!-- 토글 버튼 (항상 고정) -->
    <button
      @click="toggleForm"
      class="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
      aria-label="문의하기"
    >
      <i :class="isExpanded ? 'fas fa-times text-xl' : 'fas fa-comments text-xl'"></i>
    </button>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'FloatingInquiry',
  data() {
    return {
      isExpanded: false,
      isSending: false,
      form: {
        name: '',
        phone: '',
        message: '',
      },
    };
  },
  methods: {
    toggleForm() {
      this.isExpanded = !this.isExpanded;
    },

    async submitInquiry() {
      this.isSending = true;

      try {
        const templateParams = {
          name: this.form.name,
          number: this.form.phone,
          message: this.form.message || '특별한 문의사항 없음',
        };

        await emailjs.send(
          'resonex',
          'template_bvfq6hg',
          templateParams,
          'gAoL9uCniHayhdwIg'
        );

        // 폼 초기화
        this.form = {
          name: '',
          phone: '',
          message: '',
        };

        alert('문의가 성공적으로 전송되었습니다!\n빠른 시간 내에 연락드리겠습니다.');
        this.isExpanded = false;
      } catch (error) {
        console.error('이메일 전송 실패:', error);
        alert('문의 전송에 실패했습니다.\n잠시 후 다시 시도해주세요.');
      } finally {
        this.isSending = false;
      }
    },
  },
};
</script>

<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideIn {
  animation: slideIn 0.3s ease-out;
}
</style>
