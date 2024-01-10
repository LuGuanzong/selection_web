<script setup lang="ts">
import {DocumentAdd, DocumentRemove, Edit, Rank, Reading, Upload} from '@element-plus/icons-vue'
import SvgIcon from "@/components/svgIcon.vue";
import {Status} from "@/utils/dayPanel";

defineOptions({ name: 'saveButtons' })


</script>

<template>
  <div class="buttons-content">
    <div>
      <el-button type="primary" size="default" :icon="Upload">提交</el-button>
      <el-button size="default" :icon="DocumentAdd">恢复清空前计划</el-button>
      <el-button size="default" :icon="DocumentRemove">清空计划</el-button>
      <el-button size="default" :icon="Reading">带入上周计划</el-button>

    </div>
    <div class="detail-edit">
      <el-popover
          placement="top-start"
          trigger="hover"
          effect="dark"
          content="取消编辑"
      >
        <template #reference>
          <svg-icon class="highlight" name="exit" style="width: 20px; height: 20px;" />
        </template>
      </el-popover>
      <el-popover
          placement="top-start"
          effect="dark"
          trigger="hover"
          content="暂存编辑，用于预览"
      >
        <template #reference>
          <svg-icon class="highlight" name="save" style="width: 17px; height: 17px;" />
        </template>
      </el-popover>
      <el-popover
          placement="top-start"
          effect="dark"
          trigger="hover"
          content="编辑任务内容"
      >
        <template #reference>
          <el-icon :size="20" class="highlight">
            <Edit />
          </el-icon>
        </template>
      </el-popover>
      <el-popover
          placement="top-start"
          effect="dark"
          trigger="hover"
          content="拖拽设置合适顺序"
      >
        <template #reference>
          <el-icon :size="20" class="highlight">
            <Rank />
          </el-icon>
        </template>
      </el-popover>
    </div>
  </div>
  <el-divider />
</template>

<style scoped lang="scss">
.buttons-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
}

.detail-edit {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>