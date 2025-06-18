import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experiences } from './components/Experiences'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { BiCodeAlt } from 'react-icons/bi'

function App() {
  return (
    <>
      <Navbar />

      <div className="select-none w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
        <section className="w-screen h-screen snap-start"><Home /></section>
        <section className="w-screen h-screen snap-start"><About /></section>
        <section className="w-screen h-screen snap-start"><Experiences /></section>
        <section className="w-screen h-screen snap-start"><Projects /></section>
        <section className="w-screen h-screen snap-start"><Contact /></section>
      </div>
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
