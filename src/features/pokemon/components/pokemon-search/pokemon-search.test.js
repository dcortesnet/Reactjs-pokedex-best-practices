import { PokemonSearchLayout } from "./pokemon-search.layout";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe("PokemonSearchLayout", () => {
  it("Renders correctly", () => {
    const r = shallow(<PokemonSearchLayout></PokemonSearchLayout>);

    expect(toJson(r)).toMatchSnapshot();
  });


  it("Renders and has 'Buscar' text", () => {
    const text = "Buscar";
    const r = shallow(<PokemonSearchLayout></PokemonSearchLayout>);

    expect(r.contains(text)).toEqual(true);
  });
});
