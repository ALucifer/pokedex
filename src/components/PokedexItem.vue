<template>
  <ul class="pokedex">
    <PokemonCard
      v-for="pokemon in pokemons"
      :name="pokemon.name"
      :key="pokemon.name"
      :active="model === pokemon.name"
      v-memo="[model === pokemon.name]"
      @select:pokemon="(e) => (model = e)"
    />
  </ul>
</template>

<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'

defineProps<{ pokemons: { name: string }[] }>()

const model = defineModel()
</script>

<style scoped>
.pokedex {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  padding: 0;
  list-style-type: none;
}
</style>
