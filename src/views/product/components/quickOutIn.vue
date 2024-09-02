<!--快速出入库的组件-->
<template>
  <div>
    <el-button size="small" @click="handleQuickEdit">快速出入库</el-button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import emitter from "@/utils/emitter";

const props = defineProps({
  shelf: {
    type: String,
    default: '',
  },
  skcsku: {
    type: String,
    default: '',
  }
});

const handleQuickEdit = () => {
  emitter.emit('quickOutIn', {
    shelf: props.shelf,
    skcsku: props.skcsku
  }) // 发布出入库事件并附带数据
}
</script>

<style scoped>

</style>