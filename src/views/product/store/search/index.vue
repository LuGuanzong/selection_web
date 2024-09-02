<template>
  <el-tabs v-model="activeName" addable>
    <template #add-icon>
      <el-icon @click="handleOutInVisible">
        <svg-icon name="outIn" />
      </el-icon>
    </template>
    <el-tab-pane label="定位" name="shelvesWithSku">
      <shelves-with-sku />
    </el-tab-pane>
    <el-tab-pane label="仓位" name="rest">
      <div class="store">
        <div style="width: 550px">
          <h3>查找仓位</h3>
          <rest />
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="仓存" name="storeProduct">
      <store-product />
    </el-tab-pane>
  </el-tabs>
<!--  <div style="float: right;width: 50%">-->
<!--    <h3>出入库</h3>-->
<!--    <change-one-store />-->
<!--  </div>-->

  <el-drawer
    v-model="drawerVisible"
    title="出入库"
    size="900"
  >
    <change-one-store />
  </el-drawer>

</template>

<script lang="ts" setup>
import ShelvesWithSku from "./shelvesWithSku.vue";

import {onMounted, onUnmounted, ref} from 'vue'
import Rest from "@/views/product/store/search/rest.vue";
import ChangeOneStore from "@/views/product/store/outIn/changeOneStore.vue";
import StoreProduct from "@/views/product/store/search/storeProduct.vue";
import SvgIcon from "@/components/svgIcon.vue";
import emitter from "@/utils/emitter";

/**
 * 当前的tag页
 */
const activeName = ref('shelvesWithSku')


/**
 * 出入库功能
 */
// 是否显示出入库
const drawerVisible = ref(true)
const handleOutInVisible = () => drawerVisible.value = !drawerVisible.value

// 接收兄弟组件带入数据
onMounted(() => {
  drawerVisible.value = false
  emitter.on('quickOutIn', _ => drawerVisible.value = true )
})
onUnmounted(() => emitter.off('quickOutIn'))


</script>

<style scoped lang="scss">
.store {
  display: flex;
  min-width: 600px;
}
</style>