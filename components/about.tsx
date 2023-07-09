import React from 'react'
import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiFillLinkedin } from "react-icons/ai"
function about() {
    return (
        <section className='flex flex-col pt-20 h-96'>
            <h1 className=' self-center font-extrabold dark:text-transparent text-6xl dark:bg-clip-text dark:bg-gradient-to-r  dark:from-stone-600 dark:via-stone-400 dark:to-white text-blue-500 h-1/3'>Sergio Najm</h1>
            <h3 className='self-center text-xl text-black dark:text-stone-300'>Computer Science Student @ McGill University</h3>
            <div className='self-center flex justify-evenly w-1/2 pt-5'>
                <a href='https://github.com/Sergio-Na'><AiOutlineGithub size={40} className='hover:opacity-70 bg-black rounded-sm' /></a>
                <a href="https://www.linkedin.com/in/sergio-najm"><AiFillLinkedin size={40} className='hover:opacity-70 bg-black rounded-lg' /></a>
            </div>


        </section >
    )
}

export default about