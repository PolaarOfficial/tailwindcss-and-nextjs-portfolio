"use client";
import React from "react";
import Image from "next/image";
const skills = [
    {skill:"NodeJS"},
    {skill:"React Native"},
    {skill:"Kotlin"},
    {skill:"Typescript"},
    {skill:"Gherkin"},
    {skill:"Java"},
    {skill:"Expo"},
    {skill:"Selenium"},
    {skill:"Python"},
    {skill:"NextJS"},
    {skill:"Tailwind"}
]
export default function AboutSection() {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <div className="flex flex-column space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
                        <p>
                            {" "}
                            Hi my name is Alec and I am a {" "}
                            <span className="font-bold">{"creative"}</span>,
                            <span className="font-bold">{" ambitious"}</span>, and 
                            <span className="font-bold">{" goal-oriented"}</span> software 
                            engineer based out of the U.S. 
                        </p>
                        <br/>
                        <p>
                            I graduated from Champlain College in 2018, with a B.S. in Computer Science and have been working in crypto, fin-tech and video-streaming companies.
                        </p>
                        <p>
                            I love DJing and producing electronic music, create applications to solve various problems I face, as well as travelling!
                        </p>
                        <p>
                            I believe that you can achieve anything you set your mind to, which is why I love to leverage Computer Science as much as I can. I am excited to learn about new technologies,
                            how to break them, and help others. I am excited where my career has taken me so far, and am always open to new opportunities.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My skills</h1>
                        <div className="flex flex-wrap flex-row justify-center md:justify-start">
                            {skills.map((item, idx)=>{
                                return <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold ">{item.skill}</p>
                            })}
                        </div>
                        <Image 
                            src="/polar_bear_coding.jpg"
                            className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 rounded-full shadow-2xl md:top-5" 
                            alt=""
                            width={325} 
                            height={325}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}
