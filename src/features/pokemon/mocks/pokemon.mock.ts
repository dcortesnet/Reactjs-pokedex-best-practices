import { Pokemon } from "../interfaces/pokemon.interface";

export const pokemonMock: Pokemon = {
  abilities: [] as any[],
  base_experience: 101,
  forms: [] as any[],
  game_indices: [] as any[],
  height: 7,
  held_items: [] as any[],
  id: 1,
  is_default: true,
  location_area_encounters: "url",
  moves: [] as any[],
  name: "bulbasaur",
  order: 1,
  past_types: [] as any[],
  species: "species" as any,
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      },
    },
  } as any,
  stats: [] as any[],
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ] as any[],
  weight: 69,
};
