<template>
  <!-- 헤더 -->
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent',
    ]"
  >
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
          :class="[
            'h-12 w-auto object-contain transition-all duration-300',
            isScrolled ? 'h-10' : 'h-12',
            isScrolled ? '' : 'filter brightness-0 invert',
          ]"
        />
      </div>

      <!-- 네비게이션 메뉴 -->
      <nav
        :class="[
          'flex justify-center transition-all duration-300',
          isScrolled
            ? 'border-t border-gray-200/50'
            : 'border-t border-white/20',
        ]"
      >
        <div class="flex items-center px-4 py-3">
          <!-- About 메뉴 -->
          <div class="relative group">
            <button
              data-menu="about"
              @mouseenter="showMegaMenu('about')"
              @mouseleave="hideMegaMenu"
              :class="[
                'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center',
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-blue-200',
              ]"
            >
              About
              <svg
                class="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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
          </div>

          <div
            :class="['mx-2', isScrolled ? 'text-gray-300' : 'text-white/40']"
          >
            ㅣ
          </div>

          <!-- 제품판매 메뉴 -->
          <div class="relative group">
            <button
              data-menu="products"
              @mouseenter="showMegaMenu('products')"
              @mouseleave="hideMegaMenu"
              :class="[
                'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center',
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-blue-200',
              ]"
            >
              Products
              <svg
                class="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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
          </div>

          <div
            :class="['mx-2', isScrolled ? 'text-gray-300' : 'text-white/40']"
          >
            ㅣ
          </div>

          <!-- Programs 메뉴 -->
          <div class="relative group">
            <button
              data-menu="programs"
              @mouseenter="showMegaMenu('programs')"
              @mouseleave="hideMegaMenu"
              :class="[
                'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center',
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-blue-200',
              ]"
            >
              Programs
              <svg
                class="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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
          </div>

          <div
            :class="['mx-2', isScrolled ? 'text-gray-300' : 'text-white/40']"
          >
            ㅣ
          </div>

          <!-- Support 메뉴 -->
          <div class="relative group">
            <button
              data-menu="support"
              @mouseenter="showMegaMenu('support')"
              @mouseleave="hideMegaMenu"
              :class="[
                'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center',
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-blue-200',
              ]"
            >
              Support
              <svg
                class="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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
          </div>
        </div>
      </nav>

      <!-- 메가 메뉴 -->
      <div
        :class="[
          'absolute top-full left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden',
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-200/50'
            : 'bg-gradient-to-b from-black/10 via-black/30 to-black/60 backdrop-blur-md border-white/10',
          activeMegaMenu ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0',
        ]"
        @mouseenter="keepMegaMenuOpen"
        @mouseleave="closeMegaMenu"
      >
        <div class="max-w-6xl mx-auto px-4">
          <!-- About 메가메뉴 -->
          <div
            v-if="activeMegaMenu === 'about'"
            class="flex items-center justify-center py-4 space-x-8"
          >
            <RouterLink
              to="/about"
              :class="[
                'px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-100 hover:bg-white/15 hover:text-blue-200 drop-shadow-sm',
              ]"
            >
              회사 소개
            </RouterLink>
            <div
              :class="['w-px h-6', isScrolled ? 'bg-gray-300' : 'bg-white/30']"
            ></div>
            <RouterLink
              to="/location"
              :class="[
                'px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-100 hover:bg-white/15 hover:text-blue-200 drop-shadow-sm',
              ]"
            >
              위치 안내
            </RouterLink>
            <div
              :class="['w-px h-6', isScrolled ? 'bg-gray-300' : 'bg-white/30']"
            ></div>
          </div>

          <!-- 제품판매 메가메뉴 -->
          <div
            v-if="activeMegaMenu === 'products'"
            class="flex items-center justify-center py-4 space-x-4 overflow-x-auto"
          >
            <RouterLink
              to="/products/powerplate"
              :class="[
                'px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium whitespace-nowrap',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-100 hover:bg-white/15 hover:text-blue-200 drop-shadow-sm',
              ]"
            >
              파워플레이트
            </RouterLink>
            <div
              :class="['w-px h-6', isScrolled ? 'bg-gray-300' : 'bg-white/30']"
            ></div>
            <RouterLink
              to="/products/oxygen"
              :class="[
                'px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium whitespace-nowrap',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-100 hover:bg-white/15 hover:text-blue-200 drop-shadow-sm',
              ]"
            >
              산소캡슐
            </RouterLink>
            <div
              :class="['w-px h-6', isScrolled ? 'bg-gray-300' : 'bg-white/30']"
            ></div>
            <RouterLink
              to="/products/sasom7"
              :class="[
                'px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium whitespace-nowrap',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-200 hover:bg-white/10 hover:text-blue-200',
              ]"
            >
              SasoM7
            </RouterLink>
            <div
              :class="['w-px h-6', isScrolled ? 'bg-gray-300' : 'bg-white/30']"
            ></div>
            <RouterLink
              to="/products/ace-body"
              :class="[
                'px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium whitespace-nowrap',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-200 hover:bg-white/10 hover:text-blue-200',
              ]"
            >
              에이스바디 타워풀리
            </RouterLink>
            <div
              :class="['w-px h-6', isScrolled ? 'bg-gray-300' : 'bg-white/30']"
            ></div>
            <RouterLink
              to="/products/align-pilates"
              :class="[
                'px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium whitespace-nowrap',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-200 hover:bg-white/10 hover:text-blue-200',
              ]"
            >
              얼라인필라테스
            </RouterLink>
            <div
              :class="['w-px h-6', isScrolled ? 'bg-gray-300' : 'bg-white/30']"
            ></div>
            <RouterLink
              to="/products/fitness"
              :class="[
                'px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium whitespace-nowrap',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-200 hover:bg-white/10 hover:text-blue-200',
              ]"
            >
              헬스 기구
            </RouterLink>
            <div
              :class="['w-px h-6', isScrolled ? 'bg-gray-300' : 'bg-white/30']"
            ></div>
            <RouterLink
              to="/products/zeroi"
              :class="[
                'px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium whitespace-nowrap',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-200 hover:bg-white/10 hover:text-blue-200',
              ]"
            >
              제로아이
            </RouterLink>
          </div>

          <!-- Programs 메가메뉴 -->
          <div
            v-if="activeMegaMenu === 'programs'"
            class="flex items-center justify-center py-4 space-x-8"
          >
            <RouterLink
              to="/academy"
              :class="[
                'px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-100 hover:bg-white/15 hover:text-blue-200 drop-shadow-sm',
              ]"
            >
              교육 아카데미
            </RouterLink>
            <div
              :class="['w-px h-6', isScrolled ? 'bg-gray-300' : 'bg-white/30']"
            ></div>
            <RouterLink
              to="/franchise"
              :class="[
                'px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-200 hover:bg-white/10 hover:text-blue-200',
              ]"
            >
              공명짐 체인점 문의
            </RouterLink>
          </div>

          <!-- Support 메가메뉴 -->
          <div
            v-if="activeMegaMenu === 'support'"
            class="flex items-center justify-center py-4 space-x-8"
          >
            <RouterLink
              to="/video-inquiry"
              :class="[
                'px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-200 hover:bg-white/10 hover:text-blue-200',
              ]"
            >
              영상 홍보 촬영 문의
            </RouterLink>
            <div
              :class="['w-px h-6', isScrolled ? 'bg-gray-300' : 'bg-white/30']"
            ></div>

            <RouterLink
              to="/faq"
              :class="[
                'px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 font-medium',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  : 'text-gray-200 hover:bg-white/10 hover:text-blue-200',
              ]"
            >
              자주 묻는 질문
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- 모바일 버전 -->
    <div class="md:hidden">
      <div class="flex items-center justify-between p-4">
        <!-- 왼쪽 로고 -->
        <img
          src="../img/mainLogo.png"
          alt="공명짐 로고"
          :class="[
            'w-auto object-contain cursor-pointer transition-all duration-300',
            isScrolled ? 'h-8' : 'h-10',
            isScrolled ? '' : 'filter brightness-0 invert',
          ]"
          @click="$router.push('/')"
        />

        <!-- 오른쪽 햄버거 메뉴 -->
        <button
          @click="toggleMenu"
          :class="[
            'p-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500',
            isScrolled
              ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              : 'text-white hover:text-gray-300 hover:bg-white/10',
            menuOpen ? (isScrolled ? 'bg-gray-100' : 'bg-white/20') : '',
          ]"
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
        class="absolute top-full right-0 left-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-lg z-50 transform transition-all duration-300 ease-in-out overflow-hidden"
        :class="
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        "
        :style="{
          maxHeight: 'calc(100vh - 80px)',
          height: 'auto',
        }"
      >
        <nav
          class="py-2 overflow-y-auto"
          style="max-height: calc(100vh - 120px)"
        >
          <!-- About Section -->
          <div>
            <button
              @click="toggleMobileSection('about')"
              class="w-full px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-100 hover:bg-gray-50 flex items-center justify-between transition-colors duration-200"
            >
              About
              <svg
                class="w-4 h-4 transition-transform duration-300 ease-out"
                :class="{ 'rotate-180': expandedSections.about }"
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
              class="overflow-hidden transition-all duration-300 ease-out bg-gray-50"
              :class="
                expandedSections.about
                  ? 'max-h-40 opacity-100'
                  : 'max-h-0 opacity-0'
              "
            >
              <div
                class="transform transition-transform duration-300 ease-out"
                :class="
                  expandedSections.about ? 'translate-y-0' : '-translate-y-2'
                "
              >
                <RouterLink
                  @click="closeMenu"
                  to="/about"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  회사 소개
                </RouterLink>
                <RouterLink
                  @click="closeMenu"
                  to="/location"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  위치 안내
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- 제품판매 Section -->
          <div>
            <button
              @click="toggleMobileSection('products')"
              class="w-full px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-100 hover:bg-gray-50 flex items-center justify-between transition-colors duration-200"
            >
              Products
              <svg
                class="w-4 h-4 transition-transform duration-300 ease-out"
                :class="{ 'rotate-180': expandedSections.products }"
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
              class="overflow-hidden transition-all duration-300 ease-out bg-gray-50"
              :class="
                expandedSections.products
                  ? 'max-h-80 opacity-100'
                  : 'max-h-0 opacity-0'
              "
            >
              <div
                class="transform transition-transform duration-300 ease-out"
                :class="
                  expandedSections.products ? 'translate-y-0' : '-translate-y-2'
                "
              >
                <RouterLink
                  @click="closeMenu"
                  to="/products/powerplate"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  파워플레이트
                </RouterLink>
                <RouterLink
                  @click="closeMenu"
                  to="/products/oxygen"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  산소캡슐
                </RouterLink>
                <RouterLink
                  @click="closeMenu"
                  to="/products/sasom7"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  SasoM7
                </RouterLink>
                <RouterLink
                  @click="closeMenu"
                  to="/products/ace-body"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  에이스바디 타워풀리
                </RouterLink>
                <RouterLink
                  @click="closeMenu"
                  to="/products/align-pilates"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  얼라인필라테스
                </RouterLink>
                <RouterLink
                  @click="closeMenu"
                  to="/products/fitness"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  헬스 기구
                </RouterLink>
                <RouterLink
                  @click="closeMenu"
                  to="/products/zeroi"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  제로아이
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Programs Section -->
          <div>
            <button
              @click="toggleMobileSection('programs')"
              class="w-full px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-100 hover:bg-gray-50 flex items-center justify-between transition-colors duration-200"
            >
              Programs
              <svg
                class="w-4 h-4 transition-transform duration-300 ease-out"
                :class="{ 'rotate-180': expandedSections.programs }"
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
              class="overflow-hidden transition-all duration-300 ease-out bg-gray-50"
              :class="
                expandedSections.programs
                  ? 'max-h-40 opacity-100'
                  : 'max-h-0 opacity-0'
              "
            >
              <div
                class="transform transition-transform duration-300 ease-out"
                :class="
                  expandedSections.programs ? 'translate-y-0' : '-translate-y-2'
                "
              >
                <RouterLink
                  @click="closeMenu"
                  to="/academy"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  교육 아카데미
                </RouterLink>
                <RouterLink
                  @click="closeMenu"
                  to="/franchise"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  공명짐 체인점 문의
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Support Section -->
          <div>
            <button
              @click="toggleMobileSection('support')"
              class="w-full px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 flex items-center justify-between transition-colors duration-200"
            >
              Support
              <svg
                class="w-4 h-4 transition-transform duration-300 ease-out"
                :class="{ 'rotate-180': expandedSections.support }"
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
              class="overflow-hidden transition-all duration-300 ease-out bg-gray-50"
              :class="
                expandedSections.support
                  ? 'max-h-40 opacity-100'
                  : 'max-h-0 opacity-0'
              "
            >
              <div
                class="transform transition-transform duration-300 ease-out"
                :class="
                  expandedSections.support ? 'translate-y-0' : '-translate-y-2'
                "
              >
                <RouterLink
                  @click="closeMenu"
                  to="/video-inquiry"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  영상 홍보 촬영 문의
                </RouterLink>
                <RouterLink
                  @click="closeMenu"
                  to="/faq"
                  class="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-200 hover:translate-x-1"
                >
                  자주 묻는 질문
                </RouterLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>

  <!-- Back to Top 버튼 -->
  <Transition name="fade">
    <button
      v-if="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="맨 위로 이동"
    >
      <svg
        class="w-6 h-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue';

