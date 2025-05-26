<template>
  <!-- 푸터 -->
  <footer class="bg-gray-800 text-white py-8 mt-auto">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- 회사 정보 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">회사 정보</h3>
          <div class="space-y-2 text-sm text-gray-300">
            <p><span class="font-medium">회사명:</span> 공명짐</p>
            <p><span class="font-medium">대표자:</span> 고종관</p>
            <p><span class="font-medium">사업자등록번호:</span> 459-23-01817</p>
            <p><span class="font-medium">개인정보책임자:</span> 고종관</p>
          </div>
        </div>

        <!-- 연락처 정보 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">연락처</h3>
          <div class="space-y-2 text-sm text-gray-300">
            <p><span class="font-medium">전화:</span> 02-715-0607</p>
            <p><span class="font-medium">이메일:</span> cprh7677@naver.com</p>
            <p>
              <span class="font-medium">주소:</span> (13647) 경기도 성남시
              수정구 창곡동 555, B1호
            </p>
          </div>
        </div>

        <!-- 계좌 정보 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">입금 계좌</h3>
          <div class="space-y-2 text-sm text-gray-300">
            <p><span class="font-medium">국민은행</span></p>
            <p>229101-04-339256</p>
            <p>예금주: 고종관</p>
          </div>
        </div>

        <!-- 소셜 미디어 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">소셜 미디어</h3>
          <div class="flex space-x-4">
            <!-- 인스타그램 -->
            <a
              href="https://instagram.com/gongmyungjim"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
              aria-label="인스타그램"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348V9.362c0-1.297 1.051-2.348 2.348-2.348h7.102c1.297 0 2.348 1.051 2.348 2.348v5.277c0 1.297-1.051 2.348-2.348 2.348H8.449zm7.102-9.625H8.449c-.621 0-1.125.504-1.125 1.125v5.277c0 .621.504 1.125 1.125 1.125h7.102c.621 0 1.125-.504 1.125-1.125V9.488c0-.621-.504-1.125-1.125-1.125zm-3.551 7.875c-1.574 0-2.848-1.275-2.848-2.848s1.275-2.848 2.848-2.848 2.848 1.275 2.848 2.848-1.274 2.848-2.848 2.848zm0-4.473c-.895 0-1.625.73-1.625 1.625s.73 1.625 1.625 1.625 1.625-.73 1.625-1.625-.73-1.625-1.625-1.625zm3.164-1.676c-.438 0-.793-.355-.793-.793s.355-.793.793-.793.793.355.793.793-.355.793-.793.793z"
                />
              </svg>
            </a>

            <!-- 카카오톡 -->
            <a
              href="https://open.kakao.com/o/your-openchat-link"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
              aria-label="카카오톡"
            >
              <svg
                class="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3C6.488 3 2 6.579 2 10.995c0 2.834 1.885 5.319 4.688 6.735-.195-.865-.361-2.193.077-3.146.394-.857 2.548-10.797 2.548-10.797s-.651 1.302-.651 3.225c0 3.022 1.756 5.281 3.946 5.281 1.859 0 2.76-1.396 2.76-3.07 0-2.64-1.681-4.743-3.76-4.743-.659 0-1.268.199-1.785.545l.348-1.317c.195-.735.838-1.208 1.437-1.208z"
                />
                <path
                  d="M12 2C6.486 2 2 5.589 2 10s4.486 8 10 8c1.466 0 2.961-.371 4.442-1.104L22 18l-.896-5.58C21.634 11.85 22 10.951 22 10c0-4.411-4.486-8-10-8zm0 14.5c-1.381 0-2.5-.672-2.5-1.5s1.119-1.5 2.5-1.5 2.5.672 2.5 1.5-1.119 1.5-2.5 1.5z"
                />
              </svg>
            </a>
          </div>

          <!-- 연락처 링크 -->
          <div class="mt-4 space-y-2">
            <a
              href="tel:02-715-0607"
              class="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              전화 걸기
            </a>
            <a
              href="mailto:cprh7677@naver.com"
              class="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              이메일 보내기
            </a>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400"
      >
        <p>&copy; {{ currentYear }} 공명짐. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
