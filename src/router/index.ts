import { createRouter, createWebHistory } from '@ionic/vue-router';
import Internos from '../views/Internos.vue';
import Externos from '../views/Externos.vue';

const routes = [
  { path: '/', redirect: '/internos' },
  { path: '/internos', component: Internos },
  { path: '/externos', component: Externos },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
