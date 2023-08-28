<!--展示数字概览-->
<script setup lang="ts">
defineOptions({ name: 'planOverview' })

</script>

<template>
  <div class="number-content">
    <div class="data">
      1
    </div>
    <div class="data">
      1
    </div>
    <div class="data">
      1
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
  justify-content: space-around;
  gap: 15px;

}

.data {
  height: 100%;
  background: #6699CC;
  flex: 1 0 auto;
  border-radius: 12px;
}
</style>