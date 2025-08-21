import "../styles.css";
import { usePasswordVisibility } from "../hooks/usePasswordVisibility";

export const LoginForm = () => {
	const [showPassword, togglePassword] = usePasswordVisibility(false);

	return (
		<div className="exercise">
			<h2>Password Visibility</h2>
			<p>Password</p>
			<div className="password-box">
				<input type={showPassword ? "text" : "password"} />
				<div className="password-btn" role="button" onClick={togglePassword}>
					👁️
				</div>
			</div>
		</div>
	);
};
