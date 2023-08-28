import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import planRouter from "@/router/plan"

const syncRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/plan',
  }
]

const asyncRouter: RouteRecordRaw[] = [
    ...planRouter,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...syncRouter, ...asyncRouter]
})

export default router
