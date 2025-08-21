import { useEffect, useState } from "react";
import { useWindowWidth } from "./useWIndowWidth";

export const useResponsive = () => {
	const width = useWindowWidth();
	const [layout, setLayout] = useState(width < 768 ? "mobile" : "desktop");

	useEffect(() => {
		setLayout(width < 768 ? "mobile" : "desktop");
	}, [width]);

	return layout;
};
