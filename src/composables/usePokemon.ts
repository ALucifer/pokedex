import type { Pokemon } from '@/props'
import { ref } from 'vue'

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

  const backgroundColor = ref<string>(
    'type-' + (pokemon.types[0] ? pokemon.types[0].type.name : 'default'),
  )

  function shortName(stat: Stats) {
    if (!statsConfirugration[stat]) {
      throw new Error(`Stat '${stat}' not found in configuration`)
    }

    return statsConfirugration[stat].shortName
  }

  function statBackgroundColor(stat: Stats): string {
    if (!statsConfirugration[stat]) {
      throw new Error(`Stat '${stat}' not found in configuration`)
    }

    return statsConfirugration[stat].color
  }

  return {
    backgroundColor,
    shortName,
    statBackgroundColor,
  }
}
