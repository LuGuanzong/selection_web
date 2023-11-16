<script setup lang="ts">
import { DocumentAdd, DocumentRemove, Reading, Upload } from '@element-plus/icons-vue'

defineOptions({ name: 'saveButtons' })


</script>

<template>
  <div class="buttons-content">
    <el-button size="default" :icon="Reading">带入本周计划</el-button>
    <el-button size="default" :icon="DocumentRemove">清空计划</el-button>
    <el-button size="default" :icon="DocumentAdd">恢复清空前计划</el-button>
    <el-button type="primary" size="default" :icon="Upload">保存</el-button>
  </div>
  <el-divider />
</template>

<style scoped lang="scss">
.buttons-content {
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 0 auto;
}
</style>