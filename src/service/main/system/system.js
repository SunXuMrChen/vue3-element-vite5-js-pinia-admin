import hyRequest from '@/service'
/** 用户的网络请求 */
export function postUsersListData(queryInfo) {
  return hyRequest({
    method: 'post',
    url: '/users/list',
    data: queryInfo
  })
}

export function deleteUserById(id) {
  return hyRequest({
    method: 'delete',
    url: `/users/${id}`
  })
}

export function newUserData(userInfo) {
  return hyRequest({
    method: 'post',
    url: '/users',
    data: userInfo
  })
}

export function editUserData(id, userInfo) {
  return hyRequest({
    method: 'patch',
    url: `/users/${id}`,
    data: userInfo
  })
}

/** 针对页面的网络请求：增删改查 */
export function postPageListData(pageName, queryInfo) {
  return hyRequest({
    method: 'post',
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageById(pageName, id) {
  return hyRequest({
    method: 'delete',
    url: `/${pageName}/${id}`
  })
}

export function newPageData(pageName, userInfo) {
  return hyRequest({
    method: 'post',
    url: `/${pageName}`,
    data: userInfo
  })
}

export function editPageData(pageName, id, pageInfo) {
  return hyRequest({
    method: 'patch',
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}
