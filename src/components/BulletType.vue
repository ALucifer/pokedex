<template>
  <div class="type" :class="'type-' + type.type.name">{{ type.type.name }}</div>
</template>

<script setup lang="ts">
import type { PokemonType } from 'pokenode-ts'

defineProps<{ type: PokemonType }>()
</script>

<style scoped lang="scss">
.type {
  padding: 4px 16px;
  border-radius: 16px;
  color: white;
}
</style>
