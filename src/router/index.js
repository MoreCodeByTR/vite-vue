export default [
  {
    path: '/hello',
    component: () => import('@/pages/Hello/index.vue'),
    children: [
      {
        path: 'china',
        name: '中文',
        component: () => import('@/pages/Hello/Component/china.vue')
      },
      {
        path: 'english',
        name: '英文',
        component: () => import('@/pages/Hello/Component/english.vue')
      }
    ]
  },
  { path: '/plan', component: () => import('@/pages/Plan/index.vue') },
  { path: '/canvas', component: () => import('@/pages/CanvasPicture/index.vue') },
  { path: '/loading', component: () => import('@/pages/LoadingPage/index.vue') }
]
