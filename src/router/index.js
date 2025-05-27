import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Papers from '../views/Papers.vue';
import VideoInquiry from '../views/VideoInquiry.vue';
import Academy from '../views/Academy.vue';
import Franchise from '../views/Franchise.vue';
import Location from '../views/Location.vue';
import Contact from '../views/Contact.vue';
import Faq from '../views/faq.vue';
import acebody from '../views/products/acebody.vue';
import align from '../views/products/align.vue';
import fitness from '../views/products/fitness.vue';
import oxygen from '../views/products/oxygen.vue';
import powerplate from '../views/products/powerplate.vue';
import sasom7 from '../views/products/sasom7.vue';
import triggerpoint from '../views/products/triggerpoint.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/papers', name: 'Papers', component: Papers },
  { path: '/video-inquiry', name: 'VideoInquiry', component: VideoInquiry },
  { path: '/academy', name: 'Academy', component: Academy },
  { path: '/franchise', name: 'Franchise', component: Franchise },
  { path: '/location', name: 'Location', component: Location },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/faq', name: 'Faq', component: Faq },
  { path: '/products/ace-body', name: 'AceBody', component: acebody },
  { path: '/products/align-pilates', name: 'Align', component: align },
  { path: '/products/fitness', name: 'Fitness', component: fitness },
  { path: '/products/oxygen', name: 'Oxygen', component: oxygen },
  { path: '/products/powerplate', name: 'PowerPlate', component: powerplate },
  { path: '/products/sasom7', name: 'SASOM7', component: sasom7 },
  {
    path: '/products/trigger-point',
    name: 'TriggerPoint',
    component: triggerpoint,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
