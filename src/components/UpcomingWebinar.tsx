"use client"

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";


const FeaturedWebinar = [
    {
        title: "Mastering JavaScript: From Fundamentals to Advanced Concepts",
        slug: "mastering-javascript",
        description: "Join us for an in-depth exploration of JavaScript, covering everything from basic syntax to advanced topics like closures and async programming.",
        isFeatured: true
      },
      {
        title: "Building Scalable Web Applications with MERN Stack",
        slug: "mern-stack-web-apps",
        description: "Learn how to build powerful, scalable web applications using the MERN stack (MongoDB, Express, React, and Node.js) in this comprehensive webinar.",
        isFeatured: true
      },
      {
        title: "Demystifying Machine Learning: Algorithms and Use Cases",
        slug: "machine-learning-webinar",
        description: "This webinar covers the fundamentals of machine learning, exploring popular algorithms, real-world use cases, and how to get started in the field.",
        isFeatured: false
      },
      {
        title: "Mastering Data Structures and Algorithms for Coding Interviews",
        slug: "dsa-interview-prep",
        description: "Prepare for coding interviews with our expert-led session on mastering data structures and algorithms, focusing on key concepts and problem-solving techniques.",
        isFeatured: true
      },
      {
        title: "Introduction to Cybersecurity: Protecting Systems and Data",
        slug: "intro-to-cybersecurity",
        description: "Explore the basics of cybersecurity, from common vulnerabilities to essential practices for securing systems and networks in this beginner-friendly webinar.",
        isFeatured: false
      },
      {
        title: "Deep Dive into Artificial Intelligence and Neural Networks",
        slug: "ai-neural-networks",
        description: "This webinar takes a deep dive into AI and neural networks, explaining how they work and their applications in real-world problem-solving.",
        isFeatured: true
      }
]

function UpcomingWebinar() {
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
            <h2 className='sm:text-2xl text-teal-600 font-semibold tracking-wide uppercase'>Featured Webinar</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Developer Journey</p>
        </div>
        <div className='mt-10'>
            <HoverEffect 
            items={FeaturedWebinar.map(webiner =>(
                {   title : webiner.title,
                    description : webiner.description,
                    link : `/${webiner.slug}`
                }
            ))}
            />
        </div>
        <div className='mt-10 text-center'>
        <Link href={"/webinars"}
        className="bg-gray-600 p-4 rounded-full font-semibold hover:bg-gray-800 transition-all"
        >
            View All Webinars
        </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinar
