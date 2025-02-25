import { PokemonClient } from 'pokenode-ts'

export async function useFetchPokemons(start: number, end: number) {
  const pokedex = new PokemonClient()

  try {
    const pokemonsPromise = []

    for (let i = start; i <= end; i++) {
      pokemonsPromise.push(pokedex.getPokemonById(i))
    }

    return Promise.all(pokemonsPromise)
  } catch (e) {
    console.log(e)
    throw new Error('Erreur dans le useFetchPokemons')
  }
}
