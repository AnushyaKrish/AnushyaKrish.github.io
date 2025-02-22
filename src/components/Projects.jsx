import React from 'react'
import Android from "@/components/magicui/android";
import saatar from "/project-images/saatar.jpg"
import food from "/project-images/food.jpg"
import preview from "/project-images/preview.jpg"
import rentlahome from "/project-images/home.jpg"
import rentlasearch from "/project-images/search.jpg"
import rentlaaccount from "/project-images/account.jpg"
import ansarhome from "/project-images/ansarhome.jpg"
import ansartopup from "/project-images/ansartopup.jpg"
import ansarsubsc from "/project-images/ansarsubsc.jpg"
import docdatehome from "/project-images/Verification1.jpg"
import docdatesummary from "/project-images/Summary.jpg"
import docdatedoctor from "/project-images/Summary1.jpg"
import parkinghome from "/project-images/parkinghome.jpg"
import parkingsummary from "/project-images/parkingsummary.jpg"
import parkingsubmit from "/project-images/parkingsubmit.jpg"

import { Accordion, AccordionItem } from "@heroui/react";

export const Projects = () => {
  const items = [
    {
      title: "Saatar",
      subtitle: 'Food and Grocery',
      description: 'Saatar offers food and grocery delivery at the lowest prices, with separate apps for delivery partners (Saatar Agent) and shop owners (Saatar Merchant).',
      images: [ saatar, food, preview ],
      skills: [
        'Android SDK ', ' Java ', ' ViewBinding ', ' SQLite ', ' Retrofit ', ' RESTAPI Integration'
      ]
    },
    {
      title: "Rentla",
      subtitle: 'Renting Products App',
      description: 'Rentla is India\'s first app for renting laptops, computers, cameras, generators, projectors, and more, catering to those in need of such equipment.',
      images: [ rentlahome, rentlasearch, rentlaaccount ],
      skills: [
        'Android SDK ', ' Java', ' DataBinding ', ' ViewBinding ', ' SQLite ', ' ROOM Database ', ' Retrofit ', ' RESTAPI Integration'
      ]
    },
    {
      title: "Ansar Prepaid",
      subtitle: 'Mobile Recharge Application',
      description: 'Ansar Prepaid is Malaysian based Mobile Recharge Application.',
      images: [ ansarhome, ansartopup, ansarsubsc ],
    },
    {
      title: "Docdate",
      subtitle: 'Search and book Doctor\'s',
      description: 'Docdate Application is very essential for searching doctors & book your appointments in your locality.',
      images: [ docdatehome, docdatesummary, docdatedoctor ],
      skills: [
        'Android SDK ', ' Java ', ' DataBinding ', ' ViewBinding ', ' SQLite ', ' ROOM Database ', ' Retrofit ', ' RESTAPI Integration'
      ]
    },
    {
      title: "Parking Tickets",
      subtitle: 'For Parking Tickets',
      description: 'provide the parking ticket and receipt for the vehicle',
      images: [ parkinghome, parkingsummary, parkingsubmit ],
      skills: [
        'Android SDK ', ' Java', ' DataBinding ', ' ViewBinding ', ' SQLite ', ' ROOM Database ', ' Retrofit ', ' RESTAPI Integration'
      ]
    },
    {
      title: "Other Applications",
      description: 'Developed a several mobile application such as <strong>Furqaan</strong>, <strong>Ticket 365</strong>, <strong>Hbs-life</strong>, <strong>7Nian</strong>, <strong>Eden Mart</strong> for internal needs, enhancing efficiency and Workflow within the organization',
    },
  ];
  return (
    <div className="mx-auto max-w-[1024px] px-5 mb-20">
      <div className="mx-auto w-full flex flex-col h-full gap-14 py-5">
        <div className="flex flex-col ">
          <div className="text-3xl md:text-4xl py-3 lg:py-5 lg:text-5xl xl:text-7xl bg-gradient-to-r from-slate-50 to-slate-500 text-transparent bg-clip-text font-thin text-center">
            Projects
          </div>
          <div className="text-sm md:text-xl font-thin text-center text-slate-300 mb-5">
            Results-Driven Projects
          </div>
        </div>

        <Accordion selectionMode="multiple" variant="bordered">
          {items.map((item, key) => (
            <AccordionItem key={key} aria-label={`${item.title} Accordion`} subtitle={item?.subtitle} title={item.title}>
              <div className="flex flex-col gap-3 mb-4">

                {/* Multiple Images Preview */}
                {item?.images && (
                  <>
                    <span className="text-sm text-slate-300 underline underline-offset-4 mb-2 ">Preview Images:</span>
                    <div className="flex flex-row items-center flex-wrap justify-center gap-1">
                      {item.images.map((img, imgKey) => (
                        <Android key={imgKey} className="size-[200px]" src={img} />
                      ))}
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
                      {item.skills.map((skill, skillKey) => (
                        <span key={skillKey} className="inline-flex items-center rounded-md bg-slate-900 px-3 py-1 text-sm font-medium text-slate-300 ring-1 ring-inset ring-slate-300/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};