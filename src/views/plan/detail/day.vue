<script setup lang="ts">
defineOptions({ name: 'detailDay' })

export interface Props {
  color?: string
  label?: string
}
withDefaults(defineProps<Props>(), {
  color: '6699CC',
  label: ''
})

</script>

<template>
  <div class="day-content">
    <div :style="{'background': color}" class="day-name">{{ label }}</div>
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
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-weight: bold;
  }
}
</style>