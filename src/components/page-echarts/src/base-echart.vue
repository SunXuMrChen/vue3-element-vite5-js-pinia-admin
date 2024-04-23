<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import * as echarts from 'echarts'
import ChinaJSON from '../data/china.json'

const props = defineProps({
  option: {
    type: Object,
    default: () => {}
  }
})

echarts.registerMap('china', ChinaJSON)

const echartRef = ref(null)

onMounted(() => {
  // 1.初始化echarts实例
  const echartInstance = echarts.init(echartRef.value, 'light', {
    renderer: 'canvas'
  })

  // 2.第一次进行setOption
  // watchEffect监听option变化, 重新执行
  watchEffect(() => echartInstance.setOption(props.option))

  // 3.监听window缩放
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
</script>

<style lang="scss" scoped>
.base-echart {
  color: red;
}

.echart {
  height: 300px;
}
</style>
