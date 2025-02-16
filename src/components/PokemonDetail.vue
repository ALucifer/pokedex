<template>
  <div class="container" :class="backgroundColor">
    <div class="header">
      <div class="information">
        <h3>{{ pokemon.name }}</h3>
        <p>#{{ pokemon.id }}</p>
      </div>
      <img v-if="pokemon.sprites.front_default" :src="pokemon.sprites.front_default" />
    </div>
    <div class="content">
      <ul>
        <BulletType v-for="type in pokemon.types" :key="type.type.name" :type="type" />
      </ul>
      <div class="flex">
        <PokemonDescription title="Weight" :value="pokemon.weight / 10 + ' kg'">
          <template #icon><i class="bi bi-handbag"></i></template>
        </PokemonDescription>
        <PokemonDescription title="Height" :value="pokemon.height / 10 + ' m'">
          <template #icon><i class="bi bi-ladder"></i></template>
        </PokemonDescription>
        <PokemonDescription title="Moves" :is-last="true">
          <template #description>
            <ul class="abilities">
              <li v-for="ability in pokemon.abilities" :key="ability.ability.name + pokemon.name">
                {{ ability.ability.name }}
              </li>
            </ul>
          </template>
        </PokemonDescription>
      </div>
      <div class="stats__container">
        <h3>Base stats</h3>
        <PokemonStat
          v-for="stat in pokemon.stats"
          :key="stat.stat.name + pokemon.name"
          :label="shortName(stat.stat.name as Stats)"
          :background-color="statBackgroundColor(stat.stat.name as Stats)"
          :value="stat.base_stat"
        />
      </div>
      <button class="cta" :class="backgroundColor" @click="addPokemon(pokemon)">
        Ajouter à l'équipe
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/props.ts'
import BulletType from '@/components/BulletType.vue'
import PokemonDescription from '@/components/PokemonCaracteristique.vue'
import PokemonStat from '@/components/PokemonStat.vue'
import { useTeamStore } from '@/store/team'
import { usePokemon, type Stats } from '@/composables/usePokemon'

const props = defineProps<{ pokemon: Pokemon }>()

const { addPokemon } = useTeamStore()

const { backgroundColor, shortName, statBackgroundColor } = usePokemon(props.pokemon)
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 20px;
  background-color: rgb(168, 168, 168);
  width: 500px;
  height: 750px;
  border-radius: 8px;
  padding: 8px;

  .header {
    display: flex;
    flex-direction: column;
    color: white;
    height: 25%;

    .information {
      display: flex;
      justify-content: space-between;
    }

    h3 {
      font-size: 34px;
      margin: 0;
    }
  }

  img {
    height: 250px;
    width: 250px;
    margin: 0 auto;
    z-index: 10;
  }

  .content {
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-grow: 1;
    background-color: white;
    border-radius: 4px;
    box-shadow: 2px 2px 8px #585858;
    padding: 100px 16px 0;

    ul {
      display: flex;
      gap: 4px;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  }
}

.abilities {
  flex-direction: column;
}

.stats {
  &__container {
    width: 100%;
  }
}

.cta {
  color: white;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 4px 16px;
}
</style>
