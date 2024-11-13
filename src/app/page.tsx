import { Button } from "@/components/ui/button";
import { DarkModeBtn } from "@/components/DarkModeBtn";
import { LandingIntro } from "@/components/Landing-intro/LandingIntro";
import { useAppData } from "@/hooks/useAppData";



export default function Home() {
  const { person, platformLinks, navLinks } = useAppData()
  
  return (
    <>
      <header className=" border-b-2">
        <div className="h-16 flex items-center xl:container xl:mx-auto xl:px-6 px-4">
          <DarkModeBtn />
          <nav className="ml-auto">
            <ul className="*:inline-block">
              <li>
                <Button variant="ghost">Expertise</Button>
              </li>
              <li>
                <Button variant="ghost">History</Button>
              </li>
              <li>
                <Button variant="ghost">Projects</Button>
              </li>
              <li>
                <Button variant="ghost">Contact</Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="">
        <LandingIntro />
      </main>
    </>
  );
}
