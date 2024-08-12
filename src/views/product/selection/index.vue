<template>
  <div class="handle-box">
      <import />
    <button @click="handleTest">test</button>
  </div>
</template>

<script lang="ts" setup>
import Import from "@/views/product/selection/import.vue";
import {fetchHelloworld} from "@/api/product";

const handleTest = () => {
  fetchHelloworld().then(res => {
    console.log('res', res)
  })
}
</script>

<style scoped>

</style>