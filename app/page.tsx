import Image from 'next/image'
import IndexGallery1 from '../public/Index Gallery 1.jpg'
import IndexGallery2 from '../public/Index Gallery 2.jpg'
import IndexGallery3 from '../public/Index Gallery 3.jpg'
import IndexGallery4 from '../public/Index Gallery 4.jpg'
import IndexGallery5 from '../public/Index Gallery 5.jpg'
import IndexGallery6 from '../public/Index Gallery 6.jpg'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  	return (
		<div>
			<Header />

			<div className="flex overflow-hidden items-center justify-center h-56 sm:h-96">
				<video autoPlay loop muted className="opacity-50">
					<source src='/Semenggoh Nature Reserve.mp4' type='video/mp4'/>
				</video>
				<p className="absolute text-white p-2 border-2 text-center text-xl sm:text-4xl">Semenggoh Nature Reserve</p>
			</div>

			<div className="flex flex-col bg-slate-100 items-center shadow-inner p-12 sm:p-24">
				<p className="text-black font-bold text-center text-2xl sm:text-4xl">Semenggoh Nature Reserve</p>
				<p className="text-black text-center text-l sm:text-2xl">Loooking after Sarawak's National Treasures</p>
			</div>

			<div className="flex flex-col bg-slate-200 items-center p-16 shadow-inner">
				<p className="text-black font-bold text-center text-2xl sm:text-4xl">A Melding Pot of Biodiveristy, Culture and Natural Wonder</p>
				<div className="pt-16">
					<ul className="grid gap-8 sm:grid-cols-3 sm:gap-32 md:gap-16">
						<li className="shadow-xl">
							<Image 
								src={IndexGallery1}
								alt='Index Gallery 1'
								className="h-full w-full object-cover object-center"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={IndexGallery2}
								alt='Index Gallery 2'
								className="h-full w-full object-cover object-center"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={IndexGallery3}
								alt='Index Gallery 3'
								className="h-full w-full object-cover object-center"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={IndexGallery4}
								alt='Index Gallery 4'
								className="h-full w-full object-cover object-center"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={IndexGallery5}
								alt='Index Gallery 5'
								className="h-full w-full object-cover object-center"
							/>
						</li>
						<li className="shadow-xl">
							<Image 
								src={IndexGallery6}
								alt='Index Gallery 6'
								className="h-full w-full object-cover object-center"
							/>
						</li>
					</ul>
				</div>
			</div>

			<Footer />
		</div>
  	);
}