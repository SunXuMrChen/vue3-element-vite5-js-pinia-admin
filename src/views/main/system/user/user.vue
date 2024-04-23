<template>
  <div class="role">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content
      ref="contentRef"
      :content-config="contentConfig"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    />
    <page-modal :modal-config="modalConfigRef" ref="modalRef"></page-modal>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config.js'

import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config.js'

import PageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config.js'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

import useMainStore from '@/store/main/main'

const modalConfigRef = computed(() => {
  const mainStore = useMainStore()

  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  const roles = mainStore.entireRoles.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'roleId') {
      item.options.push(...roles)
    }
    if (item.prop === 'departmentId') {
      item.options.push(...departments)
    }
  })
  return modalConfig
})

// 逻辑关系
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleEditClick, handleNewClick } = usePageModal()
</script>

<style lang="scss" scoped></style>
