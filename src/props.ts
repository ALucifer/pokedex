export interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonAbility[]
  location_area_encounters: string
  sprites: PokemonSprites
  stats: PokemonStat[]
  types: PokemonType[]
}

export interface PokemonType {
  slot: number
  type: NamedAPIResource
}

interface PokemonStat {
  stat: NamedAPIResource
  effort: number
  base_stat: number
}

interface PokemonAbility {
  is_hidden: boolean
  slot: number
  ability: NamedAPIResource
}

export interface PokemonSprites {
  front_default: string | null
}

interface NamedAPIResource {
  name: string
  url: string
}
