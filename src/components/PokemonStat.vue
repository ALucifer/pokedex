<template>
  <div class="stat__container">
    <p class="stat__label">{{ labels[label] }}</p>
    <span class="stat__value">{{ value }}</span>
    <StatItem :value="value" />
  </div>
</template>

<script setup lang="ts">
import StatItem from '@/components/StatItem.vue'

interface Props {
  label: string
  value: number
}

defineProps<Props>()

const labels: { [k: string]: string } = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SATK',
  'special-defense': 'SDEF',
  speed: 'SPD',
}
</script>

<style scoped lang="scss">
.stat {
  &__container {
    display: flex;
    gap: 8px;
    align-items: center;
    height: 18px;
  }

  &__label {
    font-style: bold;
    min-width: 50px;
    text-align: right;
  }

  &__value {
    position: relative;
    text-align: center;
    width: 50px;
    border-left: 1px solid grey;
  }
}
</style>
