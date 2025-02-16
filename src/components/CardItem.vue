<template>
  <div class="container" :class="{ col: !inline }">
    <div v-if="includeHeader" class="header" :class="cssHeader">
      <slot name="header">
        <img src="https://placehold.co/250x250" />
      </slot>
    </div>
    <div v-if="includeContent" class="content">
      <slot name="content"></slot>
    </div>
    <slot v-if="$slots.footer" name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  inline?: boolean
  includeHeader?: boolean
  includeContent?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  inline: false,
  includeHeader: true,
  includeContent: true,
})

const cssHeader = computed(() => (props.inline ? 'header-inline' : 'header-col'))
</script>

<style scoped lang="scss">
.container {
  display: flex;

  background-color: antiquewhite;
  border-radius: 4px;
  overflow: hidden;

  .header-inline {
    img {
      max-height: 100%;
      width: auto;
      display: block;
    }
  }

  .header-col {
    img {
      max-width: 100%;
      width: auto;
      display: block;
    }
  }

  .content {
    padding: 12px;
  }
}

.col {
  flex-direction: column;
}
</style>
