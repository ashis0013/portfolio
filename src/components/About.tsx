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
          Hello, this is Ashis Paul. I am a Full stack developer with over 1.5 years of experience
          in building software solution at pace and at scale. Passionate in using declarative
          paradigm. As a dedicated problem solver I have experience of working in Backend
          Development, Android Development and Frontend Web Development. Skilled in Microservices,
          Distributed Systems, Go, Kotlin, Amazon Web Service, Low Level Design, Algorithm, Native
          Android Development, Data Structure.
        </p>
        <div className='mx-auto'>
          <Skills />
        </div>
      </div>
    </div>
  )
}
