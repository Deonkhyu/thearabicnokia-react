'use client'

import { useState } from 'react'
import {
	Dialog,
	DialogPanel,
} from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/solid'

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  	return (
		<header className="bg-neutral-900">
			<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Semenggoh Nature Reserve</span>
						<img
						alt=""
						src="/SFC Logo.jpg"
						className="h-16 w-auto sm:h-24"
						/>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
					type="button"
					onClick={() => setMobileMenuOpen(true)}
					className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
					<span className="sr-only">Open main menu</span>
					<Bars3Icon aria-hidden="true" className="h-6 w-6 fill-white" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-4">
					<a href="/donate" className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						Donate
					</a>
					<a href="/prices" className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						Prices
					</a>
					<a href="/gallery" className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						Gallery
					</a>
					<a href="/about" className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						About
					</a>
					<a href="/contact" className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						Contact
					</a>
					<a href="/dashboard" className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						Dashboard
					</a>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="/login" className="flex text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						Log in 
						<ArrowRightEndOnRectangleIcon aria-hidden="true" className="h-6 w-6 ml-2" />
					</a>
					<a href="/register" className="flex text-sm rounded-lg font-semibold leading-6 text-white p-2 ml-2 hover:bg-neutral-700 active:bg-neutral-800">
						Register
					</a>
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
					<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Semenggoh Nature Reserve</span>
								<img
								alt=""
								src="/SFC Logo.jpg"
								className="h-12 w-auto"
								/>
							</a>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								>
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="h-6 w-6 fill-white" />
							</button>
						</div>
						<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<a href="/donate" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Donate
								</a>
								<a href="/prices" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Prices
								</a>
								<a href="/gallery" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Gallery
								</a>
								<a href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									About
								</a>
								<a href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Contact
								</a>
								<a href="/dashboard" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Dashboard
								</a>
							</div>
							<div className="py-6">
								<a href="/login" className="flex items-center -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Log in
									<ArrowRightEndOnRectangleIcon aria-hidden="true" className="h-6 w-6 ml-2" />
								</a>
								<a href="/register" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Register
								</a>
							</div>
						</div>
						</div>
					</DialogPanel>
			</Dialog>
		</header>
	)
}