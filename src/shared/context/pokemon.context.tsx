import { createContext } from "react";
import { PokemonContext as P } from "../../features/pokemon/interfaces/pokemon-context.interface";

export const PokemonContext = createContext<P>({
  pokemon: [],
  setPokemon: () => {},
  nextPage: "",
  setNextPage: () => {},
});
