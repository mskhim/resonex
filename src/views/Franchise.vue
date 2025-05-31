<template>
  <div class="min-h-screen bg-white">
    <!-- 히어로 섹션 -->
    <section class="relative bg-slate-900 text-white">
      <div class="relative max-w-7xl mx-auto">
        <!-- 대형 이미지 with 오버레이 -->
        <div class="mb-6 relative">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
            alt="헬스장 프랜차이즈"
            class="w-full h-64 md:h-80 object-cover shadow-2xl"
          />
          <!-- 어두운 오버레이 -->
          <div class="absolute inset-0 bg-black/60"></div>

          <!-- 텍스트 내용 -->
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <div class="text-center max-w-4xl mx-auto px-4 mt-12 md:mt-30">
              <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
                함께 성장하는<br />
                <div class="mt-3">
                  <span class="text-blue-400">파트너</span>를 찾습니다
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 솔직한 소개 섹션 -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <!-- 현실적인 정보 -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref="infoSection"
            :class="[
              'transition-all duration-1000 ease-out ml-3',
              isVisible.info
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8',
            ]"
          >
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              공명짐의 현재 모습
            </h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <i class="fas fa-calendar-alt text-blue-600 mt-1"></i>
                <div>
                  <span class="font-medium text-gray-900">운영 기간:</span>
                  <span class="text-gray-600 ml-2">2023년 창업</span>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-dumbbell text-blue-600 mt-1"></i>
                <div>
                  <span class="font-medium text-gray-900">현재 규모:</span>
                  <span class="text-gray-600 ml-2"
                    >성남 본점 1개소 <br class="block md:hidden" />(소규모
                    퍼스널 중심)</span
                  >
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-heart text-blue-600 mt-1"></i>
                <div>
                  <span class="font-medium text-gray-900">운영 철학:</span>
                  <span class="text-gray-600 ml-2"
                    >개인별 맞춤 관리와 건강한 문화 조성</span
                  >
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-users text-blue-600 mt-1"></i>
                <div>
                  <span class="font-medium text-gray-900">회원 특징:</span>
                  <span class="text-gray-600 ml-2"
                    >동네 주민 중심의 가족 같은 분위기</span
                  >
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="fas fa-seedling text-blue-600 mt-1"></i>
                <div>
                  <span class="font-medium text-gray-900">목표:</span>
                  <span class="text-gray-600 ml-2"
                    >파트너와 함께 천천히 확장</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            ref="imageSection"
            :class="[
              'transition-all duration-1000 ease-out delay-300',
              isVisible.info
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8',
            ]"
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="헬스장 내부 모습"
              class="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <!-- 현실적인 조건들 -->
        <div
          ref="conditionsSection"
          :class="[
            'bg-gray-50 rounded-2xl p-8 md:p-12 transition-all duration-1000 ease-out',
            isVisible.conditions
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8',
          ]"
        >
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
            헬스장 프랜차이즈 조건<br class="block md:hidden" />
            (예상)
          </h3>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- 비용 정보 -->
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h4
                class="text-lg font-bold text-gray-900 mb-4 flex items-center"
              >
                <i class="fas fa-calculator text-blue-600 mr-3"></i>
                예상 초기 투자 비용
              </h4>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">가맹금</span>
                  <span class="font-medium">300~500만원</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">인테리어 (30평 기준)</span>
                  <span class="font-medium">3,000~5,000만원</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">운동기구 및 장비</span>
                  <span class="font-medium">2,000~4,000만원</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">기타 (음향, 에어컨 등)</span>
                  <span class="font-medium">500~1,000만원</span>
                </div>
                <div class="border-t pt-3 flex justify-between font-bold">
                  <span>총 예상 비용</span>
                  <span class="text-blue-600">5,800~10,500만원</span>
                </div>
              </div>
              <p class="text-sm text-gray-500 mt-4">
                * 지역, 평수, 장비 등급에 따라 차이가 클 수 있습니다
              </p>
            </div>

            <!-- 지원 사항 -->
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h4
                class="text-lg font-bold text-gray-900 mb-4 flex items-center"
              >
                <i class="fas fa-hands-helping text-blue-600 mr-3"></i>
                저희가 도와드릴 수 있는 것
              </h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-500 mt-1"></i>
                  <span class="text-gray-600">헬스장 운영 노하우 공유</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-500 mt-1"></i>
                  <span class="text-gray-600">트레이너 교육 및 멘토링</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-500 mt-1"></i>
                  <span class="text-gray-600">장비 업체 연결 및 정보</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-500 mt-1"></i>
                  <span class="text-gray-600">회원 관리 시스템 공유</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-500 mt-1"></i>
                  <span class="text-gray-600">지속적인 소통과 상담</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-times-circle text-red-400 mt-1"></i>
                  <span class="text-gray-500"
                    >수익이나 회원 수 보장은 어려워요</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-times-circle text-red-400 mt-1"></i>
                  <span class="text-gray-500"
                    >대규모 마케팅 지원은 한계가 있어요</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 왜 프랜차이즈인가 섹션 -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            왜 헬스장 프랜차이즈를 시작하나요?
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(reason, index) in reasons"
            :key="index"
            ref="reasonCards"
            :class="[
              'text-center p-8 rounded-2xl bg-gray-50 transition-all duration-700 ease-out',
              isVisible.reasons
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
            :style="{ transitionDelay: `${index * 200}ms` }"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center"
            >
              <i :class="reason.icon" class="text-2xl text-blue-600"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              {{ reason.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 이런 분을 찾습니다 섹션 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            이런 분과 함께하고 싶어요
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(partner, index) in idealPartners"
            :key="index"
            ref="partnerCards"
            :class="[
              'bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-700 ease-out',
              isVisible.partners
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            ]"
            :style="{ transitionDelay: `${index * 150}ms` }"
          >
            <div class="flex items-center mb-4">
              <i :class="partner.icon" class="text-2xl text-blue-600 mr-3"></i>
              <h3 class="text-lg font-bold text-gray-900">
                {{ partner.title }}
              </h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              {{ partner.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 성공적인 헬스장 운영 팁 섹션 -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            저희가 배운 <br class="block md:hidden" /><span
              class="text-blue-600"
              >헬스장 운영의 핵심</span
            >
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div
            ref="tipsSection"
            :class="[
              'transition-all duration-1000 ease-out',
              isVisible.tips
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8',
            ]"
          >
            <div class="space-y-6">
              <div
                v-for="(tip, index) in operationTips"
                :key="index"
                class="flex items-start gap-4"
              >
                <div
                  class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <i :class="tip.icon" class="text-blue-600"></i>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-2">{{ tip.title }}</h4>
                  <p class="text-gray-600 leading-relaxed">
                    {{ tip.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref="tipsImage"
            :class="[
              'transition-all duration-1000 ease-out delay-300',
              isVisible.tips
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8',
            ]"
          >
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="성공적인 헬스장 운영"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 문의 섹션 -->
    <section class="py-20 bg-blue-600 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2
          ref="ctaTitle"
          :class="[
            'text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ease-out',
            isVisible.cta
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8',
          ]"
        >
          헬스장 창업에 <br class="block md:hidden" />관심이 있으시다면
        </h2>
        <p
          ref="ctaDescription"
          :class="[
            'text-lg mb-12 text-blue-100 transition-all duration-1000 ease-out delay-300',
            isVisible.cta
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8',
          ]"
        >
          부담 없이 편하게 대화해요.<br />
          헬스장 운영에 대한 궁금한 점들을 <br class="block md:hidden" />함께
          나눠봐요.
        </p>

        <div
          ref="ctaButtons"
          :class="[
            'flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-1000 ease-out delay-600',
            isVisible.cta
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8',
          ]"
        >
          <button
            @click="openInquiryForm"
            class="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            <i class="fas fa-comments mr-2"></i>
            대화해보기
          </button>
          <button
            @click="callDirect"
            class="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            <i class="fas fa-phone mr-2"></i>
            전화로 상담
          </button>
        </div>

        <!-- 연락처 정보 -->
        <div
          ref="contactInfo"
          :class="[
            'bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-1000 ease-out delay-900',
            isVisible.cta
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8',
          ]"
        >
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-center justify-center">
              <i class="fas fa-phone text-xl mr-3"></i>
              <div>
                <p class="text-sm text-blue-200">전화 문의</p>
                <p class="font-bold">010-4429-2889</p>
              </div>
            </div>
            <div class="flex items-center justify-center">
              <i class="fas fa-envelope text-xl mr-3"></i>
              <div>
                <p class="text-sm text-blue-200">이메일 문의</p>
                <p class="font-bold">cprh7677@naver.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 문의 폼 모달 -->
    <div
      v-if="showInquiryForm"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="closeInquiryForm"
    >
      <div
        class="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-gray-900">편하게 대화해요</h3>
          <button
            @click="closeInquiryForm"
            class="text-gray-500 hover:text-gray-700"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <form @submit.prevent="submitInquiry" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >성함</label
            >
            <input
              v-model="inquiryForm.name"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="편하게 불러드릴 이름을 알려주세요"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >연락처</label
            >
            <input
              v-model="inquiryForm.phone"
              type="tel"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="편한 시간에 연락드릴게요"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >관심 지역</label
            >
            <input
              v-model="inquiryForm.location"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="헬스장 창업을 생각하고 계신 지역"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >헬스장 경험</label
            >
            <select
              v-model="inquiryForm.experience"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">선택해주세요</option>
              <option value="none">없음</option>
              <option value="trainer">트레이너 경험</option>
              <option value="manager">헬스장 관리 경험</option>
              <option value="owner">헬스장 운영 경험</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >궁금한 점이나 하고 싶은 말씀</label
            >
            <textarea
              v-model="inquiryForm.message"
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="헬스장 창업에 대해 궁금한 것들을 편하게 말씀해주세요"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            메시지 보내기
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Franchise',
  data() {
    return {
      showInquiryForm: false,
      inquiryForm: {
        name: '',
        phone: '',
        location: '',
        experience: '',
        message: '',
      },

      // 애니메이션 상태
      isVisible: {
        info: false,
        conditions: false,
        reasons: false,
        partners: false,
        tips: false,
        cta: false,
      },
      observer: null,

      // 프랜차이즈 시작 이유
      reasons: [
        {
          icon: 'fas fa-handshake',
          title: '건강한 문화 확산',
          description:
            '혼자보다는 여러 지역에서 함께 건강한 운동 문화를 만들어가고 싶어요.',
        },
        {
          icon: 'fas fa-seedling',
          title: '함께 배우며 성장',
          description:
            '각 지역의 특성과 회원들의 니즈를 파악하며 서로 배우고 발전하고 싶어요.',
        },
        {
          icon: 'fas fa-heart',
          title: '진정한 파트너십',
          description:
            '단순한 수익보다는 지역 주민들의 건강에 도움이 되는 진정한 파트너십을 원해요.',
        },
      ],

      // 이상적인 파트너
      idealPartners: [
        {
          icon: 'fas fa-dumbbell',
          title: '운동을 좋아하는 분',
          description:
            '헬스장 운영 경험보다는 운동과 건강에 대한 진정한 관심과 열정을 가진 분',
        },
        {
          icon: 'fas fa-users',
          title: '사람과의 소통을 즐기는 분',
          description:
            '회원들과 진심으로 소통하며, 각자의 목표 달성을 도와주고 싶어하는 분',
        },
        {
          icon: 'fas fa-clock',
          title: '꾸준함을 중시하는 분',
          description:
            '빠른 수익보다는 지역에 뿌리내리며 꾸준히 운영해나가고 싶은 분',
        },
        {
          icon: 'fas fa-smile',
          title: '긍정적이고 성실한 분',
          description:
            '어려운 상황에서도 긍정적으로 해결책을 찾고, 성실하게 운영하실 분',
        },
        {
          icon: 'fas fa-lightbulb',
          title: '함께 발전하고 싶은 분',
          description:
            '서로의 경험을 나누며 더 나은 헬스장을 만들어가고 싶은 분',
        },
        {
          icon: 'fas fa-compass',
          title: '지역 밀착형 운영을 원하는 분',
          description:
            '대형 프랜차이즈보다는 동네 사람들과 가까운 헬스장을 만들고 싶은 분',
        },
      ],

      // 운영 팁
      operationTips: [
        {
          icon: 'fas fa-user-friends',
          title: '회원과의 관계가 가장 중요',
          description:
            '단순히 운동 공간을 제공하는 것이 아니라, 회원 한 분 한 분과 진심으로 소통하는 것이 핵심이에요.',
        },
        {
          icon: 'fas fa-chart-line',
          title: '꾸준한 관리와 개선',
          description:
            '시설과 서비스를 지속적으로 점검하고 개선해나가는 것이 회원 만족도를 높이는 길이에요.',
        },
        {
          icon: 'fas fa-heart',
          title: '진정성 있는 서비스',
          description:
            '회원들의 목표와 상황을 이해하고, 각자에게 맞는 운동 방법을 제안하는 것이 중요해요.',
        },
        {
          icon: 'fas fa-home',
          title: '지역 커뮤니티 중심',
          description:
            '동네 주민들이 편하게 찾을 수 있는 친근한 분위기를 만드는 것이 장기적으로 도움이 돼요.',
        },
        {
          icon: 'fas fa-balance-scale',
          title: '적정한 가격과 서비스',
          description:
            '과도한 수익 추구보다는 합리적인 가격으로 양질의 서비스를 제공하는 것이 지속가능해요.',
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.setupScrollAnimation();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupScrollAnimation() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target;

              if (
                target === this.$refs.infoSection ||
                target === this.$refs.imageSection
              ) {
                this.isVisible.info = true;
              } else if (target === this.$refs.conditionsSection) {
                this.isVisible.conditions = true;
              } else if (
                this.$refs.reasonCards &&
                this.$refs.reasonCards.includes(target)
              ) {
                this.isVisible.reasons = true;
              } else if (
                this.$refs.partnerCards &&
                this.$refs.partnerCards.includes(target)
              ) {
                this.isVisible.partners = true;
              } else if (
                target === this.$refs.tipsSection ||
                target === this.$refs.tipsImage
              ) {
                this.isVisible.tips = true;
              } else if (target === this.$refs.ctaTitle) {
                this.isVisible.cta = true;
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
        const elementsToObserve = [
          this.$refs.infoSection,
          this.$refs.imageSection,
          this.$refs.conditionsSection,
          this.$refs.tipsSection,
          this.$refs.tipsImage,
          this.$refs.ctaTitle,
          ...(this.$refs.reasonCards || []),
          ...(this.$refs.partnerCards || []),
        ];

        elementsToObserve.forEach((element) => {
          if (element) {
            this.observer.observe(element);
          }
        });
      });
    },

    openInquiryForm() {
      this.showInquiryForm = true;
      document.body.style.overflow = 'hidden';
    },

    closeInquiryForm() {
      this.showInquiryForm = false;
      document.body.style.overflow = 'auto';
    },

    callDirect() {
      if (confirm('헬스장 프랜차이즈 상담을 위해 전화 연결하시겠습니까?')) {
        window.location.href = 'tel:010-4429-2889';
      }
    },

    submitInquiry() {
      const experienceText = {
        none: '없음',
        trainer: '트레이너 경험',
        manager: '헬스장 관리 경험',
        owner: '헬스장 운영 경험',
      };

      const message = `헬스장 프랜차이즈 문의
      
이름: ${this.inquiryForm.name}
연락처: ${this.inquiryForm.phone}
관심지역: ${this.inquiryForm.location || '미정'}
헬스장 경험: ${experienceText[this.inquiryForm.experience] || '미선택'}
메시지: ${this.inquiryForm.message || '특별한 문의사항 없음'}`;

      const emailUrl = `mailto:cprh7677@naver.com?subject=헬스장 프랜차이즈 문의 - ${
        this.inquiryForm.name
      }&body=${encodeURIComponent(message)}`;

      window.location.href = emailUrl;

      this.inquiryForm = {
        name: '',
        phone: '',
        location: '',
        experience: '',
        message: '',
      };
      this.closeInquiryForm();

      alert(
        '메시지를 보내주셔서 감사합니다.\n헬스장 운영에 대해 편한 시간에 대화해요!'
      );
    },
  },
};
</script>
