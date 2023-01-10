import { PokemonResult } from "./pokemon-result.interface";

export interface PokemonPage {
  count: number;
  next: string;
  previous: string;
  results: [PokemonResult];
}
