import React from 'react';

export const Home = () => {
  return (
    <div className='mt-24'>
      <div className='max-w-[920px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center px-8'>
        <p className='text-lprimary dark:text-dprimary font-mono p-2'>
          Hi, my name is
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-5xl text-ltext dark:text-dtext font-bold md:py-1'>
          Ashis Paul
        </h1>
        <p className='md:text-5xl sm:text-4xl text-3xl font-bold py-4 text-lsubtext dark:text-dsubtext'>
          fullstack software engineer
        </p>
        <p className='md:text-xl text-md font-bold text-lsubtext dark:text-dsubtext'>
          I’m a software engineer specializing in building productaion grade backend systems. Currently, I’m focused on building cutting edge softwares at Blox.xyz.
        </p>
      </div>
    </div>
  );
};

