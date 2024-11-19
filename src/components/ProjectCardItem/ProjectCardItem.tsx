import { IProject } from '@/interfaces/project.interface'
import Image from 'next/image'
import { Code2, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { AppIcon } from '../ui/AppIcon'
import { Button } from '../ui/button'
import { useState } from 'react'

interface ProjectCardItemProps {
    project: IProject,
    onClick?: () => void;
}

const ProjectCardItem = ({ project, onClick }: ProjectCardItemProps) => {
    return (
      <div
        className="overflow-hidden border border-slate-300 rounded-lg h-full min-h-[300px] cursor-pointer transition-transform hover:scale-[1.02]"
        onClick={onClick ?? undefined}
      >
        {/* project item card */}
        <div className="flex flex-col h-full">
          {/* Card container */}
          <div className="">
            {/* Card image */}
            <Image
              src={project.images[0].url}
              width={project.images[0].width}
              height={project.images[0].height}
              alt="portfolio project"
            />
          </div>

          <div className="p-3">
            {/* card body */}
            <h3 className="text-xl font-medium mb-3">{project.title}</h3>

            <p className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-muted rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </p>
            <p className="max-sm:text-sm">{project.description}</p>
          </div>
          <div className="mt-auto p-3">
            {/* Card footer */}
            <div className="flex gap-4">
              {!project.links.code ? null : (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={project.links.code}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Code2 className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              )}
              {!project.links.demo && !project.links.reference ? null : (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={project.links.demo ?? project.links.reference ?? ''}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.links.demo ? "Demo" : "Reference"}
                  </Link>
                </Button>
              )}

              <Button variant="ghost" size="sm" className="ml-auto">
                More Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}

export { ProjectCardItem }