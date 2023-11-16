import type { RouteRecordRaw } from 'vue-router'
import Header from "@/components/header.vue";

const planRouter: RouteRecordRaw[] = [
    {
        path: '/overview',
        name: 'overview',
        component: () => import('@/views/plan/index.vue')
    },
    {
        path: '/plan',
        component: Header,
        redirect: '/overview',
        children: [
            {
                path: '/save',
                name: 'save',
                component: () => import('@/views/savePlan/index.vue')
            }
        ]
    },
]

export default planRouter