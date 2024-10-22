import React from 'react';
import { useState } from 'react';
import styles from '../styles/login.module.css'; 

// Define form type for TypeScript
type Form = {
	username: string;
	password: string;
	email: string;
}

function LoginForm() {
// Initialize the form state with empty values
const [form, setForm] = useState<Form>({
	username: "",
	password: "",
	email: ""
});

// Validation state to store error messages
const [error, setError] = useState<string>("");

// Handle form submission
function handleSubmit(e: React.FormEvent) {
e.preventDefault();

// Basic form validation
if (!form.username) {
	setError("Username is required");
	return;
}
if (!form.password || form.password.length < 6) {
	setError("Password must be at least 6 characters long");
	return;
}
setError("");

// Form is valid, proceed with submission logic
console.log(form);
}

return (
	<div className={styles.loginApp}>
		<div className={styles.loginSection}>
		<form onSubmit={handleSubmit}>
		<div>
			<h2 className={styles.loginHeader}>Login</h2>
		</div>

		{/* Username Input */}
		<div>
			<label className={styles.loginLabel} htmlFor="username">Username</label>
			<input
				className={styles.loginInput}
				type="text"
				value={form.username}
				onChange={e => setForm({ ...form, username: e.target.value })}
				id="username"
				placeholder="Enter your username"
			/>
		</div>

		{/* Email Input */}
		<div>
			<label className={styles.loginLabel} htmlFor="email">Email</label>
			<input
				className={styles.loginInput}
				type="email"
				value={form.email}
				onChange={e => setForm({ ...form, email: e.target.value })}
				id="email"
				placeholder="Enter your email"
			/>
		</div>

		{/* Password Input */}
		<div>
			<label className={styles.loginLabel} htmlFor="password">Password</label>
			<input
				className={styles.loginInput}
				type="password"
				value={form.password}
				onChange={e => setForm({ ...form, password: e.target.value })}
				id="password"
				placeholder="Enter your password"
			/>
		</div>

		{/* Display Error Message */}
		{error && <p style={{ color: 'red' }}>{error}</p>}

		{/* Submit Button */}
		<div>
			<button className={styles.loginButton} type="submit">Login</button>
		</div>

		{/* Forgot Password */}
		<div>
			<a className={styles.loginLink} href="#">Forgot Password?</a>
		</div>

		{/* Sign Up Link */}
		<div>
			<p>Not a member? <a className={styles.loginLink} href="#">Sign up</a></p>
		</div>
		</form>
		</div>
	</div>
);
}

export default LoginForm;