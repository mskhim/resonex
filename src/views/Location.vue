<template>
  <div>
    <PageHero
      image="/main/mainImg2.jpg"
      eyebrow="Location"
      title="오시는 길"
      subtitle="8호선 남위례역에서 도보 5분 거리에 있습니다."
      compact
    />

    <!-- ═══════════ 지도 & 정보 ═══════════ -->
    <section class="section-y bg-white">
      <div class="container-page">
        <div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <!-- 지도 -->
          <div data-reveal="up" class="lg:col-span-7">
            <div
              class="overflow-hidden rounded-2xl border border-ink-200 bg-ink-100 shadow-card"
            >
              <div id="map" class="h-[360px] w-full md:h-[520px]" />
            </div>

            <!-- 교통 안내 -->
            <div class="mt-5 grid gap-3 sm:grid-cols-2">
              <div
                v-for="transit in transits"
                :key="transit.title"
                class="flex gap-3.5 rounded-xl border border-ink-200 bg-ink-50 p-4"
              >
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 shadow-soft"
                >
                  <i :class="transit.icon" class="text-sm" />
                </span>
                <div>
                  <p class="text-sm font-semibold text-ink-900">
                    {{ transit.title }}
                  </p>
                  <p class="mt-0.5 text-sm text-ink-500">
                    {{ transit.description }}
                  </p>
                </div>
              </div>
            </div>

            <a
              :href="naverMapUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline mt-4 w-full"
            >
              <i class="fas fa-map-location-dot" />
              네이버 지도에서 크게 보기
            </a>
          </div>

          <!-- 정보 카드 -->
          <div data-reveal="right" class="lg:col-span-5">
            <div class="lg:sticky lg:top-32">
              <p class="eyebrow">Information</p>
              <h2 class="program-title mt-4 text-h2 text-ink-900">위치 정보</h2>

              <div class="mt-8 space-y-3">
                <!-- 주소 -->
                <div class="card p-5">
                  <div class="flex gap-4">
                    <span
                      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
                    >
                      <i class="fas fa-location-dot" />
                    </span>
                    <div class="min-w-0 flex-1">
                      <h3 class="font-bold text-ink-900">주소</h3>
                      <p class="mt-1.5 text-sm leading-relaxed text-ink-500">
                        (13647) 경기도 성남시 수정구<br />창곡동 555, B1호
                      </p>
                      <button
                        type="button"
                        @click="copyAddress"
                        class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                        :class="copied ? 'text-accent-600' : 'text-brand-600 hover:text-brand-700'"
                      >
                        <i :class="copied ? 'fas fa-check' : 'fas fa-copy'" class="text-xs" />
                        {{ copied ? '복사되었습니다' : '주소 복사' }}
                      </button>
                    </div>
                  </div>
                </div>

                <!-- 전화 -->
                <a :href="`tel:${contact.phone}`" class="card card-hover block p-5">
                  <div class="flex gap-4">
                    <span
                      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
                    >
                      <i class="fas fa-phone" />
                    </span>
                    <div>
                      <h3 class="font-bold text-ink-900">전화번호</h3>
                      <p class="mt-1.5 text-sm text-ink-500">
                        {{ contact.phone }}
                      </p>
                    </div>
                  </div>
                </a>

                <!-- 운영시간 -->
                <div class="card p-5">
                  <div class="flex gap-4">
                    <span
                      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
                    >
                      <i class="fas fa-clock" />
                    </span>
                    <div class="min-w-0 flex-1">
                      <h3 class="font-bold text-ink-900">운영시간</h3>
                      <dl class="mt-3 space-y-2 text-sm">
                        <div class="flex justify-between gap-4">
                          <dt class="text-ink-500">월 – 금</dt>
                          <dd class="font-medium text-ink-900">06:00 – 23:00</dd>
                        </div>
                        <div class="flex justify-between gap-4">
                          <dt class="text-ink-500">토 – 일</dt>
                          <dd class="font-medium text-ink-900">08:00 – 20:00</dd>
                        </div>
                        <div
                          class="flex justify-between gap-4 border-t border-ink-100 pt-2"
                        >
                          <dt class="text-ink-500">연중무휴</dt>
                          <dd class="font-medium text-accent-600">
                            설 명절 정상영업
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>

                <!-- 이메일 -->
                <a
                  :href="`mailto:${contact.email}`"
                  class="card card-hover block p-5"
                >
                  <div class="flex gap-4">
                    <span
                      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
                    >
                      <i class="fas fa-envelope" />
                    </span>
                    <div class="min-w-0">
                      <h3 class="font-bold text-ink-900">이메일</h3>
                      <p class="mt-1.5 break-all text-sm text-ink-500">
                        {{ contact.email }}
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <a
                :href="contact.kakao"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary mt-5 w-full"
              >
                <i class="fas fa-comment" />
                방문 상담 예약하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ 방문 전 안내 ═══════════ -->
    <section class="section-y-sm bg-ink-50 pb-20 md:pb-24">
      <div class="container-page">
        <h2
          data-reveal="up"
          class="program-title mb-10 text-center text-h3 text-ink-900"
        >
          방문 전 알아두세요
        </h2>

        <div class="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          <div
            v-for="(tip, i) in tips"
            :key="tip.title"
            data-reveal="up"
            :data-reveal-delay="i * 110"
            class="card card-hover p-6 text-center"
          >
            <span
              class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft"
            >
              <i :class="tip.icon" class="text-lg" />
            </span>
            <h3 class="font-bold text-ink-900">{{ tip.title }}</h3>
            <p class="mt-2 text-sm text-ink-500">{{ tip.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onBeforeUnmount } from 'vue';
import PageHero from '../components/PageHero.vue';
import { useReveal } from '../composables/useReveal';

useReveal();

const contact = inject('contact');
const copied = ref(false);

const GYM = { lat: 37.4669221, lng: 127.1390431 };
const ADDRESS = '(13647) 경기도 성남시 수정구 창곡동 555, B1호';
const naverMapUrl =
  'https://map.naver.com/p/entry/place/1058817891?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.1390431&lat=37.4669221';

let copyTimer = null;

const copyAddress = async () => {
  try {
    await navigator.clipboard.writeText(ADDRESS);
  } catch {
    // 클립보드 API를 못 쓰는 환경(비 HTTPS 등) 대비
    const el = document.createElement('textarea');
    el.value = ADDRESS;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  copied.value = true;
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => (copied.value = false), 2000);
};

/* ─────────── 네이버 지도 ─────────── */

const renderMap = () => {
  const el = document.getElementById('map');
  if (!el || !window.naver?.maps) return showFallback();

  const position = new window.naver.maps.LatLng(GYM.lat, GYM.lng);

  const map = new window.naver.maps.Map('map', {
    center: position,
    zoom: 17,
    mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: { position: window.naver.maps.Position.RIGHT_BOTTOM },
    scaleControl: false,
    logoControl: false,
    mapDataControl: false,
  });

  const marker = new window.naver.maps.Marker({
    position,
    map,
    title: '공명짐',
    icon: {
      content: `<div style="position:relative;width:40px;height:48px">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 24 30" fill="#4f46e5">
          <path d="M12 0C6.48 0 2 4.48 2 10c0 7.5 10 20 10 20s10-12.5 10-20c0-5.52-4.48-10-10-10z"/>
          <circle cx="12" cy="10" r="4" fill="#fff"/>
        </svg>
      </div>`,
      anchor: new window.naver.maps.Point(20, 48),
    },
  });

  const infoWindow = new window.naver.maps.InfoWindow({
    content: `
      <div style="padding:14px 16px;min-width:200px;text-align:center;font-family:Pretendard,-apple-system,sans-serif">
        <h3 style="margin:0 0 6px;color:#0f172a;font-weight:700;font-size:15px">공명짐</h3>
        <p style="margin:0 0 10px;color:#64748b;font-size:12px;line-height:1.5">경기도 성남시 수정구<br/>창곡동 555, B1호</p>
        <a href="${naverMapUrl}" target="_blank" rel="noopener"
           style="display:inline-block;background:#4f46e5;color:#fff;padding:7px 14px;border-radius:8px;font-size:12px;font-weight:600;text-decoration:none">
          네이버 지도에서 보기
        </a>
      </div>`,
    maxWidth: 260,
    backgroundColor: '#fff',
    borderColor: '#e2e8f0',
    borderWidth: 1,
    anchorSize: new window.naver.maps.Size(10, 10),
    pixelOffset: new window.naver.maps.Point(0, -8),
  });

  infoWindow.open(map, marker);

  window.naver.maps.Event.addListener(marker, 'click', () => {
    infoWindow.getMap()
      ? infoWindow.close()
      : infoWindow.open(map, marker);
  });
};

const showFallback = () => {
  const el = document.getElementById('map');
  if (!el) return;

  el.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:#0f172a;color:#fff;text-align:center;padding:2rem;gap:.75rem">
      <div style="font-size:2rem">📍</div>
      <h3 style="font-size:1.125rem;font-weight:700">공명짐</h3>
      <p style="font-size:.875rem;color:rgba(255,255,255,.6);line-height:1.6">${ADDRESS}<br/>8호선 남위례역 3번 출구 도보 5분</p>
      <a href="${naverMapUrl}" target="_blank" rel="noopener"
         style="margin-top:.5rem;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);color:#fff;padding:.7rem 1.4rem;border-radius:.75rem;font-size:.875rem;font-weight:600;text-decoration:none">
        네이버 지도에서 보기
      </a>
    </div>`;
};

onMounted(() => {
  // index.html에서 이미 로드되어 있으면 바로 렌더링
  if (window.naver?.maps) {
    renderMap();
    return;
  }

  const clientId = import.meta.env.VITE_APP_NAVER_MAPS_CLIENT_ID;
  const SCRIPT_ID = 'naver-maps-sdk';

  const existing = document.getElementById(SCRIPT_ID);
  if (existing) {
    existing.addEventListener('load', renderMap, { once: true });
    return;
  }

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.src = `https://openapi.map.naver.com/openapi/v3/maps.js${
    clientId ? `?ncpClientId=${clientId}` : ''
  }`;
  script.onload = renderMap;
  script.onerror = showFallback;
  document.head.appendChild(script);
});

onBeforeUnmount(() => clearTimeout(copyTimer));

/* ─────────── 콘텐츠 ─────────── */

const transits = [
  {
    icon: 'fas fa-train-subway',
    title: '지하철',
    description: '8호선 남위례역 3번 출구 도보 5분',
  },
  {
    icon: 'fas fa-car',
    title: '주차',
    description: '건물 앞 공영주차장 이용 가능',
  },
];

const tips = [
  {
    icon: 'fas fa-shirt',
    title: '운동복 준비',
    description: '편안한 운동복과 운동화를 준비해주세요',
  },
  {
    icon: 'fas fa-bottle-water',
    title: '수건 / 물병',
    description: '개인 수건과 물병을 지참하시면 좋습니다',
  },
];
</script>

<style scoped>
#map {
  position: relative;
  z-index: 1;
}
</style>
