import React, { MouseEvent, useRef } from 'react'

export const Home = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  
  const handleMouseMove = (e: MouseEvent<HTMLParagraphElement>) => {
    const text = textRef.current;
    if (!text) return;
    const rect = text.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const isDark = localStorage.getItem('dark-theme') === '"dark"';
    const gradient = isDark
      ? `radial-gradient(circle at ${x}px ${y}px, #fab387, #b4befe)`
      : `radial-gradient(circle at ${x}px ${y}px, #dd7878, #7287fd)`;
    text.style.backgroundImage = gradient;
    text.style.backgroundClip = 'text';
    text.style.color = 'transparent';
  };
  
  const handleMouseLeave = () => {
    const text = textRef.current;
    if (text) {
      text.style.backgroundImage = 'none'; // Clear backgroundImage instead of background
      text.style.backgroundClip = '';      // Reset background-clip
      text.style.color = '';               // Reset color
    }
  };
  
  return (
    <div className='mt-24'>
      <div className='max-w-[920px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center px-8'>
        <p className='text-lprimary dark:text-dprimary font-mono p-2'>Hi, my name is</p>
        <h1 className=' md:text-7xl sm:text-6xl text-5xl text-ltext dark:text-dtext font-bold md:py-1'>
          Ashis Paul
        </h1>
        <p  ref={textRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='inline-block w-fit md:text-5xl sm:text-4xl text-3xl font-bold py-4 text-lsubtext dark:text-dsubtext'>
          software engineer
        </p>
        <p className='md:text-xl text-md font-bold text-lsubtext dark:text-dsubtext'>
          I'm a software engineer with over 4 years of experience.
          Currently, I'm focused on building cutting edge softwares at{' '}
          <a
            href='https://www.dpworld.com/'
            target='_blank'
            className='text-lpeach dark:text-dpeach'
            rel='noreferrer'
          >
            DP World
          </a>
        </p>
      </div>
    </div>
  )
}
