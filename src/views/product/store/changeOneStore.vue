<template>
  <div>
    <el-form label-width="120px" style="width: 80%; max-width:800px;" :disabled="disabled">
      <el-form-item label="货架">
        <el-input v-model="form.shelf" placeholder="请输入货号"  />
      </el-form-item>
      <el-form-item label="sku">
        <el-select
          v-model="form.sku"
          filterable
          remote
          reserve-keyword
          placeholder="请输入sku"
          :remote-method="remoteMethod"
          :loading="loading"
        >
          <el-option
            v-for="item in skuList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="库存操作">
        <el-button-group>
          <el-button type="danger" :icon="Minus"  @click="handleMinusOne">减1</el-button>
          <el-button type="success" @click="handleAddOne">
            加1<el-icon><Plus /></el-icon>
          </el-button>
        </el-button-group>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="handleDeleteHistory">清空下方历史</el-button>
      </el-form-item>
      <el-form-item>

      <div class="text-screen">
        <ul style="display: flex; flex-direction: column-reverse;">
          <li v-for="i in history" :key="i" v-html="i" />
        </ul>
      </div>

      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {searchSkusByKeywords} from "@/api/product";
import {Minus, Plus} from "@element-plus/icons-vue";
import {formatDate} from "@/utils/time";

/**
 * 定义筛选条件
 */

const form = ref({
  shelf: '',
  sku: ''
})

// 是否阻止输入
const disabled = ref(false)

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
      console.log('skuList.value', skuList.value)
    }).finally(() => loading.value = false)
  } else {
    skuList.value = []
    loading.value = false
  }

}

/**
 * 记录当前库存变化情况
 */
// 记录库存变化
const history = ref<string[]>([])
// 记录每个sku的当前最终变化
const finalChangeObj = ref({})
// 清空目前记录
const handleDeleteHistory = () => {
  history.value = []
  finalChangeObj.value = {}
}

const temp: string = '【$time】【$skc-sku】刚完成 $op 1的操作，当前有记录的该产品的总变化为$final件'

// 初步格式化模版
const firstFormatTemp = () => {
  const currentTime = new Date();
  const formattedTime = formatDate(currentTime);

  let total = finalChangeObj[form.value.sku].toString()
  if (finalChangeObj[form.value.sku] > 0 ) total = '+' + total

  return temp.replace('$time', formattedTime).
  replace('$skc-sku', form.value.sku).
  replace('$final', total)
}

// 增加1个库存
const handleAddOne = () => {
  disabled.value = true
  if(!finalChangeObj[form.value.sku]) finalChangeObj[form.value.sku] = 0
  finalChangeObj[form.value.sku]++

  const historyStr = firstFormatTemp().replace('$op', '<span style="color: green;">加</span>')
  history.value.push(historyStr)
  disabled.value = false
}

// 减少1个库存
const handleMinusOne = () => {
  disabled.value = true
  if(!finalChangeObj[form.value.sku]) finalChangeObj[form.value.sku] = 0
  finalChangeObj[form.value.sku]--

  const historyStr = firstFormatTemp().replace('$op', '<span style="color: red;">减</span>')
  history.value.push(historyStr)
  disabled.value = false
}

</script>

<style scoped lang="scss">
::v-deep(.custom-red-button) {
  background-color: red !important;
}

.text-screen {
  max-height: 300px;
  overflow-y: scroll;
  padding-right: 20px;
}

</style>