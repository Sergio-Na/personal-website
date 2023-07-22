"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Toggle } from "@/components/ui/toggle"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleSwitch = () => {
        if (theme == "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (

        <Toggle variant="outline" aria-label="Toggle italic" className='self-start m-10 bg-slate-100 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600' onClick={handleSwitch}>
            {theme === "light" ? (
                <BsFillMoonFill size={15} className='fill-black' />
            ) : (
                <BsFillSunFill size={15} className="h-4 w-4" />
            )}
        </Toggle>
    )
}

export default ThemeSwitch
