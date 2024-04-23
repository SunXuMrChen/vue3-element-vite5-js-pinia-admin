const menuListMock = [
  {
    id: 19,
    name: '系统总览',
    url: '/main/analysis',
    icon: 'el-icon-monitor',
    sort: 1,
    type: 1,
    createAt: '2021-05-06 18:06:03',
    updateAt: '2022-05-06 18:06:03',
    children: [
      {
        children: [],
        id: 20,
        name: '核心技术',
        parentId: 19,
        sort: 106,
        type: 2,
        url: '/main/analysis/overview'
      },
      {
        children: [],
        id: 21,
        name: '商品统计',
        parentId: 19,
        sort: 107,
        type: 2,
        url: '/main/analysis/dashboard'
      }
    ]
  },
  {
    id: 1,
    name: '系统管理',
    url: '/main/system',
    icon: 'el-icon-setting',
    sort: 2,
    type: 1,
    children: [
      {
        id: 2,
        name: '用户管理',
        parentId: 1,
        sort: 100,
        type: 2,
        url: '/main/system/user',
        children: [
          {
            id: 5,
            name: '创建用户',
            parentId: 2,
            permission: 'system:users:create',
            sort: null,
            type: 3,
            url: null
          },
          {
            id: 6,
            name: '删除用户',
            parentId: 2,
            permission: 'system:users:delete',
            sort: null,
            type: 3,
            url: null
          },
          {
            id: 7,
            name: '修改用户',
            parentId: 2,
            permission: 'system:users:update',
            sort: null,
            type: 3,
            url: null
          },
          {
            id: 8,
            name: '查询用户',
            parentId: 2,
            permission: 'system:users:query',
            sort: null,
            type: 3,
            url: null
          }
        ]
      },
      {
        id: 3,
        name: '部门管理',
        parentId: 1,
        sort: 2,
        type: 2,
        url: '/main/system/department',
        children: [
          {
            id: 9,
            name: '创建用户',
            parentId: 3,
            permission: 'system:department:create',
            sort: null,
            type: 3,
            url: null
          },
          {
            id: 10,
            name: '删除用户',
            parentId: 3,
            permission: 'system:department:delete',
            sort: null,
            type: 3,
            url: null
          },
          {
            id: 11,
            name: '修改用户',
            parentId: 3,
            permission: 'system:department:update',
            sort: null,
            type: 3,
            url: null
          },
          {
            id: 12,
            name: '查询用户',
            parentId: 3,
            permission: 'system:department:query',
            sort: null,
            type: 3,
            url: null
          }
        ]
      },
      {
        id: 4,
        name: '菜单管理',
        parentId: 1,
        sort: 2,
        type: 2,
        url: '/main/system/menu',
        children: [
          {
            id: 13,
            name: '查询用户',
            parentId: 4,
            permission: 'system:menu:query',
            sort: null,
            type: 3,
            url: null
          }
        ]
      },
      {
        id: 14,
        name: '角色管理',
        parentId: 1,
        sort: 2,
        type: 2,
        url: '/main/system/role',
        children: [
          {
            id: 15,
            name: '创建用户',
            parentId: 14,
            permission: 'system:role:create',
            sort: null,
            type: 3,
            url: null
          },
          {
            id: 16,
            name: '删除用户',
            parentId: 14,
            permission: 'system:role:delete',
            sort: null,
            type: 3,
            url: null
          },
          {
            id: 17,
            name: '修改用户',
            parentId: 14,
            permission: 'system:role:update',
            sort: null,
            type: 3,
            url: null
          },
          {
            id: 18,
            name: '查询用户',
            parentId: 14,
            permission: 'system:role:query',
            sort: null,
            type: 3,
            url: null
          }
        ]
      }
    ]
  },
  {
    id: 22,
    name: '商品中心',
    url: '/main/product',
    icon: 'el-icon-monitor',
    sort: 3,
    type: 1,
    children: [
      {
        id: 23,
        name: '商品类别',
        parentId: 22,
        sort: 100,
        type: 2,
        url: '/main/product/category'
      },
      {
        id: 24,
        name: '产品列表',
        parentId: 22,
        sort: 100,
        type: 2,
        url: '/main/product/goods'
      }
    ]
  }
]

export { menuListMock }
