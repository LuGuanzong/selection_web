<script setup lang="ts">

import Day from "@/views/plan/detail/day.vue";

defineOptions({ name: 'planDetail' })

const dayNames = [
  { color: '#6699CC', label: '星期一' },
  { color: '#CC6699', label: '星期二' },
  { color: '#FF9966', label: '星期三' },
  { color: '#6699CC', label: '星期四' },
  { color: '#CC6699', label: '星期五' },
  { color: '#FF9966', label: '星期六' },
  { color: '#6699CC', label: '星期日' },
]


</script>

<template>
  <div class="detail-content">
    <div class="date-and-conclusion">
      <div style="width: 300px; height: 300px; background: #fff; border-radius: 6px;">
        日期
      </div>
      <div style="width: 300px; flex-grow: 1; background: #fff; border-radius: 6px;">
        周总结
      </div>
    </div>

    <div class="days">
      <day v-for="(item, index) in dayNames" :key="index" :color="item.color" :label="item.label" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail-content {
  background: rgba(153, 204, 255, 0.2);
  height: 100%;
  padding: 20px;
  display: flex;
  gap: 12px;
}

.date-and-conclusion {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.days {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  gap: 12px;

  .day {
    height: 100%;
    background: #fff;
    flex: 1 1 auto;
    border-radius: 12px;
    position: relative;

    &::before {
      position: absolute;
      border-radius: 6px;
      height: 40px;
      top: -10px;
      left: 10%;
      width: 80%;
      content: '星期一';
      background: #6699CC;
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>