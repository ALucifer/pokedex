import { describe, expect, test } from 'vitest'
import type { Pokemon } from '@/props.ts'
import { Stats, usePokemon } from '@/composables/usePokemon.ts'

describe('usePokemon composable', () => {
  test.each([
    { types: [{ type: { name: 'test' } }] },
    { types: [{ type: { name: 'a' } }] },
    { types: [{ type: { name: 'b' } }] },
  ])('should return good background color for pokemon %o', async (pokemon) => {
    const { backgroundColor } = usePokemon(pokemon as Pokemon)

    expect(backgroundColor.value).toBe('type-' + pokemon.types[0].type.name)
  })

  test.each([{ types: [{ type: { name: 'a' } }], stats: [{ stat: { name: Stats.hp } }] }])(
    'should return shortName',
    (pokemon: Pokemon) => {
      const { shortName } = usePokemon(pokemon)

      expect(shortName(pokemon.stats[0].stat.name)).toBe('HP')
    },
  )
})
