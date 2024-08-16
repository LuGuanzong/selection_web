import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import productRoute from "@/router/product";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {getCookie} from "@/utils/cookie";

const syncRouter: any[] = [
  {
    path: '/',
    redirect: '/home'
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

router.beforeEach((to, from, next) => {
    NProgress.start();

    if (to.name == 'login') {
      next()
    } else if (!getCookie('session')) {
        next('/login');
    } else {
        next();
    }
});

router.afterEach(() => {
    NProgress.done();
});

export default router