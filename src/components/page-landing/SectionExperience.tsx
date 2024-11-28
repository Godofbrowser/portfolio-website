"use client"

import React from "react";
import { motion } from "framer-motion";
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {AppIcon} from "@/components/ui/AppIcon";

interface Experience {
  period: string;
  organization: string;
  position: string;
  location: string;
  type: 'remote' | 'on-site' | 'hybrid';
  techTools: string[];
  achievements: string[];
}

const experiences: Experience[] = [
      {
        "period": "2024 – Present",
        "organization": "Freelance",
        "position": "Senior Fullstack Software Developer",
        "location": "Lagos, NG",
        "type": "remote",
        "techTools": [
          "Vue.js",
          "VuePress",
          "Web Extensions (WXT)",
          "Web Components",
          "Next.js",
          "Netlify",
          "Stripe API"
        ],
        "achievements": [
          "Updated vuejs-dialog plugin for Vue 3 compatibility and documented its usage with VuePress, leading to increased downloads and easier installations.",
          "Developed and maintained browser extensions for a client using WXT.",
          "Created a customizable Stripe pricing page embedded into any web application using Web Components, Next.js, and deployed on Netlify."
        ]
      },
      {
        "period": "2021 – 2024",
        "organization": "Lew Innovation",
        "position": "Senior Fullstack Software Developer",
        "location": "Australia",
        "type": "remote",
        "techTools": [
          "Vue.js",
          "Quasar",
          "Node.js",
          "TypeORM",
          "TypeScript",
          "ElasticSearch",
          "AWS",
          "Laravel",
          "React",
          "Next.js",
          "React Native"
        ],
        "achievements": [
          "Redesigned the Givvable suppliers' platform using Vue.js and Quasar, significantly enhancing the user experience.",
          "Rewrote the Givvable core application in Node.js, TypeORM, and TypeScript, integrating ElasticSearch to accelerate new feature development.",
          "Implemented an advanced filter component to manage large item lists efficiently, boosting user engagement and satisfaction.",
          "Led the development of version 2 for a video meeting platform using AWS, Laravel, Node.js, React, and Next.js, resulting in greater stability and cost reduction.",
          "Contributed to a React Native project (Kinderling), adding new features and resolving bugs."
        ]
      },
      {
        "period": "2020 – 2022",
        "organization": "ITCraftship (acquired by Nursa)",
        "position": "Senior Frontend Developer (Architect)",
        "location": "Poland",
        "type": "remote",
        "techTools": [
          "Ionic",
          "Angular",
          "Next.js",
          "Prismic"
        ],
        "achievements": [
          "Conducted thorough code reviews to ensure code quality and adherence to best practices.",
          "Shared knowledge, provided coaching, and established best practices to enhance the team's skills and productivity.",
          "Refactored code strategically and managed technical debt in Ionic/Angular web and mobile applications.",
          "Guided junior developers to successfully deliver a server-side rendered Next.js and Prismic web application."
        ]
      },
      {
        "period": "2019 – 2020",
        "organization": "Parkway Projects LTD",
        "position": "Software Developer",
        "location": "Nigeria",
        "type": "hybrid",
        "techTools": [
          "Vue.js",
          "SCSS",
          "JavaScript",
          "HTML5"
        ],
        "achievements": [
          "Developed a web application for wallet management, seamless payments, and utility bill transactions with responsive design and light/dark themes.",
          "Created mini storefront functionality to allow users to sell products, improving the shopping and checkout experience.",
          "Developed the frontend development kit of a payment gateway integrated into merchant applications, improving customer satisfaction."
        ]
      }
    ]
;

const SectionExperience: React.FC = () => {
  return (
    <section className="relative py-12">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 transition-none"
      >
        <h2 className="highlighted-heading text-3xl font-bold">Professional Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experienced in on-site, hybrid, and remote collaborations, I consistently deliver high-quality, maintainable solutions
        </p>
      </motion.div>

      <VerticalTimeline animate={true}>
        {experiences.map(exp => (
            <VerticalTimelineElement
                key={`${exp.organization}:${exp.period}`}
                date={exp.period}
                icon={<AppIcon name="desk" />}
                visible
            >
              <h3 className="font-bold text-xl">{exp.position}</h3>
              <h4 className="text-muted-foreground">{exp.organization}</h4>
              <h4 className="text-muted-foreground">{exp.location} ({exp.type})</h4>
              <p className="text-muted-foreground">
                {exp.techTools.join(', ')}
              </p>
            </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export {SectionExperience};
