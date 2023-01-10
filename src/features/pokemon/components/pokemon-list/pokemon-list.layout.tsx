import { ErrorMessageLayout } from "../../../../shared/components/error-message/error-message.layout";
import { LoadingSpinnerLayout } from "../../../../shared/components/loading-spinner/loading-spinner.layout";
import { Pokemon } from "../../interfaces/pokemon.interface";
import { PokemonCardLayout } from "../pokemon-card/pokemon-card.layout";
import "./pokemon-list.css";

interface Props {
  loading: boolean;
  error: boolean;
  pokemon: Pokemon[];
}

export const PokemonListLayout: React.FC<Props> = ({
  loading,
  error,
  pokemon,
}) => {
  return (
    <div className="pokemon__list">
      {loading ? (
        <LoadingSpinnerLayout />
      ) : error ? (
        <ErrorMessageLayout />
      ) : (
        pokemon.map((pokemon: Pokemon, index: any) => (
          <PokemonCardLayout {...pokemon} key={index}></PokemonCardLayout>
        ))
      )}
    </div>
  );
};
