<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script setup>
import LoginPanel from './c-cpn/login-panel.vue'
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: url('../../assets/img/login-bg.svg');
}
</style>
