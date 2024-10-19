import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-gray-400 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
            <div className='flex flex-col gap-6'>
                <h1 className='font-bold text-xl'>About Us</h1>
                <p className='text-sm'>
                At CS Academy, we are dedicated to providing high-quality, comprehensive computer science education for learners of all levels. From beginners to advanced coders, our expert-led courses with real-world projects.
                </p>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='font-bold text-xl'>Quick Link</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='font-bold text-xl'>Follow Us</h1>
                <ul>
                    <li>FaceBook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className='flex flex-col gap-6 items-center'>
                <h1 className='font-bold text-xl'>Contact Us</h1>
                <ul>
                    <li>Kolkata, West Bengal</li>
                    <li>Email: debrajkundu19@gmail.com</li>
                    <li>Phone - 91+ 0000000000</li>
                </ul>
            </div>
        </div>
            <p className='text-center text-xs mt-10'>2024 CS Academy.. All Right Reserved.</p>
    </footer>
  )
}

export default Footer
