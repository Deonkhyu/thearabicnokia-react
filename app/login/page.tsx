"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { Poppins } from "next/font/google";
import Image from "next/image";
import SFCLogo from "../../public/SFC Logo.jpg";
import LogInImage from "../../public/Log In Image.jpg";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
});

// Email validation function
const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter(); // Initialize useRouter from next/navigation

    // Add this function to check if user is admin
    const checkIfAdmin = async (userID: string) => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/is-admin?userID=${userID}`);
            return response.data.isAdmin;
        } catch (error) {
            console.error('Error checking admin status:', error);
            return false; // Default to non-admin if error occurs
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate email format
        if (!validateEmail(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:5000/login", {
                email,
                password
            });

            if (response.status === 200) {
                const userID = response.data.userID; // Assuming userID is returned in the response

                // Check if the user is an admin
                const isAdmin = await checkIfAdmin(userID);

                // Store userID and isAdmin in sessionStorage
                sessionStorage.setItem("userID", userID);
                sessionStorage.setItem("isAdmin", isAdmin.toString());

                // Redirect to homepage with the userID
                router.push(`/?userID=${userID}`);
            }
        } catch (error: any) {
            setMessage(error.response ? error.response.data.error : "Login failed");
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
                                src={SFCLogo}
                                alt="SFC Logo" 
                            />
                        </a>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        autoComplete="email" 
                                        required 
                                        className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setMessage(validateEmail(e.target.value) ? "" : "Please enter a valid email address.");
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="/forgot" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        autoComplete="current-password" 
                                        required 
                                        className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Log in
                                </button>
                            </div>

                            {message && <p className="text-center text-sm text-red-500 mt-2">{message}</p>}
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Don't have an account?
                            <a href="/register" className="ms-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register here</a>
                        </p>
                    </div>
                </div>

                <div className="col-span-1">
                    <Image 
                        className="object-cover w-full h-full opacity-75"
                        src={LogInImage}
                        alt="Log In Image"
                    />
                </div>
            </div>
        </div>
    );
}