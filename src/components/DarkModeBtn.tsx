"use client"

import { ClientComponent } from "@/containers/ClientComponent";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { AppIcon } from "./ui/AppIcon";

export interface DarkModeBtnProps {
    className?: string;
}

const DarkModeBtn = ({ className }: DarkModeBtnProps) => {
    const { theme, setTheme } = useTheme()
    return (
      <ClientComponent>
        <button
          className={cn(className || "", "hover:text-accent")}
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          aria-label="Theme mode toggle"
        >
          {
            <AppIcon
              className="size-7"
              name={theme === "dark" ? "sun" : "moon"}
            />
          }
        </button>
      </ClientComponent>
    );
}

export { DarkModeBtn }