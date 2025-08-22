// import { useState } from "react";
import "./App.css";
import "./styles.css";
import { LoginForm } from "./components/LoginForm";
import { Counter } from "./components/Counter";
import { useResponsive } from "./hooks/useResponsive";
import { PokemonViewer } from "./components/Pokemonviewer";
import { ShowDevice } from "./components/ShowDevice";

export const App = () => {
	const layout = useResponsive();

	return (
		<div
			className={`app-container ${layout === "mobile" ? "mobile" : "desktop"}`}
		>
			<h1>Hook Practice</h1>
			<LoginForm />
			<Counter />
			<PokemonViewer />
			<ShowDevice />
		</div>
	);
};
