import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
	const { count, add, substract, reset } = useCounter(0);
	const [toAdd, setToAdd] = useState(0);
	const [toSubstract, setToSubstract] = useState(0);

	const handleAdd = () => {
		{
			add(toAdd);
		}
	};

	const handleSubstract = () => {
		{
			substract(toSubstract);
		}
	};

	return (
		<div>
			<h2>Counter</h2>
			<p>TOTAL COUNT: {count}</p>
			<div>
				<input
					type="number"
					value={toAdd}
					onChange={(event) => setToAdd(event.target.valueAsNumber)}
				/>
				<button onClick={handleAdd}>Add {toAdd}</button>
			</div>
			<div>
				<input
					type="number"
					value={toSubstract}
					onChange={(event) => setToSubstract(event.target.valueAsNumber)}
				/>
				<button onClick={handleSubstract}>Substract {toSubstract}</button>
			</div>
			<button onClick={reset}>Reset</button>
		</div>
	);
};
