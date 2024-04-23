import hyRequest from '@/service'

export function getEntireRoles() {
  return hyRequest({
    method: 'post',
    url: '/role/list'
  })
}

export function getEntireDepartments() {
  return hyRequest({
    method: 'post',
    url: '/department/list'
  })
}

export function getEntireMenus() {
  return hyRequest({
    method: 'post',
    url: '/menu/list'
  })
}
