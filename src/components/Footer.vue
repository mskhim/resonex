<template>
  <!-- 푸터 -->
  <footer class="bg-gray-800 text-white py-8 sm:py-10 md:py-12 mt-auto">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        <!-- 회사 정보 -->
        <div class="text-center sm:text-left">
          <h3
            class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white"
          >
            회사 정보
          </h3>
          <div
            class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300"
          >
            <p><span class="font-medium text-gray-200">회사명:</span> 공명짐</p>
            <p><span class="font-medium text-gray-200">대표자:</span> 고종관</p>
            <p>
              <span class="font-medium text-gray-200">사업자등록번호:</span>
              459-23-01817
            </p>
            <p>
              <span class="font-medium text-gray-200">개인정보책임자:</span>
              고종관
            </p>
          </div>
        </div>

        <!-- 연락처 정보 -->
        <div class="text-center sm:text-left">
          <h3
            class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white"
          >
            연락처
          </h3>
          <div
            class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300"
          >
            <p>
              <span class="font-medium text-gray-200">전화:</span> 010-4429-2889
            </p>
            <p>
              <span class="font-medium text-gray-200">이메일:</span>
              cprh7677@naver.com
            </p>
            <p class="leading-relaxed">
              <span class="font-medium text-gray-200">주소:</span> (13647)
              경기도 성남시 수정구 창곡동 555, B1호
            </p>
          </div>
        </div>

        <!-- 계좌 정보 -->
        <div class="text-center sm:text-left">
          <h3
            class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white"
          >
            입금 계좌
          </h3>
          <div
            class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300"
          >
            <p><span class="font-medium text-gray-200">국민은행</span></p>
            <p class="font-mono text-sm sm:text-base text-blue-300">
              229101-04-339256
            </p>
            <p>예금주: 고종관</p>
          </div>
        </div>

        <!-- 소셜 미디어 -->
        <div class="text-center sm:text-left">
          <h3
            class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white"
          >
            소셜 미디어
          </h3>

          <!-- 소셜 아이콘들 -->
          <div
            class="flex justify-center sm:justify-start space-x-3 sm:space-x-4 mb-4"
          >
            <!-- 인스타그램 -->
            <a
              href="https://www.instagram.com/resonancegym_wirye?igsh=cmVkZGg3a3dyMm8w&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label="인스타그램"
            >
              <i class="fab fa-instagram text-white text-lg sm:text-xl"></i>
            </a>

            <!-- 카카오톡 -->
            <a
              href="http://pf.kakao.com/_RJVsn"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label="카카오톡"
            >
              <i class="fas fa-comment-dots text-black text-lg sm:text-xl"></i>
            </a>
          </div>

          <!-- 연락처 빠른 링크 -->
          <div class="space-y-2">
            <a
              href="tel:010-4429-2889"
              class="flex items-center justify-center sm:justify-start text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-700"
            >
              <i
                class="fas fa-phone w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0"
              ></i>
              <span class="font-medium">전화 걸기</span>
            </a>
            <a
              href="mailto:cprh7677@naver.com"
              class="flex items-center justify-center sm:justify-start text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-700"
            >
              <i
                class="fas fa-envelope w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0"
              ></i>
              <span class="font-medium">이메일 보내기</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 구분선 및 카피라이트 -->
      <div class="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6">
        <div
          class="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0"
        >
          <p class="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            &copy; {{ currentYear }} 공명짐. All rights reserved.
          </p>
          <div class="flex space-x-4 text-xs text-gray-500">
            <a href="/privacy" class="hover:text-gray-300 transition-colors"
              >개인정보처리방침</a
            >
            <span>|</span>
            <a href="/terms" class="hover:text-gray-300 transition-colors"
              >이용약관</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* FontAwesome CDN을 HTML head에 추가해야 합니다:
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
*/
</style>
