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
                component: () => import('@/views/product/selection/index.vue'),
            },
            {
                path: 'store',
                name: prefix + '/store',
                meta: { title: '库存' },
                component: () => import('@/views/product/store/index.vue'),
                children: [
                    {
                        path: 'out-in',
                        name: prefix + '/store/out-in',
                        meta: { title: '出入库' },
                        component: () => import('@/views/product/store/index.vue'),
                    },
                ]
            }
        ]
    }
]

export default productRoute