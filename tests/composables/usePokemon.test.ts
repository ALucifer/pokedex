import { describe, expect, test } from 'vitest'
import { Stats, usePokemon } from '@/composables/usePokemon.ts'
import type { Pokemon } from 'pokenode-ts'

describe('usePokemon composable', () => {
  const pokemon = {
    types: [],
  }

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

  test('should render default background', () => {
    const { backgroundColor } = usePokemon(pokemon)

    expect(backgroundColor.value).toBe('type-default')
  })

  test.each([
    { stat: Stats.hp, color: '#FF4D4D' },
    { stat: Stats.attack, color: '#FF7F2A' },
    { stat: Stats.defense, color: '#4D9AFF' },
    { stat: Stats.specialattack, color: '#A63DFF' },
    { stat: Stats.specialdefense, color: '#30C070' },
    { stat: Stats.speed, color: '#FFD531' },
  ])('should render stat background color for $stat', ({ stat, color }) => {
    const { statBackgroundColor } = usePokemon(pokemon)

    const statColor = statBackgroundColor(stat)

    expect(statColor).toBe(color)
  })

  test('should throw error for shortName when configuration not found stat', () => {
    const { shortName } = usePokemon(pokemon)

    const stat = 'notFound'

    expect(() => shortName(stat)).toThrowError(`Stat '${stat}' not found in configuration`)
  })

  test('should throw error for statBackgroundColor when configuration not found stat', () => {
    const { statBackgroundColor } = usePokemon(pokemon)

    const stat = 'notFound'

    expect(() => statBackgroundColor(stat)).toThrowError(
      `Stat '${stat}' not found in configuration`,
    )
  })
})
