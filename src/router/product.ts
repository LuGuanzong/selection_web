const prefix = '/product'

const productRoute: any[]  = [
    {
        path: '/product',
        name: prefix,
        meta: { title: '商品', icon: 'product' },
        component: () => import('@/components/layout.vue'),
        children: [
            {
                path: 'selection',
                name: prefix + '/selection',
                meta: { title: '选品' },
                // component: () => import('@/views/product/selection/index.vue'),
                children: [
                    {
                        path: 'type-in',
                        name: prefix + '/selection/type-in',
                        meta: { title: '录入' },
                        component: () => import('@/views/product/selection/index.vue'),
                    }
                ]
            },
            {
                path: 'store',
                name: prefix + '/store',
                meta: { title: '库存' },
                children: [
                    {
                        path: 'search',
                        name: prefix + '/store/search',
                        meta: { title: '查询' },
                        component: () => import('@/views/product/store/search/index.vue'),
                    },
                    {
                        path: 'out-in',
                        name: prefix + '/store/outIn',
                        meta: { title: '出入库' },
                        component: () => import('@/views/product/store/outIn/index.vue'),
                    }
                ]
            }
        ]
    }
]

export default productRoute