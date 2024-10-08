<!--选择框选择sku-->
<template>
  <div style="display: flex; gap: 10px;flex-grow: 1;">
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
    <el-image
        v-show="imgUrl"
        style="width: 60px; height: 60px"
        :src="imgUrl"
        fit="fill"
        close-on-press-escape
        :preview-src-list="[imgUrl]"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref, defineModel, defineEmits, computed, type ModelRef, defineProps, watch, watchEffect} from "vue";
import {searchSkusByKeywords} from "@/api/product";
import {genDownloadUrl} from "@/utils/download";

const skcSku: ModelRef<unknown | undefined, string> = defineModel()

/**
 * 获取sku可选列表
 */
interface ListItem {
  value: string
  label: string
  imgUrl: string
}

const loading = ref(false)
const skuList = ref<ListItem[]>([])

// 格式化搜索到的sku
const formatSkus = (originList: any[]) => {
  return originList.map(item => {
      return {
        value: `${item.skc_article}-${item.sku_article}`,
        label: `${item.skc_article}-${item.sku_article}-${item.sku_style}-${item.skc_name}`,
        imgUrl: item.sku_img_url ? genDownloadUrl(item.sku_img_url) : ''
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
watchEffect(() => {
  if (skcSku.value) {
    const skcSkuList = skcSku.value.split('-')
    const query = skcSkuList[0] + ' ' + skcSkuList[1]
    loading.value = true
    searchSkusByKeywords({keywords: query}, true).then(res => {
      skuList.value = formatSkus(res.data || [])
    }).finally(() => loading.value = false)
  }
})

/**
 * 获取缩略图
 */
const imgUrl = computed(() => {
  if (!skcSku.value) return ''

  const skuInfo = skuList.value.find(item => item.value === skcSku.value)
  if (!skuInfo) return ''

  return skuInfo.imgUrl
})

/**
 * skcsku修改时往上传递数值改变的事件
 */
const emit = defineEmits(['change'])
const handleChange = (value: string) => emit('change', value); // 触发事件并传递新的值给父组件

</script>

<style scoped>

</style>