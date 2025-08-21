import { useToggle } from "./useToggle";

export const usePasswordVisibility = (initialValue = false) => {
	const [visible, toggleVisible] = useToggle(initialValue);
	return [visible, toggleVisible];
};
