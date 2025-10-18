"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/constants/constants";
import { Button } from "../ui/button";

export default function Projects() {
  return (
    <section
      className="min-h-screen px-6 md:px-16 py-16 bg-background/5 flex flex-col items-center gap-12"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="flex flex-col justify-between bg-gray-900/50  transition-all duration-200 shadow-md"
          >
            {/* Image */}
            <CardHeader>
              <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden border-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>

            {/* Header & Content */}
            <CardContent className="flex flex-col gap-3 p-4">
              <CardTitle className="text-lg font-semibold">
                {project.title}
              </CardTitle>
              <p className="text-gray-300 text-sm">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 px-2 py-1 rounded-md text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>

            {/* Footer Buttons */}
            <CardFooter className="flex justify-between p-4 pt-0">
              <Button>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-medium"
                >
                  <FiGithub className="w-4 h-4" /> GitHub
                </Link>
              </Button>
              <Button>
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-medium"
                >
                  <FiExternalLink className="w-4 h-4" /> Live
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
