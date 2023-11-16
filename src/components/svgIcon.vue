<script setup lang="ts">

defineOptions({ name: 'svgIcon' })

export interface Props {
  prefix: string
  name: string
}
const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  name: '',
})

</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="`#${props.prefix}-${props.name}`" />
  </svg>
</template>

<style scoped lang="scss">

</style>