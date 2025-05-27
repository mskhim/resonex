<template>
  <div class="min-h-screen bg-white">
    <!-- 헤로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <!-- 대형 이미지 with 오버레이 -->
        <div class="mb-6 relative">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
            alt="공명짐 위치"
            class="w-full h-64 md:h-80 object-cover shadow-2xl"
          />
          <!-- 어두운 오버레이 -->
          <div class="absolute inset-0 bg-black/60"></div>

          <!-- 텍스트 내용 -->
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-30">
              <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
                찾아오시는 길
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 지도 및 정보 섹션 -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- 지도 영역 -->
          <div class="order-2 lg:order-1">
            <div class="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div id="map" class="w-full h-96 md:h-[500px]"></div>
            </div>

            <!-- 지도 하단 정보 -->
            <div class="mt-6 p-6 bg-gray-50 rounded-xl">
              <h3 class="text-lg font-bold text-gray-900 mb-4">교통 안내</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <i class="fas fa-subway text-blue-600 mt-1"></i>
                  <div>
                    <div class="font-medium text-gray-900">지하철</div>
                    <div class="text-sm text-gray-600">
                      분당선 수내역 1번 출구에서 도보 10분
                    </div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-bus text-green-600 mt-1"></i>
                  <div>
                    <div class="font-medium text-gray-900">버스</div>
                    <div class="text-sm text-gray-600">
                      창곡동 정류장 하차 후 도보 3분
                    </div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-car text-gray-600 mt-1"></i>
                  <div>
                    <div class="font-medium text-gray-900">주차</div>
                    <div class="text-sm text-gray-600">
                      건물 앞 공영주차장 이용 가능
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 정보 영역 -->
          <div class="order-1 lg:order-2">
            <div class="sticky top-8">
              <div class="mb-8">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  공명짐 <span class="text-slate-700">위치정보</span>
                </h2>
                <p class="text-lg text-gray-600 leading-relaxed">
                  성남시 수정구 창곡동에 위치한 공명짐은 분당선 수내역에서
                  가까워 대중교통 이용이 편리합니다.
                </p>
              </div>

              <!-- 연락처 정보 카드들 -->
              <div class="space-y-6">
                <!-- 주소 -->
                <div
                  class="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <i
                        class="fas fa-map-marker-alt text-xl text-slate-700"
                      ></i>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-2">주소</h3>
                      <p class="text-gray-600 leading-relaxed">
                        (13647) 경기도 성남시 수정구<br />
                        창곡동 555, B1호
                      </p>
                      <button
                        @click="copyAddress"
                        class="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <i class="fas fa-copy mr-1"></i>주소 복사
                      </button>
                    </div>
                  </div>
                </div>

                <!-- 전화번호 -->
                <div
                  class="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <i class="fas fa-phone text-xl text-slate-700"></i>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-2">전화번호</h3>
                      <p class="text-gray-600">
                        <a
                          href="tel:02-715-0607"
                          class="hover:text-blue-600 transition-colors"
                        >
                          02-715-0607
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 운영시간 -->
                <div
                  class="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <i class="fas fa-clock text-xl text-slate-700"></i>
                    </div>
                    <div class="w-full">
                      <h3 class="font-bold text-gray-900 mb-3">운영시간</h3>
                      <div class="space-y-2 text-sm">
                        <div class="flex justify-between">
                          <span class="text-gray-600">월 - 금</span>
                          <span class="font-medium text-gray-900"
                            >06:00 - 23:00</span
                          >
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-600">토요일</span>
                          <span class="font-medium text-gray-900"
                            >08:00 - 21:00</span
                          >
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-600">일요일</span>
                          <span class="font-medium text-gray-900"
                            >10:00 - 19:00</span
                          >
                        </div>
                        <div
                          class="flex justify-between pt-2 border-t border-gray-200"
                        >
                          <span class="text-gray-600">휴무일</span>
                          <span class="font-medium text-red-600"
                            >매월 둘째, 넷째 일요일</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 이메일 -->
                <div
                  class="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <i class="fas fa-envelope text-xl text-slate-700"></i>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-2">이메일</h3>
                      <p class="text-gray-600">
                        <a
                          href="mailto:cprh7677@naver.com"
                          class="hover:text-blue-600 transition-colors"
                        >
                          cprh7677@naver.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CTA 버튼 -->
              <div class="mt-8 pt-6 border-t border-gray-200">
                <div class="flex flex-col sm:flex-row gap-3">
                  <button
                    class="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                  >
                    <i class="fas fa-calendar-plus mr-2"></i>방문 예약
                  </button>
                  <button
                    class="flex-1 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                  >
                    <i class="fas fa-phone mr-2"></i>전화 문의
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 추가 정보 섹션 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          방문 전 알아두세요
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <i class="fas fa-id-card text-3xl text-slate-700 mb-4"></i>
            <h3 class="font-bold text-gray-900 mb-2">신분증 지참</h3>
            <p class="text-sm text-gray-600">
              초회 방문시 신분증을 지참해주세요
            </p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <i class="fas fa-tshirt text-3xl text-slate-700 mb-4"></i>
            <h3 class="font-bold text-gray-900 mb-2">운동복 준비</h3>
            <p class="text-sm text-gray-600">
              편안한 운동복과 운동화를 준비해주세요
            </p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <i class="fas fa-bottle-water text-3xl text-slate-700 mb-4"></i>
            <h3 class="font-bold text-gray-900 mb-2">수건/물병</h3>
            <p class="text-sm text-gray-600">
              개인 수건과 물병을 지참하시면 좋습니다
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Location',
  data() {
    return {
      map: null,
      marker: null,
    };
  },
  mounted() {
    console.log('Location 컴포넌트 마운트됨 - 완전 새로운 코드');
    window.scrollTo(0, 0);
    this.setupMap();
  },
  methods: {
    setupMap() {
      console.log('setupMap 함수 시작');

      // 기존 스크립트 제거
      const existingScripts = document.querySelectorAll(
        'script[src*="openapi.map.naver.com"]'
      );
      existingScripts.forEach((script) => script.remove());

      // 네이버 객체 초기화
      if (window.naver) {
        delete window.naver;
      }

      const clientId = import.meta.env.VITE_APP_NAVER_MAPS_CLIENT_ID;
      console.log('Client ID:', clientId);

      const script = document.createElement('script');
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;

      script.onload = () => {
        console.log('네이버 지도 API 로드 완료');
        setTimeout(() => {
          this.renderMap();
        }, 800);
      };

      script.onerror = () => {
        console.error('네이버 지도 API 로드 실패');
        this.showFallback();
      };

      document.head.appendChild(script);
    },

    renderMap() {
      console.log('renderMap 시작');

      try {
        if (!window.naver?.maps) {
          console.error('네이버 지도 객체 없음');
          this.showFallback();
          return;
        }

        const mapElement = document.getElementById('map');
        if (!mapElement) {
          console.error('지도 DOM 요소 없음');
          return;
        }

        const position = new window.naver.maps.LatLng(37.4465, 127.1378);

        this.map = new window.naver.maps.Map('map', {
          center: position,
          zoom: 16,
          mapTypeControl: true,
          zoomControl: true,
        });

        this.marker = new window.naver.maps.Marker({
          position: position,
          map: this.map,
          title: '공명짐',
        });

        console.log('지도 생성 성공!');
      } catch (error) {
        console.error('지도 생성 오류:', error);
        this.showFallback();
      }
    },

    showFallback() {
      const mapContainer = document.getElementById('map');
      if (mapContainer) {
        mapContainer.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 1rem; text-align: center; padding: 2rem;">
            <i class="fas fa-map-marker-alt" style="font-size: 3rem; margin-bottom: 1rem;"></i>
            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">공명짐 위치</h3>
            <div style="font-size: 1rem; line-height: 1.6;">
              <p style="margin-bottom: 0.5rem;"><strong>주소:</strong> 경기도 성남시 수정구 창곡동 555, B1호</p>
              <p style="margin-bottom: 0.5rem;"><strong>전화:</strong> 02-715-0607</p>
              <p style="margin-bottom: 1rem;"><strong>교통:</strong> 분당선 수내역 1번 출구 도보 10분</p>
              <button 
                onclick="window.open('https://map.naver.com/v5/search/경기도%20성남시%20수정구%20창곡동%20555', '_blank')"
                style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3); color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; cursor: pointer;"
              >
                네이버 지도에서 보기
              </button>
            </div>
          </div>
        `;
      }
    },

    copyAddress() {
      const address = '(13647) 경기도 성남시 수정구 창곡동 555, B1호';
      navigator.clipboard
        .writeText(address)
        .then(() => {
          alert('주소가 복사되었습니다!');
        })
        .catch(() => {
          const textArea = document.createElement('textarea');
          textArea.value = address;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert('주소가 복사되었습니다!');
        });
    },
  },
};
</script>

<style scoped>
#map {
  border-radius: 1rem;
}

@media (max-width: 768px) {
  .sticky {
    position: relative !important;
    top: auto !important;
  }
}
</style>
