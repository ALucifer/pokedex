<template>
  <div class="container" :class="'type-' + mainType">
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
          :label="stat.stat.name"
          :value="stat.base_stat"
          :type="mainType"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Pokemon } from '@/props.ts'
import BulletType from '@/components/BulletType.vue'
import PokemonDescription from '@/components/PokemonDescription.vue'
import PokemonStat from '@/components/PokemonStat.vue'

const props = defineProps<{ pokemon: Pokemon }>()

const mainType = computed(() =>
  props.pokemon.types[0] ? props.pokemon.types[0].type.name : 'default',
)
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
</style>
