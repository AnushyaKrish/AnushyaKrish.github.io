import React from 'react'

export const Education = () => {
    const educations = [
        {
            degree: 'M.SC Computer Science',
            year: '2022 - 2024',
            institution: 'Alagappa University, Karaikudi.',
        },
        {
            degree: 'B.SC Computer Science',
            year: '2017 - 2020',
            institution: 'S.T. Hindu College, Nagercoil.',
        },
        {
            degree: 'HSC',
            year: '2016 - 2017',
            institution: 'M.R.G. Government Girls Higher Secondary School, Erode.',
        },

    ];
    return (
        <div className="mx-auto max-w-[1024px] px-5 mb-20">
            <div className="mx-auto w-full flex flex-col h-full gap-14 py-5">
                <div className="flex flex-col">
                    <div className="text-3xl md:text-4xl py-3 lg:py-5 lg:text-5xl xl:text-7xl bg-gradient-to-r from-slate-50 to-slate-500  text-transparent bg-clip-text font-thin text-center">Educational Qualifications</div>
                    <div className="text-sm md:text-xl font-thin text-center text-slate-300">Educational Background Summary</div>
                </div>

                <div>
                    {educations.map((edu, key) => {
                        return (
                            <div key={key} className="flex flex-col gap-0">
                                {/* Left Section */}
                                <div className="inline-flex justify-center items-center flex-col h-full">
                                    {key != 0 && (
                                        <div className="h-10 grow shrink-0 w-px bg-slate-700"></div>
                                    )}
                                    <div className={`p-[.45rem] text-center border bg-slate-800 animate-pulse border-slate-400 inline-flex rounded-full`}
                                    ></div>
                                    <div className="h-10 grow shrink-0 w-px bg-slate-700"></div>
                                </div>

                                {/* Right Section */}
                                <div className="py-5 px-3 border-slate-600 rounded-xl border ">
                                    <div className="flex items-center mb-3 flex-col md:flex-row md:justify-center md:gap-2">
                                        <span className='font-bold text-lg text-slate-200'>{edu.degree}</span>
                                        <span className="font-normal text-sm md:text-base lg:text-lg text-slate-400"><span className="hidden md:inline-block">-</span> {edu.year}</span>
                                        <span className="font-normal text-sm md:text-base lg:text-lg text-slate-400"><span className="hidden md:inline-block">-</span> {edu.institution}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
