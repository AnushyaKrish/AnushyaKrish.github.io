import React from 'react'
import Android from "@/components/magicui/android";
import ansar from "/project-images/ansar.jpg"
import saatar from "/project-images/saatar.jpg"
import rentla from "/project-images/rentla.jpg"
import { Accordion, AccordionItem } from "@heroui/react";

export const Projects = () => {
  const items = [
    {
      title: "Saatar",
      subtitle: 'Food and Grocery',
      description: 'Saatar offers food and grocery delivery at the lowest prices, with separate apps for delivery partners (Saatar Agent) and shop owners (Saatar Merchant).',
      image: saatar,
      skills: [
        'Android SDK ', ' Java ', ' ViewBinding ', ' SQLite ', ' Retrofit ', ' RESTAPI Integration'
      ]
    },
    {
      title: "Rentla",
      subtitle: 'Renting Products App',
      description: 'Rentla is India\'s first app for renting laptops, computers, cameras, generators, projectors, and more, catering to those in need of such equipment.',
      image: rentla,
      skills: [
        'Android SDK ', ' Java', ' DataBinding ', ' ViewBinding ', ' SQLite ', ' ROOM Database ', ' Retrofit ', ' RESTAPI Integration'
      ]
    },
    {
      title: "Ansar Prepaid",
      subtitle: 'Mobile Recharge Application',
      description: 'Ansar Prepaid is Malaysian based Mobile Recharge Application.',
      image: ansar,
    },
    {
      title: "Docdate",
      subtitle: 'Search and book Doctor\'s',
      description: 'Docdate Application is very essential for searching doctors & book your appointments in your locality.',
      skills: [
        'Android SDK ', ' Java ', ' DataBinding ', ' ViewBinding ', ' SQLite ', ' ROOM Database ', ' Retrofit ', ' RESTAPI Integration'
      ]
    },
    {
      title: "Pet Foodle",
      subtitle: 'For Pet Care',
      description: 'Pet Foodle makes pet care effortless with user-friendly profiles, appointment organization, accessory shopping, and community connections.',
      skills: [
        'Android SDK ', ' Java', ' DataBinding ', ' ViewBinding ', ' SQLite ', ' ROOM Database ', ' Retrofit ', ' RESTAPI Integration'
      ]
    },
    {
      title: "Other Applications",
      description: 'Developed a several mobile application such as <strong>Furqaan</strong>, <strong>Oray</strong>, <strong>Hbs-life</strong>, <strong>Piston Squad</strong>, <strong>Eden Shops</strong> for internal needs, enhancing efficiency and Workflow within the organization',
    },
  ];
  return (
    <div className="mx-auto max-w-[1024px] px-5 mb-20">
      <div className="mx-auto w-full flex flex-col h-full gap-14 py-5">
        <div className="flex flex-col ">
          <div className="text-3xl md:text-4xl py-3 lg:py-5 lg:text-5xl xl:text-7xl bg-gradient-to-r from-slate-50 to-slate-500  text-transparent bg-clip-text font-thin text-center">Projects</div>
          <div className="text-sm md:text-xl font-thin text-center text-slate-300 mb-5">Results-Driven Projects</div>
        </div>

        <Accordion selectionMode="multiple" variant="bordered">
            {items.map((item, key) => {
              return (
                <AccordionItem
                  key={key}
                  aria-label={`${item.title} Accordion`}
                  subtitle={item?.subtitle && item.subtitle}
                  title={item.title}
                >
                  <div className="flex flex-col gap-3 mb-4">

                    {/* Android Mockup */}
                    {item?.image && (
                      <>
                        <span className="text-sm text-slate-300 underline underline-offset-4 mb-2">Preview Image:</span>
                        <div className="aspect-video size-full">
                          <Android
                            className="size-full mock-animate"
                            src={item.image}
                          />
                        </div>
                      </>
                    )}

                    {/* Description */}
                    {item?.description && (
                      <>
                        <span className="text-sm text-slate-300 underline underline-offset-4 mb-2">Description:</span>
                        <div className="text-slate-300" dangerouslySetInnerHTML={{ __html: item.description }} />
                      </>
                    )}

                    {/* Technologies */}
                    {item?.skills && (
                      <>
                        <span className="text-sm text-slate-300 underline underline-offset-4 mb-2">Technologies Used:</span>
                        <div className="flex gap-2 items-center flex-wrap">
                          {item.skills.map((skill, key) => {
                            return (
                              <span key={key} class="inline-flex items-center rounded-md bg-slate-900 px-3 py-1 text-sm font-medium text-slate-300 ring-1 ring-inset ring-slate-300/30">{skill}</span>
                            )
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </AccordionItem>
              )
            })
            }
          </Accordion>

      </div>
    </div>

  )
}
