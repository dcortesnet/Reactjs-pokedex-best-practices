import React, { useContext, useState } from "react";
import { PokemonContext } from "../../../../shared/context/pokemon.context";
import * as pokemonService from "../../../../shared/services/pokemon.service";
import { Pokemon } from "../../interfaces/pokemon.interface";
import { PokemonButtonMoreLayout } from "./pokemon-button-more.layout";

export const PokemonButtonMoreComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { pokemon, setPokemon, nextPage, setNextPage } = useContext(
    PokemonContext
  );

  const getMorePokemon = async () => {
    try {
      setLoading(true);
      const page = await pokemonService.loadMorePokemon(nextPage);
      setNextPage(page.next);
      const pokemonByPage: Pokemon[] = await pokemonService.getAllPokemonByPage(
        page
      );
      setPokemon(pokemon.concat(pokemonByPage));
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {pokemon.length > 1 ? (
        <PokemonButtonMoreLayout
          loading={loading}
          onClick={getMorePokemon}
          error={error}
        ></PokemonButtonMoreLayout>
      ) : (
        ""
      )}
    </>
  );
};
