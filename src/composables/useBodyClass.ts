import { onBeforeUnmount, onMounted, ref } from 'vue'

export enum BackgroundBodyClasses {
  red = 'red',
  green = 'green',
}

export function useBodyClass(className: BackgroundBodyClasses) {
  const classNameValue = ref(className)

  onMounted(() => document.body.classList.add(classNameValue.value))
  onBeforeUnmount(() => document.body.classList.remove(classNameValue.value))
}
