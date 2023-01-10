import React, { useContext, useState } from "react";
import * as pokemonService from "../../../../shared/services/pokemon.service";
import { PokemonContext } from "../../../../shared/context/pokemon.context";
import { PokemonSearchLayout } from "./pokemon-search.layout";

export const PokemonSearchComponent = () => {
  const [text, setText] = useState("");
  const { setPokemon, setNextPage } = useContext(PokemonContext);

  const handleChange = (e: any) => {
    setText(e.target.value.toLowerCase());
  };

  const searchPokemon = async (e: any) => {
    e.preventDefault();
    if (text) {
      const pokemon = await pokemonService.getPokemonByName(text);
      setPokemon([pokemon]);
    } else {
      const page = await pokemonService.getPokemonPage();
      const pokemon = await pokemonService.getAllPokemonByPage(page);
      setNextPage(page.next);
      setPokemon(pokemon);
    }
  };

  return (
    <PokemonSearchLayout
      onChange={handleChange}
      onSubmit={searchPokemon}
    ></PokemonSearchLayout>
  );
};
