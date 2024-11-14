import type { Metadata, ResolvingMetadata } from 'next'
import { Button } from "@/components/ui/button";
import { DarkModeBtn } from "@/components/DarkModeBtn";
import { LandingIntro } from "@/components/Landing-intro/LandingIntro";
import { useAppData } from "@/hooks/useAppData";
import Link from "next/link";
import { cn } from "@/lib/utils";


 
export async function generateMetadata(props: unknown, parent: ResolvingMetadata): Promise<Metadata> {
  const {appTitle, appDescription, person} = useAppData()

  return {
    title: `${appTitle} - ${person.userFullName}`,
    description: appDescription,
    openGraph: {
      images: ['/images/prodile-card.png'],
    },
    twitter: {
      images: ['/images/prodile-card-700x700.png'],
    },
  }
}

export default function Home() {
  const { disableHeaderNavigations, appTitle, navLinks } = useAppData()
  
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[1000] bg-background dark:bg-background shadow-[0px_6px_10px_-5px_rgba(0,0,0,0.3)]">
        <div className="h-16 flex items-center xl:container xl:mx-auto xl:px-6 px-4">
          {!disableHeaderNavigations ? null : (<h1 className="text-xl font-semibold">{appTitle}</h1>)}
          <DarkModeBtn className={cn({ 'ml-auto': disableHeaderNavigations })} />
          {disableHeaderNavigations ? null : (
            <nav className="ml-auto">
              <ul className="*:inline-block">
                {navLinks.map((nl) => (
                  <li>
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
      <main className="">
        <LandingIntro />
        <div className="h-[100px]">
          <a href="/test" className="hover:text-green-600">Click here</a>
        </div>
        <div className="h-[800px]"></div>
      </main>
    </>
  );
}
