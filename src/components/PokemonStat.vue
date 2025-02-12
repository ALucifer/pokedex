<template>
  <div class="stat__container">
    <p class="stat__label">{{ labels[label] }}</p>
    <span class="stat__value">{{ value }}</span>
    <div class="bar__container">
      <p class="bar"></p>
      <p class="bar bar__value" :class="'type-' + type"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  label: string
  value: number
  type: string
}

const props = defineProps<Props>()

const cssWidth = ref(props.value / 2 + '%')

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

.bar {
  position: absolute;
  width: 100%;
  left: 0;
  height: 10px;
  border-radius: 16px;
  margin: 0;
  z-index: 1;
  background-color: gray;

  &__container {
    position: relative;
    height: 10px;
    width: 100%;
  }

  &__value {
    width: v-bind(cssWidth);
    z-index: 10;
  }
}
</style>
