import { computed } from 'vue'
import { useStorage } from '@/composables/storage/useStorage'
import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', () => {
  const { items, update } = useStorage<number[]>('team', [])
  const totalPokemons = computed(() => items.value.length ?? 0)

  function add(id: number) {
    items.value.push(id)
    update(items.value)
  }

  function remove(index: number) {
    items.value.splice(index, 1)
    update(items.value)
  }

  return {
    totalPokemons,
    items,
    add,
    remove,
  }
})
