<template>
  <RouterLink
    v-if="pokemon"
    :to="{ name: 'pokemon', params: { slug: pokemon.name } }"
    class="pokemon-card"
  >
    <img v-if="pokemon.sprites.front_default" :src="pokemon.sprites.front_default" />
    <p>{{ pokemon.name }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Pokemon } from 'pokenode-ts'

defineProps<{ pokemon: Pokemon }>()
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

a {
  text-decoration: none;
  color: black;
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