const menuOpen = ref(false);
const isScrolled = ref(false);
const showBackToTop = ref(false);
const activeMegaMenu = ref(null);
const expandedSections = reactive({
  about: false,
  products: false,
  programs: false,
  support: false,
});

let megaMenuTimeout = null;
let scrollTimeout = null;

// 스크롤 이벤트 핸들러 (쓰로틀링 적용)
const handleScroll = () => {
  if (scrollTimeout) return;

  scrollTimeout = setTimeout(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    isScrolled.value = scrollTop > 50;
    showBackToTop.value = scrollTop > 300;
    scrollTimeout = null;
  }, 16); // 60fps 제한
};

// 메뉴 토글
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;

  if (!menuOpen.value) {
    // 메뉴 닫을 때 모든 섹션 닫기
    closeAllSections();
  }
};

// 메뉴 닫기
const closeMenu = () => {
  menuOpen.value = false;
  closeAllSections();
};

// 모든 섹션 닫기 (헬퍼 함수)
const closeAllSections = () => {
  Object.keys(expandedSections).forEach((key) => {
    expandedSections[key] = false;
  });
};

// 모바일 섹션 토글 (개선된 버전 - 다른 섹션 자동 닫기)
const toggleMobileSection = (section) => {
  // 다른 섹션들을 모두 닫기
  Object.keys(expandedSections).forEach((key) => {
    if (key !== section) {
      expandedSections[key] = false;
    }
  });

  // 선택한 섹션 토글
  expandedSections[section] = !expandedSections[section];
};

