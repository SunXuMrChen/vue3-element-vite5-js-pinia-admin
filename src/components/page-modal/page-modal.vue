<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="
        isNewRef ? modalConfig.header?.newTitle : modalConfig.header?.editTitle
      "
      width="500px"
      center
    >
      <div class="form">
        <el-form
          :model="formData"
          ref="formRef"
          label-width="80px"
          size="large"
        >
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </template>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="hanleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import useSystemStore from '@/store/main/system/system'
import { reactive, ref } from 'vue'

const emit = defineEmits('')

const props = defineProps({
  modalConfig: {
    type: Object,
    default: () => {}
  }
})

// 定义内部的属性
const dialogVisible = ref(false)
const initialData = {}
for (const item of props.modalConfig.formItems) {
  initialData[item.prop] = item.initialValue ?? ''
}
const formData = reactive(initialData)
const isNewRef = ref(true)
const editData = ref()

const systemStore = useSystemStore()

// 定义设置dialogVisible方法
const setModalVisible = (isNew = true, itemData) => {
  dialogVisible.value = true
  isNewRef.value = isNew

  if (!isNew && itemData) {
    // 编辑数据
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 新建数据
    for (const key in formData) {
      const item = props.modalConfig.formItems.find((item) => item.prop === key)
      formData[key] = item ? item.initialValue : ''
    }
    editData.value = null
  }
}

// 点击了确定的逻辑
const hanleConfirmClick = () => {
  let infoData = formData
  if (props.otherInfo) {
    infoData = { ...infoData, ...props.otherInfo }
  }
  dialogVisible.value = false
  if (!isNewRef.value && editData.value) {
    // 编辑数据
    systemStore.editPageDataAction(
      props.modalConfig.pageName,
      editData.value.id,
      infoData
    )
  } else {
    // 创建新的数据
    systemStore.newPageDataAction(props.modalConfig.pageName, infoData)
  }
}

defineExpose({
  setModalVisible
})
</script>

<style lang="scss" scoped>
.form {
  padding: 0 20px;
}
</style>
