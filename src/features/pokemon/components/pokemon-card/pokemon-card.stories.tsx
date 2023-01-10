import React from "react";
import { Story, Meta } from "@storybook/react";
import { pokemonMock } from "../../mocks/pokemon.mock";
import { PokemonCardLayout } from "./pokemon-card.layout";

export default {
  title: "Pokemon/components/PokemonCard",
  component: PokemonCardLayout,
} as Meta;

const Template: Story<any> = (args) => <PokemonCardLayout {...args} />;
export const template = Template.bind(pokemonMock);
template.args = pokemonMock;
