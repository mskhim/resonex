<template>
  <div class="min-h-screen bg-white">
    <!-- 헤로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative max-w-7xl mx-auto">
        <!-- 대형 이미지 -->
        <div class="mb-6">
          <img
            src="/about/profile1.png"
            alt="공명짐 헬스장"
            class="w-full h-64 md:h-80 object-cover shadow-2xl"
          />
        </div>
        <!-- 어두운 오버레이 -->
        <div class="absolute inset-0 bg-black/50"></div>
        <!-- 텍스트 내용 -->
        <div
          class="absolute inset-0 flex items-center justify-center z-10 mt-30"
        >
          <div class="text-center">
            <h1
              class="text-3xl md:text-5xl font-bold mb-4 text-white logo-korean"
            >
              [공명-共鳴]
            </h1>
            <p class="text-lg md:text-xl text-gray-200 logo-korean">
              함께 공, 울 명 - 함께 울리는, 더 큰 울림
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- 대표 소개 영역 -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <!-- 사진 영역 -->
          <div class="relative">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/about/ceo-profile.png"
                alt="공명짐 대표"
                class="w-full h-96 md:h-[500px] object-cover object-top"
              />
              <!-- 그라데이션 오버레이 -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              ></div>
            </div>
            <!-- 장식적 요소 -->
            <div
              class="absolute -top-4 -right-4 w-24 h-24 bg-slate-100 rounded-full opacity-50 -z-10"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-50 rounded-full opacity-30 -z-10"
            ></div>
          </div>

          <!-- 텍스트 영역 -->
          <div class="space-y-6">
            <div>
              <div
                class="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium text-sm mb-4"
              >
                CEO MESSAGE
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                건강한 삶을 향한<br />
                <span class="text-slate-700">진정한 동반자</span>
              </h2>
              <div class="w-16 h-1 bg-slate-600 mb-6"></div>
            </div>

            <div class="space-y-4">
              <p class="text-gray-600 text-lg leading-relaxed">
                <!-- 여기에 대표 인사말 내용이 들어갑니다 -->
                공명짐을 찾아주신 모든 분들께 진심으로 감사드립니다.
              </p>
              <p class="text-gray-600 leading-relaxed">
                <!-- 추가 내용 -->
                저희는 단순한 운동 공간이 아닌, 여러분의 건강한 변화를<br />
                함께 만들어가는 파트너가 되고자 합니다.
              </p>
              <p class="text-gray-600 leading-relaxed">
                <!-- 추가 내용 -->
                한 분 한 분의 소중한 건강 여정에 최선을 다하겠습니다.
              </p>
            </div>

            <!-- 대표 정보 -->
            <div class="pt-6 border-t border-gray-200">
              <div class="flex items-center gap-4">
                <div>
                  <h4 class="text-xl font-bold text-gray-900">고종관</h4>
                  <p class="text-slate-600 font-medium">공명짐 대표</p>
                </div>
                <div class="flex gap-3 ml-auto">
                  <!-- 소셜 링크 또는 자격증 뱃지 -->
                  <div
                    class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <i class="fas fa-certificate text-slate-600 text-sm"></i>
                  </div>
                  <div
                    class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <i class="fas fa-award text-slate-600 text-sm"></i>
                  </div>
                </div>
              </div>
            </div>

            <!-- 전문 분야 태그 -->
            <div class="flex flex-wrap gap-2 pt-4">
              <span
                class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
              >
                #퍼스널트레이닝
              </span>
              <span
                class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
              >
                #체형교정
              </span>
              <span
                class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
              >
                #건강관리
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 메인 소개 섹션 -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <!-- 텍스트 영역 -->
          <div>
            <div
              class="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm mb-6"
            >
              ABOUT GONGMYUNGJIM
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              함께 울리는 더 큰 울림,<br />
              <span class="text-slate-700">공명</span>
            </h2>
            <p
              class="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-8"
            >
              공명짐은 운동 공간을 넘어선 특별한 헬스케어 공간입니다.<br />
              회원 한 분 한 분의 건강한 삶을 위한 맞춤형 솔루션과<br />
              전문 트레이닝, 최신식 장비로 건강한 일상을 함께 만듭니다.
            </p>
            <div class="flex-col flex-wrap gap-4">
              <div class="flex items-center gap-2 text-gray-700">
                <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span class="font-medium">맞춤형 트레이닝 솔루션</span>
              </div>
              <div class="flex items-center gap-2 text-gray-700">
                <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span class="font-medium">프리미엄 헬스케어 기기 체험</span>
              </div>
              <div class="flex items-center gap-2 text-gray-700">
                <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span class="font-medium">전문가 건강 상담</span>
              </div>
            </div>
          </div>

          <!-- 이미지 영역 -->
          <div class="relative">
            <img
              src="/about/profile2.png"
              alt="공명짐 운동 공간"
              class="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 서비스 영역 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            공명짐의 <span class="text-slate-700">핵심 서비스</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            전문 트레이닝부터 프리미엄 헬스케어 기기 체험까지,<br />
            건강과 관련된 모든 것을 한 곳에서 만나보세요
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- 헬스장 서비스 -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6"
            >
              <i class="fas fa-dumbbell text-2xl text-slate-700"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              맞춤형 트레이닝 솔루션
            </h3>
            <p class="text-gray-600 mb-6">
              최신식 장비와 쾌적한 환경에서 전문 트레이너의 1:1 맞춤 지도를
              받으실 수 있습니다. 회원 한 분 한 분의 건강 목표에 맞는 개인별
              운동 프로그램을 제공합니다.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>최신식 운동기구 완비</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>개인별 맞춤 트레이닝</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>체계적인 건강 관리 프로그램</span>
              </li>
            </ul>
          </div>

          <!-- 헬스케어 기기 서비스 -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6"
            >
              <i class="fas fa-heart-pulse text-2xl text-slate-700"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              프리미엄 헬스케어 기기 체험
            </h3>
            <p class="text-gray-600 mb-6">
              전문가가 직접 고른 프리미엄 건강기기를 직접 체험해보실 수
              있습니다. 검증된 제품을 체험해보시고 건강 여정을 함께 상담해
              드립니다.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>전문가 선별 프리미엄 기기</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>직접 체험 후 상담 서비스</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>개인별 건강 솔루션 안내</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 섹션 -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          공명짐과 함께 건강한 변화를 시작해보세요
        </h2>
        <p class="text-gray-600 mb-8">
          맞춤형 건강 솔루션과 프리미엄 기기 체험을 원하신다면 지금 바로
          문의하세요
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
          >
            트레이닝 문의하기
          </button>
          <button
            class="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
          >
            기기 체험 상담받기
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    // 페이지 상단으로 스크롤
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
/* 추가 애니메이션이나 커스텀 스타일이 필요하면 여기에 */
</style>
