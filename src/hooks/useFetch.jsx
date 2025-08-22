import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);

		fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				setError(response);
			})
			.then((responseData) => {
				setData(responseData);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [url]);

	return { data, loading, error };
};
