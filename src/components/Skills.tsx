import React, { useEffect, useState } from 'react'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md'

export const Skills = () => {
  const vals = [
    ['go', 'kotlin', 'typescript', 'microservices'],
    ['react', 'node.js', 'python', 'aws'],
    ['java', 'android dev', 'problem solving', 'LLD'],
  ]

  const [idx, setIdx] = useState(0)
  const prevVals = () => setIdx((x) => (vals.length + x - 1) % vals.length)
  const nextVals = () => setIdx((x) => (x + 1) % vals.length)
  useEffect(() => {
    setInterval(prevVals, 7500)
  }, [])

  return (
    <div className='w-56 h-64 flex-shrink-0 flex flex-col text-ltext dark:text-dtext border border-lprimary dark:border-dprimary shadow-lg ease-in-out duration-200'>
      <div className='w-full py-2 hover:bg-lprimary dark:hover:bg-dprimary hover:text-dtext text-center text-xl'>
        Skills
      </div>
      <div className='w-full h-[1px] bg-lprimary dark:bg-dprimary'></div>
      <div className='flex w-full h-full'>
        <MdOutlineArrowBackIosNew className='my-auto' onClick={prevVals} />
        <div className='flex flex-col m-auto text-center'>
          {vals[idx].map((skill, i) => (
            <div
              key={i}
              className='text-lg my-2 w-full font-mono font-light ease-out duration-200 hover:scale-110'
            >
              {skill}
            </div>
          ))}
        </div>
        <MdOutlineArrowForwardIos className='my-auto' onClick={nextVals} />
      </div>
    </div>
  )
}
