<script setup lang="ts">
import {ref} from "vue";

defineOptions({ name: 'detailDay' })

const kk = ref('#6699CC')

</script>

<template>
  <div class="day-content">
    <div :style="{'--bg-color': kk}" class="day-name">{{ 1 }}</div>
  </div>
</template>

<style scoped lang="scss">
.day-content {
  height: 100%;
  background: #fff;
  flex: 1 1 auto;
  border-radius: 12px;
  position: relative;

  .day-name {
    position: absolute;
    border-radius: 6px;
    height: 40px;
    top: -10px;
    left: 10%;
    width: 80%;
    background: var(--bg-color);
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-weight: bold;
  }
}
</style>