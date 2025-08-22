import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const PokemonViewer = () => {
	const [pokemonId, setPokemonId] = useState(1);

	// const [pokemonQuery, setPokemonQuery] = useState("1");
	// const key = pokemonQuery?.trim() || "1";


	const {
		data: pokemon,
		loading,
		error,
	} = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

	// const {
	// 	data: pokemon,
	// 	loading,
	// 	error,
	// } = useFetch(`https://pokeapi.co/api/v2/pokemon/${key}`);


	const handleInput = (event) => {
		setPokemonId(Number(event.target.value));
	};

	// const handleInput = (e) => {
	// 	const raw = e.target.value;
	// 	const normalized = raw
	// 		.trim()
	// 		.toLowerCase()
	// 		.replace(/\s+/g, "-")
	// 		.replace(/[’'´]/g, "");
	// 	setPokemonQuery(normalized);
	// };

	return (
		<div className="pokemon-viewer">
			<h2>Pokemon Viewer</h2>
			<input type="text" onChange={handleInput} value={pokemonId} />
			{loading && <p>Loading...</p>}
			{error && <p>{error.message}</p>}
			{!loading && pokemon && (
				<div className="card">
					<h3>
						{pokemon?.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
					</h3>
					<img src={pokemon.sprites.front_default} alt={pokemon.name} />
				</div>
			)}
		</div>
	);
};
