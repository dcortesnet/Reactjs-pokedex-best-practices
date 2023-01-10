import pokeApiLogo from "../../../../shared/assets/poke_api_logo.png";
import "./pokemon-search.css";

interface Props {
  onChange: Function;
  onSubmit: Function;
}

export const PokemonSearchLayout: React.FC<Props> = ({
  onChange,
  onSubmit,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className="logo" src={pokeApiLogo} alt="pokeApiLogo" />
        <form onSubmit={(e) => onSubmit(e)} className="searchBar">
          <input
            name="search"
            onChange={(e) => onChange(e)}
            placeholder="Buscador por nombre o número"
          ></input>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  );
};
