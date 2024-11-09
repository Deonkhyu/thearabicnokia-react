import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import GalleryBanner from "../../public/Gallery Banner.jpg";
import GalleryImage1 from "../../public/Gallery Image 1.jpg";
import GalleryImage2 from "../../public/Gallery Image 2.jpg";
import GalleryImage3 from "../../public/Gallery Image 3.jpg";
import GalleryImage4 from "../../public/Gallery Image 4.jpg";
import GalleryImage5 from "../../public/Gallery Image 5.jpg";
import GalleryImage6 from "../../public/Gallery Image 6.jpg";
import GalleryImage7 from "../../public/Gallery Image 7.jpg";
import GalleryImage8 from "../../public/Gallery Image 8.jpg";
import GalleryImage9 from "../../public/Gallery Image 9.jpg";

export default function Gallery() {
    return (
        <div>
            <Header />

            <div className="flex overflow-hidden items-center justify-center h-52 sm:h-96">
				<Image 
                    src={GalleryBanner}
                    alt='Gallery Banner'
                    className="object-cover object-center opacity-25 h-full w-full"
                />
				<p className="absolute text-white text-4xl p-2 border-2">Gallery</p>
			</div>

            <div className="flex flex-col bg-slate-100 items-center p-16 shadow-inner sm:p-24">
				<p className="text-black text-2xl font-bold text-center sm:text-4xl">Experience the Beauty of Sarawak</p>
			</div>

			<div className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700">
            <div className="flex flex-col backdrop-blur-sm bg-slate-200/40 items-center shadow-inner p-8 sm:p-16">
					<ul className="grid gap-8 grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-3">
						<li className="shadow-xl">
							<Image 
								src={GalleryImage1}
								alt='Gallery Image 1'
								className="h-full w-full object-cover object-center rounded-lg"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={GalleryImage2}
								alt='Gallery Image 2'
								className="h-full w-full object-cover object-center rounded-lg"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={GalleryImage3}
								alt='Gallery Image 3'
								className="h-full w-full object-cover object-center rounded-lg"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={GalleryImage4}
								alt='Gallery Image 4'
								className="h-full w-full object-cover object-center rounded-lg"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={GalleryImage5}
								alt='Gallery Image 5'
								className="h-full w-full object-cover object-center rounded-lg"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={GalleryImage6}
								alt='Gallery Image 6'
								className="h-full w-full object-cover object-center rounded-lg"
							/>
						</li>
                        <li className="shadow-xl">
							<Image 
								src={GalleryImage7}
								alt='Gallery Image 7'
								className="h-full w-full object-cover object-center rounded-lg"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={GalleryImage8}
								alt='Gallery Image 8'
								className="h-full w-full object-cover object-center rounded-lg"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={GalleryImage9}
								alt='Gallery Image 9'
								className="h-full w-full object-cover object-center rounded-lg"
							/>
						</li>
					</ul>
			</div>
			</div>

            <Footer />
        </div>
    );
}