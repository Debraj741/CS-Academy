import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
    >

        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />  
      <div className='text-center p-4 w-full z-10'>
      <h1
      className='mt-20 pb-7 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-200 to-green-700'
      >Unlock Your Coding Potential..</h1>
      <p
    className='mt-5 font-normal text-base md:text-lg text-gray-300 max-w-lg mx-auto'
      >We offers a complete range of computer science courses, from beginner to advanced levels. Learn programming, data structures, web development, and more through a structured, hands-on approach.</p>
      </div>

      <div className='mt-4'>
        <Link href={"/courses"}>
            <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-semibold"
            >
            Explore Courses
            </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
