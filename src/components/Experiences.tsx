import { useState } from 'react'
import { exps } from './data'

export const Experiences = () => {
  const [company, setCompany] = useState(0)

  return (
    <div
      id='experience'
      className='max-w-[920px] mb-48 md:mb-2 my-auto w-full min-h-screen mx-auto text-left flex flex-col justify-center px-8'
    >
      <div className='text-2xl md:text-4xl text-lprimary dark:text-dprimary mb-4 md:mb-16 font-mono'>
        work experiences
      </div>
      <div className='mx-auto w-full'>
        <div className='flex md:hidden m-2 overflow-scroll'>
          {exps.map((e, i) => (
            <div
              key={i}
              className={`flex shrink-0 h-12 w-28 hover:bg-lsurface dark:hover:bg-dsurface ${
                i === company ? 'bg-lsurface dark:bg-dsurface text-lprimary dark:text-dprimary' : 'text-ltext dark:text-dtext'
              }`}
              onClick={() => setCompany(i)}
            >
              <div className='mx-auto my-auto'>{e.company}</div>
            </div>
          ))}
        </div>

        <div className='flex mx-auto'>
          <div className='hidden md:flex flex-col'>
            {exps.map((e, i) => (
              <div
                key={i}
                className={`flex h-12 w-28 hover:bg-lsurface dark:hover:bg-dsurface ${
                  i === company ? 'text-lprimary dark:text-dprimary' : 'text-ltext dark:text-dtext'
                }`}
                onClick={() => setCompany(i)}
              >
                <h2 className='mx-4 my-auto'>{e.company}</h2>
              </div>
            ))}
          </div>
          <div className='flex flex-col max-w-[624px] h-[364px] ml-4'>
            <p className='m-2 text-ltext dark:text-dtext text-xl md:text-2xl'>
              {exps[company].position}{' '}
              <a
                href={exps[company].companyLink}
                target='_blank'
                className='text-lprimary dark:text-dprimary'
                rel='noreferrer'
              >
                {' '}
                @{exps[company].company}
              </a>
            </p>
            <p className='m-2 text-xs md:text-sm text-llav dark:text-dlav font-mono'>
              {exps[company].startDate} - {exps[company].endDate ?? 'Present'}
            </p>
            <ul className='list-disc mx-4 pl-3 mt-2 max-h-screen overflow-scroll md:overflow-visible'>
              {exps[company].works.map((w, i) => (
                <li key={i} className='text-sm md:text-md text-ltext dark:text-dtext'>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
