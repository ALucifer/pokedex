import { PokemonClient } from 'pokenode-ts'

export async function useFetchPokemon(name: string) {
  const pokedex = new PokemonClient()
  try {
    return pokedex.getPokemonByName(name)
  } catch {
    throw new Error('Erreur sur le complet')
  }
}