// 특정 섹션만 열기
const openMobileSection = (section) => {
  closeAllSections();
  expandedSections[section] = true;
};

// 메가메뉴 컨트롤
const showMegaMenu = (menuType) => {
  if (megaMenuTimeout) {
    clearTimeout(megaMenuTimeout);
    megaMenuTimeout = null;
  }
  activeMegaMenu.value = menuType;
};

const hideMegaMenu = () => {
  if (megaMenuTimeout) {
    clearTimeout(megaMenuTimeout);
  }

  megaMenuTimeout = setTimeout(() => {
    activeMegaMenu.value = null;
  }, 150); // 살짝 딜레이 증가
};

const keepMegaMenuOpen = () => {
  if (megaMenuTimeout) {
    clearTimeout(megaMenuTimeout);
    megaMenuTimeout = null;
  }
};

const closeMegaMenu = () => {
  if (megaMenuTimeout) {
    clearTimeout(megaMenuTimeout);
  }

  megaMenuTimeout = setTimeout(() => {
    activeMegaMenu.value = null;
  }, 100);
};

// 즉시 메가메뉴 닫기
const closeMegaMenuImmediately = () => {
  if (megaMenuTimeout) {
    clearTimeout(megaMenuTimeout);
    megaMenuTimeout = null;
  }
  activeMegaMenu.value = null;
};

