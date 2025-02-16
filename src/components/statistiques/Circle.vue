<template>
  <div class="progress-circle">
    <div class="value">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ value: number; backgroundColor: string; label: string }>()
</script>

<style scoped lang="scss">
.progress-circle {
  --percentage: calc(v-bind('$props.value') / 2);
  width: 50px;
  height: 50px;
  background: conic-gradient(
    v-bind('props.backgroundColor') calc(var(--percentage) * 1%),
    white 0%
  );
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: v-bind('props.backgroundColor');
  font-size: 1.5em;
  font-weight: bold;
}

.progress-circle::before {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
}

.progress-circle .value {
  position: relative;
  font-size: 0.5em;
}
</style>
