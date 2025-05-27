<template>
  <div class="min-h-screen bg-white">
    <!-- 헤로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative max-w-7xl mx-auto">
        <!-- 대형 이미지 -->
        <div class="mb-6">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
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
          <h1 class="text-3xl md:text-5xl font-bold mb-6 text-white">
            공명짐과 함께하는 <br class="md:hidden" />
            <span class="text-gray-200">건강한 삶</span>
          </h1>
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
              건강과 혁신이 만나는 공간,<br />
              <span class="text-slate-700">공명짐</span>
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              공명짐은 단순한 헬스장을 넘어 회원분들의 건강한 라이프스타일을
              위한 토탈 솔루션을 제공합니다. 최신 운동기구와 전문 트레이닝
              프로그램, 그리고 검증된 건강기기 위탁판매를 통해 여러분의 건강
              목표 달성을 적극 지원합니다.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2 text-gray-700">
                <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span class="font-medium">프리미엄 헬스장 운영</span>
              </div>
              <div class="flex items-center gap-2 text-gray-700">
                <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span class="font-medium">건강기기 위탁판매</span>
              </div>
              <div class="flex items-center gap-2 text-gray-700">
                <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span class="font-medium">전문 컨설팅</span>
              </div>
            </div>
          </div>

          <!-- 이미지 영역 -->
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="공명짐 운동 공간"
              class="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div
              class="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
            >
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">10+</div>
                <div class="text-sm text-gray-600">년의 경험</div>
              </div>
            </div>
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
            헬스장 운영부터 건강기기 위탁판매까지, 건강과 관련된 모든 것을 한
            곳에서 만나보세요
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
              프리미엄 헬스장
            </h3>
            <p class="text-gray-600 mb-6">
              최신 운동기구와 쾌적한 환경에서 전문 트레이너의 1:1 맞춤 지도를
              받으실 수 있습니다. 초보자부터 전문가까지 모든 레벨에 맞는 운동
              프로그램을 제공합니다.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>최신 운동기구 완비</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>전문 퍼스널 트레이닝</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>체계적인 운동 프로그램</span>
              </li>
            </ul>
          </div>

          <!-- 위탁판매 서비스 -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6"
            >
              <i class="fas fa-heart-pulse text-2xl text-slate-700"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              건강기기 위탁판매
            </h3>
            <p class="text-gray-600 mb-6">
              파워플레이트, 고압산소기기 등 검증된 건강기기의 위탁판매를 통해 더
              많은 분들이 건강한 생활을 누릴 수 있도록 돕고 있습니다.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>검증된 프리미엄 기기</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>전문 상담 및 A/S</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-emerald-500 text-xs"></i>
                <span>합리적인 가격 정책</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 비전 섹션 -->
    <section
      class="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white"
    >
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          공명짐의 <span class="text-blue-200">비전</span>
        </h2>
        <p class="text-xl text-blue-100 leading-relaxed mb-12">
          "모든 사람이 건강하고 활기찬 삶을 누릴 수 있도록, 최고의 운동 환경과
          혁신적인 건강 솔루션을 제공합니다."
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fas fa-trophy text-2xl"></i>
            </div>
            <h3 class="font-bold mb-2">전문성</h3>
            <p class="text-sm text-blue-200">검증된 전문 지식과 경험</p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fas fa-handshake text-2xl"></i>
            </div>
            <h3 class="font-bold mb-2">신뢰</h3>
            <p class="text-sm text-blue-200">투명하고 정직한 서비스</p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fas fa-rocket text-2xl"></i>
            </div>
            <h3 class="font-bold mb-2">혁신</h3>
            <p class="text-sm text-blue-200">끊임없는 발전과 개선</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 섹션 -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          공명짐과 함께 시작해보세요
        </h2>
        <p class="text-gray-600 mb-8">
          건강한 변화를 원하신다면 지금 바로 문의하세요
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
          >
            헬스장 문의하기
          </button>
          <button
            class="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
          >
            제품 상담받기
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
