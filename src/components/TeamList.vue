<template>
  <div class="team__container">
    <div class="team__header">
      <h3>Mon équipe</h3>
      <span>{{ pokemons.length }}/{{ maxPokemons }}</span>
    </div>
    <div class="team__pokemons">
      <PokemonCardTeam
        v-for="(pokemon, index) in pokemons"
        :key="pokemon.id + pokemon.name"
        :pokemon="pokemon"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTeamStore } from '@/store/team'
import PokemonCardTeam from '@/components/PokemonCardTeam.vue'

const { pokemons, maxPokemons } = useTeamStore()
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
