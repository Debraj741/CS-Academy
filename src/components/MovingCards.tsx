"use client"
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const CsAcademyTestimonials = [
  {
    "quote": "CS Academy transformed the way I approach coding. The hands-on projects and expert guidance helped me land my first developer job!",
    "name": "Debu Roy",
    "title": "Junior Software Engineer"
  },
  {
    "quote": "The courses are well-structured and easy to follow. I went from knowing nothing about web development to building full-stack applications confidently.",
    "name": "Debraj Kundu",
    "title": "Full Stack Developer"
  },
  {
    "quote": "I was able to crack tough coding interviews after completing the Advanced DSA course. The explanations were clear and the practice questions were on point.",
    "name": "Neha Singh",
    "title": "Software Engineer at TechCorp"
  },
  {
    "quote": "Learning at CS Academy was a game-changer. The real-world projects gave me the experience I needed to transition into a cybersecurity role.",
    "name": "Megha Singh",
    "title": "Cybersecurity Analyst"
  },
  {
    "quote": "CS Academy's interactive coding environment is amazing! I could practice coding problems and get immediate feedback, which really helped me improve.",
    "name": "Sandeep Mehta",
    "title": "Data Science Enthusiast"
  }
]


function MovingCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className='text-3xl font-bold text-center mb-8 z-10'>What Our Learners Achieved - Real Experiences, Real Success</h2>
        <div className='flex justify-center items-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>   
            <div className='w-full max-w-6xl'>
            <InfiniteMovingCards
                items={CsAcademyTestimonials}
                direction="right"
                speed="slow"
            />
            </div>
        </div>
    </div>
  )
}

export default MovingCards
