import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react"


interface AspectRatioImageProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    ratio?: number
}

export function AspectRatioImage({ children, className = '', style, ratio = 1/2 }: AspectRatioImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return
        const resizeObserver = new ResizeObserver((entries) => {
            const [box] = entries
            // @ts-ignore
            box.target.style.height = `${box.contentRect.width * ratio}px`;
          });
          
          resizeObserver.observe(ref.current);
          return () => resizeObserver.disconnect();
    }, [ratio])

    return (
      <div
        ref={ref}
        style={style}
        className={cn("relative w-full min-h-1 overflow-hidden", className)}
      >
        {children}
      </div>
    );
}