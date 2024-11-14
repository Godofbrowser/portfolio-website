"use client"

import { Button } from "./button";

  interface AppButtonGroupProps {
    options: { label: string; value: string | number }[];
  }
  
  const AppButtonGroup = (props: AppButtonGroupProps) => {
    return (
      <div className="grid gap-0.5 grid-cols-3 border-slate-700 border rounded-lg p-0.5 max-w-[600px]">
        <Button variant="ghost" className="bg-accent">All</Button>
        <Button variant="ghost">Live</Button>
        <Button variant="ghost">Open Source</Button>
      </div>
    )
  }
  
  export { AppButtonGroup }