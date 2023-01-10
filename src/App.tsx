import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PokemonListPage } from "./features/pokemon/pages/pokemon-list-page/pokemon-list.page";
import { PokemonProvider } from "./shared/providers/pokemon.provider";

function App() {
  return (
    <Router>
      <Switch>
        <PokemonProvider>
          <Route path="/" exact component={PokemonListPage} />
          <Route path="/pokemon" exact component={PokemonListPage} />
        </PokemonProvider>
      </Switch>
    </Router>
  );
}

export default App;
