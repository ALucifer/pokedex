<template>
  <div
    v-if="pokemon"
    :class="{ selected: active }"
    class="pokemon-card"
    @click="emit('select:pokemon', pokemon)"
    @dblclick="addPokemon(pokemon)"
  >
    <img v-if="pokemon.sprites.front_default" :src="pokemon.sprites.front_default" />
    <p>{{ pokemon.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PokemonClient } from 'pokenode-ts'
import type { Pokemon } from '@/props.ts'
import { useTeamStore } from '@/store/team'

const props = defineProps<{ name: string; active: boolean }>()
const emit = defineEmits<{
  'select:pokemon': [pokemon: Pokemon]
}>()

const pokedex = new PokemonClient()
const pokemon = ref<Pokemon>()

async function fetchPokemon() {
  const result = await pokedex.getPokemonByName(props.name)
  pokemon.value = result
}

await fetchPokemon()

const { addPokemon } = useTeamStore()
</script>

<style scoped>
.pokemon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.22);
}

.pokemon-card:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.selected {
  -webkit-box-shadow: 0px 0px 20px 0px rgba(255, 0, 0, 0.22);
  box-shadow: 0px 0px 20px 0px rgba(255, 0, 0, 0.22);
  border: 1px solid rgba(255, 0, 0, 0.22);
}

img {
  width: 70px;
  height: 70px;
}

p {
  margin: 0;
}
</style>
