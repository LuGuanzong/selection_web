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
          <router-view />
        </el-main>


      </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import LayoutMenu from "@/components/layoutMenu.vue";
import LayoutHeader from "@/components/layoutHeader.vue";

</script>

<style scoped>
.el-header-class {
  padding: 0;
}
</style>