// 맨 위로 스크롤
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// ESC 키로 메뉴 닫기
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    if (menuOpen.value) {
      closeMenu();
    }
    if (activeMegaMenu.value) {
      closeMegaMenuImmediately();
    }
  }
};

// 외부 클릭으로 메뉴 닫기
const handleClickOutside = (event) => {
  const menuElement = document.querySelector('.mobile-menu-container');
  const megaMenuElement = document.querySelector('.mega-menu-container');

  if (menuOpen.value && menuElement && !menuElement.contains(event.target)) {
    closeMenu();
  }

  if (
    activeMegaMenu.value &&
    megaMenuElement &&
    !megaMenuElement.contains(event.target)
  ) {
    closeMegaMenuImmediately();
  }
};

// 화면 크기 변경 감지 (모바일 <-> 데스크톱)
const handleResize = () => {
  const isMobile = window.innerWidth < 1024; // lg 브레이크포인트

  if (!isMobile && menuOpen.value) {
    closeMenu();
  }
};

// 메뉴 상태 변경 감지 스크롤 방지
// watch(menuOpen, (newValue) => {
//   if (newValue) {
//     document.body.style.overflow = 'hidden'; // 스크롤 방지
//   } else {
//     document.body.style.overflow = ''; // 스크롤 복원
//   }
// });

// 라이프사이클
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);

  handleScroll(); // 초기 상태 설정
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);

  // 타임아웃 정리
  if (megaMenuTimeout) {
    clearTimeout(megaMenuTimeout);
  }
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  // body 스타일 복원
  document.body.style.overflow = '';
});

// 템플릿에서 사용할 함수들 노출
defineExpose({
  menuOpen,
  isScrolled,
  showBackToTop,
  activeMegaMenu,
  expandedSections,
  toggleMenu,
  closeMenu,
  toggleMobileSection,
  openMobileSection,
  showMegaMenu,
  hideMegaMenu,
  keepMegaMenuOpen,
  closeMegaMenu,
  closeMegaMenuImmediately,
  scrollToTop,
});
</script>
