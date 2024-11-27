"use client"; // Ensure this is a Client Component

import { useState } from "react";
import { Poppins } from "next/font/google";
import axios from "axios";
import Image from "next/image";
import SFCLogo from "../../public/SFC Logo.jpg";
import RegisterImage from "../../public/Register Image.jpg";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
});

// Email validation function
const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Password strength validation function
const validatePassword = (password: string) => {
    return (
        password.length >= 8 &&                // Minimum length
        /[A-Z]/.test(password) &&              // At least one uppercase letter
        /[a-z]/.test(password) &&              // At least one lowercase letter
        /[0-9]/.test(password) &&              // At least one digit
        /[^A-Za-z0-9]/.test(password)          // At least one special character
    );
};

// Generate a 12-digit user ID
const generateUserId = () => {
    return Math.floor(100000000000 + Math.random() * 900000000000).toString(); // Ensures a 12-digit number
};

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isAdmin] = useState(false);

    // Function to handle registration
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        if (!validatePassword(password)) {
            setMessage("Password must be at least 8 characters, include uppercase and lowercase letters, a number, and a special character.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:5000/register", {
                email,
                password,
                userId: generateUserId(),
                isAdmin
            });
            setMessage(response.data.message || "Registration successful!");

            // Redirect to login page
            if (response.status === 201) {
                window.location.href = `http://localhost:3000/login`;
            }
        } catch (error: any) {
            setMessage(error.response ? error.response.data.error : "Registration failed");
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
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleRegister}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setMessage(validateEmail(e.target.value) ? "" : "Please enter a valid email address.");
                                        }}
                                        className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                                <div className="mt-2">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                            </div>

                            {message && <p className="text-center text-sm text-red-500 mt-2">{message}</p>}
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
                        src={RegisterImage}
                        alt="Register Image"
                    />
                </div>
            </div>
        </div>
    );
}