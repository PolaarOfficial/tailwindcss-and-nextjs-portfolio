"use client";
import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineSound } from "react-icons/ai";
export default function FooterSection(){
    return (
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
            <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
                <div className="text-neutral-500 dark:text-neutral-100">
                © 2024 Alec Rulev
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 mb-1">
                    <a href="https://www.github.com/PolaarOfficial" rel="noreferrer" target="_blank">
                        <AiOutlineGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer "
                            size={30}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/alec-rulev" rel="noreferrer" target="_blank">
                        <AiOutlineLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer "
                            size={30}
                        />
                    </a>
                    <a href="https://www.soundcloud.com/PolaarOfficial" rel="noreferrer" target="_blank">
                        <AiOutlineSound
                            className="hover:-translate-y-1 transition-transform cursor-pointer "
                            size={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}