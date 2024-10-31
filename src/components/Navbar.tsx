import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import CV from '../assets/cv.pdf'
import useDarkMode from '../hooks/useDark'

type Props = {
  name: string
  tclass: string
  onClk?: () => void
}

const TextMenu = ({ name, tclass, onClk = () => {} }: Props) => (
  <li
    className={`text-ltext dark:text-dtext hover:text-lprimary dark:hover:text-dprimary ${tclass}`}
    onClick={onClk}
  >
    <a href={`#${name.toLowerCase()}`}>{name}</a>
  </li>
)

export const Button = (props: { name: string; onClick: () => void }) => (
  <button
    onClick={props.onClick}
    className='text-lprimary dark:text-dprimary font-semibold py-2 px-6 my-2 mx-2 border hover:text-dtext dark:hover:text-dtext border-lprimary dark:border-dprimary  rounded  hover:bg-lprimary hover:dark:bg-dprimary'
  >
    {props.name}
  </button>
)

export const Navbar = () => {
  const elements = ['About', 'Experience', 'Projects', 'Contact']
  const [nav, setNav] = useState(false)
  const [theme, setTheme] = useDarkMode()
  const isDark = theme === 'dark'
  const download = () => {
    const a = document.createElement('a')
    a.href = CV
    a.target = '_blank'
    a.click()
  }

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='fixed top-0 left-0 w-full bg-lbg dark:bg-dbg shadow-sm'>
      <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 ease-in-out duration-500'>
        <h1 className='w-full text-3xl font-bold text-lprimary dark:text-dprimary'>Ashis</h1>
        <ul className='hidden md:flex'>
          {elements.map((e, i) => (
            <TextMenu key={i} name={e} tclass='p-4' />
          ))}
          <Button name='Résumé' onClick={download} />
        </ul>
        <DarkModeSwitch
          className=' mx-6'
          onChange={() => {
            setTheme(isDark ? 'light' : 'dark')
          }}
          checked={!isDark}
          size={40}
          sunColor={'#eff1f5'}
          moonColor={'#181926'}
        />
        <div className='block md:hidden'>
          <Hamburger
            toggled={nav}
            onToggle={handleNav}
            size={20}
            color={isDark ? '#eff1f5' : '#181926'}
          />
        </div>
        {nav && (
          <div
            className='md:hidden fixed top-24 left-0 h-full w-full backdrop-blur-sm'
            onClick={handleNav}
          ></div>
        )}
        <ul
          className={`md:hidden fixed shadow-lg top-24 w-[60%] bg-lbg dark:bg-dbg h-full ease-in-out duration-300 ${
            nav ? 'right-0' : 'right-[-100%]'
          }`}
        >
          <ul className='flex flex-col items-center'>
            {elements.map((e, i) => (
              <TextMenu
                name={e}
                key={i}
                onClk={handleNav}
                tclass={`p-4 items-center ${i !== 3 ? ' border-b border-dprimary' : ''}`}
              />
            ))}
            <Button name='Résumé' onClick={download} />
          </ul>
        </ul>
      </nav>
    </div>
  )
}
