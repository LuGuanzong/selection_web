import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import productRoute from "@/router/product";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Cookies from 'js-cookie';

const syncRouter: any[] = [
  {
    path: '/',
    redirect: '/product/store/search'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  }
]

export const asyncRouter: RouteRecordRaw[] = [
  ...productRoute,
]

const router = createRouter(<any>{
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...syncRouter, ...asyncRouter]
})

router.beforeEach((to, _, next) => {
    NProgress.start();

    if (to.name == 'login') {
      next()
    } else if (!Cookies.get('session')) {
        console.log('11')
        next('/login');
    } else {
        next();
    }
});

router.afterEach(() => {
    NProgress.done();
});

export default router