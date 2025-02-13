import type { InjectionKey, ComputedRef } from 'vue'

export const pokemonClassType = Symbol() as InjectionKey<ComputedRef<string>>
