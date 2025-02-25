import { defineStore } from 'pinia'
import type { Pokemon } from 'pokenode-ts'
import { ref } from 'vue'

export const usePokedexStore = defineStore('pokedex', () => {
  const pokemons = ref<Pokemon[]>([])

  function add(pokemon: Pokemon) {
    pokemons.value[pokemon.id] = pokemon
  }

  return {
    pokemons,
    add,
  }
})
