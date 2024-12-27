"use client"
import React, {useState, useEffect} from "react";
import Image from "next/image";
import project1 from "@/assets/proj2.png";
import project2 from "@/assets/proj1.png";
import project3 from "@/assets/proj3.png";

const projects = [
    {id:1, year:2024, title:'Nike Landing Page', description:'', image: project1},
    {id:2, year:2024, title:'Simon Says', description:'', image: project2},
    {id:3, year:2024, title:'Quizzer', description:'', image: project3},
];

export const Portfolio = () =>{
    const [selectedProject, setSelectedProject]= useState(projects[0])
    return(
        <section id="portfolio" className="py-32 text-white">
            <h2 className="text-6xl">Selected <span className="text-gray-400">Projects</span></h2>



        </section>
    )
}











