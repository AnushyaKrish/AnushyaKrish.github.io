import React from 'react'
import { Chip } from "@heroui/react";

export const Skills = () => {
  const skills = [
    {
      _1: [ 'Rest API Integration', 'Live Data', 'View Binding', 'View Model', 'Unit Testing' ],
      ui: [ 'XML', 'Figma' ],
      database: [ 'Sqlite', 'Room', 'Firebase' ],
      backend: [ 'Java', 'Kotlin' ],
      http_client: [ 'Retrofit', 'OKHTTP' ]
    }
  ];
  return (
    <div className="mx-auto max-w-[1024px] px-5 mb-20">
      <div className="mx-auto w-full flex flex-col h-full gap-14 py-5">
        <div className="flex flex-col">
          <div className="text-3xl md:text-4xl py-3 lg:py-5 lg:text-5xl xl:text-7xl bg-gradient-to-r from-slate-50 to-slate-500  text-transparent bg-clip-text font-thin text-center">Technical Expertise</div>
          <div className="text-sm md:text-xl font-thin text-center text-slate-300">Skilled in Technical Applications</div>
        </div>


        {skills.map((skill, key) => {
          return (
            <div key={key} className="mx-auto w-full flex flex-col h-full gap-5">
              <div className="flex justify-center items-center gap-4 flex-wrap">
                {skill._1.map((item, key1) => {
                  return (
                    <Chip key={key1} color="success" variant="dot">{item}</Chip>
                  )
                })}
              </div>
              <span className="text-sm text-slate-400 text-center font-mono font-semibold block underline underline-offset-4">Programming Languages</span>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                {skill.backend.map((item, key) => {
                  return (
                    <Chip key={key} color="default" variant="dot">{item}</Chip>
                  )
                })}
              </div>
              <span className="text-sm text-slate-400 text-center font-mono font-semibold block underline underline-offset-4">UI</span>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                {skill.ui.map((item, key) => {
                  return (
                    <Chip key={key} color="primary" variant="dot">{item}</Chip>
                  )
                })}
              </div>
              <span className="text-sm text-slate-400 text-center font-mono font-semibold block underline underline-offset-4">Database</span>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                {skill.database.map((item, key) => {
                  return (
                    <Chip key={key} color="warning" variant="dot">{item}</Chip>
                  )
                })}
              </div>
              <span className="text-sm text-slate-400 text-center font-mono font-semibold block underline underline-offset-4">HTTP Client</span>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                {skill.http_client.map((item, key) => {
                  return (
                    <Chip key={key} color="danger" variant="dot">{item}</Chip>
                  )
                })}
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
