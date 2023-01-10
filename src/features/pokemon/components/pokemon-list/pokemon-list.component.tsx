import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../../../shared/context/pokemon.context";
import * as pokemonService from "../../../../shared/services/pokemon.service";
import { PokemonListLayout } from "./pokemon-list.layout";

export const PokemonListComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { pokemon, setPokemon, setNextPage } = useContext(PokemonContext);

  useEffect(() => {
    getPokemonList();
  }, []);

  const getPokemonList = async () => {
    try {
      setLoading(true);
      const page = await pokemonService.getPokemonPage();
      const pokemon = await pokemonService.getAllPokemonByPage(page);
      setNextPage(page.next);
      setPokemon(pokemon);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PokemonListLayout
      loading={loading}
      error={error}
      pokemon={pokemon}
    ></PokemonListLayout>
  );
};
