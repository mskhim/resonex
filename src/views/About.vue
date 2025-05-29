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
          class="absolute inset-0 flex items-center justify-center z-10 mt-10 md:mt-30"
        >
          <div
            class="text-center transition-all duration-1000"
            :class="[
              heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
          >
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
          <!-- 사진 영역 - 모바일: 첫번째, 데스크톱: 첫번째 -->
          <div
            ref="ceoImage"
            class="relative transition-all duration-1000 order-1"
            :class="[
              isVisible.ceoImage
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8',
            ]"
          >
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/about/ceo-profile.png"
                alt="공명짐 대표"
                class="w-full h-96 md:h-[650px] object-cover object-top"
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

          <!-- 텍스트 영역 - 모바일: 두번째, 데스크톱: 두번째 -->
          <div
            ref="ceoContent"
            class="space-y-6 transition-all duration-1000 delay-300 order-2"
            :class="[
              isVisible.ceoContent
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8',
            ]"
          >
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
                공명짐을 찾아주신 모든 분들께
                <br class="block md:hidden" />진심으로 감사드립니다.
              </p>
              <p class="text-gray-600 leading-relaxed">
                저희는 단순한 운동 공간이 아닌,<br class="block md:hidden" />
                여러분의 건강한 변화를<br />
                함께 만들어가는 파트너가 되고자 합니다.
              </p>
              <p class="text-gray-600 leading-relaxed">
                한 분 한 분의 소중한 건강 여정에 최선을 다하겠습니다.
              </p>
            </div>

            <!-- 대표 정보 -->
            <div class="pt-6 border-t border-gray-200">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h4 class="text-xl font-bold text-gray-900">고종관</h4>
                  <p class="text-indigo-600 font-medium">대표</p>
                </div>
              </div>

              <!-- 전문 분야 태그 -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                >
                  #퍼스널트레이닝
                </span>
                <span
                  class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                >
                  #체형교정
                </span>
                <span
                  class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                >
                  #건강관리
                </span>
              </div>

              <!-- 카드형 버튼들 -->
              <div class="grid gap-3">
                <!-- 자격증 카드 버튼 -->
                <div
                  class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-4 cursor-pointer hover:from-indigo-100 hover:to-purple-100 hover:border-indigo-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                  @click="showCertifications = true"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors flex-shrink-0"
                    >
                      <i class="fas fa-certificate text-white text-lg"></i>
                    </div>
                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 mb-1">
                        전문 자격증
                      </div>
                      <div class="text-sm text-gray-600">
                        NASM 국제자격증 포함 다양한 전문 자격증 보유
                      </div>
                    </div>
                    <div
                      class="text-indigo-400 group-hover:text-indigo-600 transition-colors"
                    >
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </div>

                <!-- 경력 카드 버튼 -->
                <div
                  class="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4 cursor-pointer hover:from-emerald-100 hover:to-teal-100 hover:border-emerald-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                  @click="showExperience = true"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors flex-shrink-0"
                    >
                      <i class="fas fa-briefcase text-white text-lg"></i>
                    </div>
                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 mb-1">
                        경력 사항
                      </div>
                      <div class="text-sm text-gray-600">
                        국가대표팀 트레이너 등 풍부한 현장 경험
                      </div>
                    </div>
                    <div
                      class="text-emerald-400 group-hover:text-emerald-600 transition-colors"
                    >
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 메인 소개 섹션 -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <!-- 이미지 영역 - 모바일: 첫번째, 데스크톱: 두번째 -->
          <div
            ref="aboutImage"
            class="relative transition-all duration-1000 delay-300 order-1 md:order-2"
            :class="[
              isVisible.aboutImage
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8',
            ]"
          >
            <img
              src="/about/profile2.png"
              alt="공명짐 운동 공간"
              class="rounded-2xl shadow-2xl w-full h-96 object-cover hover:shadow-3xl transition-shadow duration-300"
            />
          </div>

          <!-- 텍스트 영역 - 모바일: 두번째, 데스크톱: 첫번째 -->
          <div
            ref="aboutContent"
            class="transition-all duration-1000 order-2 md:order-1"
            :class="[
              isVisible.aboutContent
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8',
            ]"
          >
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
            <div class="flex-col flex-wrap gap-4 space-y-3">
              <div
                class="flex items-center gap-2 text-gray-700 hover:text-slate-800 transition-colors"
              >
                <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span class="font-medium">맞춤형 트레이닝 솔루션</span>
              </div>
              <div
                class="flex items-center gap-2 text-gray-700 hover:text-slate-800 transition-colors"
              >
                <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span class="font-medium">프리미엄 헬스케어 기기 체험</span>
              </div>
              <div
                class="flex items-center gap-2 text-gray-700 hover:text-slate-800 transition-colors"
              >
                <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span class="font-medium">전문가 건강 상담</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 서비스 영역 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div
          ref="serviceTitle"
          class="text-center mb-16 transition-all duration-1000"
          :class="[
            isVisible.serviceTitle
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8',
          ]"
        >
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
            ref="serviceCard1"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            :class="[
              isVisible.serviceCard1
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
          >
            <div
              class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors"
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
            ref="serviceCard2"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            :class="[
              isVisible.serviceCard2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
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
      <div
        ref="ctaSection"
        class="max-w-4xl mx-auto px-4 text-center transition-all duration-1000"
        :class="[
          isVisible.ctaSection
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8',
        ]"
      >
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          공명짐과 함께 건강한 변화를 시작해보세요
        </h2>
        <p class="text-gray-600 mb-8">
          맞춤형 건강 솔루션과 프리미엄 기기 체험을 원하신다면 지금 바로
          문의하세요
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
            @click="openKakaoChat"
          >
            트레이닝 문의하기
          </button>
          <button
            class="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
            @click="openKakaoChat"
          >
            기기 체험 상담받기
          </button>
        </div>
      </div>
    </section>

    <!-- 자격증 팝업 모달 -->
    <div
      v-if="showCertifications"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click="showCertifications = false"
    >
      <div
        class="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
        @click.stop
      >
        <!-- 헤더 -->
        <div
          class="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center"
              >
                <i class="fas fa-certificate text-slate-600 text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">자격증 현황</h3>
                <p class="text-gray-600 text-sm">전문 자격증</p>
              </div>
            </div>
            <button
              @click="showCertifications = false"
              class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <i class="fas fa-times text-gray-400"></i>
            </button>
          </div>
        </div>

        <!-- 내용 -->
        <div class="p-6 space-y-4">
          <!-- 기본 자격증 -->
          <div class="space-y-3">
            <h4 class="font-semibold text-gray-900 flex items-center gap-2">
              <i class="fas fa-star text-yellow-500"></i>
              기본 자격증
            </h4>
            <div class="bg-slate-50 p-4 rounded-xl">
              <p class="text-gray-700 font-medium">
                생활 체육 지도자 자격 2급 보디빌딩
              </p>
            </div>
          </div>

          <!-- 국제 자격증 -->
          <div class="space-y-3">
            <h4 class="font-semibold text-gray-900 flex items-center gap-2">
              <i class="fas fa-globe text-blue-500"></i>
              국제 자격증 (NASM)
            </h4>
            <div class="space-y-2">
              <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                <p class="text-blue-800 font-medium">
                  CPT 미국 스포츠 의학회 트레이너 자격
                </p>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                <p class="text-blue-800 font-medium">
                  CES 미국 스포츠 의학회 재활 운동 전문가 자격
                </p>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                <p class="text-blue-800 font-medium">
                  PES 미국 스포츠 의학회 선수 운동 전문가 자격
                </p>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                <p class="text-blue-800 font-medium">
                  GFS 미국 스포츠 의학회 골프 피트니스 전문가
                </p>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                <p class="text-blue-800 font-medium">
                  WFS 미국 스포츠 의학회 여성 운동 전문가 수료
                </p>
              </div>
            </div>
          </div>

          <!-- 전문 트레이너 자격증 -->
          <div class="space-y-3">
            <h4 class="font-semibold text-gray-900 flex items-center gap-2">
              <i class="fas fa-dumbbell text-green-500"></i>
              전문 트레이너 자격증
            </h4>
            <div class="grid gap-2">
              <div
                class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400"
              >
                <p class="text-green-800">
                  NSCA - Bosu Master Trainer 보수 마스터 트레이너
                </p>
              </div>
              <div
                class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400"
              >
                <p class="text-green-800">
                  Trigger Point Master Trainer 트리거 포인트 마스터 트레이너
                </p>
              </div>
              <div
                class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400"
              >
                <p class="text-green-800">
                  POWER PLATE Master Trainer 파워 플레이트 마스터 트레이너
                </p>
              </div>
              <div
                class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400"
              >
                <p class="text-green-800">
                  POWER PLATE ON Pilates 파워 플레이트 필라테스 강사
                </p>
              </div>
            </div>
          </div>

          <!-- 기타 전문 자격증 -->
          <div class="space-y-3">
            <h4 class="font-semibold text-gray-900 flex items-center gap-2">
              <i class="fas fa-heart text-red-500"></i>
              기타 전문 자격증
            </h4>
            <div class="grid gap-2">
              <div class="bg-red-50 p-3 rounded-lg">
                <p class="text-red-800">
                  M's Body Pilates Instructor 필라테스 강사
                </p>
              </div>
              <div class="bg-red-50 p-3 rounded-lg">
                <p class="text-red-800">
                  IASTM & CRT & SASO 근막이완 테크닉 트레이너
                </p>
              </div>
              <div class="bg-red-50 p-3 rounded-lg">
                <p class="text-red-800">
                  TRX - STC, SMSTC, YOGA 소도구 서스펜션 트레이너
                </p>
              </div>
              <div class="bg-red-50 p-3 rounded-lg">
                <p class="text-red-800">
                  SuplexKorea Bulgarian Bag Level 1 불가리안백 자격
                </p>
              </div>
              <div class="bg-red-50 p-3 rounded-lg">
                <p class="text-red-800">
                  Club Bell, Kettle Bell, VIPER Trainer 소도구 트레이너
                </p>
              </div>
            </div>
          </div>

          <!-- 세미나 참석 -->
          <div class="space-y-3">
            <h4 class="font-semibold text-gray-900 flex items-center gap-2">
              <i class="fas fa-graduation-cap text-purple-500"></i>
              세미나 참석
            </h4>
            <div class="bg-purple-50 p-3 rounded-lg">
              <p class="text-purple-800">
                각종 세미나 참석 (부정형 증후군, 움직임 평가, CES 상급)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 경력사항 팝업 모달 -->
    <div
      v-if="showExperience"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click="showExperience = false"
    >
      <div
        class="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
        @click.stop
      >
        <!-- 헤더 -->
        <div
          class="sticky top-0 bg-slate-100 border-b border-gray-200 p-6 rounded-t-2xl z-10"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center"
              >
                <i class="fas fa-briefcase text-slate-600 text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">경력사항</h3>
                <p class="text-gray-600 text-sm">전문 경력</p>
              </div>
            </div>
            <button
              @click="showExperience = false"
              class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <i class="fas fa-times text-gray-400"></i>
            </button>
          </div>
        </div>

        <!-- 내용 -->
        <div class="p-6 space-y-6">
          <!-- 인디어썸 스포츠 -->
          <div class="relative">
            <div
              class="absolute left-0 top-0 w-1 h-full bg-blue-400 rounded-full"
            ></div>
            <div class="pl-6">
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >2018-2019</span
                >
              </div>
              <h4 class="font-bold text-gray-900 mb-1">인디어썸 스포츠</h4>
              <p class="text-gray-600">브랜드 트레이닝 팀 트레이너</p>
            </div>
          </div>

          <!-- 코엑스 컨벤션 -->
          <div class="relative">
            <div
              class="absolute left-0 top-0 w-1 h-full bg-green-400 rounded-full"
            ></div>
            <div class="pl-6">
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >2020-2023</span
                >
              </div>
              <h4 class="font-bold text-gray-900 mb-1">코엑스 컨벤션</h4>
              <p class="text-gray-600">컨벤스 어시스트 강사</p>
            </div>
          </div>

          <!-- 무쇄복&ATZ Sup -->
          <div class="relative">
            <div
              class="absolute left-0 top-0 w-1 h-full bg-purple-400 rounded-full"
            ></div>
            <div class="pl-6">
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >2022-2023</span
                >
              </div>
              <h4 class="font-bold text-gray-900 mb-1">무쇄복&ATZ Sup</h4>
              <p class="text-gray-600">프로 대회 선수 케어 트레이너</p>
            </div>
          </div>

          <!-- 대한민국 국가대표 -->
          <div class="relative">
            <div
              class="absolute left-0 top-0 w-1 h-full bg-red-400 rounded-full"
            ></div>
            <div class="pl-6">
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
                  >2024</span
                >
                <span
                  class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                  >최신</span
                >
              </div>
              <h4 class="font-bold text-gray-900 mb-1">대한민국 국가대표</h4>
              <p class="text-gray-600">댄스 스포츠팀 트레이너</p>
            </div>
          </div>

          <!-- 주요 활동 섹션 -->
          <div class="bg-slate-50 p-4 rounded-xl">
            <h4
              class="font-semibold text-gray-900 mb-3 flex items-center gap-2"
            >
              <i class="fas fa-star text-yellow-500"></i>
              주요 활동 및 전문 분야
            </h4>
            <div class="grid gap-3">
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-emerald-500 mt-1"></i>
                <div>
                  <p class="font-medium text-gray-900">웨이트 필라테스 강사</p>
                  <p class="text-sm text-gray-600">
                    네이버, 네이트, 다음 '고종관 트레이너' 검색 1위
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-emerald-500 mt-1"></i>
                <div>
                  <p class="font-medium text-gray-900">다양한 전문 강의</p>
                  <p class="text-sm text-gray-600">
                    압구정 필라테스 강사 / 판교 트레이너 / 각종 프리랜서
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-emerald-500 mt-1"></i>
                <div>
                  <p class="font-medium text-gray-900">커뮤니티 센터 운영</p>
                  <p class="text-sm text-gray-600">
                    정형 관리 - 탈장, 신디저, 부정형 관리
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-emerald-500 mt-1"></i>
                <div>
                  <p class="font-medium text-gray-900">
                    Powerplate Master 파워 플레이트 교육 강사
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-emerald-500 mt-1"></i>
                <div>
                  <p class="font-medium text-gray-900">
                    에이스 바디 - 타워 플라 건설팀 이사
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-check-circle text-emerald-500 mt-1"></i>
                <div>
                  <p class="font-medium text-gray-900">
                    Muscle Tree PT Studio 위례 대표 원장
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      heroVisible: false,
      showCertifications: false,
      showExperience: false,
      isVisible: {
        ceoImage: false,
        ceoContent: false,
        aboutContent: false,
        aboutImage: false,
        serviceTitle: false,
        serviceCard1: false,
        serviceCard2: false,
        ctaSection: false,
      },
    };
  },
  mounted() {
    // 페이지 상단으로 스크롤
    window.scrollTo(0, 0);

    // 히어로 섹션 애니메이션
    setTimeout(() => {
      this.heroVisible = true;
    }, 300);

    // 스크롤 애니메이션 설정
    this.setupScrollAnimation();
  },
  methods: {
    // 카카오톡 링크 열기
    openKakaoChat() {
      if (typeof window !== 'undefined') {
        try {
          window.open('http://pf.kakao.com/_RJVsn', '_blank');
        } catch (error) {
          console.error('카카오톡 링크 열기 실패:', error);
        }
      }
    },

    // 상담 문의
    openConsultation() {
      if (typeof window !== 'undefined') {
        try {
          // 전화 연결 또는 다른 상담 방법
          window.open('tel:010-1234-5678', '_self');
        } catch (error) {
          console.error('상담 연결 실패:', error);
        }
      }
    },

    // 스크롤 애니메이션 설정
    setupScrollAnimation() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target;

              // 각 섹션별 애니메이션 트리거
              if (target === this.$refs.ceoImage) {
                this.isVisible.ceoImage = true;
              } else if (target === this.$refs.ceoContent) {
                this.isVisible.ceoContent = true;
              } else if (target === this.$refs.aboutContent) {
                this.isVisible.aboutContent = true;
              } else if (target === this.$refs.aboutImage) {
                this.isVisible.aboutImage = true;
              } else if (target === this.$refs.serviceTitle) {
                this.isVisible.serviceTitle = true;
              } else if (target === this.$refs.serviceCard1) {
                this.isVisible.serviceCard1 = true;
              } else if (target === this.$refs.serviceCard2) {
                this.isVisible.serviceCard2 = true;
              } else if (target === this.$refs.ctaSection) {
                this.isVisible.ctaSection = true;
              }
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      this.$nextTick(() => {
        // 모든 요소들을 관찰
        const elementsToObserve = [
          this.$refs.ceoImage,
          this.$refs.ceoContent,
          this.$refs.aboutContent,
          this.$refs.aboutImage,
          this.$refs.serviceTitle,
          this.$refs.serviceCard1,
          this.$refs.serviceCard2,
          this.$refs.ctaSection,
        ];

        elementsToObserve.forEach((element) => {
          if (element) observer.observe(element);
        });
      });
    },
  },
};
</script>

<style scoped>
/* 로고 한글 폰트 */
.logo-korean {
  word-break: keep-all;
  line-height: 1.2;
}

/* 커스텀 그림자 */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* 부드러운 애니메이션 */
.transition-all {
  transition: all 0.3s ease-in-out;
}

/* 호버 효과 강화 */
.transform:hover {
  transform: translateY(-2px);
}

/* 버튼 호버 애니메이션 개선 */
button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 태그 호버 효과 */
.hover\:bg-slate-200:hover {
  background-color: rgb(226 232 240);
  transform: scale(1.05);
}
</style>
