"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";
const projects = [
    {
        name: "PuppyParty",
        description: "PuppyParty is a dog socialization mobile app for people with dogs who want to hang out with other dogs at the park.",
        image:"/dog-outline-chasing-balloons.png",
        github:"",
        link:""
    }
]

export default function ProjectsSection() {
    return (
        <section id="projects">
            <h1 className="text-center font-bold text-4xl">Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-20">
                {projects.map((project,idx)=>{
                    return <div key={idx}>
                    <SlideUp offset="-300px 0px -300px 0px">
                        <div className="flex flex-col md:flex-row md:space-x-12 animate-slideUpCubiBezier animation-delay-2">
                            <div className="mt-8 md:w-1/2"> 
                                <Image 
                                    src={project.image}
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="rounded-xl shadow-xl hover-opacity-70"
                                />
                            </div>
                            <div className="mt-12 md:w-1/2">
                                <h1 className="text-4xl font-bold mb-6">
                                    {project.name}
                                </h1>
                                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                    {project.description}
                                </p>
                                <div className="flex flex-grow align-bottom space-x-4">
                                    {project.github!=""?
                                    <Link target="_blank" href={project.github}>
                                        <BsGithub
                                            size={30}
                                            className="hover:-translate-y-1 transition-transform cursor-pointer"/>
                                    </Link> 
                                    :
                                    <></>}
                                    {project.link!=""?
                                    <Link target="_blank" href={project.link}>
                                        <BsArrowUpRightSquare
                                            size={30}
                                            className="hover:-translate-y-1 transition-transform cursor-pointer"/>
                                    </Link> 
                                    :
                                    <></>}
                                </div>
                            </div>
                        </div>
                        </SlideUp>
                    </div>
                })}

            </div>
        </section>
    )
}