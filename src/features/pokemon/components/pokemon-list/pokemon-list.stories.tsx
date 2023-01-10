import { Story, Meta } from "@storybook/react";
import { PokemonListLayout } from "./pokemon-list.layout";
import { pokemonMock } from "../../mocks/pokemon.mock";
export default {
  title: "Pokemon/components/PokemonList",
  component: PokemonListLayout,
} as Meta;

const arrayPok = [pokemonMock, pokemonMock];
export const Template: Story<any> = (args) => (
  <PokemonListLayout pokemon={arrayPok} {...args} />
);
