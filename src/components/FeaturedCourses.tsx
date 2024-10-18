'use client'
import Link from "next/link"
import courseData from "../data/cs_course.json"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image : string
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
            <h1 className=" sm:text-2xl text-teal-600 font-semibold tracking-wide uppercase">Featured Course</h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With The Best</p>
        </div>
      </div>
      <div className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course:Course)=> (
                <div key={course.id} className="flex justify-center">
                    <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>

                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                            
                            <Link className="mt-2 bg-gray-800 py-1 px-3 rounded-full hover:bg-slate-900 transition-all" href={`/courses/${course.slug}`}>Learn More..</Link>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}
        className="bg-gray-600 p-4 rounded-full font-semibold hover:bg-gray-800 transition-all"
        >
            View All Courses
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
