export default [
  {
    path: '/main/product/category',
    name: 'category',
    component: () => import('@/views/main/product/category/category.vue')
  },
  {
    path: '/main/product/goods',
    name: 'goods',
    component: () => import('@/views/main/product/goods/goods.vue')
  }
]
