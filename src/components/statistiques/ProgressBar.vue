<template>
  <div class="bar__container">
    <p class="bar"></p>
    <p class="bar bar__value" :class="backgroundColor"></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ value: number; backgroundColor: string }>()

const cssWidth = ref(props.value / 2 + '%')
</script>

<style scoped lang="scss">
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
    background-color: v-bind('props.backgroundColor');
    z-index: 10;
  }
}
</style>
