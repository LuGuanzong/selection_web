<script setup lang="ts">
defineOptions({ name: 'detailDay' })

import {watchEffect} from "vue";

export interface Props {
  color?: string
  label?: string
  checkList: string[]  // 具体的任务框状态
}
const props = withDefaults(defineProps<Props>(), {
  color: '6699CC',
  label: '',
  checkList: () => []
})

const emit = defineEmits(['update:checkList'])

// 双向绑定checkList
let myChangeCheck: string[] = []
watchEffect(() => {
  myChangeCheck = props.checkList
})
const changeCheck = (val: string[]) => {
  emit('update:checkList', val)
}

</script>

<template>
  <div class="day-content">
    <div :style="{'background': color}" class="day-name">{{ label }}</div>
    <el-checkbox-group v-model="myChangeCheck" @change="changeCheck">
      <el-checkbox label="Option A" />
      <el-checkbox label="Option B" />
      <el-checkbox label="Option C" />
    </el-checkbox-group>
  </div>
</template>

<style scoped lang="scss">
.day-content {
  height: 100%;
  background: #fff;
  flex: 1 1 auto;
  border-radius: 12px;
  position: relative;
  padding: 50px 15px 5px 15px;

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