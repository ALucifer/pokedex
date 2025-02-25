<template>
  <div class="flex col full-h">
    <Navbar />
    <div class="middle">
      <ul class="pokedex">
        <PokemonCard
          v-for="pokemon in pokemons"
          :pokemon="pokemon"
          :key="pokemon.id"
          @pokemon:load="(pokemon) => pokemons.push(pokemon)"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'
import Navbar from '@/components/include/NavbarItem.vue'
import { BackgroundBodyClasses, useBodyClass } from '@/composables/useBodyClass'
import { useFetchPokemons } from '@/composables/pokemons/useFetchPokemons'
import type { Pokemon } from 'pokenode-ts'

const PokemonCard = defineAsyncComponent(() => import('@/components/PokemonCard.vue'))
useBodyClass(BackgroundBodyClasses.red)

const pokemons = ref<Pokemon[]>([])

onMounted(async () => {
  pokemons.value = await useFetchPokemons(1, 151)
})
</script>

<style scoped lang="scss">
.pokedex {
  background-color: white;
  width: 1200px;
  height: 600px;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  padding: 32px;
  list-style-type: none;
  border-radius: 8px;
}
</style>
