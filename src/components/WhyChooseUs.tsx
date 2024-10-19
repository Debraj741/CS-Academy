"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with years of experience in computer science. Our expert instructors provide in-depth knowledge and hands-on guidance to help you master the latest technologies.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Real-World Projects",
    description: "Apply your learning to real-world problems through practical projects. Gain hands-on experience that prepares you for challenges in the tech industry and boosts your confidence in building complex systems.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2plY3RzfGVufDB8fDB8fHww"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Flexible Learning Path",
    description: "Whether you're a beginner or an experienced developer, our courses are designed to meet your learning needs. Start from the basics or dive into advanced topics, and learn at your own pace.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-extrabold">
        Flexible Learning Path

      </div>
    ),
  },
  {
    title: "Interactive Coding Environment",
    description: "Practice coding directly within our platform. Solve problems, build applications, and get instant feedback with our interactive coding environment that mimics real-world scenarios.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-extrabold">
        Interactive Coding Environment
      </div>
    ),
  },
  {
    title: "Comprehensive CS Curriculum",
    description: "From foundational programming to advanced algorithms and machine learning, our comprehensive curriculum covers all essential CS topics. Build a strong foundation and advance your skills progressively.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-extrabold">
        Comprehensive CS Curriculum
      </div>
    ),
  },
  {
    title: "Certification on Completion",
    description: "Earn certificates that showcase your achievements. With our verified credentials, you can highlight your skills to potential employers and stand out in the competitive tech landscape.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-extrabold">
        Certification on Completion
      </div>
    ),
  },
  {
    title: "",
    description: ""
  }
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs
