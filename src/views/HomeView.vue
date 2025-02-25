<template>
  <div class="middle app">
    <RouterLink :to="{ name: 'pokedex' }" class="card">Pokedex</RouterLink>
    <RouterLink :to="{ name: 'team' }" class="card"
      >Equipe
      <span v-if="totalPokemons > 0" class="pin">{{ totalPokemons }}</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useTeamStore } from '@/store/team'
import { storeToRefs } from 'pinia'

const teamStore = useTeamStore()
const { totalPokemons } = storeToRefs(teamStore)
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: black;
}

.app {
  gap: 36px;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 6px;
  background: linear-gradient(to bottom, #ffffff 0%, #f9f9f9 100%);
  position: relative;

  &:hover {
    background: linear-gradient(to bottom, #f7f7f7 0%, #eeeeee 100%);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
}

.pin {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  padding: 4px 8px;
  border-radius: 16px;
  color: white;
}
</style>
