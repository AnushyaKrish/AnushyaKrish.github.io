import React from 'react'

export const Profile = () => {
    return (
        <div className="mx-auto max-w-[1024px] px-5 my-16" id="profile">
            <div className="mx-auto w-full flex flex-col h-full gap- py-5">
                <div className="flex flex-col">
                    <div className="text-3xl md:text-4xl py-3 lg:py-5 lg:text-5xl xl:text-7xl bg-gradient-to-r from-slate-50 to-slate-500  text-transparent bg-clip-text font-thin text-center">Quick Intro</div>
                    <div className="text-sm md:text-xl font-thin text-center text-slate-300">An Overview of My Skills and Professional Aspirations</div>
                </div>

                <div className="h-16 w-px bg-slate-700 mx-auto mt-3"></div>
                <div className="border border-slate-700 p-5 text-sm lg:text-lg 2xl:text-2xl text-slate-300 py-5 rounded-lg text-pretty text-justify">
                    Experienced working in startups as an <strong>Mobile App Developer</strong>. Build Mobile Applications for the
                    companies in Ecommerce, Financial, and Recharge. Skilled in <strong>Java, Kotlin, Flutter, Android SDK, Android
                    Development, Android Architecture Patterns, Data Binding, View Binding, Rest API Integration, Sqlite Da
                    Room Database, Hibernate, MYSQL, Payment Gateways</strong> along with Problem solving
                    skills.
                </div>
            </div>
        </div>
    )
}
