import { PokemonListLayout } from "./pokemon-list.layout";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { pokemonMock } from "../../mocks/pokemon.mock";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe("PokemonListLayout", () => {
  it("Renders correctly", () => {
    const r = shallow(
      <PokemonListLayout pokemon={[pokemonMock]}></PokemonListLayout>
    );

    expect(toJson(r)).toMatchSnapshot();
  })
  it("Renders <PokemonCardLayout>", () => {
    const r = shallow(
      <PokemonListLayout pokemon={[pokemonMock]}></PokemonListLayout>
    );

    expect(r.find("PokemonCardLayout").exists()).toBeTruthy();
  });

  it("Renders <LoadingSpinnerLayout>", () => {
    const r = shallow(<PokemonListLayout loading></PokemonListLayout>);

    expect(r.find("LoadingSpinnerLayout").exists()).toBeTruthy();
  });

  it("Renders <ErrorMessageLayout>", () => {
    const r = shallow(<PokemonListLayout error></PokemonListLayout>);

    expect(r.find("ErrorMessageLayout").exists()).toBeTruthy();
  });
});
