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
            }
        ]
    }
]

export default productRoute