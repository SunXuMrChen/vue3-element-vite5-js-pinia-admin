<template>
  <div class="pie-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup>
import BaseEchart from './base-echart.vue'
import { computed } from 'vue'

const props = defineProps({
  pieData: {
    type: Array,
    default: () => []
  }
})

const option = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        bottom: '-10%',
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        data: props.pieData
      }
    ]
  }
})
</script>

<style lang="scss" scoped>
.pie-echart {
  color: red;
}
</style>
