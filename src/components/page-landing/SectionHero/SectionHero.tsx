"use client"

import Image from "next/image";
import Link from "next/link";
import {createElement, forwardRef, useRef} from "react";
import {motion} from "framer-motion";
import {person, platformLinks} from '@/lib/constants'

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {scrollToElement} from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SectionHero = forwardRef((props, ref) => {
    const scroll = (e) => {
        e.preventDefault()
        scrollToElement('#about', 2000)
    }
    return (
        <section id="hero"
                 className="relative overflow-hidden min-h-[500px] widescreen:h-[100vh] sm:min-h-[600px] pt-16 md:flex md:justify-center md:items-center">
            {/* background section */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-[url('/images/spiral-bg-light.webp')] bg-cover bg-no-repeat bg-fixed [background-position:50%_center] opacity-100 dark:opacity-15"></div>

            <div
                className="hidden widescreen:flex items-center justify-center absolute bottom-10 left-1/2 -translate-x-1/2">
                <Link href="#about" onClick={scroll} scroll={false}>
                    <div className="flex flex-col items-center space-y-2 cursor-pointer">
                        <span className="text-muted-foreground sr-only">Scroll Down</span>
                        <div
                            className="w-6 h-6 border-b-4 border-r-4 border-muted-foreground rotate-45 animated-scroll-down"></div>
                    </div>
                </Link>
            </div>

            <div ref={ref}
                 className="relative z-50 grid grid-cols-1 gap-6 md:grid-cols-[repeat(2,max-content)] max-md:pt-20 md:gap-12 px-6">
                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.3}}
                    className="size-32 sm:size-44 md:size-48 lg:size-56"
                >
                    <div className="overflow-hidden rounded-full size-full shadow-md bg-background">
                        <Image width={640} height={640} src={person.userPhoto} alt={person.userFullName} priority/>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    className="max-md:grid max-md:[grid-template-areas:'name'_'headline'_'links']"
                >
                    {/* main section */}
                    <ul className="*:inline-block *:ml-5 [grid-area:links] max-md:mt-3">
                        {/* Links */}
                        {platformLinks.map((pl) => (
                            <li key={pl.label} className="first:ml-0">
                                <Link href={pl.link} className="transition-colors duration-300 hover:text-accent"
                                      aria-label={pl.label}>
                                    {createElement(pl.icon[0] as any, {className: 'size-6', ...pl.icon[1]})}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-8xl md:mt-6 font-bold leading-relaxed [grid-area:name] min-[365px]:highlighted-text">{person.userFullName}</h1>
                    <p className="text-xl mt-6 md:text-2xl [grid-area:headline]">{person.userHeadline}</p>
                </motion.div>
            </div>
        </section>
    );
})
SectionHero.displayName = 'SectionHero'

const AnimatedSectionHero = ({props}) => {
    const ref = useRef()
    const timelineRef = useRef<gsap.core.Timeline>()

    useGSAP(() => {
        if (!ref.current) return

        const primaryElement = ref.current
        const sectionElement = primaryElement.closest('section')
        const bgElement = sectionElement.querySelector('.bg-fixed')

        const timeline = timelineRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: sectionElement,
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: 1,
                snap: {snapTo: 1, inertia: false, delay: .6, duration: 1, ease: "sine.out"},
                // markers: true,
            },
        })

        const setTimelines = () => {
            timeline.to(primaryElement, {
                opacity: 0,
                scale: 0.5,
                duration: 1,
            }, "<");

            timeline.to(bgElement, {
                opacity: 0,
                scale: 1.5,
                duration: 2,
            }, "<");
        }

        setTimelines()

        timeline.eventCallback('onReverseComplete', () => {
            /**
             * The following block of code exists because the hero background
             * has opacity === 1 on light theme, and opacity === 0.15 on dark theme.
             * That hack allows us to use same background image for both theme modes nicely.
             * However, when an animation begins, gsap picks this opacity value up as the default.
             * Hence, when the animation ends, and we switch theme, the opacity value is inconsistent.
             * Thus, we get a hero background that's either too bright or too transparent.
             */
            bgElement.style.opacity = ''
            timeline.clear()
            setTimelines()
        })
    })

    return (
        <SectionHero {...props} ref={ref}/>
    )
}

export {AnimatedSectionHero as SectionHero};
