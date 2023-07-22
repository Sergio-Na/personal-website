import Image from 'next/image'
import Projects from '../components/projects'
import Experience from '../components/experience'
import About from '@/components/about'
import ThemeChanger from "../components/ThemeSwitch"


export default function Home() {
  return (
    <main className='flex flex-col items-center text-white relative'>
      <ThemeChanger />
      <About />
      <Experience />
      {/* <Projects /> */}

      <a href="/Sergio_Najm_Resume.pdf" className="absolute top-11 right-5 px-3 py-1 bg-inherit border dark:bg-gray-800 text-black dark:text-stone-100 rounded-md text-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-200">
        Resume
      </a>
    </main>
  )
}
