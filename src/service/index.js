import axios from 'axios'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import { ElMessage } from 'element-plus'

/**
 * 这几种类型的接口需要加到白名单
 * 如导出
 */
const whitePageApi = []

// create an axios instance
const service = axios.create({
  baseURL: BASE_URL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: TIME_OUT, // request timeout
  validateStatus: function (status) {
    return (status >= 200 && status < 500) || 10008 || 30003 // default
  }
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    const token = localCache.getCache(LOGIN_TOKEN)
    if (config.headers && !token) {
      config.headers.Authorization = 'Bearer' + token
    }
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data
    // skip whitelist api
    const configUrl = response.config.url.replace(response.config.baseURL, '')
    if (whitePageApi.includes(configUrl)) {
      return res
    }

    // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    if (res.code === 10006) {
      // to re-login
      ElMessageBox.confirm(
        '您的登录信息已过期, 您可以留在此页面, 或者重新登录',
        '是否重新登录',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        store
          .dispatch('user/resetToken')
          .then(() => {
            location.reload()
          })
          .catch(() => {
            router.push('/login')
          })
      })
      return false
    }

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(new Error(res.message || 'Error'))
    }

    return res
  },
  (error) => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
