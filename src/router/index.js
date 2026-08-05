import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

// 첫 화면(Home)만 즉시 로드하고 나머지는 분할 로딩한다.
const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: '공명짐' } },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { title: '회사 소개' },
  },
  {
    path: '/video-inquiry',
    name: 'VideoInquiry',
    component: () => import('../views/VideoInquiry.vue'),
    meta: { title: '영상 홍보 촬영 문의' },
  },
  {
    path: '/academy',
    name: 'Academy',
    component: () => import('../views/Academy.vue'),
    meta: { title: '교육 아카데미' },
  },
  {
    path: '/franchise',
    name: 'Franchise',
    component: () => import('../views/Franchise.vue'),
    meta: { title: '체인점 문의' },
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../views/Location.vue'),
    meta: { title: '오시는 길' },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('../views/faq.vue'),
    meta: { title: '자주 묻는 질문' },
  },
  {
    path: '/products/ace-body',
    name: 'AceBody',
    component: () => import('../views/products/acebody.vue'),
    meta: { title: '에이스바디 타워풀리' },
  },
  {
    path: '/products/align-pilates',
    name: 'Align',
    component: () => import('../views/products/align.vue'),
    meta: { title: '얼라인 필라테스' },
  },
  {
    path: '/products/fitness',
    name: 'Fitness',
    component: () => import('../views/products/fitness.vue'),
    meta: { title: '헬스 기구' },
  },
  {
    path: '/products/oxygen',
    name: 'Oxygen',
    component: () => import('../views/products/oxygen.vue'),
    meta: { title: '산소캡슐' },
  },
  {
    path: '/products/powerplate',
    name: 'PowerPlate',
    component: () => import('../views/products/powerplate.vue'),
    meta: { title: '파워플레이트' },
  },
  {
    path: '/products/sasom7',
    name: 'SASOM7',
    component: () => import('../views/products/sasom7.vue'),
    meta: { title: 'SASO M7' },
  },
  {
    path: '/products/zeroi',
    name: 'TriggerPoint',
    component: () => import('../views/products/triggerpoint.vue'),
    meta: { title: '제로아이' },
  },
  // 잘못된 주소는 홈으로
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 각 뷰가 mounted에서 window.scrollTo(0,0)을 호출하던 것을 대체한다.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const base = '공명짐 - 진동 운동 전문 센터';
  document.title =
    to.meta.title && to.name !== 'Home' ? `${to.meta.title} | 공명짐` : base;
});

export default router;
