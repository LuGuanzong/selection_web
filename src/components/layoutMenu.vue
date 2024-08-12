<template>
<!--    如果当前路由没有孩子，那么直接渲染为el-menu-item -->
<!--    如果当前路由有孩子，当前元素渲染为el-sub-menu，的meta.title渲染为sub-menu的title-->
  <!--  遍历孩子，如果孩子有孩子，那么当前元素渲染为el-menu-item-group，当前元素的meta.title渲染为group的title  -->
    <!--   遍历孩子，把孩子渲染为el-menu-item，index为元素的name，title为meta.title -->
  <!-- 遍历孩子，如果孩子没有孩子，把孩子渲染为el-menu-item，index为元素的name，title为meta.title   -->
  <el-menu
    v-if="menuData"
    active-text-color="#ffd04b"
    :default-active="onRouteName"
    background-color="#545c64"
    class="el-menu-vertical"
    text-color="#fff"
    :collapse="isFolded"
    @select="handleGoToPage"
  >
    <template v-for="(item, index) in menuData"  :key="index">
      <el-menu-item v-if="!item.children" :index="item.name">
        <el-icon>
          <svg-icon :name="item.meta.icon" width="20px" height="20px" style="margin-right: 10px; color: var(--vt-c-white-soft)" />
        </el-icon>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="item.name || item.path">
        <template #title>
          <el-icon>
              <svg-icon :name="item.meta.icon" width="20px" height="20px" style="margin-right: 10px; color: var(--vt-c-white-soft)" />
          </el-icon>
          <span slot="title">{{ item.meta.title }}</span>
        </template>

        <template v-for="(secItem, secIndex) in item.children" :key="secIndex">
          <el-menu-item-group v-if="secItem.children" :index="secItem.name" :title="secItem.meta.title" >
            <el-menu-item v-for="(thItem, thIndex) in secItem.children" :key="secIndex" :index="thItem.name">
              <span>{{ thItem.meta.title }}</span>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item v-else :index="secItem.name">
            <span>{{ secItem.meta.title }}</span>
          </el-menu-item>

        </template>

      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {asyncRouter} from "@/router";
import SvgIcon from "@/components/svgIcon.vue";
import {useSidebar} from "@/store/sidebar";
import {useRoute, useRouter} from 'vue-router';

const router = useRouter()

/**
 * 默认打开的设置
 */
const route = useRoute();
const onRouteName = computed(() => {
    return route.name;
})

/**
 * 折叠的控制
 */
const sidebarStore  = useSidebar()

const isFolded = computed(() => sidebarStore.folded)

/**
 * 菜单初始化
 */
const menuData = computed(() => asyncRouter || [])

// 跳转到对应页面
const handleGoToPage = (index) => {
  console.log('index', index)
  router.push({name: index})
}
</script>

<style scoped lang="scss">
.el-menu-vertical {
  height: 100vh;

  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>