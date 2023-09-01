<!--展示数字概览-->
<script setup lang="ts">
defineOptions({ name: 'NumberShow' })

</script>

<template>
  <div class="number-content">
    <div class="data">
      <div class="circle-bg">
        <img alt="Vue logo" class="logo" src="@/assets/histogram.svg" width="20" height="20" />
      </div>
      <div class="count">21项</div>
      <div class="desc">总计划</div>
    </div>

    <div class="data">
      <div class="circle-bg">
        <img alt="Vue logo" class="logo" src="@/assets/histogram.svg" width="20" height="20" />
      </div>
      <div class="count">11项</div>
      <div class="desc">已完成计划</div>
    </div>

    <div class="data">
      <div class="circle-bg">
        <img alt="Vue logo" class="logo" src="@/assets/histogram.svg" width="20" height="20" />
      </div>
      <div class="count">10项</div>
      <div class="desc">未完成计划</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.number-content {
  width: 380px;
  height: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  gap: 15px;

  .count {
    color: #f2f2f2;
    font-size: 18px;
  }

  .desc {
    color: #f2f2f2;
    font-size: 12px;
  }
}

.data {
  height: 100%;
  background: #6699CC;
  flex: 1 0 30%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.circle-bg {
  background: #f2f2f2;
  width:43px;
  height: 43px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>