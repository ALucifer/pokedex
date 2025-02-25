<template>
  <div class="flex col full-h">
    <Navbar />
    <div class="middle">
      <div class="team__container">
        <div class="team__header">
          <h3>Mon équipe</h3>
          <span>{{ totalPokemons }}/{{ maxPokemonInTeam }}</span>
        </div>
        <div class="team__pokemons">
          <PokemonCardTeam
            v-for="(pokemon, index) in pokemons"
            @delete="remove(index)"
            :key="pokemon.id + pokemon.name"
            :pokemon="pokemon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PokemonCardTeam from '@/components/PokemonCardTeam.vue'
import Navbar from '@/components/include/NavbarItem.vue'
import { useFetchPokemonById } from '@/composables/pokemons/useFetchPokemonById'
import { usePokedexStore } from '@/store/pokedex'
import { useTeamStore } from '@/store/team'
import { storeToRefs } from 'pinia'
import type { Pokemon } from 'pokenode-ts'
import { ref, watchEffect } from 'vue'

const pokemons = ref<Pokemon[]>([])
const maxPokemonInTeam = ref(5)

const teamStore = useTeamStore()
const pokedexStore = usePokedexStore()

const { totalPokemons, items } = storeToRefs(teamStore)
const { pokemons: pokemonsFromPokedex } = storeToRefs(pokedexStore)

const { remove } = teamStore
const { add } = pokedexStore

watchEffect(async () => {
  pokemons.value = []
  for (let i = 0; i < totalPokemons.value; i++) {
    const pokemonFromPokedex = pokemonsFromPokedex.value[items.value[i]]
    if (pokemonFromPokedex) {
      pokemons.value.push(pokemonFromPokedex)
    } else {
      const pokemon = await useFetchPokemonById(items.value[i])
      pokemons.value.push(pokemon)
      add(pokemon)
    }
  }
})
</script>

<style scoped lang="scss">
.team {
  &__container {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 16px;
  }

  &__header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  &__pokemons {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
