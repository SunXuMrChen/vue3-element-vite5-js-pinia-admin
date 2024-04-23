<template>
  <div id="app">
    <el-config-provider size="large" :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>
<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>
<style scoped>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
