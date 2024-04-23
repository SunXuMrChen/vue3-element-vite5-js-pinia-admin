import hyRequest from '@/service'

export function getAmountListData() {
  return hyRequest({
    method: 'get',
    url: '/goods/amount/list'
  })
}

export function getGoodsCategoryCount() {
  return hyRequest({
    method: 'get',
    url: '/goods/category/count'
  })
}

export function getGoodsCategorySale() {
  return hyRequest({
    method: 'get',
    url: '/goods/category/sale'
  })
}

export function getGoodsCategoryFavor() {
  return hyRequest({
    method: 'get',
    url: '/goods/category/favor'
  })
}

export function getGoodsAddressSale() {
  return hyRequest({
    method: 'get',
    url: '/goods/address/sale'
  })
}
