import React from 'react'
import akinfopark from "/akinfopark_logo.jpg"

export const Experience = () => {
  return (
    <div className="mx-auto max-w-[1024px] px-5 mb-20">
      <div className="mx-auto w-full flex flex-col h-full gap-14 py-5">
        <div className="flex flex-col">
          <div className="text-3xl md:text-4xl py-3 lg:py-5 lg:text-5xl xl:text-7xl bg-gradient-to-r from-slate-50 to-slate-500  text-transparent bg-clip-text font-thin text-center">Professional Background</div>
          <div className="text-sm md:text-xl font-thin text-center text-slate-300">Essence of My Professional Journey</div>
        </div>

        <div>

          {/* Experience List */}
          <div className="flex gap-9">

            {/* Left Section */}
            <div className="inline-flex object-cover w-20 h-13 justify-center items-center flex-col gap-2">
             <img 
                src={akinfopark} 
                alt="akinfopark-img" 
                className="rounded-full ring-1 md:ring-2 ring-blue-500 ring-offset-4 ring-offset-slate-900"
            />
            <div className="h-full w-px bg-slate-700"></div>
            </div>

            {/* Right Section */}
            <div className="py-3 pb-5">
              <div className="flex items-start mb-3 flex-col md:flex-row md:gap-2">
                <span className='font-bold text-xl text-slate-200'>AK Infopark Private Limited</span>
                <span className="font-normal text-lg text-slate-400">- Mobile App Developer - Team Lead</span>
              </div>
              <div className="text-xs text-slate-400 font-semibold">Jul 2022 - Dec 2024</div>

              <ul className='list-none mt-4 text-slate-300'>
                <li className='mb-2 flex gap-2'> <span>*</span> <span>Developed native Android Application using <strong>Java, Kotlin and Flutter.</strong>.</span></li>
                <li className='mb-2 flex gap-2'> <span>*</span> <span>Worked on more than <strong>10+</strong> Mobile Apps like <strong>Ansar Prepaid, Ticket 365, Saatar, Docdate, Rentla,
                  Furqaan and HBSLife</strong>.</span></li>
                <li className='mb-2 flex gap-2'> <span>*</span> <span>Conducted <strong>Workshops & Internships</strong> for college students in app development.</span></li>
                <li className='mb-2 flex gap-2'> <span>*</span> <span>Worked closely with Project Managers, <strong>Team Lead</strong> from gathering requirement,
                  Planning development, Testing and finally deployed Google play store and post
                  launch support.</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}