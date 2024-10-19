'use client'

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

import coursedata from "@/data/cs_course.json"

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className='mt-30 pb-7 text-center md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-700'>All Courses ({coursedata.courses.length})</h1>

      <div className="flex flex-wrap gap-5 justify-center cursor-pointer">
        {coursedata.courses.map((course)=>(
          <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {course.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {course.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={course.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={course.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Explore Now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Enroll Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        ))}
      </div>
    </div>
  )
}

export default page
