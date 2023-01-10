import React from "react";
import { Pokemon } from "../../interfaces/pokemon.interface";
import "./pokemon-card.css";

export const PokemonCardLayout: React.FC<Pokemon> = ({ sprites, name }) => {
  return (
    <div className="card">
      <div className="card__flex">
        <div className="card__image">
          <img
            src={
              sprites.other.dream_world.front_default || sprites.front_default
            }
            alt={name}
            className="card__pokemon__img"
          />
        </div>
      </div>
      <div className="card__background" />
      <div className="card__line__img" />
      <div className="card__body">
        <p className="card__name">{name}</p>
      </div>
    </div>
  );
};
