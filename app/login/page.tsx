import React from 'react';
import { useState } from 'react';
import './styles/login.module.css'; 

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
	<form onSubmit={handleSubmit}>
	<div>
		<h2>Login</h2>
	</div>

	{/* Username Input */}
	<div>
		<label htmlFor="username">Username</label>
		<input
			type="text"
			value={form.username}
			onChange={e => setForm({ ...form, username: e.target.value })}
			id="username"
			placeholder="Enter your username"
		/>
	</div>

	{/* Email Input */}
	<div>
		<label htmlFor="email">Email</label>
		<input
			type="email"
			value={form.email}
			onChange={e => setForm({ ...form, email: e.target.value })}
			id="email"
			placeholder="Enter your email"
		/>
	</div>

	{/* Password Input */}
	<div>
		<label htmlFor="password">Password</label>
		<input
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
		<button type="submit">Login</button>
	</div>

	{/* Forgot Password */}
	<div>
		<a href="#">Forgot Password?</a>
	</div>

	{/* Sign Up Link */}
	<div>
		<p>Not a member? <a href="#">Sign up</a></p>
	</div>
</form>
);
}

export default LoginForm;