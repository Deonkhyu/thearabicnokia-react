import Header from "../components/header";
import Footer from "../components/footer";
import VideoPlayer from "./components/videoplayer";
import Separator from "./components/separator";
import GalleryCard from "./components/gallerycard";

export default function Home() {
	return (
		<div>
			<Header />
			<VideoPlayer />
			<Separator />
			<GalleryCard />
			<Footer />
		</div>
	);
}