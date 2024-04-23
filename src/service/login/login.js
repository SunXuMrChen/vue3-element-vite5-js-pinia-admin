import hyRequest from '..'

export function accountLoginRequest(account) {
  return hyRequest({
    url: '/user/login',
    method: 'post',
    data: account
  })
}

export function getUserInfoById(id) {
  return hyRequest({
    url: `/user/info`,
    method: 'get',
    params: { id }
  })
}

export function getUserMenusByRoleId(id) {
  return hyRequest({
    url: `/role/${id}/menu`,
    method: 'get'
  })
}
