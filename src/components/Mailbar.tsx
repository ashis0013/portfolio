import React from 'react'

export const Mailbar = () => {
  return (
    <div className='scale-0 lg:scale-100 fixed bottom-0 right-0 mr-12 ease-out duration-200'>
      <div className='flex flex-col items-center hover:scale-110 ease-out duration-300'>
        <div
          className='font-mono font-thin text-sm my-2 text-ltext dark:text-dtext'
          style={{ writingMode: 'vertical-rl' }}
        >
          <a
            className='hover:text-lprimary dark:hover:text-dprimary visited:text-llav dark:visited:text-dlav'
            href='mailto:paulashis0013@gmail.com'
          >
            paulashis0013@gmail.com
          </a>
        </div>
        <div className='bg-ltext dark:bg-dtext w-[1px] h-28'></div>
      </div>
    </div>
  )
}
