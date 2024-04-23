import { usersListMock } from '../data/user'

const tokens = {
  admin: {
    id: 1,
    token: 'admin-token',
    name: '超级管理员'
  },
  editor: {
    id: 2,
    token: 'editor-token',
    name: '管理员'
  }
}

export default [
  // user login
  {
    url: '/user/login',
    method: 'post',
    response: (config) => {
      const { name } = config.body
      const data = tokens[name]

      // mock error
      if (!data?.token) {
        return {
          code: 404,
          message: '帐号或密码不正确!'
        }
      }

      return {
        code: 200,
        data: data,
        message: 'success'
      }
    }
  },
  // get user info
  {
    url: '/user/info',
    method: 'get',
    response: (config) => {
      const { id } = config.query
      const info = usersListMock.filter((v) => v.id == id)[0]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: '登录失败，无法获取用户详细信息'
        }
      }

      return {
        code: 200,
        data: info,
        message: 'success'
      }
    }
  },
  // user menu
  {
    url: /\/role\/(.*)\/menu/,
    method: 'get',
    response: (config) => {
      const userId = config.url.split('/role/')[1].split('/menu')[0]

      const user = usersListMock.filter((v) => v.id == userId)[0]
      const menuList = user?.role?.menuList ?? []

      // mock error
      if (!menuList) {
        return {
          code: 50008,
          message: '登录失败，无法获取路由详情'
        }
      }

      return {
        code: 200,
        data: menuList,
        message: 'success'
      }
    }
  },
  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: () => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
