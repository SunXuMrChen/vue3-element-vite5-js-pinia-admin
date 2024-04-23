<template>
  <div class="count-card">
    <div class="header">
      <span>{{ title }}</span>
      <el-tooltip :content="tips" placement="top" effect="light">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span ref="count1Ref">{{ number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ subtitle }}</span>
      <span ref="count2Ref">{{ number2 }}</span>
    </div>
  </div>
</template>

<script setup>
import { CountUp } from 'countup.js'
import { ref, onMounted, defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '商品总销量'
  },
  subtitle: {
    type: String,
    default: '商品总销量'
  },
  tips: {
    type: String,
    default: '所有商品总销量'
  },
  number1: {
    type: Number,
    default: 50998
  },
  number2: {
    type: Number,
    default: 50998
  }
})
// 创建CountUp实例对象
const count1Ref = ref(null)
const count2Ref = ref(null)

// 执行动画的元素
const countOption = {
  prefix: props.amount === 'saleroom' ? '￥' : ''
}

onMounted(() => {
  const countip1 = new CountUp(count1Ref.value, props.number1, countOption)
  const countip2 = new CountUp(count2Ref.value, props.number2, countOption)
  countip1.start()
  countip2.start()
})
</script>

<style lang="scss" scoped>
.count-card {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    height: 38px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    justify-content: space-between;
    align-items: flex-end;
  }

  .content {
    display: flex;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .footer {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
  }
}
</style>
