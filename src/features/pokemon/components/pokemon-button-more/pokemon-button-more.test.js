import { PokemonButtonMoreLayout } from "./pokemon-button-more.layout";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
describe("PokemonButtonMoreLayout", () => {
  it("Renders correctly", () => {
    const r = shallow(<PokemonButtonMoreLayout></PokemonButtonMoreLayout>);

    expect(toJson(r)).toMatchSnapshot();
  })

  it("Renders <button> and has 'Cargar más pokemon' text", () => {
    const text = "Cargar más pokemon";
    const r = shallow(<PokemonButtonMoreLayout></PokemonButtonMoreLayout>);

    expect(r.contains(text)).toEqual(true);

    expect(r.find("button").exists()).toBeTruthy();
  });

  it("Renders <LoadingSpinnerLayout>", () => {
    const r = shallow(
      <PokemonButtonMoreLayout loading></PokemonButtonMoreLayout>
    );

    expect(r.find("LoadingSpinnerLayout").exists()).toBeTruthy();
  });

  it("Renders <ErrorMessageLayout", () => {
    const r = shallow(
      <PokemonButtonMoreLayout error></PokemonButtonMoreLayout>
    );

    expect(r.find("ErrorMessageLayout").exists()).toBeTruthy();
  });

  it("Clicks button and has 'Cargar más pokemon' text", () => {
    const mockCallBack = jest.fn();
    const text = "Cargar más pokemon";
    const r = shallow(
      <PokemonButtonMoreLayout onClick={mockCallBack}></PokemonButtonMoreLayout>
    );

    expect(r.contains(text)).toEqual(true);

    r.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
