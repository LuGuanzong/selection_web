import { defineStore } from 'pinia'
import {computed, ref} from "vue";

export const useSidebar = defineStore('sidebar', () => {
  const folded = ref<boolean>(false)

  const fold = () => {
    folded.value = !folded.value
  }

  return {
    folded,
    fold,
  }
})