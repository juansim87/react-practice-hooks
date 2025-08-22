import { useState } from "react";
import { useResponsive } from "./useResponsive";

export const useDevice = () => {
	
    const layout = useResponsive();

    return {
    isMobile: layout === "mobile",
    isTablet: layout === "tablet",
    isDesktop: layout === "desktop",
  };

	
};
