import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import CV from '../assets/cv.pdf'
import useDarkMode from '../hooks/useDark'

type Props = {
  name: string
  tclass: string
  onClk?: () => void
}

const TextMenu = ({ name, tclass, onClk = () => { } }: Props) => (
  <li
    className={`text-ltext dark:text-dtext hover:text-lprimary dark:hover:text-dprimary ${tclass}`}
    onClick={onClk}
  >
    <a href={`#${name.toLowerCase()}`}>{name}</a>
  </li>
)


export const Button = (props: { name: string; onClick: () => void }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const button = btnRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const isDark = localStorage.getItem('dark-theme') === '"dark"';

    button.style.background = isDark
      ? `radial-gradient(circle at ${x}px ${y}px, rgba(138, 173, 244, 1), rgba(180, 190, 254, 1))`
      : `radial-gradient(circle at ${x}px ${y}px, rgba(30,102,245,1), rgba(114, 135, 253, 1))`;
  };

  const handleMouseLeave = () => {
    const button = btnRef.current;
    if (button) {
      button.style.background = 'transparent';
    }
  };

  return (
    <button
      ref={btnRef}
      onClick={props.onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="text-lprimary dark:text-dprimary font-semibold py-2 px-6 my-2 mx-2 
                 hover:text-lbg dark:hover:text-dbg 
                 rounded"
    >
      {props.name}
    </button>
  )
}

export const Navbar = () => {
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
    <div className='fixed top-0 left-0 w-full bg-transparent'>
      <nav className='flex justify-between items-center h-24 w-full px-4 ease-in-out duration-500'>
        <DarkModeSwitch
          className=' mx-6'
          onChange={() => {
            setTheme(isDark ? 'light' : 'dark')
          }}
          checked={!isDark}
          size={25}
          sunColor={'#eff1f5'}
          moonColor={'#181926'}
        />

        <Button name='Résumé' onClick={download} />
      </nav>
    </div>
  )
}
