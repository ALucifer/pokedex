import type { Pokemon } from '@/props'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTeamStore = defineStore('team', () => {
  const pokemons = ref<Pokemon[]>([])
  const maxPokemons = ref(5)

  function addPokemon(pokemon: Pokemon) {
    if (pokemons.value.length >= maxPokemons.value) {
      pokemons.value.shift()
    }

    pokemons.value.push(pokemon)
  }

  function removePokemon(index: number) {
    pokemons.value.splice(index, 1)
  }

  return {
    pokemons,
    maxPokemons,
    addPokemon,
    removePokemon,
  }
})
