"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import LoginForm from "./components/loginform"

export default function Home() {
	return (
		<div>
			<Header />
			<LoginForm />
			<Footer />
		</div>
	);
}