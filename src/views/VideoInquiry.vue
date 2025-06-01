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
                전문 영상 제작 서비스
              </h1>
              <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                브랜드 가치를 높이는<br />
                고품질 영상 콘텐츠 제작
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
            프리미엄 영상 제작 서비스
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            부산국제영화제 촬영팀과 인플루언서들이 함께하는<br />
            최고 품질의 바이럴 콘텐츠 제작
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
              브랜드의 가치와 특징을 담은 전문적인 홍보 영상으로 인지도를
              높여드립니다.
            </p>
          </div>

          <div
            class="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 fade-in"
          >
            <div
              class="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6"
            >
              <i class="fas fa-star text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              인플루언서 콜라보
            </h3>
            <p class="text-gray-600 leading-relaxed">
              틱톡 팔로워 10만+ 인플루언서들과의 협업으로 바이럴 효과를
              극대화합니다.
            </p>
          </div>

          <div
            class="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 fade-in"
          >
            <div
              class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6"
            >
              <i class="fas fa-trophy text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              영화제급 퀄리티
            </h3>
            <p class="text-gray-600 leading-relaxed">
              부산국제영화제 촬영팀이 참여하는 최고 수준의 전문 영상을
              제작합니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 제작 사례 섹션 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            제작 사례
          </h2>
          <p class="text-lg text-gray-600">
            실제 제작된 영상을 통해 결과물을 확인해보세요.
          </p>
        </div>
        <div class="mb-20">
          <div class="grid md:grid-cols-2 gap-12 items-center fade-in">
            <!-- 세로 동영상 -->
            <div class="relative order-2 md:order-1">
              <div
                class="bg-black rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto"
              >
                <video
                  controls
                  playsinline
                  class="w-full h-96 md:h-[600px] object-cover"
                >
                  <source src="/video/vertical-video.mp4" type="video/mp4" />
                  <div
                    class="w-full h-96 md:h-[600px] bg-gray-300 flex items-center justify-center"
                  >
                    <i class="fas fa-play-circle text-gray-500 text-6xl"></i>
                  </div>
                </video>
              </div>
            </div>

            <!-- 설명 텍스트 -->
            <div class="space-y-6 order-2 md:order-1">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
                SNS 최적화 콘텐츠
              </h3>
              <div class="space-y-4 text-gray-600">
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>세로형 9:16 비율로 모바일에 최적화</p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>팔로워 10만+ 인플루언서와의 협업</p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>트렌디한 편집과 음악으로 바이럴 유도</p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>인스타그램, 틱톡, 유튜브 쇼츠 동시 활용</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 첫 번째 가로 영상 (20초) -->
        <div class="mb-20">
          <div class="grid md:grid-cols-2 gap-12 items-center fade-in">
            <!-- 설명 텍스트 (왼쪽) -->
            <div class="space-y-6 order-1 md:order-1">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
                바이럴 숏폼 콘텐츠
              </h3>
              <div class="space-y-4 text-gray-600">
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>20초 내외의 임팩트 있는 숏폼 영상</p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>인플루언서와의 협업으로 바이럴 효과 극대화</p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>트렌디한 콘텐츠로 젊은 층 어필</p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>SNS 플랫폼 최적화 편집</p>
                </div>
              </div>
            </div>

            <!-- 가로 동영상 (오른쪽) -->
            <div class="relative order- 2 md:order-1">
              <div class="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video
                  controls
                  playsinline
                  class="w-full h-60 md:h-80 object-cover"
                >
                  <source src="/video/short-promo-video.mp4" type="video/mp4" />
                  <div
                    class="w-full h-60 md:h-80 bg-gray-300 flex items-center justify-center"
                  >
                    <i class="fas fa-play-circle text-gray-500 text-6xl"></i>
                  </div>
                </video>
              </div>
            </div>
          </div>
        </div>

        <!-- 두 번째 가로 영상 (2분, 유튜브) -->
        <div class="mb-20">
          <div class="grid md:grid-cols-2 gap-12 items-center fade-in">
            <!-- 유튜브 영상 -->
            <div class="relative">
              <div class="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  class="w-full h-60 md:h-80"
                  src="https://www.youtube.com/embed/rWMxEA6RjzU"
                  title="댄스스포츠 대회 하이라이트"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <!-- 설명 텍스트 -->
            <div class="space-y-6">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
                브랜드 스토리 영상
              </h3>
              <div class="space-y-4 text-gray-600">
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>부산국제영화제 촬영팀의 전문 퀄리티</p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>전문 카메라 10대로 다각도 촬영</p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>브랜드 철학과 가치를 스토리텔링으로 표현</p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></div>
                  <p>감동적인 내러티브로 시청자 몰입도 향상</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 세로 동영상 섹션 (맨 아래로 이동) -->
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

        <div class="grid md:grid-cols-4 grid-cols-2 gap-8 fade-in">
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
            영상 제작 문의
          </h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            브랜드의 특별함을 담은 전문 영상으로<br />
            마케팅 효과를 극대화하세요
          </p>

          <div class="grid md:grid-cols-3 gap-6 mb-10">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <i class="fas fa-film text-blue-600 text-2xl"></i>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">영화제급 퀄리티</h3>
              <p class="text-gray-600 text-sm">부산국제영화제 촬영팀 참여</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <i class="fas fa-video text-emerald-600 text-2xl"></i>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">전문 장비</h3>
              <p class="text-gray-600 text-sm">전문 카메라 10대 +@ 보유</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <i class="fas fa-star text-purple-600 text-2xl"></i>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">인플루언서 협업</h3>
              <p class="text-gray-600 text-sm">
                틱톡 팔로워 10만+ 크리에이터들과 협업
              </p>
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
