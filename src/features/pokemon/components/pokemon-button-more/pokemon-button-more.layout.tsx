import React from "react";
import { ErrorMessageLayout } from "../../../../shared/components/error-message/error-message.layout";
import { LoadingSpinnerLayout } from "../../../../shared/components/loading-spinner/loading-spinner.layout";
import "./pokemon-button-more.css";

interface Props {
  loading: boolean;
  error: boolean;
  onClick: Function;
}

export const PokemonButtonMoreLayout: React.FC<Props> = ({
  loading,
  error,
  onClick,
}) => {
  return (
    <div>
      <div className="load-more">
        {loading ? (
          <LoadingSpinnerLayout />
        ) : error ? (
          <ErrorMessageLayout />
        ) : (
          <button className="button" onClick={() => onClick()}>
            Cargar más pokemon
          </button>
        )}
      </div>
    </div>
  );
};
