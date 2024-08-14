<template>
  <div>
    <el-form label-width="120px" style="width: 80%; max-width:800px;">
      <el-form-item label="sku">
        <select-sku v-model="form.skcSku" />
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
import {computed, ref, watchEffect} from "vue";
import {searchSkuCount} from "@/api/product";
import SelectSku from "@/views/product/components/selectSku.vue";


/**
 * 定义筛选条件
 */
const form = ref({
  skcSku: ''
})

/**
 * 查询库存信息
 */
const shelvesWithSku = ref([])

watchEffect(() => {
  shelvesWithSku.value = []
  if(!form.value.skcSku) return

  const params = {
    skc: form.value.skcSku.split('-')[0],
    sku: form.value.skcSku.split('-')[1]
  }

  searchSkuCount(params).then(res => {
    shelvesWithSku.value = res.data
  })
})

// 获取总数
const total = computed(() => {
  return shelvesWithSku.value.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.count;
  }, 0);
})

</script>

<style scoped>

</style>