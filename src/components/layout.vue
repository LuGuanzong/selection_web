<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-scrollbar>
            <el-menu>
              <el-menu-item v-for="route in routes" :key="route.path" :index="route.path" @click="handleRouteChange(route)">
                {{ route.name }}
              </el-menu-item>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from '@/router'; // 引入你的路由配置

console.log(router)

export default {
  name: "layout",
  computed: {
    routes() {
      // 这里只过滤了顶级路由，你可以根据需要调整逻辑
      return router.options.routes.filter(route => !route.children);
    }
  },
  methods: {
    handleRouteChange(route) {
      this.$router.push(route.path);
    }
  }
}
</script>

<style scoped>
:deep(.el-header) {
  background-color: #f56c6c;
}
</style>