import type { Metadata, ResolvingMetadata } from 'next'
import { Button } from "@/components/ui/button";
import { DarkModeBtn } from "@/components/DarkModeBtn";
import { LandingIntro } from "@/components/LandingIntro/LandingIntro";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectsSection } from '@/components/ProjectsSection/ProjectsSection';
import { disableHeaderNavigations, appTitle, navLinks, appUrl } from '../lib/constants'
import { About } from './about';
import { Skills } from './skills';

const PlatformInfo = () => {
  console.log({
    appUrl,
    NETLIFY: process.env.NETLIFY,
    URL: process.env.URL,
    CONTEXT: process.env.CONTEXT,
    BRANCH: process.env.BRANCH,
  })
  return null
}

const footerLinks = [
  { label: 'Articles', link: 'https://medium.com/@ejjay' },
  { label: 'Resume', link: 'https://docs.google.com/document/d/e/2PACX-1vRBaSJImuHYeHooFXol99o1oZa43QEuKFvJtqs8FofyIcpTnXnAYGt0cQQ5xkdwlA/pub' },
  { label: 'Hire me', link: 'https://www.upwork.com/freelancers/~01e4ba9941a5659bb3' },
]


export default function Home() {
  
  return (
    <>
      <PlatformInfo />
      <header className="fixed top-0 left-0 w-full z-[1000] bg-background dark:bg-background shadow-[0px_6px_10px_-5px_rgba(0,0,0,0.3)]">
        <div className="h-16 flex items-center xl:container xl:mx-auto xl:px-6 px-4">
          {!disableHeaderNavigations ? null : (
            <h1 className="text-xl font-semibold">{appTitle}</h1>
          )}
          <DarkModeBtn
            className={cn({ "ml-auto": disableHeaderNavigations })}
          />
          {disableHeaderNavigations ? null : (
            <nav className="ml-auto">
              <ul className="*:inline-block">
                {navLinks.map((nl) => (
                  <li key={nl.label}>
                    <Button variant="ghost" asChild>
                      <Link href={nl.link}>{nl.label}</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
      <main>
        <LandingIntro />
        <About />
        <Skills />
        <ProjectsSection />

        <footer className="">
          <div className="container px-4 mx-auto p-3 py-16 relative before:top-0 before:left-[15px] before:absolute before:w-[calc(100%-30px)] before:h-px before:bg-slate-300">
            <div className='flex flex-col lg:flex-row-reverse justify-between'>
              <ul className='flex justify-center max-lg:mb-8'>
                {footerLinks.map(({ label, link }) => (
                  <li key={label} className='ml-2 first:ml-0'><Link href={link} target="_blank" className="highlighted-text">{label}</Link></li>
                ))}
              </ul>
              <p className="max-lg:text-center leading-loose">
                Copyright &copy; 2024<span> - </span>
                <a href="https://github.com/Godofbrowser">
                  <span className="highlighted-text">godofbrowser</span>
                </a>{" "}
                <span className="max-sm:hidden">|</span>{" "}
                <span className="whitespace-nowrap max-sm:block">
                  Don&apos;t hesitate to reach out.
                </span>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
