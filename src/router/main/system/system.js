export default [
  {
    path: '/main/system/department',
    name: 'department',
    component: () => import('@/views/main/system/department/department.vue')
  },
  {
    path: '/main/system/menu',
    name: 'menu',
    component: () => import('@/views/main/system/menu/menu.vue')
  },
  {
    path: '/main/system/role',
    name: 'role',
    component: () => import('@/views/main/system/role/role.vue')
  },
  {
    path: '/main/system/user',
    component: () => import('@/views/main/system/user/user.vue')
  }
]
