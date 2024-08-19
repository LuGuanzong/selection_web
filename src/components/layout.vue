<template>
  <el-container>
      <el-aside width="fix-content">
        <layout-menu />
      </el-aside>


      <el-container>
        <el-header class="el-header-class">
          <layout-header />
        </el-header>


        <el-main>
          <div class="main">
            <el-scrollbar>
              <router-view />
            </el-scrollbar>
          </div>
        </el-main>


      </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import LayoutMenu from "@/components/layoutMenu.vue";
import LayoutHeader from "@/components/layoutHeader.vue";

</script>

<style scoped lang="scss">
.el-header-class {
  padding: 0;
}
.main {
  height: calc(100vh - 110px);
}
</style>