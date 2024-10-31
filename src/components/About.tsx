import { useEffect, useState } from 'react';
import AtomOrbit from './Atom'
import { Button } from './Navbar'
import useDarkMode from '../hooks/useDark'
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";

Modal.setAppElement('#root');

export const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isDark] = useDarkMode();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id='about'
      className='max-w-[920px] my-auto w-full h-screen mx-auto text-left flex flex-col justify-center px-8'
    >
      <div className='text-2xl md:text-4xl text-lprimary dark:text-dprimary mb-16 font-mono'>
        about
      </div>
      <div className='flex flex-col md:flex-row'>
        <p className='text-base md:text-lg w-full md:w-2/3 lg:w-3/4 pr-0 lg:pr-8 text-ltext dark:text-dtext mb-8 text-justify'>
          Engineer with over 3 years of experience building products at pace and scale. Bringing in the declarative paradigm at product development. A dedicated problem solver. Experienced in almost all corners of business-driven software development. Worked extensively in Fullstack Development and AI as well as skilled in Microservices, Deep Learning, Distributed Systems, Python, Go, Kotlin, Amazon Web Service, Low-Level Design, Algorithm, and Data Structure.
        </p>
        <div className='mx-auto mt-8 w-1/3 lg:w-1/4 pl-0 md:pl-10 cursor-pointer' onClick={() => setModalIsOpen(true)}>
          {isSmallScreen ? <Button name='Skills' onClick={() => { }} /> : <AtomOrbit />}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: isDark ? '#1819268a' : '#eff1f58a',
            backdropFilter: 'blur(5px)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-45%',
            transform: 'translate(-50%, -50%)',
            padding: '0px',
            borderRadius: '8px',
            border: '0px',
            boxShadow: isDark ? '5px 5px 20px 5px rgb(138 173 244 / 0.1)' : '5px 5px 20px 15px rgb(30 102 245 / 0.1)'
          },
        }}
      >
        <div className='p-4 bg-lbg dark:bg-dbg w-100 text-ltext dark:text-dtext shadow-glow'>
          <div className='flex justify-between'>
            <div className="text-xl text-lprimary dark:text-dprimary mb-4 font-mono">Skills</div>
            <IoMdClose className='cursor-pointer' onClick={() => setModalIsOpen(false)} />
          </div>
          <p className='px-2 pb-2'>Microservices / AWS / Deep Learning / Spring boot / Next.js / Fullstack Development</p>
          <p className='px-2 pb-2'>Java / Go / Typescript / Python / Kotlin</p>
          <p className='px-2'>Agile development / Problem solving / Multitasking / Teamwork / Mentoring</p>
        </div>
      </Modal>
    </div>
  )
}
