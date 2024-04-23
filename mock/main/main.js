import { menuListMock } from '../data/menu'
import { roleListMock } from '../data/user'
import { departmentListMock } from '../data/system'
import { resultPageSuccess } from '../utils'

export default [
  {
    url: '/role/list',
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return resultPageSuccess(page, pageSize, roleListMock)
    }
  },
  {
    url: '/role',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: body,
        message: 'success'
      }
    }
  },
  {
    url: /\/role\/(.*)/,
    method: 'delete',
    response: () => {
      return {
        code: 200,
        data: '',
        message: 'success'
      }
    }
  },
  {
    url: /\/role\/(.*)/,
    method: 'patch',
    response: ({ body }) => {
      return {
        code: 200,
        data: body,
        message: 'success'
      }
    }
  },
  {
    url: '/department/list',
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body

      return resultPageSuccess(page, pageSize, departmentListMock)
    }
  },
  {
    url: '/department',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: body,
        message: 'success'
      }
    }
  },
  {
    url: /\/department\/(.*)/,
    method: 'delete',
    response: () => {
      return {
        code: 200,
        data: '',
        message: 'success'
      }
    }
  },
  {
    url: /\/department\/(.*)/,
    method: 'patch',
    response: ({ body }) => {
      return {
        code: 200,
        data: body,
        message: 'success'
      }
    }
  },
  {
    url: '/menu/list',
    method: 'post',
    response: () => {
      return {
        code: 200,
        data: {
          list: menuListMock
        }
      }
    }
  }
]
