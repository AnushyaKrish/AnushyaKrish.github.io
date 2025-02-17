import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";

export const GetInTouch = () => {
  return (
    <div className="mx-auto max-w-[1024px] px-5 my-16">
      <div className="mx-auto w-full flex flex-col h-full gap- py-5">
        <div className="flex flex-col">
          <div className="text-3xl md:text-4xl py-3 lg:py-5 lg:text-5xl xl:text-7xl bg-gradient-to-r from-slate-50 to-slate-500  text-transparent bg-clip-text font-thin text-center">Get In Touch</div>
          <div className="text-sm md:text-xl font-thin text-center text-slate-300">Open the Lines of Communication</div>
        </div>

        <div className="h-16 w-px bg-slate-700 mx-auto mt-3"></div>

        <div className="flex justify-around items-center mb-5 px-4">
          <a href="mailto:uanushya@gmail.com" className="border rounded-xl transition-all duration-400 hover:border-slate-500 hover:scale-105 hover:bg-slate-900 border-slate-600 px-4 py-2 flex flex-col items-center gap-3" target="_blank" rel="noopener noreferrer">
            <MdOutlineMailOutline className='text-xl lg:text-3xl text-slate-300' />
          </a>
          <hr className='grow border-slate-600 dark:shadow-md' />
          <a href="https://www.instagram.com/anushya_u" className="border rounded-xl transition-all duration-400 hover:border-slate-500 hover:scale-105 hover:bg-slate-900 border-slate-600 px-4 py-2 flex flex-col items-center gap-3" target="_blank" rel="noopener noreferrer">
            <BsInstagram className='text-xl lg:text-3xl text-slate-300' />
          </a>
          <hr className='grow border-slate-600 dark:shadow-md' />
          <a href="https://github.com/AnushyaKrish" className="border rounded-xl transition-all duration-400 border-slate-400 scale-110 bg-slate-900 border-slte-700 px-4 py-2 flex flex-col items-center gap-3" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-xl lg:text-3xl text-slate-300' />
          </a>
          <hr className='grow border-slate-600 dark:shadow-md' />
          <a href="tel:+919600436752" className="border rounded-xl transition-all duration-400 hover:border-slate-500 hover:scale-105 hover:bg-slate-900 border-slate-600 px-4 py-2 flex flex-col items-center gap-3" target="_blank" rel="noopener noreferrer">
            <FaSquarePhone className='text-xl lg:text-3xl text-slate-300' />
          </a>
          <hr className='grow border-slate-600 dark:shadow-md' />
          <a href="https://www.linkedin.com/in/anushya-u-100a0a1a9" className="border rounded-xl transition-all duration-400 hover:border-slate-500 hover:scale-105 hover:bg-slate-900 border-slate-600 px-4 py-2 flex flex-col items-center gap-3" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className='text-xl lg:text-3xl text-slate-300' />
          </a>
        </div>

        <div className="inline-bloc mx-auto mt-10">
          <a href="/cv-anushya.pdf" className='border border-slate-400 text-slate-300 rounded-full text-sm px-6 py-2 hover:bg-slate-900 hover:border-slate-200 transition-colors duration-300 ease-in focus:bg-slate-800 focus:border-slate-400' download={true} >Get My CV</a>
        </div>

      </div>
    </div>
  )
}
