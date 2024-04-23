import { usersListMock } from '../../data/user'
import { resultPageSuccess } from '../../utils'

export default [
  {
    url: '/users/list',
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return resultPageSuccess(page, pageSize, usersListMock)
    }
  },
  {
    url: '/users',
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
    url: /\/users\/(.*)/,
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
    url: /\/users\/(.*)/,
    method: 'patch',
    response: ({ body }) => {
      return {
        code: 200,
        data: body,
        message: 'success'
      }
    }
  }
]
