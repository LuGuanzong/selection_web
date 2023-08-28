<script setup lang="ts">
defineOptions({ name: 'planDetail' })
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
      <div class="day"></div>
      <div class="day"></div>
      <div class="day"></div>
      <div class="day"></div>
      <div class="day"></div>
      <div class="day"></div>
      <div class="day"></div>
    </div>
  </div>
</template>

<style scoped>
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
      height: 30px;
      top: -10px;
      left: 10%;
      width: 80%;
      content: '星期一';
      background: #6699CC;
      text-align: center;
      line-height: 30px;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>