<template>
  <div class="header-container">
    <span class="folder" style="cursor: pointer" @click="handleFold">
      <svg-icon :name="isFolded ? 'openFold' : 'closeFold'" width="25px" height="25px" style="color: #f8f8f8;" />
    </span>

    <span class="system-name">
      SKY商品管理系统
    </span>

    <span>

    </span>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from "@/components/svgIcon.vue";
import {useSidebar} from "@/store/sidebar";
import {computed} from "vue";

const sidebarStore  = useSidebar()

const isFolded = computed(() => sidebarStore.folded)

const handleFold = () => sidebarStore.fold()

</script>

<style scoped lang="scss">
.header-container {
  background: #545c64;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;     /* 垂直居中 */

  .folder {
    opacity: 0; /* 初始透明度为0，即不可见 */
    transition: opacity 0.5s ease; /* 过渡效果应用于opacity属性，持续时间为0.5秒，使用ease缓动函数 */
    cursor: pointer;
  }

  &:hover {
    .folder {
      opacity: 1; /* 在header-container悬停时，将透明度更改为1，即完全可见 */
    }
  }
}

.system-name {
  font-weight: bold;
  font-size: 27px;
  color: var(--vt-c-white-mute);
}
</style>