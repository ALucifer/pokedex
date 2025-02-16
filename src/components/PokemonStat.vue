<template>
  <div class="stat__container">
    <p class="stat__label">{{ label }}</p>
    <span class="stat__value">{{ value }}</span>
    <ProgressBar :value="value" :background-color="backgroundColor" />
  </div>
</template>

<script setup lang="ts">
import ProgressBar from '@/components/statistiques/ProgressBar.vue'

interface Props {
  label: string
  value: number
  backgroundColor: string
}

defineProps<Props>()
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
