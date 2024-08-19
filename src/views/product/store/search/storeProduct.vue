<template>
  <el-form>
    <el-form-item label="货架号">
      <shelf-select v-model="shelf" style="max-width: 500px;" />
    </el-form-item>
    <el-form style="height: 500px;">
        <el-table
          v-if="tableData.length > 0"
          :data="tableData"
          :default-sort="{ prop: 'sku_count_in_shelf', order: 'descending' }"
          style="width: 100%"
          height="500px"
      >
        <el-table-column
            v-for="(item, index) in tableColumns"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :sortable="item.sortable"
            :width="item.width"
        />
      </el-table>
      <el-empty v-else-if="shelf" description="当前货仓没有商品" />
    </el-form>
  </el-form>
</template>

<script lang="ts" setup>
import {ref, watchEffect} from 'vue'
import ShelfSelect from "@/views/product/components/shelfSelect.vue";
import {getStoreProducts} from "@/api/product";

/**
 * 货架号
 */
const shelf = ref('')

/**
 * 表格数据
 */
const tableData = ref<any[]>([])

const tableColumns = [
  { prop: "skc_sku", label: "产品编号", width: '210' },
  { prop: "skc_name", label: "skc名称" },
  { prop: "sku_style", label: "型号" },
  { prop: "sku_count_in_shelf", label: "仓内数量", width: '120', sortable: true },
  { prop: "sku_total", label: "库存总数", width: '120', sortable: true },
  { prop: "sku_img_url", label: "图片链接" },
]

watchEffect(() => {
  if (!shelf.value) {
    tableData.value = []
    return
  }

  const params = { shelf: shelf.value }

  getStoreProducts(params).then(res => {
    tableData.value = res.data
    console.log('tabledata', res.data)
  })
})

</script>

<style scoped lang="scss">

</style>