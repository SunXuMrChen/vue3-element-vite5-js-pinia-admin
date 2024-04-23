import {
  postUsersListData,
  deleteUserById,
  newUserData,
  editUserData,
  postPageListData,
  deletePageById,
  newPageData,
  editPageData
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import useMainStore from '../main'

const useSystemStore = defineStore('system', {
  state: () => ({
    usersList: [],
    usersTotalCount: 0,

    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    async postUsersListAction(queryInfo) {
      const usersListResult = await postUsersListData(queryInfo)
      const { totalCount, list } = usersListResult.data
      this.usersTotalCount = totalCount
      this.usersList = list
    },
    async deleteUserByIdAction(id) {
      // 删除数据操作
      await deleteUserById(id)

      // 重新请求新的数据
      this.postUsersListAction({ offset: 0, size: 10 })
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
    },
    async newUserDataAction(userInfo) {
      // 创建用户
      await newUserData(userInfo)

      // 重新请求新的数据
      this.postUsersListAction({ offset: 0, size: 10 })

      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
    },
    async editUserDataAction(id, userInfo) {
      // 更新用户的数据
      await editUserData(id, userInfo)

      this.postUsersListAction({ offset: 0, size: 0 })

      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
    },

    /** 针对页面的数据：增删改查 */
    async postPageListAction(pageName, aueryInfo) {
      const pageListResult = await postPageListData(pageName, aueryInfo)
      const { totalCount, list } = pageListResult.data

      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async deletePageByIdAction(pageName, id) {
      await deletePageById(pageName, id)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    async newPageDataAction(pageName, userInfo) {
      // 创建
      await newPageData(pageName, userInfo)

      // 重新请求新的数据
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    async editPageDataAction(pageName, id, pageInfo) {
      // 更新的数据
      await editPageData(pageName, id, pageInfo)

      // 重新请求新的数据
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    }
  }
})

export default useSystemStore
