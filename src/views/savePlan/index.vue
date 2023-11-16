<script setup lang="ts">
import Buttons from "@/views/savePlan/buttons.vue"
import {ref} from "vue"
import DayForSave from "@/views/savePlan/dayForSave.vue";

defineOptions({ name: 'savePlan' })

const dayNames = [
  { color: '#6699CC', label: '星期一' },
  { color: '#CC6699', label: '星期二' },
  { color: '#FF9966', label: '星期三' },
  { color: '#6699CC', label: '星期四' },
  { color: '#CC6699', label: '星期五' },
  { color: '#FF9966', label: '星期六' },
  { color: '#6699CC', label: '星期日' },
]

const dayCheckList = ref([])
</script>

<template>
  <div class="content">
    <buttons />

    <div class="days">
      <day-for-save
          v-for="(item, index) in dayNames"
          :key="index"
          :color="item.color"
          :label="item.label"
          v-model:check-list="dayCheckList"
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