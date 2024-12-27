"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Stack", path: "#stack" },
    { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className="z-50 fixed flex justify-center w-full text-white font-bold">
            {/* Desktop Navigation */}
            <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
                <ul className="flex flex-row p-2 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className="transform hover:text-white/50 transition-all duration-300 ease-in-out">

                                    {link.title}

                            </Link>
                        </li>
                    ))}
                </ul>
            </div>


            <div
                onClick={toggleNav}
                className="md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {nav && (
                <div className="absolute top-16 right-5 bg-white text-black p-5 rounded shadow-md md:hidden">
                    <ul className="space-y-4">
                        {navLinks.map((link, index) => (
                            <li key={index} onClick={closeNav}>
                                <Link href={link.path} className="block hover:text-gray-600">
                                    {link.title}

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
