<script setup lang="ts">
import {  computed } from 'vue';

interface Props {
  prefix?: string;
  name: string;
}

const props = defineProps<Props>();

// 使用 computed 属性来提供带有默认值的属性
const computedPrefix = computed(() => props.prefix ?? 'icon');

</script>

<template>
  <svg aria-hidden="true" >
    <use :xlink:href="`#${computedPrefix}-${props.name}`" />
  </svg>
</template>

<style scoped lang="scss">

</style>