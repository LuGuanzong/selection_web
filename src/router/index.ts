import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import productRoute from "@/router/product";

const syncRouter: any[] = [
  {
    path: '/',
    redirect: '/login'
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

export default router