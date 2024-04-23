import { amountListMock } from '../../data/analysis'
import { resultPageSuccess, randomData } from '../../utils'

export default [
  {
    url: '/goods/amount/list',
    method: 'get',
    response: ({ body }) => {
      const { page, pageSize } = body
      return resultPageSuccess(page, pageSize, amountListMock)
    }
  },
  {
    url: '/goods/category/count',
    method: 'get',
    response: () => {
      const countData = [
        { goodsCount: randomData(), name: '浙江' },
        { goodsCount: randomData(), name: '上海' },
        { goodsCount: randomData(), name: '江苏' },
        { goodsCount: randomData(), name: '北京' },
        { goodsCount: randomData(), name: '哈尔滨' },
        { goodsCount: randomData(), name: '山东' },
        { goodsCount: randomData(), name: '湖南' }
      ]
      return {
        code: 200,
        data: countData
      }
    }
  },
  {
    url: '/goods/category/sale',
    method: 'get',
    response: () => {
      const saleData = [
        { goodsCount: randomData(50), name: '上衣', id: 1 },
        { goodsCount: randomData(50), name: '裤子', id: 2 },
        { goodsCount: randomData(50), name: '帽子', id: 3 },
        { goodsCount: randomData(50), name: '鞋子', id: 4 },
        { goodsCount: randomData(50), name: '围巾', id: 5 },
        { goodsCount: randomData(50), name: '墨镜', id: 6 },
        { goodsCount: randomData(50), name: '手套', id: 7 }
      ]
      return {
        code: 200,
        data: saleData
      }
    }
  },
  {
    url: '/goods/category/favor',
    method: 'get',
    response: () => {
      const saleData = [
        { goodsCount: randomData(50), name: '上衣', id: 1 },
        { goodsCount: randomData(50), name: '裤子', id: 2 },
        { goodsCount: randomData(50), name: '帽子', id: 3 },
        { goodsCount: randomData(50), name: '鞋子', id: 4 },
        { goodsCount: randomData(50), name: '围巾', id: 5 },
        { goodsCount: randomData(50), name: '墨镜', id: 6 },
        { goodsCount: randomData(50), name: '手套', id: 7 }
      ]
      return {
        code: 200,
        data: saleData
      }
    }
  },
  {
    url: '/goods/address/sale',
    method: 'get',
    response: () => {
      const scope = 50000
      const offset = 3000
      const addressData = [
        { count: randomData(scope, offset), address: '北京' },
        { count: randomData(scope, offset), address: '上海' },
        { count: randomData(scope, offset), address: '厦门' },
        { count: randomData(scope, offset), address: '泉州' },
        { count: randomData(scope, offset), address: '广州' },
        { count: randomData(scope, offset), address: '南京' },
        { count: randomData(scope, offset), address: '漳州' }
      ]
      return {
        code: 200,
        data: addressData
      }
    }
  }
]
