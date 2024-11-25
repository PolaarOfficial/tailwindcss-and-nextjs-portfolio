
"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown} from "react-icons/hi";
export default function HeroSection(){
    return (
       <section id="home"> 
        <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
            <div className="md:w-1/2 md:mt-2">
                <Image 
                    className="rounded-full shadow-2xl" 
                    src="/Profile.jpg" 
                    alt="" 
                    width={300} 
                    height={300}/>
            </div>
            <div className="md:w-3/5 md:mt-2">
                <h1 className="font-bold text-4xl mt-6 text-teal-600 md:mt-0">Hello, I'm Alec!</h1>
                <p className="text-lg mt-4 mb-6 md:text-2xl">
                    I am a software engineer based out of the U.S. Working towards creating applications that help our 4 legged friends, as well as organizational applications.
                </p>
                <Link
                    to="projects"
                    activeClass="active"
                    className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Projects</Link>
            </div>
        </div>
        <div className="flex flex-row justify-center">
            <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <HiArrowDown size={35} className="animate-bounce"/>
            </Link>
        </div>
       </section>
    )
}