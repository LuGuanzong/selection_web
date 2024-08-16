<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="定位" name="shelvesWithSku">
      <shelves-with-sku />
    </el-tab-pane>
    <el-tab-pane label="空仓" name="rest">
      <rest />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import ShelvesWithSku from "./shelvesWithSku.vue";

import { ref } from 'vue'
import Rest from "@/views/product/store/search/rest.vue";

const activeName = ref('shelvesWithSku')
</script>

<style scoped>

</style>