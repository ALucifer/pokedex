<template>
  <div class="description__container" :class="{ divider: !isLast }">
    <p class="description__value">
      <slot name="icon"></slot>
      <slot name="description" v-if="!value"></slot>
      {{ value }}
    </p>
    <p class="description__title">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title: string; value?: string; isLast?: boolean }>(), {
  isLast: false,
})
</script>

<style scoped lang="scss">
.description {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 100px;
    height: 70px;
    justify-content: space-around;
    align-items: center;

    p {
      margin: 0;
    }
  }

  &__value {
    display: flex;
    gap: 8px;
  }

  &__title {
    font-size: 12px;
    color: #666;
  }
}

.divider {
  border-right: 1px solid #e4e4e4;
}
</style>
