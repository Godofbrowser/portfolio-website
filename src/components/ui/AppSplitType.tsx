import { useSplitType } from "@/hooks/useSplitType"
import { memo, useEffect, useRef } from "react"
import SplitType from 'split-type'

export const AppSplitType = memo(({ text, className, onSplit }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const {splitCompleted} = useSplitType()

    useEffect(() => {
        if (!ref.current) return
        const result = new SplitType(ref.current, { types: 'chars'})
        // console.log({ result })
        onSplit && onSplit.call(onSplit, result)
        splitCompleted('user-full-name')
    }, [])

    return (
        <span ref={ref} className={className} style={{ fontKerning: 'none', display: 'inline-block', position: 'relative' }}>{text}</span>
    )
})