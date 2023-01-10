import { Pokemon } from "./pokemon.interface";

export interface PokemonContext {
  pokemon: Pokemon[];
  setPokemon: Function;
  nextPage: string;
  setNextPage: Function;
}
