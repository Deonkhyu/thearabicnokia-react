import Header from "../components/header";
import Footer from "../components/footer";
import GalleryBanner from "./components/gallerybanner";
import GallerySeparator from "./components/galleryseparator";
import GalleryCardGrid from "./components/gallerycardgrid";

export default function Gallery() {
	return (
		<div>
			<Header />
            <GalleryBanner />
            <GallerySeparator />
            <GalleryCardGrid />
			<Footer />
		</div>
	);
}