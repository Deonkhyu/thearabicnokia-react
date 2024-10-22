import Header from "../components/header";
import Footer from "../components/footer";
import AboutHeader from "./components/aboutheader";
import AboutMain from "./components/aboutmain";
import AboutReviews from "./components/aboutreviews";

export default function About() {
	return (
		<div>
			<Header />
			<AboutHeader />
			<AboutMain />
			<AboutReviews />
			<Footer />
		</div>
	);
}