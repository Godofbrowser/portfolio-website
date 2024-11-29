"use client"

import { createContext, ReactNode, useState } from "react";

export const SplitTypeContext = createContext<{
    splittedKeys: string[];
    splitCompleted: (key: string) => void;
}>({
    splittedKeys: [],
    splitCompleted: (key: string) => {},
})

export const SplitTypeContextProvider = ({ children }: { children: ReactNode }) => {
    const [splittedKeys, setSplittedKeys] = useState<string[]>([])

    return (
      <SplitTypeContext.Provider value={{
        splittedKeys,
        splitCompleted: (key: string) => {
            setSplittedKeys([key, ...splittedKeys])
        },
      }}>
        {children}
      </SplitTypeContext.Provider>
    );
}
