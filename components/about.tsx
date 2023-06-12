import React from 'react'
import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiFillLinkedin } from "react-icons/ai"
function about() {
    return (
        <section className='flex flex-col pt-20 h-96'>
            <h1 className=' self-center font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-stone-600 via-stone-400 to-white  h-1/3'>Sergio Najm</h1>
            <h3 className='self-center text-xl text-stone-300'>Computer Science Student @ McGill University</h3>
            <div className='self-center flex justify-evenly w-1/2 pt-5'>
                <a href='https://github.com/Sergio-Na'><AiOutlineGithub size={40} className='hover:opacity-70' /></a>
                <a href="https://www.linkedin.com/in/sergio-najm"><AiFillLinkedin size={40} className='hover:opacity-70' /></a>
            </div>


        </section >
    )
}

export default about