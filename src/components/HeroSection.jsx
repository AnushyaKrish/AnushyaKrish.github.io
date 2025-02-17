import React from 'react'
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { RiScrollToBottomLine } from "react-icons/ri";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import anu from "/anu-3.jpg"

export const HeroSection = () => {
    return (
        <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
            <div className="relative w-screen overflow-hidden rounded-lg bg-background">
                <FlickeringGrid
                    className="absolute inset-0 z-0 [mask-image:radial-gradient(350px_circle_at_center,black,transparent)] md:[mask-image:radial-gradient(650px_circle_at_center,black,transparent)]"
                    squareSize={4}
                    gridGap={6}
                    color="#60A5FA"
                    maxOpacity={0.85}
                    flickerChance={0.3}
                />
                <div className="flex flex-col text-center justify-center w-full gap-3 h-screen py-5 px-4">
                    <img src={anu} alt="anushya-profile-img" className="rounded-full z-10 size-[10rem] border-2 border-slate-300 p-2 mx-auto aspect-square object-cover" />
                    <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-slate-50 to-slate-800 bg-clip-text text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-none text-transparent mt-3">Hi' there, I'm Anushya</div>
                    <TypingAnimation className="text-xl md:text-3xl xl:text-4xl text-slate-300 mb-5 font-semibold" startOnView={true}>Android Developer</TypingAnimation>
                    <RiScrollToBottomLine className="animate-bounce text-2xl md:text-3xl lg:text-4xl mx-auto text-slate-400" />
                </div>
            </div>
        </div>
    )
}
