import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


const syncRouter: any[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  }
]

const asyncRouter: RouteRecordRaw[] = [

]

const router = createRouter(<any>{
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...syncRouter, ...asyncRouter]
})

export default router
