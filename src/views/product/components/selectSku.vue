<!--选择框选择sku-->
<template>
  <el-select
      v-model="skcSku"
      filterable
      clearable
      remote
      reserve-keyword
      placeholder="请选择sku"
      :remote-method="remoteMethod"
      :loading="loading"
      @change="handleChange"
    >
      <el-option
        v-for="item in skuList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
</template>

<script lang="ts" setup>
import {ref, defineModel, defineEmits, watchEffect} from "vue";
import {searchSkusByKeywords} from "@/api/product";

const skcSku = defineModel()

/**
 * 获取sku可选列表
 */
interface ListItem {
  value: string
  label: string
}

const loading = ref(false)
const skuList = ref<ListItem[]>([])

// 格式化搜索到的sku
const formatSkus = (originList: any[]) => {
  return originList.map(item => {
      return {
        value: `${item.skc_article}-${item.sku_article}`,
        label: `${item.skc_article}-${item.sku_article}-${item.style}-${item.name}`
      }
  })
}

// 关键词搜索对应sku
const remoteMethod = (query: string) => {
  loading.value = true
  if (query) {
    searchSkusByKeywords({keywords: query}, true).then(res => {
      skuList.value = formatSkus(res.data || [])
    }).finally(() => loading.value = false)
  } else {
    skuList.value = []
    loading.value = false
  }
}

/**
 * skcsku修改时往上传递数值改变的事件
 */
const emit = defineEmits(['change'])
const handleChange = (value: string) => emit('change', value); // 触发事件并传递新的值给父组件

</script>

<style scoped>

</style>