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

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [otp, setOtp] = useState(""); // Store the generated OTP
    const [isOtpGenerated, setIsOtpGenerated] = useState(false);

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:5000/generate-otp", { email });
            setOtp(response.data.otp); // Set the TOTP returned by the backend
            setMessage("OTP has been generated. Please use it to reset your password.");
            setIsOtpGenerated(true); // Indicate that OTP has been generated
        } catch (error: any) {
            setMessage(error.response ? error.response.data.error : "Failed to generate OTP.");
            setIsOtpGenerated(false);
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
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleForgotPassword}>
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
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Generate OTP
                                </button>
                            </div>

                            {message && (
                                <p className={`text-center text-sm mt-2 ${isOtpGenerated ? "text-green-500" : "text-red-500"}`}>
                                    {message}
                                </p>
                            )}

                            {isOtpGenerated && (
                                <div className="mt-4 text-center">
                                    <p className="text-lg font-bold text-indigo-600">Your OTP: {otp}</p>
                                    <a href="/reset" className="text-indigo-600 hover:text-indigo-500 font-semibold mt-4 block">
                                        Proceed to Reset Password
                                    </a>
                                </div>
                            )}
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            <a href="/login" className="ms-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Back to Login page</a>
                            {" | "}
                            <a href="/register" className="ms-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Registration page</a>
                        </p>
                    </div>
                </div>

                <div className="col-span-1">
                    <Image 
                        className="object-cover w-full h-full opacity-75"
                        src={LogInImage} 
                        alt="Forgot Password Image"
                    />
                </div>
            </div>
        </div>
    );
}
