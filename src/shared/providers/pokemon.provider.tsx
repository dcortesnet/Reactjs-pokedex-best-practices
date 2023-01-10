import React, { useState } from "react";
import { PokemonContext } from "../context/pokemon.context";
import { Pokemon } from "../../features/pokemon/interfaces/pokemon.interface";

export const PokemonProvider = (props: any) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [nextPage, setNextPage] = useState<string>("");

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        nextPage,
        setNextPage,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
