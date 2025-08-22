import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const PokemonViewer = () => {
	
  const [pokemonId, setPokemonId] = useState("1");

  const handleInput = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setPokemonId(value);
    }
  };

  const key = pokemonId.trim() || "1";

  const {
    data: pokemon,
    loading,
    error,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${key}`);

  return (
    <div className="pokemon-viewer">
      <h2>Pokemon Viewer</h2>
      <input type="text" onChange={handleInput} value={pokemonId} />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message || String(error)}</p>}
      {!loading && pokemon && (
        <div className="card">
          <h3>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h3>
          <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};