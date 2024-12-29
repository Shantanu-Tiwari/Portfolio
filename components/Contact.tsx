"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic"; 

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
    ssr: false, 
});

export const Contact = () => {
    return (
        <section id="contact" className="py-32 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-16"
            >
                <div className="space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl font-bold text-gray-100 leading-tight text-center lg:text-left"
                    >
                        Get in <span className="text-gray-500">touch</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass p-8 rounded-2xl space-y-8"
                    >
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300">LinkedIn</p>
                            <a
                                href="https://www.linkedin.com/in/shantanutiwari24/"
                                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
                            >
                                Shantanu Tiwari
                                <span className="text-gray-500">➚</span>
                            </a>
                        </div>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300">Email</p>
                            <div className="flex items-center">
                                <a
                                    href="mailto:shantanutiwarigzb@gmail.com"
                                    className="text-3xl lg:text-4xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
                                >
                                    shantanutiwarigzb
                                </a>
                                <span className="text-gray-500 text-3xl">➚</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300">Office</p>
                            <address className="text-xl not-italic leading-relaxed">
                                Greater Noida, Uttar Pradesh
                                <br />
                                India
                            </address>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
                >
                  
                    <MapComponent />
                </motion.div>
            </motion.div>
        </section>
    );
};
