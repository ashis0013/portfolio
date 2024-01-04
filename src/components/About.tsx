import React from 'react'
import { Skills } from './Skills'

export const About = (props: {}) => {
  return (
    <div
      id='about'
      className='max-w-[920px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center px-8'
    >
      <div className='text-2xl md:text-4xl text-lprimary dark:text-dprimary mb-16 font-mono'>
        about
      </div>
      <div className='flex flex-col md:flex-row'>
        <p className='text-base md:text-lg text-ltext dark:text-dtext my-auto mb-16 md:mr-24'>
          Engineer with over 2 years of experience building products at pace and scale. Bringing in the declarative paradigm at product development. A dedicated problem solver. Experienced in almost all corners of business-driven software development. Worked extensively in Fullstack Development and AI as well as skilled in Microservices, Deep Learning, Distributed Systems, Python, Go, Kotlin, Amazon Web Service, Low-Level Design, Algorithm, and Data Structure.
        </p>
        <div className='mx-auto'>
          <Skills />
        </div>
      </div>
    </div>
  )
}
