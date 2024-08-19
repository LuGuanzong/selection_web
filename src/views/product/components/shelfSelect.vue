<template>
  <el-select
    v-model="shelf"
    filterable
    clearable
    remote
    reserve-keyword
    placeholder="请选择货架号"
    :remote-method="shelfRemoteMethod"
    :loading="shelfLoading"
  >
    <el-option
      v-for="item in shelfList"
      :key="item"
      :label="item"
      :value="item"
    />
  </el-select>
</template>

<script lang="ts" setup>
import {defineModel, ref} from "vue";
import {getAllShelf} from "@/api/product";

/**
 * 获取货架号可选列表
 */
interface ListItem {
  value: string
  label: string
}

const shelf = defineModel()

const shelfLoading = ref(false)
const shelfList = ref<ListItem[]>([])

// 关键词搜索对应sku
const shelfRemoteMethod = (query: string) => {
  shelfLoading.value = true
  if (query) {
    getAllShelf({keyword: query}).then(res => {
      shelfList.value = res.data
    }).finally(() => shelfLoading.value = false)
  } else {
    shelfList.value = []
    shelfLoading.value = false
  }
}

</script>

<style scoped>

</style>