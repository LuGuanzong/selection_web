<script setup lang="ts">
import Number from "@/views/plan/overview/number.vue";

defineOptions({ name: 'planOverview' })
</script>

<template>
  <div class="overview-content">
    <h2>每周规划概览</h2>
    <div class="week">本周日期： 2023-3-6 至 2023-3-12</div>

    <div class="overview-items">
      <number />
      <div class="overview-item">
        11
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
  }
}
</style>