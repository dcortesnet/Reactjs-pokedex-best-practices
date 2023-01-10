import { Story, Meta } from "@storybook/react";
import { PokemonSearchLayout } from "./pokemon-search.layout";

export default {
  title: "Pokemon/components/PokemonSearch",
  component: PokemonSearchLayout,
} as Meta;

export const Template: Story<any> = (args) => <PokemonSearchLayout {...args}/>;
