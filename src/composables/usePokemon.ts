import type { Pokemon } from '@/props'
import { computed } from 'vue'

export enum Stats {
  hp = 'hp',
  attack = 'attack',
  defense = 'defense',
  specialattack = 'special-attack',
  specialdefense = 'special-defense',
  speed = 'speed',
}

type Conf = {
  [key in Stats]: {
    color: string
    shortName: string
  }
}

export function usePokemon(pokemon: Pokemon) {
  const statsConfirugration: Conf = {
    hp: {
      color: '#FF4D4D',
      shortName: 'HP',
    },
    attack: {
      color: '#FF7F2A',
      shortName: 'ATK',
    },
    defense: {
      color: '#4D9AFF',
      shortName: 'DEF',
    },
    'special-attack': {
      color: '#A63DFF',
      shortName: 'SATK',
    },
    'special-defense': {
      color: '#30C070',
      shortName: 'SDEF',
    },
    speed: {
      color: '#FFD531',
      shortName: 'SPD',
    },
  }

  const backgroundColor = computed<string>(
    () => 'type-' + (pokemon.types[0] ? pokemon.types[0].type.name : 'default'),
  )

  function shortName(stat: Stats) {
    return statsConfirugration[stat].shortName ?? new Error('Configuration missing from %s')
  }

  function statBackgroundColor(stat: Stats): string {
    return statsConfirugration[stat].color ?? new Error('Configuration missing')
  }

  return {
    backgroundColor,
    shortName,
    statBackgroundColor,
  }
}
