<template>
  <div class="department">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />

    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    >
      <template #leader="scope">{{ scope.row.leader }}</template>
      <template #parentId="scope">{{ scope.row.parentId }}</template>
    </page-content>

    <page-modal :modal-config="modalConfigRef" ref="modalRef" />
  </div>
</template>

<script setup>
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'

import searchConfig from './config/search.config.js'
import contentConfig from './config/content.config.js'
import modalConfig from './config/modal.config.js'
import useMainStore from '@/store/main/main'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

import { computed } from 'vue'

const modalConfigRef = computed(() => {
  const mainStore = useMainStore()

  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options.push(...departments)
    }
  })
  return modalConfig
})

// 点击search,content的操作
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

// 点击content,modal的操作
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
</script>

<style lang="scss" scoped></style>
