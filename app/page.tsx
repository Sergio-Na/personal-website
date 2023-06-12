import Image from 'next/image'
import Projects from '../components/projects'
import Experience from '../components/experience'
import About from '@/components/about'
export default function Home() {
  return (
    <main className='flex flex-col items-center text-white'>
      <About />
      <Experience />
      <Projects />
    </main>
  )
}
