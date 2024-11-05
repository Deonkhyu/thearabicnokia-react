"use client"; 

import { Poppins } from "next/font/google";
import { useState } from "react"; // Add this import
import Image from "next/image";
import SFCLogo from "../../public/SFC Logo.jpg";
import RegisterImage from "../../public/Register Image.jpg";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate password confirmation
        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Assuming you want to send email and password
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(`User registered successfully: ${data.email}`);
                // Optionally redirect or clear form here
            } else {
                const errorData = await response.json();
                setMessage(`Registration failed: ${errorData.message}`);
            }
        } catch (error) {
            setMessage('An error occurred while registering.');
            console.error(error);
        }
    };

    return (
        <div className={poppins.className}>
            <div className="h-screen grid grid-cols-2">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white shadow-inner col-span-1">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <a href="/">
                            <Image 
                            className="mx-auto h-24 w-auto" 
                            src={ SFCLogo }
                            alt="SFC Logo" 
                            />
                        </a>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                autoComplete="email" 
                                required 
                                className="block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                            />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                autoComplete="current-password" 
                                required 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                            </div>
                            <div className="mt-2">
                            <input 
                                id="confirm-password" 
                                name="confirm-password" 
                                type="password" 
                                autoComplete="current-password" 
                                required 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            />
                            </div>
                        </div>

                        {message && <p className="text-red-500">{message}</p>} {"Incorrect Password"}

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                        </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?
                        <a href="/login" className="ms-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Log in here</a>
                        </p>
                    </div>
                </div>

                <div className="col-span-1">
                    <Image 
                    className="object-cover w-full h-full opacity-75"
                    src={ RegisterImage }
                    alt="Log In Image"
                    />
                </div>
            </div>
        </div>
    );
}