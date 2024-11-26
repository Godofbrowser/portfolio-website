"use client"

import Image from "next/image";
import Link from "next/link";
import { createElement } from "react";
import { motion } from "framer-motion";
import { person, platformLinks } from '../../../lib/constants'

const SectionHero = () => {
     return (
       <section className="relative min-h-[500px] md:min-h-[740px] mt-16 md:flex md:justify-center md:items-center">
         {/* background section */}
         <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/spiral-bg-light.webp')] bg-cover bg-no-repeat bg-fixed [background-position:50%_center] dark:opacity-15"></div>
         <div className="relative z-50 grid grid-cols-1 gap-6 md:grid-cols-[3fr_9fr] max-md:pt-20 md:gap-12 px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1}}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-full size-32 md:size-44 shadow-md"
          >
             <Image width={640} height={640} src={person.userPhoto} alt={person.userFullName} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5 }}
            className="max-md:grid max-md:[grid-template-areas:'name'_'headline'_'links']"
          >
             {/* main section */}
             <ul className="*:inline-block *:ml-5 [grid-area:links] max-md:mt-3">
               {/* Links */}
               {platformLinks.map((pl) => (
                 <li key={pl.label} className="first:ml-0">
                   <Link href={pl.link} className="transition-colors duration-300 hover:text-accent" aria-label={pl.label}>
                     {createElement(pl.icon[0] as any, { className: 'size-6', ...pl.icon[1] })}
                   </Link>
                 </li>
               ))}
             </ul>
             <h1 className="text-5xl sm:text-6xl md:text-7xl md:mt-6 font-bold leading-relaxed [grid-area:name] highlighted-text">{ person.userFullName }</h1>
             <p className="text-xl mt-6 md:text-2xl [grid-area:headline]">{ person.userHeadline }</p>
           </motion.div>
         </div>
       </section>
     );
}

export { SectionHero };