import axios from "axios";
import { PokemonPage } from "../../features/pokemon/interfaces/pokemon-page.interface";
import { Pokemon } from "../../features/pokemon/interfaces/pokemon.interface";

export const getPokemonPage = async (): Promise<PokemonPage> => {
  const response: any = await axios.get(
    `${process.env.REACT_APP_POKE_API}?limit=${30}`
  );
  return response.data;
};

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  const response = await axios.get(`${process.env.REACT_APP_POKE_API}/${name}`);
  return response.data;
};

export const getAllPokemonByPage = async (
  pokemonPage: PokemonPage
): Promise<Pokemon[]> => {
  const response: any = await Promise.all(
    pokemonPage.results.map(async (pokemon) => {
      const response: any = await axios.get(pokemon.url);
      return response.data;
    })
  );
  return response;
};

export const loadMorePokemon = async (page: string): Promise<PokemonPage> => {
  const response = await axios.get(page);
  return response.data;
};
