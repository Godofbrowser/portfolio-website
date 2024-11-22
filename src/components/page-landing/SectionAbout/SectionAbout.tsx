"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { Code2, Server, Rocket } from "lucide-react";
import { person } from "@/lib/constants";

export function SectionAbout() {
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
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          layout
          className="text-center mb-12 transition-none"
        >
          <h2 className="highlighted-heading text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {person.about}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="transition-none"
            >
              <Card className="h-full">
                <CardContent className="pt-6">
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
}
