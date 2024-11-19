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
            <p className='max-md:text-center leading-loose'>
              Copyright &copy; 2024<span> - </span>
              <a href="https://github.com/Godofbrowser"><span className='text-accent'>[</span>godofbrowser<span className='text-accent'>]</span></a> <span className='max-md:hidden'>|</span> <span className="whitespace-nowrap">Don't hesitate to reach out.</span>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
