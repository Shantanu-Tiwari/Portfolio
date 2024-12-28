"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import profilepic from "@/assets/profilepic.png";
import obj from "@/assets/obj1.png";
import { animate, useMotionValue, useMotionTemplate } from "framer-motion";
import { motion } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
    const [isClient, setIsClient] = useState(false);
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            animate(color, COLORS_TOP, {
                ease: "easeInOut",
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
            });
        }
    }, [color, isClient]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

    if (!isClient) {
        return null;
    }

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open for work
                </span>
                <h1 className="text-white/40 text-7xl font-black">Hi, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl lg:text-8xl">
                    Shantanu Tiwari
                </h1>
                <div className="flex flex-col items-center">
                    <Image
                        src={profilepic}
                        alt="Profile picture of Shantanu Tiwari"
                        width={250}
                        className="rounded-full"
                    />
                    <motion.a
                        href="https://github.com/Shantanu-Tiwari"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex justify-center items-center m-1 gap-2 px-4 py-2 bg-gray-800 mb-4 rounded-full"
                    >
                        <Image
                            src={obj}
                            alt="Download CV icon"
                            width={30}
                            className="rounded-2xl mx-auto"
                        />
                        <p className="font-medium text-center">Github</p>
                    </motion.a>
                    <p className="flex justify-center font-medium max-w-xl text-center">
                        Fullstack developer based in India, bridging Ideas and Technology
                    </p>
                </div>
            </div>
            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
        </motion.section>
    );
};
