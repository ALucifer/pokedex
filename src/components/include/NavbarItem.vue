<template>
  <nav>
    <ul>
      <RouterLink :to="{ name: 'home' }">Acceuil</RouterLink>
      <RouterLink :to="{ name: 'team' }"
        >Team<span v-if="totalPokemons > 0" class="pin">{{ totalPokemons }}</span></RouterLink
      >
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useTeamStore } from '@/store/team'
import { storeToRefs } from 'pinia'

const teamStore = useTeamStore()
const { totalPokemons } = storeToRefs(teamStore)
</script>

<style scoped lang="scss">
nav {
  background-color: white;
  display: flex;
  justify-content: center;

  ul {
    padding: 0;
    display: flex;
    gap: 16px;
  }

  a {
    text-decoration: none;
    color: black;
  }
}

.pin {
  background-color: red;
  color: white;
  margin-left: 8px;
  border-radius: 8px;
  padding: 4px 8px;
}
</style>
