"use client"

import { ThemeProviderContext } from "@/context/theme-context"
import { Theme } from "@/interfaces/theme"
import { useEffect, useState } from "react"



type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
  }

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "app-theme",
    ...props
  }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
      () => (typeof window === 'undefined' ? defaultTheme : localStorage.getItem(storageKey) as Theme) || defaultTheme
    )
  
    useEffect(() => {
      const root = window.document.documentElement
  
      root.classList.remove("light", "dark")
  
      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light"
  
        root.classList.add(systemTheme)
        return
      }
  
      root.classList.add(theme)
    }, [theme])
  
    const value = {
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme)
        setTheme(theme)
      },
    }
  
    return (
      <ThemeProviderContext.Provider {...props} value={value}>
        {children}
      </ThemeProviderContext.Provider>
    )
  }