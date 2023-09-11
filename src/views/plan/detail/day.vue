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
        <div class="checkboxes">
            <el-checkbox label="Option A你好吗你好吗你好吗">
              的萨阿德是风口浪尖考虑到萨房间看了看；的萨阿德是风口浪尖考虑到萨房间看了看；的萨阿德是风口浪尖考虑到萨房间看了看；的萨阿德是风口浪尖考虑到萨房间看了看；的萨阿德是风口浪尖考虑到萨房间看了看；
            </el-checkbox>
            <el-checkbox label="Option B" />
            <el-checkbox label="Option C" />
        </div>
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
.checkboxes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

:deep .el-checkbox {
  white-space: pre-wrap;
  height: auto;
}

:deep .el-checkbox__label {
  line-height: 20px;
}
</style>