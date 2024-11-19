"use client";

import { IProject, IProjectTabValue } from "@/interfaces/project.interface";
import { appUrl, projects } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ProjectCardItem } from "../ProjectCardItem/ProjectCardItem";
import { ProjectModal } from "../ProjectModal/project-modal";
import { AppButtonGroup } from "../ui/AppButtonGroup"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";



const ProjectsSection = () => {
    const options: {label: string; value: IProjectTabValue}[] = [
        {label: 'All Projects', value: 'all'},
        {label: 'Has Demo', value: 'live'},
        {label: 'Open Source', value: 'oss'},
    ]
    const [activeTab, setActiveTab] = useState<IProjectTabValue>(options[0].value)
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

    const tabChangeHandler = (value: IProjectTabValue) => {
      setActiveTab(value);
    }

    const filteredProjects = useMemo(() => {
      if (activeTab === options[0].value) return projects
      return projects.filter(p => p.tags.includes(activeTab))
    }, [activeTab])

    return (
      <section id="projects" className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container px-4 mx-auto transition-none"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>

          <div>
            {/* <AppButtonGroup options={options} className="mx-auto mb-8" /> */}
            <Tabs
              defaultValue={activeTab}
              onValueChange={($event: any) => tabChangeHandler($event)}
              className="max-w-3xl mx-auto mb-8"
            >
              <TabsList className="grid w-full grid-cols-3">
                {options.map(({ label, value }) => (
                  <TabsTrigger key={value} value={value} className="capitalize">
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project: IProject, index: number) => (
                <motion.div
                  key={`${activeTab}-${project.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="transition-none"
                >
                  <ProjectCardItem project={project} onClick={() => setSelectedProject(project)} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {selectedProject && (
            <ProjectModal
              project={selectedProject}
              isOpen={!!selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
      </section>
    );
}

ProjectsSection.displayName = 'ProjectsSection'

export { ProjectsSection }