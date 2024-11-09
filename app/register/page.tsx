'use client';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Poppins } from "next/font/google";
import Image from "next/image";
import SFCLogo from "../../public/SFC Logo.jpg";
import RegisterImage from "../../public/Register Image.jpg";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function Register() {
    const [form, setForm]  = useState({
        email: "",
        password: ""
    });

    const [isNew, setIsNew] = useState(true);
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;

            if(!id) return;
            setIsNew(false);
            const response = await fetch(
                'http://localhost:5050/users/${params.id.toString()}'
            );

            if(!response.ok) {
                const message = 'An error has occurred: ${response.statusText}';
                console.error(message);
                return;
            }
            
            const user = await response.json();
            if(!user) {
                console.warn('Record with id ${id} not found');
                return;
            }
            setForm(user);
        }
        fetchData();
        return;
    }, [params.id]);

    // These methods will update the state properties.
    function updateForm(value: Partial<typeof form>) {
        return setForm((prev) => {
        return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const person = { ...form };
        try {
        let response;
        if (isNew) {
            // if we are adding a new record we will POST to /record.
            response = await fetch("http://localhost:5050/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
            });
        } else {
            // if we are updating a record we will PATCH to /record/:id.
            response = await fetch(`http://localhost:5050/users/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
            });
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setForm({ email: "", password: "" });
        }
    }

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
                        <form className="space-y-6" method="POST" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => updateForm({ email: e.target.value })} required className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                            <input id="password" name="password" type="password" value={form.password} onChange={(e) => updateForm({ password: e.target.value })} required className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                            </div>
                            <div className="mt-2">
                            <input id="confirmpassword" name="confirmpassword" type="password" required className="pl-2 block w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

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