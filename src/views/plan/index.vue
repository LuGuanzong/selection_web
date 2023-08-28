<script setup lang="ts">
  import Overview from "@/views/plan/overview/index.vue";

  import Detail from "@/views/plan/detail/index.vue";

  defineOptions({ name: 'planIndex' })
</script>

<template>
  <div class="outer-plan-content">
    <overview />
    <detail />
  </div>
</template>

<style scoped lang="scss">
.outer-plan-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>