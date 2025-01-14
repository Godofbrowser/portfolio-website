"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { Code2, Server, Rocket } from "lucide-react";
import { person } from "@/constants";

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { forwardRef, MutableRefObject, useRef } from "react";
import { useMediaQuery } from 'usehooks-ts'
import { WIDESCREEN_QUERY } from "../../../../tailwind.config";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface SectionAboutProps {
  ref?: MutableRefObject<HTMLDivElement | null>;
}

const SectionAbout = forwardRef<HTMLDivElement, SectionAboutProps>((_, ref) => {
  const services = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend Development",
      description:
        "Building cross-browser, cross-platform, responsive and interactive user interfaces using Javascript, Typescript, SCSS and modern CSS frameworks.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description:
        "Creating scalable server-side applications with Node.js (NestJs), PHP (Laravel), serverless functions, and various relational and non-relational databases.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "DevOps",
      description: "Ensuring scalable and reliable infrastructure through CI/CD pipelines, infrastructure automation, and cloud deployment using modern DevOps tools.",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-20 overflow-hidden w-full">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5 }}
          layout
          className="text-center mb-12 transition-none"
        >
          <h2 className="highlighted-heading text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {person.about}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 mx-auto max-w-7xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="transition-none"
            >
              <Card className="h-full border-none glowing-border">
                <CardContent className="pt-6 bg-background rounded-xl">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
})

SectionAbout.displayName = 'SectionAbout'

const AnimatedSectionAbout = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const timelineRef = useRef<gsap.core.Timeline>()
    const isWidescreen = useMediaQuery(WIDESCREEN_QUERY)

    useGSAP(() => {
        const sectionElement = ref.current
        if (sectionElement === null) return

        if (!isWidescreen && timelineRef.current) {
          timelineRef.current.seek( '-=0', false );
          timelineRef.current.clear()
          timelineRef.current.kill()
          return
        }

        const timeline = timelineRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: sectionElement,
                start: `top 60%`,
                end: '+=300',
                scrub: true,
                // snap: {snapTo: 1, inertia: false, delay: .6, duration: 1, ease: "sine.out"},
                // markers: true,
            },
        })

        const setTimelines = () => {
          const [first, second, third]: HTMLElement[] = gsap.utils.toArray(sectionElement.querySelectorAll('.glowing-border'))
          gsap.set(first, { transformOrigin: 'bottom right' })
          gsap.set(third, { transformOrigin: 'bottom left' })

            timeline.from(first, {
                rotate: '-5deg',
                x: '-20%',
            }, "<")
            timeline.from(third, {
                rotate: '5deg',
                x: '20%',
            }, "<")
        }

        setTimelines()

        return () => timeline.kill()
    }, [isWidescreen])

    return (
        <SectionAbout ref={ref} />
    )
}

export {AnimatedSectionAbout as SectionAbout};
