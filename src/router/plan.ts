import type { RouteRecordRaw } from 'vue-router'

const planRouter: RouteRecordRaw[] = [
    {
        path: '/plan',
        name: 'plan',
        component: () => import('@/views/plan/index.vue')
    }
]

export default planRouter