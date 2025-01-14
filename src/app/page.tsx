import { SectionHero } from "@/components/page-landing/SectionHero/SectionHero";
import { SectionProjects } from '@/components/page-landing/SectionProjects/SectionProjects';
import { SectionAbout } from '@/components/page-landing/SectionAbout/SectionAbout';
import { SectionSkills } from '@/components/page-landing/SectionSkills/SectionSkills';
import { MotionConfig } from 'framer-motion';
import {SectionExperience} from "@/components/page-landing/SectionExperience";


export default function Home() {
  return (
      <main>
        <MotionConfig reducedMotion="user">
          <SectionHero />
          <SectionAbout />
          <SectionSkills />
          <SectionExperience />
          <SectionProjects />
        </MotionConfig>
      </main>
  );
}
