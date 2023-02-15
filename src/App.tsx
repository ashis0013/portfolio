import React from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experiences } from './components/Experiences'
import { Home } from './components/Home'
import { Mailbar } from './components/Mailbar'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { BiCodeAlt } from 'react-icons/bi'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Mailbar />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <a
        className='fixed left-0 bottom-0 m-2'
        target='_blank'
        href='https://github.com/ashis0013/portfolio'
        rel='noreferrer'
      >
        <BiCodeAlt className='text-lsurface dark:text-dsurface' size={20} />
      </a>
    </>
  )
}

export default App
