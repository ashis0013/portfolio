import React from 'react'
import { Link } from './Link'

export const Mailbar = (props : {}) => {
  return (
    <div className='scale-0 lg:scale-100 fixed bottom-0 right-0 mr-12'>
      <div className='flex flex-col items-center hover:scale-110 ease-out duration-300'>
        <div className='font-mono font-thin text-sm my-2 text-ltext dark:text-dtext' style={{ writingMode: 'vertical-rl' }}>
          <Link text='paulashis0013@gmail.com' link='mailto:paulashis0013@gmail.com'/>
        </div>
        <div className='bg-ltext dark:bg-dtext w-[1px] h-28'></div>
      </div>
    </div>
  )
}
