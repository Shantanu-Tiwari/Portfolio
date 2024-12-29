import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript, SiMongodb, SiJavascript, SiPython, SiCplusplus, SiDjango, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const stackItems = [
    { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
    { id: 2, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
    { id: 3, name: "Typescript", icon: SiTypescript, color: "#3178C6" },
    { id: 4, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { id: 5, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
    { id: 6, name: "JavaScript", icon: SiJavascript, color: "#FFFF00" },
    { id: 7, name: "Python", icon: SiPython, color: "#3776AB" },
    { id: 8, name: "C++", icon: SiCplusplus, color: "#00599C" },
    { id: 9, name: "Django", icon: SiDjango, color: "#092E20" },
    { id: 10, name: "Express", icon: SiExpress, color: "#888888" },
];

export const Stack = () => {
    return (
        <section id="stack" className="py-14 glass">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-5xl text-gray-200 font-bold mb-4">My Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {stackItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-center flex-col rounded-xl p-4 sm:p-6 transition-transform transform hover:scale-105"
                        >
                            <div className="mb-4 bg-white/10 p-6 rounded-xl">
                                {React.createElement(item.icon, {
                                    className: "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
                                    style: { color: item.color },
                                    "aria-label": item.name,
                                })}
                            </div>
                            <p className="text-gray-400 font-semibold">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
