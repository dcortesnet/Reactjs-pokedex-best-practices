import { Story, Meta } from "@storybook/react";
import { PokemonButtonMoreLayout } from "./pokemon-button-more.layout";

export default {
  title: "Pokemon/components/PokemonButtonMore",
  component: PokemonButtonMoreLayout,
} as Meta;

export const Template: Story<any> = (args) => <PokemonButtonMoreLayout {...args} />;
