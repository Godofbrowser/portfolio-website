"use client"

import React from "react";
import { motion } from "framer-motion";
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {AppIcon} from "@/components/ui/AppIcon";
import {IExperience} from "@/interfaces/experience.interface";
import {experiences} from "@/constants";


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
        {experiences.map((exp: IExperience) => (
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
