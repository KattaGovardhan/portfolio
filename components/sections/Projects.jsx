"use client";

import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/constants/projects";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-16 py-16 bg-background/5 flex flex-col items-center gap-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Projects
      </h2>

      {projects.length === 0 ? (
        <p className="text-center text-gray-400">No projects available.</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="flex flex-col justify-between bg-gray-900/50 shadow-md hover:shadow-blue-500/20 transition-all duration-200">
                <CardHeader>
                  <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-3 p-4">
                  <CardTitle className="text-lg font-semibold text-white">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-300 text-sm">{project.desc}</p>

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

                <CardFooter className="flex justify-between p-4 pt-0">
                  <Button asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-medium"
                    >
                      <FiGithub className="w-4 h-4" /> GitHub
                    </a>
                  </Button>

                  <Button asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-medium"
                    >
                      <FiExternalLink className="w-4 h-4" /> Live
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
