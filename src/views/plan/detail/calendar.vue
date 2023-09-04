<script setup lang="ts">
import {dayjs} from "element-plus";
import 'dayjs/plugin/toArray'

defineOptions({ name: 'detailCalendar' })

/**
 * 初始化日历
 */
// 首先找出当前日期
const now = dayjs()
// 获取当月第一天
const monthFirstDay = dayjs().startOf('month')
const monthLastDay = dayjs().endOf('month')
// 获取当月第一天是一个星期的第几天
let dayInWeekFirst = monthFirstDay.get('day')
dayInWeekFirst = dayInWeekFirst % 7
// 获取当月最后一天是一个星期的第几天
let dayInWeekLast = monthLastDay.get('day')
// 获取当前月有多少天
const dayCount = now.daysInMonth()

// 初始化日期数组
const placeholdersStart = new Array(dayInWeekFirst)
const placeholdersEnd = new Array(7 - (dayInWeekLast + 1))
const dates = Array.from(Array(dayCount).keys(), x => x + 1);
const datesWithPlaceholders = placeholdersStart.concat(dates).concat(placeholdersEnd)

// 初始化星期数组
const weekDays = ['日', '一', '二', '三', '四', '五', '六']

// 获取当天是一个月内的第几天
const dayInDate = now.get('date')
const dayInDateCount = (dayInDate - 1) + placeholdersStart.length
// 获取年月
const year = now.get('year')
const month = now.get('month') + 1
</script>

<template>
  <h3 style="margin: 0 20px;">
    <span class="year-date">{{ year }}</span> 年 <span class="year-date">{{ month }}</span> 月
  </h3>
  <div class="days">
    <h4 class="day" v-for="(item, index) in weekDays" :key="index" >{{ item }}</h4>
  </div>
  <div class="days">
    <div class="day" :class="{ current: index === dayInDateCount }" v-for="(item, index) in datesWithPlaceholders" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.days {
  display: flex;
  flex-wrap: wrap;

  h4 {
    font-weight: 800;
  }

  .day {
    flex: 1 0 14.28%;
    text-align: center;
    border-radius: 2px;
  }

  .current {
    background: #6699CC;
    color: #f2f2f2;
  }
}

h3 {
  .year-date {
    color: #6699CC;
    font-weight: 800;
  }
}
</style>