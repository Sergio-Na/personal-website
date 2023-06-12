import Image from 'next/image'
import Projects from '../components/projects'
import Experience from '../components/experience'
import About from '@/components/about'
import ThemeChanger from "../components/ThemeSwitch"

export default function Home() {
  return (
    <main className='flex flex-col items-center text-white'>
      <ThemeChanger />
      <About />
      <Experience />
      <Projects />
    </main>
  )
}
