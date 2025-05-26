<template>
  <header class="relative bg-white border-b border-gray-200 shadow-sm">
    <!-- PC 버전 -->
    <div class="hidden md:block">
      <!-- 로고 -->
      <div
        class="flex justify-center py-4 cursor-pointer"
        @click="$router.push('/')"
      >
        <img
          src="../img/mainLogo.png"
          alt="공명짐 로고"
          class="h-12 w-auto object-contain"
        />
      </div>

      <!-- 네비게이션 메뉴 -->
      <nav class="flex justify-center border-t border-gray-100">
        <div class="flex items-center px-4 py-3">
          <!-- About 메뉴 -->
          <div class="relative group">
            <button
              class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center"
            >
              About
              <svg
                class="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              class="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200"
            >
              <RouterLink
                to="/about"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md"
                >회사 소개</RouterLink
              >
              <RouterLink
                to="/location"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-md"
                >위치 안내</RouterLink
              >
            </div>
          </div>

          <div class="mx-2 text-gray-300">ㅣ</div>

          <!-- Products 메뉴 -->
          <div class="relative group">
            <button
              class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center"
            >
              Products
              <svg
                class="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              class="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200"
            >
              <RouterLink
                to="/products"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md"
                >제품 판매</RouterLink
              >
              <RouterLink
                to="/papers"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-md"
                >논문 리스트</RouterLink
              >
            </div>
          </div>

          <div class="mx-2 text-gray-300">ㅣ</div>

          <!-- Programs 메뉴 -->
          <div class="relative group">
            <button
              class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center"
            >
              Programs
              <svg
                class="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              class="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200"
            >
              <RouterLink
                to="/academy"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md"
                >교육 아카데미</RouterLink
              >
              <RouterLink
                to="/franchise"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-md"
                >공명짐 체인점 문의</RouterLink
              >
            </div>
          </div>

          <div class="mx-2 text-gray-300">ㅣ</div>

          <!-- Support 메뉴 -->
          <div class="relative group">
            <button
              class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center"
            >
              Support
              <svg
                class="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              class="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200"
            >
              <RouterLink
                to="/video-inquiry"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md"
                >영상 홍보 촬영 문의</RouterLink
              >
              <RouterLink
                to="/contact"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >고객 문의</RouterLink
              >
              <RouterLink
                to="/faq"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-md"
                >자주 묻는 질문</RouterLink
              >
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- 모바일 버전 -->
    <div class="md:hidden">
      <div class="flex items-center justify-between p-4">
        <!-- 왼쪽 로고 -->
        <img
          src="../img/mainLogo.png"
          alt="공명짐 로고"
          class="h-8 w-auto object-contain cursor-pointer"
          @click="$router.push('/')"
        />

        <!-- 오른쪽 햄버거 메뉴 -->
        <button
          @click="toggleMenu"
          class="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          :class="{ 'bg-gray-100': menuOpen }"
        >
          <svg
            class="w-6 h-6 transition-transform duration-200"
            :class="{ 'rotate-90': menuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!menuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- 모바일 드롭다운 메뉴 -->
      <div
        v-if="menuOpen"
        class="absolute top-full right-0 left-0 bg-white border-t border-gray-200 shadow-lg z-50 transform transition-all duration-300 ease-in-out"
        :class="
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        "
      >
        <nav class="py-2">
          <!-- About Section -->
          <div
            class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100"
          >
            About
          </div>
          <RouterLink
            @click="closeMenu"
            to="/about"
            class="block px-6 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 transition-colors duration-200"
          >
            회사 소개
          </RouterLink>
          <RouterLink
            @click="closeMenu"
            to="/location"
            class="block px-6 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 transition-colors duration-200 border-b border-gray-100"
          >
            위치 안내
          </RouterLink>

          <!-- Products Section -->
          <div
            class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider"
          >
            Products
          </div>
          <RouterLink
            @click="closeMenu"
            to="/products"
            class="block px-6 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 transition-colors duration-200"
          >
            제품 판매
          </RouterLink>
          <RouterLink
            @click="closeMenu"
            to="/papers"
            class="block px-6 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 transition-colors duration-200 border-b border-gray-100"
          >
            논문 리스트
          </RouterLink>

          <!-- Programs Section -->
          <div
            class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider"
          >
            Programs
          </div>
          <RouterLink
            @click="closeMenu"
            to="/academy"
            class="block px-6 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 transition-colors duration-200"
          >
            교육 아카데미
          </RouterLink>
          <RouterLink
            @click="closeMenu"
            to="/franchise"
            class="block px-6 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 transition-colors duration-200 border-b border-gray-100"
          >
            공명짐 체인점 문의
          </RouterLink>

          <!-- Support Section -->
          <div
            class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider"
          >
            Support
          </div>
          <RouterLink
            @click="closeMenu"
            to="/video-inquiry"
            class="block px-6 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 transition-colors duration-200"
          >
            영상 홍보 촬영 문의
          </RouterLink>
          <RouterLink
            @click="closeMenu"
            to="/contact"
            class="block px-6 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 transition-colors duration-200"
          >
            고객 문의
          </RouterLink>
          <RouterLink
            @click="closeMenu"
            to="/faq"
            class="block px-6 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 transition-colors duration-200"
          >
            자주 묻는 질문
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>
