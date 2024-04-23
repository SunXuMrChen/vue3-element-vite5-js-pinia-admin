export function resultPageSuccess(page, pageSize, list) {
  // 如果没有传分页参数则返回全部
  let pageData = list
  if (pageSize) {
    pageData = pagination(page, pageSize, list)
  }
  return {
    code: 200,
    data: {
      list: pageData,
      totalCount: list.length
    }
  }
}

export function pagination(page, pageSize, array) {
  // 获取offset/size
  const offset = (page - 1) * Number(pageSize)
  return offset + Number(pageSize) >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + Number(pageSize))
}

/**
 *
 * @param scope 范围(默认0-100)
 * @param offset 偏移
 * @returns
 */
export function randomData(scope = 1000, offset = 0) {
  return Math.round(Math.random() * scope + offset)
}
