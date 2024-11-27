'use client'

import { useEffect, useState } from 'react'
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
	const [userID, setUserID] = useState<string | null>(null);
	const [isAdmin, setIsAdmin] = useState<boolean>(false);

	useEffect(() => {
        // Retrieve the userID from session storage when the component mounts
        const storedUserID = sessionStorage.getItem('userID');
		const adminStatus = sessionStorage.getItem("isAdmin");
        if (storedUserID) {
            setUserID(storedUserID);
            // Simulate fetching admin status (in a real app, you would fetch this from an API or backend)
        }

		if (adminStatus === "true") {
            setIsAdmin(true);
        }
    }, []);

	// Logout function to clear user session
	const logout = () => {
		sessionStorage.removeItem('userID');
		sessionStorage.removeItem('isAdmin');
		setUserID(null);
		setIsAdmin(false); // Clear admin status on logout
	}

	const getLinkWithUserID = (link: string) => {
		// If userID exists, append it to the URL as a query parameter
		return userID ? `${link}?userID=${userID}` : link;
	}

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
					<a href={getLinkWithUserID('/donate')} className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						Donate
					</a>
					<a href={getLinkWithUserID('/prices')} className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						Prices
					</a>
					<a href={getLinkWithUserID('/gallery')} className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						Gallery
					</a>
					<a href={getLinkWithUserID('/about')} className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						About
					</a>
					<a href={getLinkWithUserID('/contact')} className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
						Contact
					</a>
					
					{/* Conditionally render "Dashboard" based on isAdmin */}
					{isAdmin && (
						<a href={getLinkWithUserID('/dashboard')} className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
							Dashboard
						</a>
					)}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					{/* Show Log In and Register only if user is not logged in */}
					{!userID ? (
						<>
							<a href={getLinkWithUserID('/login')} className="flex text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
								Log in 
								<ArrowRightEndOnRectangleIcon aria-hidden="true" className="h-6 w-6 ml-2" />
							</a>
							<a href={getLinkWithUserID('/register')} className="flex text-sm rounded-lg font-semibold leading-6 text-white p-2 ml-2 hover:bg-neutral-700 active:bg-neutral-800">
								Register
							</a>
						</>
					) : (
						// Show Log Out button if user is logged in
						<button onClick={logout} className="text-sm rounded-lg font-semibold leading-6 text-white p-2 hover:bg-neutral-700 active:bg-neutral-800">
							Log out
						</button>
					)}
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
								<a href={getLinkWithUserID('/donate')} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Donate
								</a>
								<a href={getLinkWithUserID('/prices')} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Prices
								</a>
								<a href={getLinkWithUserID('/gallery')} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Gallery
								</a>
								<a href={getLinkWithUserID('/about')} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									About
								</a>
								<a href={getLinkWithUserID('/contact')} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
									Contact
								</a>
								{/* Conditionally render "Dashboard" based on isAdmin */}
								{isAdmin && (
									<a href={getLinkWithUserID('/dashboard')} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
										Dashboard
									</a>
								)}
							</div>
							{/* Show Log In and Register only if user is not logged in */}
							{!userID ? (
								<div className="space-y-2 py-6">
									<a href={getLinkWithUserID('/login')} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
										Log in
									</a>
									<a href={getLinkWithUserID('/register')} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
										Register
									</a>
								</div>
							) : (
								// Show Log Out button if user is logged in
								<div className="space-y-2 py-6">
									<button onClick={logout} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-neutral-700 active:bg-neutral-800">
										Log out
									</button>
								</div>
							)}
						</div>
						</div>
					</DialogPanel>
			</Dialog>
		</header>
	)
}