import { ref } from 'vue'

export function useStorage<T>(key: string, defaultValue: T) {
  const localStorageValue = localStorage.getItem(key)
  const items = ref<T>(localStorageValue ? (JSON.parse(localStorageValue) as T) : defaultValue)

  function update(value: T) {
    const item = JSON.stringify(value)

    localStorage.setItem(key, item)
    items.value = value

    if (item.length === 0) {
      localStorage.removeItem(key)
    }
  }

  return {
    items,
    update,
  }
}
