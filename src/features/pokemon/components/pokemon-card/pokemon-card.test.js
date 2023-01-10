import { PokemonCardLayout } from "./pokemon-card.layout";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { pokemonMock } from "../../mocks/pokemon.mock";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
describe("PokemonCardLayout", () => {
  it("Renders correctly", () => {
    const r = shallow(
      <PokemonCardLayout
        sprites={pokemonMock.sprites}
        types={pokemonMock.types}
      ></PokemonCardLayout>
    );

    expect(toJson(r)).toMatchSnapshot();
  })
});
