<script setup lang="ts">
import Buttons from "@/views/savePlan/buttons.vue"
import {ref} from "vue"
import DayForSave from "@/views/savePlan/dayForSave.vue";
import {DayPanel} from "@/utils/dayPanel";

defineOptions({ name: 'savePlan' })

const taskList = ref<string[]>([''])
</script>

<template>
  <div class="content">
    <buttons />

    <div class="days">
      <day-for-save
          v-for="(item, index) in DayPanel"
          :key="index"
          :color="item.color"
          :label="item.label"
          v-model:task-list="taskList"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.days {
  display: flex;
  gap: 10px;
  flex-grow: 1;
}
</style>