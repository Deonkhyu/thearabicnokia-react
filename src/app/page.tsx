import Header from "./header";
import Video from "./video";
import Separator from "./separator";
import GalleryCard from "./gallerycard";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Video />
      <Separator />
      <GalleryCard />
      <Footer />
    </div>
  );
}