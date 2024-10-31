import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { project, projects } from './data'

const Card = (props: { proj: project }) => (
  <div className='flex flex-col mx-auto rounded-xl justify-between w-56 h-64 flex-shrink-0 bg-lbg dark:bg-dbg hover:scale-110 hover:shadow-glow hover:dark:shadow-glowdark ease-out duration-200'>
    <p className='w-full text-center text-xl text-lprimary dark:text-dprimary p-1'>
      {props.proj.title}
    </p>
    <p className='w-full px-4 text-sm text-ltext dark:text-dtext'>{props.proj.description}</p>
    <div className='flex w-full justify-between my-3'>
      <div></div>
      {(props.proj.docLink ?? '') !== '' && (
        <a href={props.proj.docLink} target={'_blank'} rel='noreferrer'>
          <HiOutlineDocumentText className='text-ltext dark:text-dtext' size={25} />
        </a>
      )}
      <a href={props.proj.githubLink} target={'_blank'} rel='noreferrer'>
        <FiGithub className='text-ltext dark:text-dtext' size={25} />
      </a>
      {(props.proj.outLink ?? '') !== '' && (
        <a href={props.proj.outLink} target={'_blank'} rel='noreferrer'>
          <FiExternalLink className='text-ltext dark:text-dtext' size={25} />
        </a>
      )}
      <div></div>
    </div>
  </div>
)

export const Projects = () => {
  return (
    <div
      id='projects'
      className='max-w-[920px] my-auto w-full min-h-screen mx-auto text-left flex flex-col justify-center px-8'
    >
      <div className='text-2xl md:text-4xl text-lprimary dark:text-dprimary mb-16 font-mono'>
        projects
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8'>
        {projects.map((p, i) => (
          <Card proj={p} key={i} />
        ))}
      </div>
      <div className='flex'>
        <p className='text-ltext dark:text-dtext mt-8'>
          {'>'} Feel free to go through my publication{' '}
          <a
            className='underline'
            href='https://scholar.google.com/citations?user=CPM11WAAAAAJ'
            target='_blank'
            rel='noreferrer'
          >
            here
          </a>{' '}
          and find more projects{' '}
          <a
            className='underline'
            href='https://github.com/ashis0013'
            target='_blank'
            rel='noreferrer'
          >
            here
          </a>
        </p>
      </div>
    </div>
  )
}
