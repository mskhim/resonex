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
            <div class="text-center max-w-4xl mx-auto px-4 mt-10 md:mt-30">
              <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
                오시는 길
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
          <div
            ref="mapSection"
            :class="[
              'order-2 lg:order-1 transition-all duration-1000 ease-out',
              isVisible.mapSection
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
          >
            <div class="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div
                id="map"
                class="w-full h-96 md:h-[500px] cursor-pointer"
              ></div>
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
                      8호선 남위례역 3번 출구에서 도보 5분
                    </div>
                  </div>
                </div>
                <div class="flex items-start gap-3"></div>
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
          <div
            ref="infoSection"
            :class="[
              'order-1 lg:order-2 transition-all duration-1000 ease-out delay-300',
              isVisible.infoSection
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
          >
            <div class="sticky top-8">
              <div class="mb-8">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span class="text-slate-700">위치정보</span>
                </h2>
                <p class="text-lg text-gray-600 leading-relaxed">
                  8호선 남위례역과 가까운 위치에 있습니다.<br />
                </p>
              </div>

              <!-- 연락처 정보 카드들 -->
              <div class="space-y-6">
                <!-- 주소 -->
                <div
                  ref="addressCard"
                  :class="[
                    'bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-700 ease-out delay-500',
                    isVisible.addressCard
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4',
                  ]"
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
                  ref="phoneCard"
                  :class="[
                    'bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-700 ease-out delay-700',
                    isVisible.phoneCard
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4',
                  ]"
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
                          010-4429-2889
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 운영시간 -->
                <div
                  ref="hoursCard"
                  :class="[
                    'bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-700 ease-out delay-900',
                    isVisible.hoursCard
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4',
                  ]"
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
                          <span class="text-gray-600">토 - 일</span>
                          <span class="font-medium text-gray-900"
                            >08:00 - 20:00</span
                          >
                        </div>
                        <div
                          class="flex justify-between pt-2 border-t border-gray-200"
                        >
                          <span class="text-gray-600">연중무휴</span>
                          <span class="font-medium text-red-600"
                            >설 명절 정상영업</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 이메일 -->
                <div
                  ref="emailCard"
                  :class="[
                    'bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-700 ease-out delay-1000',
                    isVisible.emailCard
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4',
                  ]"
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 추가 정보 섹션 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2
          ref="tipsTitle"
          :class="[
            'text-2xl md:text-3xl font-bold text-gray-900 mb-6 transition-all duration-1000 ease-out',
            isVisible.tipsTitle
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8',
          ]"
        >
          방문 전 알아두세요
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            ref="tip1"
            :class="[
              'bg-white p-6 rounded-xl shadow-sm transition-all duration-700 ease-out delay-300',
              isVisible.tip1
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
          >
            <i class="fas fa-tshirt text-3xl text-slate-700 mb-4"></i>
            <h3 class="font-bold text-gray-900 mb-2">운동복 준비</h3>
            <p class="text-sm text-gray-600">
              편안한 운동복과 운동화를 준비해주세요
            </p>
          </div>
          <div
            ref="tip2"
            :class="[
              'bg-white p-6 rounded-xl shadow-sm transition-all duration-700 ease-out delay-500',
              isVisible.tip2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
          >
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
      infoWindow: null,
      // 실제 공명짐 위치 좌표 (위도: 37.4669221, 경도: 127.1390431)
      gymPosition: {
        lat: 37.4669221,
        lng: 127.1390431,
      },
      // 네이버 지도 URL
      naverMapUrl:
        'https://map.naver.com/p/entry/place/1058817891?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.1390431&lat=37.4669221',

      // 애니메이션 상태 관리
      isVisible: {
        mapSection: false,
        infoSection: false,
        addressCard: false,
        phoneCard: false,
        hoursCard: false,
        emailCard: false,
        tipsTitle: false,
        tip1: false,
        tip2: false,
      },
      observer: null,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.setupMap();
    this.setupScrollAnimation();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupScrollAnimation() {
      // Intersection Observer 설정
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target;

              // ref 이름에 따라 isVisible 상태 업데이트
              if (target === this.$refs.mapSection) {
                this.isVisible.mapSection = true;
              } else if (target === this.$refs.infoSection) {
                this.isVisible.infoSection = true;
              } else if (target === this.$refs.addressCard) {
                this.isVisible.addressCard = true;
              } else if (target === this.$refs.phoneCard) {
                this.isVisible.phoneCard = true;
              } else if (target === this.$refs.hoursCard) {
                this.isVisible.hoursCard = true;
              } else if (target === this.$refs.emailCard) {
                this.isVisible.emailCard = true;
              } else if (target === this.$refs.tipsTitle) {
                this.isVisible.tipsTitle = true;
              } else if (target === this.$refs.tip1) {
                this.isVisible.tip1 = true;
              } else if (target === this.$refs.tip2) {
                this.isVisible.tip2 = true;
              }
            }
          });
        },
        {
          threshold: 0.1, // 10%가 보이면 트리거
          rootMargin: '0px 0px -50px 0px', // 하단 50px 전에 트리거
        }
      );

      // 다음 틱에서 observer 등록
      this.$nextTick(() => {
        const elementsToObserve = [
          this.$refs.mapSection,
          this.$refs.infoSection,
          this.$refs.addressCard,
          this.$refs.phoneCard,
          this.$refs.hoursCard,
          this.$refs.emailCard,
          this.$refs.tipsTitle,
          this.$refs.tip1,
          this.$refs.tip2,
        ];

        elementsToObserve.forEach((element) => {
          if (element) {
            this.observer.observe(element);
          }
        });
      });
    },

    setupMap() {
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
      const script = document.createElement('script');
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;

      script.onload = () => {
        setTimeout(() => {
          this.renderMap();
        }, 800);
      };

      script.onerror = () => {
        this.showFallback();
      };

      document.head.appendChild(script);
    },

    renderMap() {
      try {
        if (!window.naver?.maps) {
          this.showFallback();
          return;
        }

        const mapElement = document.getElementById('map');
        if (!mapElement) {
          return;
        }

        // 실제 공명짐 위치 좌표 사용
        const position = new window.naver.maps.LatLng(
          this.gymPosition.lat,
          this.gymPosition.lng
        );

        this.map = new window.naver.maps.Map('map', {
          center: position,
          zoom: 17,
          mapTypeControl: false,
          zoomControl: false,
          scaleControl: false,
          logoControl: false,
          mapDataControl: false,
        });

        // 마커 생성 및 클릭 이벤트 추가
        this.marker = new window.naver.maps.Marker({
          position: position,
          map: this.map,
          title: '공명짐 - 클릭하여 네이버 지도에서 보기',
          icon: {
            url:
              'data:image/svg+xml;base64,' +
              btoa(`
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#dc2626">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            `),
            scaledSize: new window.naver.maps.Size(40, 40),
            anchor: new window.naver.maps.Point(20, 40),
          },
        });

        // 마커 클릭 이벤트 - 네이버 지도 팝업
        window.naver.maps.Event.addListener(this.marker, 'click', () => {
          this.openNaverMap();
        });

        // 지도 클릭 이벤트도 추가
        window.naver.maps.Event.addListener(this.map, 'click', () => {
          this.openNaverMap();
        });

        // 정보창 생성 - 기본적으로 표시
        this.infoWindow = new window.naver.maps.InfoWindow({
          content: `
            <div style="padding: 15px; min-width: 200px; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-weight: bold; font-size: 16px;">공명짐</h3>
              <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 13px; line-height: 1.4;">경기도 성남시 수정구 창곡동 555, B1호</p>
              <button 
                onclick="window.open('${this.naverMapUrl}', '_blank')" 
                style="background: #1e40af; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 500; transition: background-color 0.2s;"
                onmouseover="this.style.background='#1d4ed8'"
                onmouseout="this.style.background='#1e40af'"
              >
                네이버 지도에서 보기
              </button>
            </div>
          `,
          maxWidth: 280,
          backgroundColor: '#fff',
          borderColor: '#e5e7eb',
          borderWidth: 1,
          anchorSize: new window.naver.maps.Size(10, 10),
          pixelOffset: new window.naver.maps.Point(0, -10),
        });

        // 정보창을 기본적으로 열어두기
        this.infoWindow.open(this.map, this.marker);

        // 마커 hover 이벤트는 유지
        window.naver.maps.Event.addListener(this.marker, 'mouseover', () => {
          if (!this.infoWindow.getMap()) {
            this.infoWindow.open(this.map, this.marker);
          }
        });
      } catch (error) {
        this.showFallback();
      }
    },

    openNaverMap() {
      window.open(this.naverMapUrl, '_blank');
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
              <p style="margin-bottom: 1rem;"><strong>교통:</strong> 8호선 남위례역 3번 출구 도보 5분</p>
              <button 
                onclick="window.open('${this.naverMapUrl}', '_blank')"
                style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3); color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; cursor: pointer; font-size: 16px;"
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
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

#map:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

/* 네이버 지도 컨트롤 요소들의 z-index 강제 조정 */
#map .nmap_control_panel,
#map .nmap-control-scale,
#map .nmap-logo,
#map .nmap-control-maptype,
#map .nmap-control-zoom {
  z-index: 10 !important;
}

/* 애니메이션 최적화 - GPU 가속 활용 */
.transition-all {
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* 모바일 최적화 */
@media (max-width: 768px) {
  .sticky {
    position: relative !important;
    top: auto !important;
  }

  /* 모바일에서 애니메이션 부드럽게 */
  .transition-all {
    transition-duration: 0.8s !important;
  }
}

/* 저성능 디바이스 대응 */
@media (prefers-reduced-motion: reduce) {
  .transition-all {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
