import { useState } from "react";
import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { Counter } from "./components/Counter";

export const App = () => {
	return <>
    <LoginForm/>
    <Counter/>
  </>;
};
