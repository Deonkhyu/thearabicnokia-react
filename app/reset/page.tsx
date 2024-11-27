"use client";

import { useState } from "react";
import axios from "axios";
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

// Password strength validation function
const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return passwordRegex.test(password);
};

export default function ResetPassword() {
    const [email, setEmail] = useState(""); // New email input field
    const [otp, setOtp] = useState(""); // For the OTP input
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        // Check if OTP is a six-digit number
        if (!/^\d{6}$/.test(otp)) {
            setMessage("OTP must be a six-digit number.");
            return;
        }

        // Check if the new password is strong enough
        if (!validatePassword(newPassword)) {
            setMessage("Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:5000/reset", {
                email,          // Include email in the request
                otp,
                new_password: newPassword
            });
            setMessage(response.data.message || "Password reset successful!");
        } catch (error: any) {
            setMessage(error.response ? error.response.data.error : "Failed to reset password");
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
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Reset Password</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleResetPassword}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                                <div className="mt-2">
                                    <input 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        required 
                                        className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (!validateEmail(e.target.value)) {
                                                setMessage("Please enter a valid email address.");
                                            } else {
                                                setMessage("");
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="otp" className="block text-sm font-medium leading-6 text-gray-900">OTP Code</label>
                                <div className="mt-2">
                                    <input 
                                        id="otp" 
                                        name="otp" 
                                        type="text" 
                                        required 
                                        className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={otp}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (/^\d{0,6}$/.test(value)) {
                                                setOtp(value);
                                                setMessage("");  // Clear message if format is correct
                                            } else {
                                                setMessage("OTP must be a six-digit number.");
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="new_password" className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
                                <div className="mt-2">
                                    <input 
                                        id="new_password" 
                                        name="new_password" 
                                        type="password" 
                                        required 
                                        className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={newPassword}
                                        onChange={(e) => {
                                            setNewPassword(e.target.value);
                                            if (!validatePassword(e.target.value)) {
                                                setMessage("Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.");
                                            } else {
                                                setMessage("");
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                                <div className="mt-2">
                                    <input 
                                        id="confirm_password" 
                                        name="confirm_password" 
                                        type="password" 
                                        required 
                                        className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Submit
                                </button>
                            </div>

                            {message && <p className="text-center text-sm text-red-500 mt-2">{message}</p>}
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            <a href="/login" className="ms-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Back to Login page</a>
                        </p>
                    </div>
                </div>

                <div className="col-span-1">
                    <Image 
                        className="object-cover w-full h-full opacity-75"
                        src={ LogInImage }
                        alt="Forgot Password Image"
                    />
                </div>
            </div>
        </div>
    );
}
