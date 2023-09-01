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
      <div class="date">

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

.date {
  width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 6px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background: #6699CC;
    width: 35px;
    height: 35px;
    border-radius: 200px 0 0;
    transform: rotate(180deg)
  }
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
    position: relative
  }
}
</style>