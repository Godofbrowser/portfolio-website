"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function Skills() {
  const defaultTab= 'frontend'
  const skillCategories = {
    frontend: ["Vue", "NuxtJs", "React", "ReactNative", "NextJs", "Angular 2+", "Ionic", "TailwindCSS"],
    backend: ["Laravel (PHP)", "NestJs (NodeJs)", "Prompt Engineering", "SQL DB", "NoSQL DB", "TypeORM", "ObjectionORM", "EloquentORM"],
    devOps: ["Docker", "Codemagic", "Appflow", "Azure pipelines", "AWS", "GCP", "Github Actions", "Heroku"],
    tools: ["Typescript", "Webpack", "Rollup", "Vite", "Elastic Search", "LLM", "GraphQL"]

  };

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 transition-none"
      >
        <h2 className="highlighted-heading text-3xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I work with a variety of technologies across the full stack, always
          keeping up with the latest trends and best practices.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="transition-none"
      >
        <Tabs defaultValue={defaultTab} className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            {Object.keys(skillCategories).map(label => (
              <TabsTrigger key={label} value={label} className="capitalize">{label}</TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="md:min-h-44">

              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center justify-center p-4 bg-muted rounded-lg transition-none"
                      >
                        <span className="text-sm font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
      </div>
    </section>
  );
}