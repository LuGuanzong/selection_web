<template>
  <div>
    <el-form label-width="120px" style="width: 80%; max-width:800px;">
      <el-form-item label="sku">
        <el-select
          v-model="form.skcSku"
          filterable
          clearable
          remote
          reserve-keyword
          placeholder="请选择sku"
          :remote-method="remoteMethod"
          :loading="loading"
          @change="handleSearch"
        >
            <el-option
              v-for="item in skuList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
        </el-select>
      </el-form-item>
      <el-form-item>
        <template v-if="shelvesWithSku.length > 0">
          <div>
            当前该产品共有：{{ total }} 件
          </div>
          <ul style="display: flex; flex-direction: column;">
            <li v-for="item in shelvesWithSku" :key="item.id" >
              {{ item.article }} ------ {{ item.count }} 件
            </li>
          </ul>
        </template>
        <div v-else-if="form.skcSku">
          当前所选sku的数量为0
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import {searchSkuCount, searchSkusByKeywords} from "@/api/product";

/**
 * 定义筛选条件
 */
const form = ref({
  skcSku: ''
})

/**
 * 获取sku可选列表
 */
interface SkuListItem {
  value: string
  label: string
}

const loading = ref(false)
const skuList = ref<SkuListItem[]>([])

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
    searchSkusByKeywords({keywords: query}).then(res => {
      skuList.value = formatSkus(res.data || [])
    }).finally(() => loading.value = false)
  } else {
    skuList.value = []
    loading.value = false
  }
}

// 查询库存信息
const shelvesWithSku = ref([])

const handleSearch = () => {
  shelvesWithSku.value = []
  if(!form.value.skcSku) return

  const params = {
    skc: form.value.skcSku.split('-')[0],
    sku: form.value.skcSku.split('-')[1]
  }

  searchSkuCount(params).then(res => {
    shelvesWithSku.value = res.data
  })
}

// 获取总数
const total = computed(() => {
  return shelvesWithSku.value.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.count;
  }, 0);
})

</script>

<style scoped>

</style>