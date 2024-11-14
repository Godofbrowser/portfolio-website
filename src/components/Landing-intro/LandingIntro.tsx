import Image from "next/image";
import Link from "next/link";
import { createElement } from "react";
import { useAppData } from "@/hooks/useAppData";

const LandingIntro = () => {
    const { person, platformLinks } = useAppData()

     return (
       <div className=" min-h-[500px] md:min-h-[740px] mt-16 bg-[url('/images/spiral-bg-light.png')] bg-cover bg-no-repeat bg-fixed [background-position:50%_center] md:flex md:justify-center md:items-center">
         {/* background section */}
         <div className="grid grid-cols-1 gap-6 md:grid-cols-[3fr_9fr] max-md:pt-20 md:gap-12 px-6">
           <div className="overflow-hidden rounded-full size-32 md:size-44 relative *:translate-y-[-60%] *:absolute *:top-[50%] shadow-md">
             <Image width={1706} height={2298} src={person.userPhoto} alt={person.userFullName} />
           </div>
           <div className="max-md:grid max-md:[grid-template-areas:'name'_'headline'_'links']">
             {/* main section */}
             <ul className="*:inline-block *:ml-3 [grid-area:links] max-md:mt-3">
               {/* Links */}
               {platformLinks.map((pl) => (
                 <li key={pl.label} className="first:ml-0">
                   <Link href={pl.link}>
                     {createElement(pl.icon, { size: 28 })}
                   </Link>
                 </li>
               ))}
             </ul>
             <h1 className="text-5xl sm:text-6xl md:text-7xl md:mt-6 font-bold leading-relaxed [grid-area:name]">{ person.userFullName }</h1>
             <p className="text-xl mt-6 md:text-2xl [grid-area:headline]">{ person.userHeadline }</p>
           </div>
         </div>
       </div>
     );
}

export { LandingIntro };
