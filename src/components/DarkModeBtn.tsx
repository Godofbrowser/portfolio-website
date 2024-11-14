import { Moon } from "lucide-react"

export interface DarkModeBtnProps {
    className: any;
}

const DarkModeBtn = ({ className }: DarkModeBtnProps) => {
    return (
        <button className={className}> 
            <Moon size={28} />
        </button>
    )
}

export { DarkModeBtn }