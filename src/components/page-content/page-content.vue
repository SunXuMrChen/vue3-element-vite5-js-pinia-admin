<template>
  <div class="content">
    <div class="header">
      <h3 class="title">{{ contentConfig?.header?.title ?? '数据列表' }}</h3>
      <el-button v-if="isCreate" type="primary" @click="handleNewUserClick">
        {{ contentConfig?.header?.btnTitle ?? '新建数据' }}
      </el-button>
    </div>
    <div class="table">
      <el-table
        :data="pageList"
        border
        style="width: 100%"
        v-bind="contentConfig.childrenTree"
      >
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <template v-if="item.type === 'timer'">
            <el-table-column align="center" label="创建时间" prop="createAt">
              <template #default="scope">
                {{ scope.row[item.prop] }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handler'">
            <el-table-column align="center" label="操作" width="180px">
              <template #default="scope">
                <el-button
                  v-if="isUpdate"
                  size="small"
                  icon="Edit"
                  type="primary"
                  text
                  @click="handleEditBtnClick(scope?.row)"
                >
                  编辑
                </el-button>
                <el-button
                  v-if="isDelete"
                  size="small"
                  icon="Delete"
                  type="danger"
                  text
                  @click="handleDeleteBtnClick(scope?.row?.id)"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'custom'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop" />
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column align="center" v-bind="item" />
          </template>
        </template>
      </el-table>
    </div>
    <div class="pagination" v-show="pageTotalCount">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotalCount ?? 0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import useSystemStore from '@/store/main/system/system'
import usePermissions from '@/hooks/usePermissions'
import { storeToRefs } from 'pinia'
import { ref, defineEmits, defineExpose } from 'vue'

const props = defineProps({
  contentConfig: {
    type: Object,
    default: () => {}
  }
})

const emit = defineEmits(['editClick', 'newClick'])
// 获取是否有对应的增删改查的权限

const isCreate = usePermissions(`${props.contentConfig.pageName}:create`)
const isDelete = usePermissions(`${props.contentConfig.pageName}:delete`)
const isUpdate = usePermissions(`${props.contentConfig.pageName}:update`)
const isQuery = usePermissions(`${props.contentConfig.pageName}:query`)

// 发起action，请求数据
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
systemStore.$onAction(({ name, after }) => {
  after(() => {
    if (
      name === 'deletePageByIdAction' ||
      name === 'editPageDataAction' ||
      name === 'newPageDataAction'
    ) {
      currentPage.value = 1
    }
  })
})
fetchPageListData()

const { pageList, pageTotalCount } = storeToRefs(systemStore)

function handleSizeChange() {
  console.log('page-size change', pageSize.value)
}
function handleCurrentChange() {
  fetchPageListData()
}

// 定义函数，用于发送网络请求
function fetchPageListData(formData = {}) {
  if (!isQuery) return

  const pageInfo = {
    page: currentPage.value,
    pageSize: pageSize.value
  }

  // 发送网络请求
  const queryInfo = { ...pageInfo, ...formData }
  systemStore.postPageListAction(props.contentConfig.pageName, queryInfo)
}

// 编辑/新建/删除操作
function handleDeleteBtnClick(id) {
  systemStore.deletePageByIdAction(props.contentConfig.pageName, id)
}
function handleEditBtnClick(itemData) {
  emit('editClick', itemData)
}
function handleNewUserClick() {
  emit('newClick')
}

defineExpose({
  fetchPageListData
})
</script>

<style lang="scss" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .title {
    font-size: 20px;
  }
}

.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }

  .el-button {
    margin-left: 0;
    padding: 5px 8px;
  }
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
