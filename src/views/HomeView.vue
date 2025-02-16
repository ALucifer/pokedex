<template>
  <div class="app">
    <div class="middle">
      <Team v-show="team.length" />
    </div>
    <Pokedex :pokemons="pokemons" v-model="selectedPokemon" />
    <div class="middle">
      <PokemonDetail v-if="selectedPokemon" :pokemon="selectedPokemon" :key="selectedPokemon.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { PokemonClient } from 'pokenode-ts'
import type { Pokemon } from '@/props'
import Team from '@/components/TeamList.vue'
import PokemonDetail from '@/components/PokemonDetail.vue'
import { useTeamStore } from '@/store/team'

const Pokedex = defineAsyncComponent(() => import('@/components/PokedexItem.vue'))

const pokedex = new PokemonClient()

const pokemons = ref<Array<{ name: string }>>([])

async function fetchPokemons() {
  const { results } = await pokedex.listPokemons(0, 151) // Premiere génération
  pokemons.value = results
}

await fetchPokemons()

const selectedPokemon = ref<Pokemon>()

const { pokemons: team } = useTeamStore()
</script>

<style scoped>
.app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
