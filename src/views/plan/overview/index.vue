<script setup lang="ts">
import Number from "@/views/plan/overview/number.vue";
import BarChart from "@/components/echarts/barChart.vue";
import {reactive} from "vue";

defineOptions({ name: 'planOverview' })

const xData = reactive(['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'])
const yData = reactive([
  { name: '总计划', data: [24, 25, 44, 24, 25, 44, 12] },
  { name: '完成', data: [4, 5, 40, 14, 15, 4, 2] },
])

</script>

<template>
  <div class="overview-content">
    <h2>每周规划概览</h2>
    <div class="week">本周日期： 2023-3-6 至 2023-3-12</div>

    <div class="overview-items">
      <number />

      <div class="overview-item" >
        <bar-chart id="main" width="100%" height="100%" :x-data="xData" :y-data="yData"  />
      </div>

      <div class="overview-item">
        222
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
    color: #fff;
    margin-top: 13px;
  }

  .week {
    color: #fff;
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
  }
}
</style>