<template>
  <div class="pane-phone">
    <el-form label-width="60px" size="large">
      <el-form-item label="手机号">
        <el-input placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="verify-code">
          <el-input placeholder="请输入验证码" />
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.verify-code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
