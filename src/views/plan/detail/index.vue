<script setup lang="ts">
import Day from "@/views/plan/detail/day.vue";
import Calendar from "@/views/plan/detail/calendar.vue";
import {ref} from "vue";
import {DayPanel} from "@/utils/dayPanel";

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

const dayCheckList = ref([])


</script>

<template>
  <div class="detail-content">
    <div class="date-and-conclusion">
      <div class="date">
        <calendar />
      </div>

      <div style="width: 100%; flex-grow: 1; background: #fff; border-radius: 6px;">
        周总结
      </div>
    </div>

    <div class="days">
      <day
          v-for="(item, index) in DayPanel"
          :key="index"
          :color="item.color"
          :label="item.label"
          v-model:check-list="dayCheckList"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail-content {
  background: #EBF5FF;
  height: 100%;
  padding: 20px;
  display: flex;
  gap: 12px;
  width: 100%;
}

.date-and-conclusion {
  display: flex;
  flex-direction: column;
  gap: 12px;

  .date {
    width: 262px;
    height: 243px;
    background: #fff;
    border-radius: 6px;
    position: relative;
    padding: 40px 20px 0 20px;
    transition: 1s;

    &::before {
      content: '';
      position: absolute;
      background: #6699CC;
      top: 0;
      left: 0;
      width: 35px;
      height: 35px;
      border-radius: 200px 0 0;
      transform: rotate(180deg)
    }
  }

  @media screen and (max-width: 1500px) {
    .date {
      width: 220px;
      height: 210px;
      transition: 1s;
      padding-top: 20px;
    }
  }
}

.days {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  gap: 12px;
}
</style>