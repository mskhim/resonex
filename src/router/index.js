import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Products from '../views/Products.vue';
import Papers from '../views/Papers.vue';
import VideoInquiry from '../views/VideoInquiry.vue';
import Academy from '../views/Academy.vue';
import Franchise from '../views/Franchise.vue';
import Location from '../views/Location.vue';
import Contact from '../views/Contact.vue';
import Faq from '../views/faq.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/products', name: 'Products', component: Products },
  { path: '/papers', name: 'Papers', component: Papers },
  { path: '/video-inquiry', name: 'VideoInquiry', component: VideoInquiry },
  { path: '/academy', name: 'Academy', component: Academy },
  { path: '/franchise', name: 'Franchise', component: Franchise },
  { path: '/location', name: 'Location', component: Location },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/faq', name: 'Faq', component: Faq },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
