import Image from "next/image";
import Link from "next/link";
import { createElement } from "react";
import { useAppData } from "@/hooks/useAppData";
import style from './landing-intro.module.css'
import { cn } from "@/lib/utils";

const LandingIntro = () => {
    const { person, platformLinks } = useAppData()

     return (
       <div className="md:flex min-h-[600px] py-24 md:justify-center md:items-center border-b-2 bg-[url('/images/spiral-bg-light.png')] bg-center bg-cover bg-no-repeat">
         {/* background section */}
         <div className="grid grid-cols-1 gap-6 md:grid-cols-[3fr_9fr] md:gap-12 px-6">
           <div className="overflow-hidden rounded-full size-44 relative *:translate-y-[-60%] *:absolute *:top-[50%]">
             <Image width={1706} height={2298} src={person.userPhoto} alt={person.userFullName} />
           </div>
           <div className={cn("max-md:grid max-md:[grid-template-areas:'name'_'headline'_'links']", style.area)}>
             {/* main section */}
             <ul className={cn("*:inline-block *:ml-3 [grid-area:links] max-md:mt-3", style.links)}>
               {/* Links */}
               {platformLinks.map((pl) => (
                 <li key={pl.label} className="first:ml-0">
                   <Link href={pl.link}>
                     {createElement(pl.icon, { size: 24 })}
                   </Link>
                 </li>
               ))}
             </ul>
             <h1 className={cn("text-5xl sm:text-6xl md:text-7xl md:mt-6 font-bold [grid-area:name]", style.name)}>{ person.userFullName }</h1>
             <p className={cn("text-xl mt-6 md:text-2xl [grid-area:headline]", style.headline)}>{ person.userHeadline }</p>
           </div>
         </div>
       </div>
     );
}

export { LandingIntro };
