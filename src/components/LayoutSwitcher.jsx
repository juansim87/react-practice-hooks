import { useEffect, useState } from "react";
import { useDevice } from "../hooks/useDevice";

export const LayoutSwitcher = () => {
	const { isMobile, isTablet, isDesktop } = useDevice();

	const [deviceClass, setDeviceClass] = useState("");

	useEffect(() => {
		if (isMobile) setDeviceClass("is-mobile");
		if (isTablet) setDeviceClass("is-tablet");
		if (isDesktop) setDeviceClass("is-desktop");
	}, [isMobile, isTablet, isDesktop]);

	return (
		<div>
			<h2>Layout Switcher</h2>
			<div className={`layout-box ${deviceClass}`}>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
				<div className="layout-element"></div>
			</div>
		</div>
	);
};
