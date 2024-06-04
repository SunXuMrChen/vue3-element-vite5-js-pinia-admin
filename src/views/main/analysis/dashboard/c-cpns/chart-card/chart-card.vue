<template>
  <div class="chart-card">
    <el-card :header="header">
      <slot>默认内容</slot>
    </el-card>
  </div>
</template>

<script setup>
const props = defineProps({
  header: {
    type: String,
    default: '卡片的头部标题'
  }
})
</script>

<style lang="scss" scoped></style>
