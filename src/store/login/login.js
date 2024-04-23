import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from '@/service/login/login'
import { defineStore } from 'pinia'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN, USER_INFO, USER_MENU } from '@/global/constants'
import router from '@/router'
import { mapMenuListToPermissions, mapMenusToRoutes } from '@/utils/map-menus'
import useMainStore from '../main/main'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache(LOGIN_TOKEN),
    userInfo: localCache.getCache(USER_INFO),
    userMenus: localCache.getCache(USER_MENU),
    permissions: []
  }),
  actions: {
    async loginAccountAction(account) {
      const loginResult = await accountLoginRequest(account)

      const id = loginResult.data.id
      this.token = loginResult.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 登录用户的详情
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo

      // 根据角色请求的用户权限
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
      const userMenus = userMenusResult.data
      this.userMenus = userMenus

      // 进行本地缓存
      localCache.setCache(USER_INFO, userInfo)
      localCache.setCache(USER_MENU, userMenus)

      // 获取所有roles/departments数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()

      // *获取登录用户的所有按钮的权限
      const permissions = mapMenuListToPermissions(userMenus)
      this.permissions = permissions

      // *动态的添加路由
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => router.addRoute('main', route))

      router.push('/main')
    },
    loadLocalCacheAction() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache(USER_INFO)
      const userMenus = localCache.getCache(USER_MENU)
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        // 获取所有roles/departments数据
        const mainStore = useMainStore()
        mainStore.fetchEntireDataAction()

        // 获取按钮的权限
        const permissions = mapMenuListToPermissions(userMenus)
        this.permissions = permissions

        // 动态添加路由
        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
