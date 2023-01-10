import React from "react";
import { PokemonButtonMoreComponent } from "../../components/pokemon-button-more/pokemon-button-more.component";
import { PokemonListComponent } from "../../components/pokemon-list/pokemon-list.component";
import { PokemonSearchComponent } from "../../components/pokemon-search/pokemon-search.component";
import "./pokemon-list.page.css";

export const PokemonListPage = () => {
  return (
    <>
      <PokemonSearchComponent />
      <PokemonListComponent />
      <PokemonButtonMoreComponent />
    </>
  );
};
