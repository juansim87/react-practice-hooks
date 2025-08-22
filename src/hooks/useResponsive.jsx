import { useEffect, useState } from "react";
import { useWindowWidth } from "./useWIndowWidth";

export const useResponsive = () => {
	const width = useWindowWidth();
	const [layout, setLayout] = useState(() => {
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  });

	useEffect(() => {
    if (width < 768) {
      setLayout("mobile");
    } else if (width < 1024) {
      setLayout("tablet");
    } else {
      setLayout("desktop");
    }
  }, [width]);

	return layout;
};
