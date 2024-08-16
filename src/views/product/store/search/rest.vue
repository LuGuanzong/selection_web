<template>
  <el-form>
    <el-form-item label="地垫最长边">
      <el-select
          v-model="longestSide"
          placeholder="选择长度"
          style="width: 240px"
          clearable
          @change="handleSearch"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item v-show="longestSide">
        <template v-if="restList.length > 0">
          <div>
            当前共能放下该类型产品：{{ total }} 件
          </div>
          <ul style="display: flex; flex-direction: column;">
            <li v-for="item in restList" :key="item.article" >
              {{ item.article }} ------ {{ item.count }} 件
            </li>
          </ul>
        </template>
        <el-empty v-else description="当前放不下该产品" />

      </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import {searchRestRoom} from "@/api/product";

const longestSide = ref('')

const options = [
  { value: '40', label: '40cm' },
  { value: '50', label: '50cm' }
]

// 存储返回的空余库存信息
const restList = ref([])

const handleSearch = () => {
  if (!longestSide.value) return

  const params = { longest: longestSide.value }

  searchRestRoom(params).then(res => {
    restList.value = res.data
  })
}

// 获取总数
const total = computed(() => {
  return restList.value.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.count;
  }, 0);
})

</script>

<style scoped>

</style>