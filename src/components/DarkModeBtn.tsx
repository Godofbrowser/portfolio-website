"use client"

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react"

export interface DarkModeBtnProps {
    className?: string;
}

const DarkModeBtn = ({ className }: DarkModeBtnProps) => {
    const { theme, setTheme } = useTheme()
    return (
        <button className={cn(className || '', 'hover:text-accent')} onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}> 
            { theme === 'dark' ? <Sun size={28} /> : <Moon size={28} /> }
        </button>
    )
}

export { DarkModeBtn }