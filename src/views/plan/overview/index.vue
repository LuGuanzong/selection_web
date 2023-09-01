<script setup lang="ts">
import NumberShow from "@/views/plan/overview/number.vue";
import BarChart from "@/components/echarts/barChart.vue";
import {reactive} from "vue";
import LineChart from "@/components/echarts/lineChart.vue";

defineOptions({ name: 'planOverview' })

const xData = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
const yData = reactive([
  { name: '总计划', data: [24, 25, 44, 24, 25, 44, 12], itemStyle: { color: '#6699CC'}},
  { name: '完成', data: [4, 5, 40, 14, 15, 4, 2], itemStyle: { color: '#FF9966'}},
])
const yData2 = reactive([
  {
    name: '完成率', data: [24, 25, 44, 24, 25, 44, 12],
    lineStyle: { color: '#CC6699' },
    itemStyle: { color: '#CC6699' }
  }
])

const option = {
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %'
      },
      show: true
    }
  ]
}
</script>

<template>
  <div class="overview-content">
    <h2>
      <img alt="title logo" class="logo" src="@/assets/littleMan.svg" width="40" height="40" style="margin-right: 5px;" />
      每周规划概览
    </h2>
    <div class="week">本周日期： 2023-3-6 至 2023-3-12</div>

    <div class="overview-items">
      <NumberShow />

      <div class="overview-item title-number" >
        <BarChart width="100%" height="100%" :x-data="xData" :y-data="yData"  />
      </div>

      <div class="overview-item title-rate">
        <LineChart  width="100%" height="100%" :x-data="xData" :y-data="yData2" :option="option" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overview-content {
  background: #6699CC;
  height: 320px;
  border-radius: 2px;
  padding: 0 20px 10px 20px;
  flex: 0 0 auto;
  display: flex; /* 使用弹性布局，使子元素较为灵活地填充 */
  flex-direction: column;

  h2 {
    font-weight: 800;
    font-size: 25px;
    font-family: 'Microsoft YaHei',serif;
    color: #f2f2f2;
    margin-top: 13px;
    display: flex;
    align-items: center;
  }

  .week {
    color: #f2f2f2;
    font-weight: bold;
    width: 100%;
    text-align: right;
  }
}

.overview-items {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  gap: 12px;

  .overview-item {
    flex: 1 1 auto;
    border-radius: 12px;
    background: #fff;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .title-number::before {
    position: absolute;
    content: '计划数量展示';
    top: 10px;
    left: 20px;
    font-size: 14px;
    font-weight: bold;
  }

  .title-rate::before {
    position: absolute;
    content: '计划完成率展示';
    top: 10px;
    left: 20px;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>