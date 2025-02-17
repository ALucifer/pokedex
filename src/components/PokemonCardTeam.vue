<template>
  <div
    @mouseover="showDeleteElement = true"
    @mouseleave="showDeleteElement = false"
    class="team-member"
    :class="backgroundColor"
  >
    <img v-if="pokemon.sprites.front_default" :src="pokemon.sprites.front_default" alt="" />
    <div class="member__container">
      <p class="member__informations">
        <span>{{ pokemon.name }}</span>
        <span>#{{ pokemon.id }}</span>
      </p>
      <div class="member__stats">
        <StatistiqueCircle
          v-for="stat in mainStatsValue"
          :key="stat.stat.name + pokemon.name"
          :value="stat.base_stat"
          :label="shortName(stat.stat.name as Stats)"
          :background-color="statBackgroundColor(stat.stat.name as Stats)"
        />
      </div>
    </div>
    <transition>
      <div v-if="showDeleteElement" class="actions" @click="removePokemon(index)">X</div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Stats, usePokemon } from '@/composables/usePokemon'
import type { Pokemon } from '@/props'
import { useTeamStore } from '@/store/team'
import StatistiqueCircle from '@/components/statistiques/StatistiqueCircle.vue'

const props = defineProps<{ pokemon: Pokemon; index: number }>()

const { backgroundColor, statBackgroundColor, shortName } = usePokemon(props.pokemon)
const { removePokemon } = useTeamStore()

const mainStatsValue = computed(() => {
  return props.pokemon.stats.filter((stat) =>
    [Stats.attack, Stats.defense, Stats.hp].includes(stat.stat.name as Stats),
  )
})

const showDeleteElement = ref(false)
</script>

<style scoped lang="scss">
.team-member {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  color: white;
  min-height: 130px;

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    background-color: red;
    cursor: pointer;
  }
}

.member {
  &__container {
    flex-grow: 1;
    padding: 8px;
  }

  &__informations {
    display: flex;
    justify-content: space-between;
  }

  &__stats {
    display: flex;
    gap: 8px;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
