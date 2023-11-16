<!--页头-->
<script setup lang="ts">
import SvgIcon from "@/components/svgIcon.vue";
import {useRouter} from "vue-router";

defineOptions({ name: 'pageHeader' })

/**
 * 基本配置
 */
const router = useRouter()

/**
 * 跳转回上一页
 */
const handleGoBack = () => {
  router.go(-1)
}

/**
 * 跳转回主页
 */
const handleGoHome = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="header-place header">
    <div class="back highlight" @click="handleGoBack">
      <svg-icon name="back" style="width: 20px; height: 20px;" />
      <span>返回</span>
    </div>
    <el-divider direction="vertical" />
    <svg-icon class="highlight" name="home" style="width: 16px; height: 16px;" @click="handleGoHome" />
    <el-divider direction="vertical" />
    <span>
      编辑下周计划
    </span>
  </div>


  <div class="header-place place-holder">占位用的</div>
  <div class="router-content">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 1;
  padding-inline: 20px;
  color: #ffffffa6;
  line-height: 50px;
  background: #6699CC;
  display: flex;
  align-items: center;
}

.header-place {
  width: 100%;
  height: 50px;
}

.place-holder {
  background: rgba(153, 204, 255, 0.2);
}

.back {
  display: flex;
  align-items: center;
  transition: .3s;
}

.highlight {
  &:hover {
    color: #f2f2f2;
    transition: .3s;
    cursor: pointer;
  }
}

.router-content {
  width: 100%;
  height: calc(100vh - 64px);
  background: rgba(153, 204, 255, 0.2);
}
</style>