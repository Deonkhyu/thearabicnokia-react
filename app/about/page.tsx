import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import AboutBanner from "../../public/About Banner.jpg";
import Review1 from "../../public/Review 1.jpg";
import Review2 from "../../public/Review 2.jpg";
import Review3 from "../../public/Review 3.jpg";
import { StarIcon } from "@heroicons/react/24/solid";
import { Hedvig_Letters_Serif } from "next/font/google";

const hedvig = Hedvig_Letters_Serif({
    subsets: ["latin"],
    weight: ['400'],
});

const objectives = [
    { name: 'Protecting', value: 'Striving to rehabilitate injured or captive animals for release back into the wild.' },
    { name: 'Research', value: 'Conducting wildlife research and breeding programs for endangered species.' },
    { name: 'Educating', value: 'Educating the public on the importance of conserving the beautiful and bountiful nature of Sarawak.' },
]

export default function About() {
    return (
        <div>
            <Header />

            <div className={hedvig.className}>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <Image
                src={AboutBanner}
                alt="About Banner"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-20"
            />
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
                <div
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
                <div
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-5xl font-semibold tracking-tight  text-white sm:text-7xl">About Us</h2>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
                    {objectives.map((objective) => (
                    <div key={objective.name} className="flex flex-col-reverse gap-1 justify-end">
                        <dt className="text-base/7 text-gray-300">{objective.value}</dt>
                        <dd className="text-4xl font-semibold tracking-tight text-white">{objective.name}</dd>
                    </div>
                    ))}
                </dl>
                </div>
            </div>
            </div>

            <div className="p-16 bg-white shadow-inner">
                <h2 className="text-2xl font-semibold tracking-tight text-black">Reviews</h2>
                <p className="text-m text-gray-600">See what our visitors say about us.</p>

                <div className="mt-16 pt-8 border-t-2 grid gap-8 grid-cols-12 sm:grid-cols-8">
                    <div className="col-span-4 sm:col-span-2">
                        <Image
                        src={Review1}
                        alt="Toni Thompson"
                        className="inline-block h-16 w-16 rounded-full ring-2 ring-white object-cover object-center sm:h-24 sm:w-24"    
                        />
                        <p className="pt-4 text-black font-semibold text-sm sm:text-xl">Toni Thompson</p>
                        <p className="text-gray-600 text-xs sm:text-lg">October 4, 2024</p>

                        <div className="flex items-center pt-2">
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <p className="text-black ms-2 text-sm sm:text-lg">5</p>
                        </div>
                    </div>

                    <div className="col-span-8 sm:col-span-6 mr-8">
                        <p className="text-gray-800 text-sm sm:text-xl">
                        What a great place to enjoy orangutans in a semi-natural environment. 
                        They play, show off, swing on the ropes and trees, to offer a view of their daily lives.  
                        The rangers are very attentive to the safety of the primates and visitors.  
                        At one point, we needed to move out of the area until 2 orangutans moved out of the visitor space. 
                        This is about 1 10 minute walk and a paid tram is available.  
                        Most of the area is wheelchair accessible. 
                        Small souvenir area with water for purchase.  
                        So awesome to see orangutans up so close.
                        </p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t-2 grid gap-8 grid-cols-12 sm:grid-cols-8">
                <div className="col-span-4 sm:col-span-2">
                        <Image
                        src={Review2}
                        alt="Werner Luzi"
                        className="inline-block h-16 w-16 rounded-full ring-2 ring-white object-cover object-center sm:h-24 sm:w-24"    
                        />
                        <p className="pt-4 text-black font-semibold text-sm sm:text-xl">Werner Luzi</p>
                        <p className="text-gray-600 text-xs sm:text-lg">June 24, 2024</p>

                        <div className="flex items-center pt-2">
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <p className="text-black ms-2 text-sm sm:text-lg">5</p>
                        </div>
                    </div>

                    <div className="col-span-8 sm:col-span-6 mr-8">
                        <p className="text-gray-800 text-sm sm:text-xl">
                        Great place to see semi-wild orangutans. 
                        Orangutan sightings not guaranteed and lower probability during the fruiting season, but I have been lucky every time I visited so far. 
                        You can either walk or take an electric buggy from the entrance to the feeding area.
                        </p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t-2 grid gap-8 grid-cols-12 sm:grid-cols-8">
                    <div className="col-span-4 sm:col-span-2">
                        <Image
                        src={Review3}
                        alt="Andrew Chew"
                        className="inline-block h-16 w-16 rounded-full ring-2 ring-white object-cover object-center sm:h-24 sm:w-24"    
                        />
                        <p className="pt-4 text-black font-semibold text-sm sm:text-xl">Andrew Chew</p>
                        <p className="text-gray-600 text-xs sm:text-lg">February 25, 2024</p>

                        <div className="flex items-center pt-2">
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <StarIcon className="h-4 w-4 fill-yellow-300 sm:h-6 sm:w-6" />
                            <p className="text-black ms-2 text-sm sm:text-lg">5</p>
                        </div>
                    </div>

                    <div className="col-span-8 sm:col-span-6 mr-8">
                        <p className="text-gray-800 text-sm sm:text-xl">
                        Opening times are strictly as stated.
                        I arrived 1.30pm but the ticket counter opens 2pm for the 2 to pm session.
                        RM10 entry tickets for foreigners. 
                        The feeding areas are about 1km inside. 
                        You either walk the hilly road or pay RM15 for a 2 way buggy ride.
                        I managed to see 5 orangutans up close, at the 2 feeding locations and the resting hut.
                        55 years old Grandmother, Alpha male, 2 daughters, and a young 8 years kid.
                        </p>
                    </div>
                </div>
            </div>
            </div>

            <Footer />
        </div>
    );
}