<template>
  <div class="change-store-container">
    <el-form label-width="120px" style=" min-width:400px;" :disabled="disabled">
      <el-form-item label="货架">
        <shelf-select v-model="form.shelf" />
      </el-form-item>
      <el-form-item label="sku">
        <select-sku v-model="form.skcSku" />
      </el-form-item>
      <el-form-item label="库存操作">
        <el-button-group>
          <el-button type="danger" :icon="Minus" :disabled="buttonDisabled"  @click="handleMinusOne">减1</el-button>
          <el-button type="success"  :disabled="buttonDisabled" @click="handleAddOne">
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
import {computed, ref, onMounted, onUnmounted} from "vue";
import {changeOneStore} from "@/api/product";
import {Minus, Plus} from "@element-plus/icons-vue";
import {formatDate} from "@/utils/time";
import SelectSku from "@/views/product/components/selectSku.vue";
import ShelfSelect from "@/views/product/components/shelfSelect.vue";
import emitter from "@/utils/emitter";


/**
 * 定义筛选条件
 */
const form = ref({
  shelf: '',
  skcSku: ''
})

// 是否阻止输入
const disabled = ref(false)

// 接收兄弟组件带入数据
const initQuickOutIn = (data) => {
  form.value.shelf = data.shelf || ''
  form.value.skcSku = data.skcsku || ''
}

onMounted(() => {
  emitter.on('quickOutIn', data => initQuickOutIn(data))
})
onUnmounted(() => emitter.off('quickOutIn'))

/**
 * 记录当前库存变化情况
 */
// 判断当前按钮是否可用
const buttonDisabled = computed(() => !(form.value.shelf && form.value.skcSku))

// 记录库存变化
const history = ref<string[]>([])
// 记录每个sku的当前最终变化
const finalChangeObj = ref<any>({})
const finalChangeKey = () => form.value.skcSku + form.value.shelf
// 清空目前记录
const handleDeleteHistory = () => {
  history.value = []
  finalChangeObj.value = {}
}

const temp: string = '【$time】【$shelf】【$skc-sku】<br>刚完成 $op 1的操作，当前有记录的该产品在该货架的总变化为$final件'

// 初步格式化模版
const firstFormatTemp = () => {
  const currentTime = new Date();
  const formattedTime = formatDate(currentTime);

  let total = finalChangeObj.value[finalChangeKey()].toString()
  if (finalChangeObj.value[finalChangeKey()] > 0 ) total = '+' + total

  return temp.replace('$time', formattedTime).
      replace('$shelf', form.value.shelf).
      replace('$skc-sku', form.value.skcSku).
      replace('$final', total)
}

// 构建库存更改请求
const buildStoreApi = (mode: 'add' | 'reduce') => {
  const params = {
    mode,
    shelf: form.value.shelf,
    skc: form.value.skcSku.split('-')[0],
    sku: form.value.skcSku.split('-')[1]
  }
  return changeOneStore(params, true)
}

// 增加1个库存
const handleAddOne = () => {
  disabled.value = true

  buildStoreApi('add').then((_: any) => {
    if(!finalChangeObj.value[finalChangeKey()]) finalChangeObj.value[finalChangeKey()] = 0
    finalChangeObj.value[finalChangeKey()]++
    const historyStr = firstFormatTemp().replace('$op', '<span style="color: green;">加</span>')
    history.value.push(historyStr)
  }).finally(() => disabled.value = false)
}

// 减少1个库存
const handleMinusOne = () => {
  disabled.value = true

  buildStoreApi('reduce').then((res: any) => {
    if(!finalChangeObj.value[finalChangeKey()]) finalChangeObj.value[finalChangeKey()] = 0
    finalChangeObj.value[finalChangeKey()]--
    const historyStr = firstFormatTemp().replace('$op', '<span style="color: red;">减</span>')
    history.value.push(historyStr)
  }).finally(() => disabled.value = false)
}

</script>

<style scoped lang="scss">
.text-screen {
  max-height: 300px;
  overflow-y: scroll;
  padding-right: 20px;
}

</style>