<script setup lang="ts">
defineOptions({ name: 'dayForSave' })

import { Edit, Rank } from '@element-plus/icons-vue'
import { ref, watch, watchEffect} from "vue";
import SvgIcon from "@/components/svgIcon.vue";
import { VueDraggableNext as draggable } from 'vue-draggable-next'

/**
 * 属性定义和事件定义
 */
export interface Props {
  color?: string
  label?: string
  date: string // 当前的日期
}
const props = withDefaults(defineProps<Props>(), {
  color: '6699CC', // 标题框背景色
  label: '', // 标题框文字
  date: '' // 当前的日期
})

/**
 * 初始化任务列表
 */
// 当前的任务列表
const tasks = ref<string[]>([])

/**
 * 编辑模式
 */
let currStatus = ref<number>(1) // 1: 预览模式；2: 拖拽模式； 3：编辑模式
const statusObj = {
  preview: 1,
  drag: 2,
  edit: 3
}

// 开启设置模式
const handleStartEdit = () => currStatus.value = statusObj.edit
const handleStartDrag = () => currStatus.value = statusObj.drag

// 取消编辑模式
const handleCancel = () => currStatus.value = statusObj.preview

// 保存编辑结果
const handleFinish = () => {
  const tmp = new Array(dragList.value.length)
  switch (currStatus.value) {
  case statusObj.drag:
    dragList.value.forEach((item, index) => {
      tmp[index] = item.name
    })
    tasks.value = tmp
    break;
  }
  currStatus.value = statusObj.preview
}

// 保证至少有一项任务
watchEffect(() => {
  if (tasks.value.length === 0) {
    tasks.value = ['']
  }
})

/**
 * 具体编辑内容
 */
// 减少一项任务
const handleRemoveTask = (index: number) => {
  tasks.value.splice(index, 1)
}

// 增加一项任务
const handleAddTask = () => {
  tasks.value.push('')
}

/**
 * 拖拽控制
 */
// 临时存储拖拽信息的数组
const dragList = ref([])

// 每次开始拖拽时，初始化信息
watch(currStatus, (newV) => {
  const tmp = []
  if (newV === statusObj.drag) {
    tasks.value.forEach((item, index) => {
      tmp.push({
        name: item,
        id: index
      })
    })
  }
  dragList.value = tmp
})

</script>

<template>
  <div class="day-content">
    <div :style="{'background': props.color}" class="day-name">
      <span>{{ props.label }}</span>
      <span class="button-part">
        <el-popover
            v-if="currStatus === statusObj.preview"
            placement="top-start"
            effect="dark"
            trigger="hover"
            content="编辑任务内容"
        >
        <template #reference>
          <el-icon :size="20" class="highlight" @click="handleStartEdit">
            <Edit />
          </el-icon>
        </template>
      </el-popover>
      <el-popover
          v-if="currStatus === statusObj.preview"
          placement="top-start"
          effect="dark"
          trigger="hover"
          content="拖拽设置合适顺序"
      >
        <template #reference>
          <el-icon :size="20" class="highlight" @click="handleStartDrag">
            <Rank />
          </el-icon>
        </template>
      </el-popover>

      <template v-else-if="currStatus !== statusObj.preview">
        <el-popover
            placement="top-start"
            trigger="hover"
            effect="dark"
            content="取消编辑"
        >
          <template #reference>
            <svg-icon class="highlight" name="exit" style="width: 20px; height: 20px;" @click="handleCancel" />
          </template>
        </el-popover>
        <el-popover
            placement="top-start"
            effect="dark"
            trigger="hover"
            content="暂存编辑，用于预览"
        >
          <template #reference>
            <svg-icon class="highlight" name="save" style="width: 17px; height: 17px;" @click="handleFinish" />
          </template>
        </el-popover>
      </template>
      </span>
    </div>

    <template v-if="currStatus === statusObj.preview">
      <div class="task-str" v-for="(_, index) in tasks" :key="index">
        <span>{{ tasks[index] }}</span>
      </div>
    </template>

    <template v-else-if="currStatus === statusObj.drag">
      <draggable ghost-class="ghost" chosen-class="chosenClass" animation="300" :list="dragList">
        <div
            v-for="element in dragList"
            :key="element.id"
            class="drag-text"
        >
          {{ element.name }}
        </div>
      </draggable>
    </template>

    <template v-else-if="currStatus === statusObj.edit">
      <div class="input-task"
           v-for="(_, index) in tasks"
           :key="index">
        <el-input
            v-model="tasks[index]"
            type="textarea"
        />
        <el-popover
            v-if="tasks.length > 1"
            placement="right"
            effect="dark"
            trigger="hover"
            content="移除该任务"
        >
          <template #reference>
            <svg-icon
                class="highlight"
                name="minus"
                style="width: 30px;
                height: 30px;"
                @click="handleRemoveTask(index)"
            />
          </template>
        </el-popover>
      </div>
      <el-popover
          placement="right"
          effect="dark"
          trigger="hover"
          content="添加一项任务"
      >
        <template #reference>
          <svg-icon
              class="highlight"
              name="add"
              style="width: 35px;
               height: 35px;"
              @click="handleAddTask"
          />
        </template>
      </el-popover>
    </template>
  </div>
</template>

<style scoped lang="scss">
.day-content {
  height: 100%;
  background: #fff;
  flex: 1 1 auto;
  width: 100%;
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
    display: flex;
    justify-content: space-around;
    align-items: center;

    .button-part {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
}

.highlight {
  &:hover {
    transition: .3s;
    cursor: pointer;
  }
}

.input-task {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
}

.task-str {
  white-space:pre-wrap;
  line-height: 19px;
  margin-bottom: 10px;
  word-wrap:break-word;
  word-break:break-all;
}

.ghost {
  border: solid 1px #6699CC;
  border-radius: 8px;
  margin-bottom: 5px;
  cursor: move;
}

.chosenClass {
  background-color: #f1f1f1;
}

.drag-text {
  border: solid 1px #eee;
  padding: 6px 10px;
  text-align: left;
  word-wrap:break-word;
  word-break:break-all;
  overflow: hidden;
  text-overflow:ellipsis; //溢出用省略号显示
  display:-webkit-box; //作为弹性伸缩盒子模型显示。
  -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
  -webkit-line-clamp:2; //显示的行
}

.drag-text:hover {
  cursor: move;
}
.drag-text + .drag-text {
  margin-top: 10px;
}
</style>