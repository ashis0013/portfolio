import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkMode from '../hooks/useDark'

type Props = {
  name: string,
  link: string,
  tclass: string
}

const TextMenu = ({name, link, tclass}: Props) => (
  <li className={`text-ltext dark:text-dtext hover:text-lprimary dark:hover:text-dprimary ${tclass}`}>
    <a href={link}>{name}</a>
  </li>
)

const Button = () => (
  <button className='text-lprimary dark:text-dprimary font-semibold py-2 px-6 my-2 mx-2 border hover:text-dtext dark:hover:text-dtext border-lprimary dark:border-dprimary  rounded  hover:bg-lprimary hover:dark:bg-dprimary'>Resume</button>
)

export const Navbar = () => {
  const elements = ['About', 'Experience', 'Projects', 'Contact']
  const [nav, setNav] = useState(false)
  const [theme, setTheme] = useDarkMode()
  const isDark = theme === 'dark'

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 ease-in-out duration-500'>
      <h1 className='w-full text-3xl font-bold text-lprimary dark:text-dprimary'>Ashis</h1>
      <ul className='hidden md:flex'>
        {elements.map((e, i) => <TextMenu key={i} name={e} link='#' tclass='p-4'/>)}
        <Button/>
      </ul>
      <DarkModeSwitch className=' mx-6' onChange={() => {setTheme(isDark ? 'light' : 'dark')}} checked={!isDark} size={40} sunColor={'#eff1f5'} moonColor={'#181926'}/>
      <div className='block md:hidden'>
        <Hamburger toggled={nav} onToggle={handleNav} size={20} color={isDark ? '#eff1f5' : '#181926'}/>
      </div>
      {nav && <div className='md:hidden fixed top-24 left-0 h-full w-full backdrop-blur-sm' onClick={handleNav}></div>}
      <ul className={`md:hidden fixed shadow-lg top-24 w-[60%] bg-lbg dark:bg-dbg h-full ease-in-out duration-300 ${nav ? 'right-0' : 'right-[-100%]'}`}>
        <ul className='flex flex-col items-center'>
          {elements.map((e, i) => (
            <TextMenu name={e} key={i} link='#' tclass={`p-4 items-center ${i!==3 ? ' border-b border-dprimary' : ''}`}/>
          ))}
          <Button/>
        </ul>
      </ul>
    </nav>
  )
}
