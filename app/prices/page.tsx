"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { Poppins } from "next/font/google";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '700'],
});

export default function Prices() {
    const [textToggle, textToggleState] = useState(false);
    
    return (
        <div>
            <Header />

            <div className={poppins.className}>
            <section className="bg-gradient-to-r from-gray-600 via-blue-500 to-cyan-400">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-4 lg:mb-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Ticket Prices</h2>
                    <p className="mb-5 font-light text-white sm:text-xl">Choose a suitable ticket for your visit.</p>
                </div>

                <div className="flex justify-center py-4">
                    <div className="inline-flex items-center gap-2">
                        <label htmlFor="switch-component-on" className="text-white text-m">Local</label>
                        <div className="relative inline-block w-12 h-5">
                            <input onClick={ () => textToggleState(!textToggle) } id="switch-component-on" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-400 rounded-full checked:bg-slate-700 cursor-pointer transition-colors duration-300" />
                            <label htmlFor="switch-component-on" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer" />
                        </div>
                        <label htmlFor="switch-component-on" className="text-white text-m">Foreigner</label>
                    </div>
                </div>
                
                { textToggle &&
                <div id="foreigner" className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {/* <!-- Pricing Card --> */}
                    <div className="flex flex-col backdrop-blur-sm p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800/90 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Adult/Senior</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="text-gray-500 dark:text-gray-400">RM</span>
                            <span className="text-5xl font-extrabold">10</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Full access to all enclosures</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>See every animal</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>All-day pass</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Visit multiple experiences</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Children below 6 - free entry</span>
                            </li>
                        </ul>
                        <a href="#" className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-sky-900">Buy now</a>
                    </div>
                    {/* <!-- Pricing Card --> */}
                    <div className="flex flex-col backdrop-blur-sm p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800/90 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Disabled</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="text-gray-500 dark:text-gray-400">RM</span>
                            <span className="text-5xl font-extrabold">5</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Full access to all enclosures</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>See every animal</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>All-day pass</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Visit multiple experiences</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Children below 6 - free entry</span>
                            </li>
                        </ul>
                        <a href="#" className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-sky-900">Buy now</a>
                    </div>
                    {/* <!-- Pricing Card --> */}
                    <div className="flex flex-col backdrop-blur-sm p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800/90 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Children</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="text-gray-500 dark:text-gray-400">RM</span>
                            <span className="text-5xl font-extrabold">5</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Full access to all enclosures</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>See every animal</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>All-day pass</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Visit multiple experiences</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Children below 6 - free entry</span>
                            </li>
                        </ul>
                        <a href="#" className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-sky-900">Buy now</a>
                    </div>
                </div>
                }

                { !textToggle && 
                <div id="local">
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {/* <!-- Pricing Card --> */}
                    <div className="flex flex-col backdrop-blur-sm p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800/90 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Adult/Senior</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="text-gray-500 dark:text-gray-400">RM</span>
                            <span className="text-5xl font-extrabold">5</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Full access to all enclosures</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>See every animal</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>All-day pass</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Visit multiple experiences</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Children below 6 - free entry</span>
                            </li>
                        </ul>
                        <a href="#" className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-sky-900">Buy now</a>
                    </div>
                    {/* <!-- Pricing Card --> */}
                    <div className="flex flex-col backdrop-blur-sm p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800/90 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Disabled</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="text-gray-500 dark:text-gray-400">RM</span>
                            <span className="text-5xl font-extrabold">3</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Full access to all enclosures</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>See every animal</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>All-day pass</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Visit multiple experiences</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Children below 6 - free entry</span>
                            </li>
                        </ul>
                        <a href="#" className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-sky-900">Buy now</a>
                    </div>
                    {/* <!-- Pricing Card --> */}
                    <div className="flex flex-col backdrop-blur-sm p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800/90 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Children</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="text-gray-500 dark:text-gray-400">RM</span>
                            <span className="text-5xl font-extrabold">2</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Full access to all enclosures</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>See every animal</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>All-day pass</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Visit multiple experiences</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <ChevronRightIcon aria-hidden="true" className="w-4 h-4 fill-white" />
                                <span>Children below 6 - free entry</span>
                            </li>
                        </ul>
                        <a href="#" className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-sky-900">Buy now</a>
                    </div>
                </div>
                </div>
                }
            </div>
            </section>
            </div>

            <Footer />
        </div>
    );
}