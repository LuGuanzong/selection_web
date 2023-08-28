<script setup lang="ts">
  defineOptions({ name: 'planMain' })

  import {ref} from "vue";

  const k = ref<number>(1)
</script>

<template>
  <div>1111</div>
  <div>{{ k }}</div>
</template>

<style scoped>

</style>

<!--<script>-->
<!--export default {-->
<!--  name: 'planMain',-->
<!--}-->
<!--</script>-->