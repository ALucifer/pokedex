import { PokemonClient } from 'pokenode-ts'

export async function useFetchPokemonById(id: number) {
  const pokedex = new PokemonClient()
  try {
    return pokedex.getPokemonById(id)
  } catch {
    throw new Error('Erreur sur le complet')
  }
}
