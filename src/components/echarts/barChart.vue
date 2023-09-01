<script setup lang="ts">
import echarts from "@/utils/echarts";
import { type ECOption } from "@/utils/echarts"
import {onMounted, reactive, markRaw, ref, computed, onUnmounted} from "vue"

interface BarChartData {
  name: string;
  type: 'bar';
  data: number[];
}

export interface Props {
  id: string
  width: string
  height: string
  option?: any
  xData: string[]
  yData: any[]
}
const props = withDefaults(defineProps<Props>(), {
  id: 'barChart',
  width: '200px',
  height: '200px',
  option: {},
})

const formatterYData = computed(() => {
  const res = [] as BarChartData[]
  props.yData.forEach(item => {
    res.push({
      name: item.name,
      type: 'bar',
      data: item.data
    } as BarChartData)
  })

  return res
})

const formatterLegend = computed(() => {
  return props.yData.map(item => item.name)
})

const option: ECOption = reactive({
  grid: {
    left: "20px",
    right: "20px",
    bottom: "10px",
    containLabel: true,
  },
  tooltip: {},
  legend: {
    data: formatterLegend,
    right: '20px',
    top: '20px'
  },
  xAxis: {
    type: 'category',
    data: props.xData
  },
  yAxis: {},
  series: formatterYData
})

const chart = ref<any>("");
onMounted(() => {
  // 图表初始化
  Object.assign(option, props.option)
  chart.value = markRaw(echarts.init(document.getElementById(props.id) as HTMLDivElement))

  chart.value.setOption(option);

  // 大小自适应
  window.addEventListener("resize", () => {
    if (chart.value) chart.value.resize()
  })
})

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    if (chart.value) chart.value.resize();
  })
})

</script>

<template>
  <div :id="id" :style="{ height, width }" />
</template>

<style scoped lang="scss">

</style>