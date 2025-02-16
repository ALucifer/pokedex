<template>
  <div class="full">
    <input type="checkbox" v-model="checkbox" />
    <CardItem :inline="checkbox">
      <template #footer>
        <div class="test">
          <button>Hello</button>
        </div>
      </template>
    </CardItem>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardItem from '@/components/CardItem.vue'

const checkbox = ref(true)
</script>

<style scoped lang="scss">
.full {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.test {
  padding: 12px;
  height: 100%;
}
</style>
