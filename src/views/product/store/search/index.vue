<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="定位" name="shelvesWithSku">
      <shelves-with-sku />
    </el-tab-pane>
    <el-tab-pane label="仓位" name="rest">
      <div class="store">
        <div style="width: 550px">
          <h3>查找仓位</h3>
          <rest />
        </div>
        <div style="width: 100%">
          <h3>出入库</h3>
          <change-one-store style="flex-grow: 14" />
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="仓存" name="storeProduct">
      <store-product />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import ShelvesWithSku from "./shelvesWithSku.vue";

import { ref } from 'vue'
import Rest from "@/views/product/store/search/rest.vue";
import ChangeOneStore from "@/views/product/store/outIn/changeOneStore.vue";
import StoreProduct from "@/views/product/store/search/storeProduct.vue";

const activeName = ref('shelvesWithSku')
</script>

<style scoped lang="scss">
.store {
  display: flex;
  min-width: 600px;
}
</style>