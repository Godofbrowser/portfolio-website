"use client"

import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react"

export interface DarkModeBtnProps {
    className: any;
}

const DarkModeBtn = ({ className }: DarkModeBtnProps) => {
    const { theme, setTheme } = useTheme()
    return (
        <button className={className} onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}> 
            { theme === 'dark' ? <Sun size={28} /> : <Moon size={28} /> }
        </button>
    )
}

export { DarkModeBtn }