<!--查询货物在哪个货仓-->
<template>
  <div>
    <el-form label-width="120px" style="width: 80%; max-width:800px;">
      <el-form-item label="sku">
        <select-sku v-model="form.skcSku" />
      </el-form-item>
      <el-form-item v-show="form.skcSku">
        <template v-if="shelvesWithSku.length > 0">
          <div>
            当前该产品共有：{{ total }} 件
          </div>
          <ul style="display: flex; flex-direction: column;">
            <li v-for="item in shelvesWithSku" :key="item.id" style="display: flex;gap: 10px;">
              <span>{{ item.article }} ------ {{ item.count }} 件</span>
              <quick-out-in :shelf="item.article" :skcsku="form.skcSku" />
            </li>
          </ul>
        </template>
        <el-empty v-else description="当前所选sku的数量为0" />

      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref, watchEffect} from "vue";
import {searchSkuCount} from "@/api/product";
import SelectSku from "@/views/product/components/selectSku.vue";
import QuickOutIn from "@/views/product/components/quickOutIn.vue";


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
    console.log('res.data', res.data)
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