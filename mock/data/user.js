import Mock from 'mockjs'
// import { roleListMock } from './role'
import { menuListMock } from './menu'

Mock.Random.extend({
  phone: function () {
    const phonePrefixs = ['132', '135', '189'] // 自己写前缀
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
  }
})

// 角色
const roleListMock = [
  {
    id: 1,
    name: '超级管理员',
    intro: '超级管理员',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: menuListMock
  },
  {
    id: 2,
    name: '管理员',
    intro: '管理员',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: [menuListMock[0]]
  },
  {
    id: 3,
    name: '人事',
    intro: '人事',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: [menuListMock[0]]
  },
  {
    id: 4,
    name: '运营',
    intro: '运营',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: [menuListMock[1]]
  },
  {
    id: 5,
    name: '财务',
    intro: '财务',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: [menuListMock[2]]
  },
  {
    id: 6,
    name: '游戏测试',
    intro: '游戏测试',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: [menuListMock[0]]
  },
  {
    id: 7,
    name: '前端',
    intro: '前端',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: [menuListMock[1]]
  },
  {
    id: 8,
    name: 'Java',
    intro: 'Java',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: [menuListMock[2]]
  },
  {
    id: 9,
    name: 'UI',
    intro: 'UI',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: [menuListMock[0]]
  },
  {
    id: 10,
    name: '产品经理',
    intro: '产品经理',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: [menuListMock[2]]
  },
  {
    id: 11,
    name: '运营1',
    intro: '运营1',
    createAt: '2021/10/22 22:48:06',
    updateAt: '2022/10/22 22:48:06',
    menuList: [menuListMock[1]]
  }
]

// 用户
const usersListMock1 = Mock.mock({
  'list|20': [
    {
      'id|+1': 3, // id会自增
      name: '@cname()',
      realname: '@name()',
      email: '@email', // 随机生成邮箱地址
      cellphone: Mock.Random.phone(),
      enable: '@boolean', // 随机生成布尔值
      departmentId: Mock.Random.integer(0, 11),
      roleId: Mock.Random.integer(0, 11), // 生成0-1随机整数
      createAt: '@datetime(yyyy-MM-dd HH:mm:ss)', // 随机生成创建时间
      updateAt: '@datetime(yyyy-MM-dd HH:mm:ss)'
    }
  ]
})

const usersListMock2 = Mock.mock([
  {
    id: 1,
    name: 'admin',
    realname: '超级管理员',
    email: '@email', // 随机生成邮箱地址
    cellphone: Mock.Random.phone(),
    enable: '@boolean', // 随机生成布尔值
    departmentId: Mock.Random.integer(0, 11),
    role: roleListMock[0],
    roleId: 1,
    createAt: '@datetime(yyyy-MM-dd HH:mm:ss)', // 随机生成创建时间
    updateAt: '@datetime(yyyy-MM-dd HH:mm:ss)',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  },
  {
    id: 2,
    name: 'editor',
    realname: '管理员',
    email: '@email', // 随机生成邮箱地址
    cellphone: Mock.Random.phone(),
    enable: '@boolean', // 随机生成布尔值
    departmentId: Mock.Random.integer(0, 11),
    role: roleListMock[1],
    roleId: 2,
    createAt: '@datetime(yyyy-MM-dd HH:mm:ss)', // 随机生成创建时间
    updateAt: '@datetime(yyyy-MM-dd HH:mm:ss)',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  }
])
const usersListMock = usersListMock2.concat([], usersListMock1.list)

export { usersListMock, roleListMock }
