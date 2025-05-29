<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 (가로 동영상) -->
    <section class="relative bg-slate-900 text-white overflow-hidden">
      <div class="relative max-w-7xl mx-auto">
        <div class="relative">
          <video
            autoplay
            muted
            loop
            playsinline
            class="w-full h-64 md:h-80 lg:h-96 object-cover"
          >
            <source src="/video/hero-video.mp4" type="video/mp4" />
            <!-- 동영상 로드 실패 시 대체 이미지 -->
            <img
              alt="영상 촬영 홍보"
              class="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </video>
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-10 md:mt-30">
              <h1
                class="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-white"
              >
                영상 홍보 촬영
              </h1>
              <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                센터의 브랜드 가치를 높이는 전문 영상 제작 서비스
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 서비스 소개 섹션 -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            전문 영상 제작 서비스
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            센터의 특별함을 담은 고품질 홍보 영상으로<br />
            브랜드 인지도와 고객 유입을 극대화하세요
          </p>
        </div>

        <!-- 서비스 카드 -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div
            class="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 fade-in"
          >
            <div
              class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6"
            >
              <i class="fas fa-video text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">홍보 영상</h3>
            <p class="text-gray-600 leading-relaxed">
              센터의 분위기와 특징을 담은 전문적인 홍보 영상으로 브랜드 가치를
              높여드립니다.
            </p>
          </div>

          <div
            class="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 fade-in"
          >
            <div
              class="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6"
            >
              <i class="fas fa-users text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">수업 영상</h3>
            <p class="text-gray-600 leading-relaxed">
              실제 수업 현장과 회원들의 생생한 모습을 통해 센터의 전문성을
              보여드립니다.
            </p>
          </div>

          <div
            class="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 fade-in"
          >
            <div
              class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6"
            >
              <i class="fas fa-mobile-alt text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">SNS 콘텐츠</h3>
            <p class="text-gray-600 leading-relaxed">
              인스타그램, 유튜브 등 SNS에 최적화된 세로형 영상 콘텐츠를
              제작합니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 세로 동영상 섹션 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            제작 사례
          </h2>
          <p class="text-lg text-gray-600">
            실제 제작된 영상을 통해 퀄리티를 확인해보세요
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 items-center fade-in">
          <!-- 세로 동영상 -->
          <div class="relative">
            <div class="bg-black rounded-3xl overflow-hidden shadow-2xl">
              <video
                controls
                playsinline
                class="w-full h-96 md:h-[500px] object-cover"
              >
                <source src="/video/vertical-video.mp4" type="video/mp4" />
                <div
                  class="w-full h-96 md:h-[500px] bg-gray-300 flex items-center justify-center"
                >
                  <i class="fas fa-play-circle text-gray-500 text-6xl"></i>
                </div>
              </video>
            </div>
          </div>

          <!-- 설명 텍스트 -->
          <div class="space-y-6">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
              SNS 최적화 영상
            </h3>
            <div class="space-y-4 text-gray-600">
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>세로형 9:16 비율로 모바일 시청에 최적화</p>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>15초~60초 숏폼 콘텐츠로 집중도 극대화</p>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>트렌디한 편집과 음악으로 시청자 관심 유도</p>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <p>인스타그램 릴스, 유튜브 쇼츠 바로 업로드 가능</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 제작 프로세스 섹션 -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            제작 프로세스
          </h2>
          <p class="text-lg text-gray-600">
            체계적인 프로세스로 고품질 영상을 제작합니다
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8 fade-in">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-blue-600 font-bold text-xl">1</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">상담 및 기획</h3>
            <p class="text-gray-600 text-sm">
              센터 특성 파악 및<br />촬영 컨셉 기획
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-emerald-600 font-bold text-xl">2</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">촬영 진행</h3>
            <p class="text-gray-600 text-sm">
              전문 장비와 기술로<br />현장 촬영 진행
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-purple-600 font-bold text-xl">3</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">편집 및 후작업</h3>
            <p class="text-gray-600 text-sm">
              전문적인 편집과<br />사운드 후작업
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-indigo-600 font-bold text-xl">4</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">최종 전달</h3>
            <p class="text-gray-600 text-sm">
              고품질 영상 파일<br />및 활용 가이드 제공
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 문의 섹션 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="bg-white rounded-3xl shadow-lg p-12 fade-in">
          <div
            class="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <i class="fas fa-video text-white text-3xl"></i>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            영상 촬영 문의
          </h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            센터의 특별함을 담은 전문 영상으로<br />
            브랜드 가치를 높여보세요
          </p>

          <div class="grid md:grid-cols-3 gap-6 mb-10">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <i class="fas fa-camera text-blue-600 text-2xl"></i>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">전문 촬영</h3>
              <p class="text-gray-600 text-sm">고품질 장비와 전문 스탭</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <i class="fas fa-edit text-emerald-600 text-2xl"></i>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">전문 편집</h3>
              <p class="text-gray-600 text-sm">트렌디한 편집과 후작업</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <i class="fas fa-rocket text-purple-600 text-2xl"></i>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">빠른 제작</h3>
              <p class="text-gray-600 text-sm">효율적인 제작 프로세스</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="openKakaoChat"
              class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-8 rounded-2xl transition-colors duration-200 flex items-center justify-center gap-3"
            >
              카카오톡 문의
            </button>
            <button
              @click="openPhoneCall"
              class="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-2xl transition-colors duration-200 flex items-center justify-center gap-3"
            >
              전화 문의
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'VideoInquiry',
  mounted() {
    window.scrollTo(0, 0);
    this.initializeAnimations();
  },
  methods: {
    initializeAnimations() {
      // Intersection Observer for fade-in animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, observerOptions);

      // Observe all elements with fade-in class
      document.querySelectorAll('.fade-in').forEach((el) => {
        observer.observe(el);
      });
    },
    openKakaoChat() {
      window.open('http://pf.kakao.com/_RJVsn', '_blank');
    },
    openPhoneCall() {
      window.location.href = 'tel:010-4429-2889';
    },
  },
};
</script>

<style scoped>
/* 페이드인 애니메이션 */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate-fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* 스태거 애니메이션 */
.fade-in:nth-child(1) {
  transition-delay: 0.1s;
}
.fade-in:nth-child(2) {
  transition-delay: 0.2s;
}
.fade-in:nth-child(3) {
  transition-delay: 0.3s;
}
.fade-in:nth-child(4) {
  transition-delay: 0.4s;
}
</style>
