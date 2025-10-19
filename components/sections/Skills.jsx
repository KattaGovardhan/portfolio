"use client";

import { skills } from "@/constants/skills";
import { motion } from "framer-motion";

export default function Skills() {
  // Group skills by category
  const groupedSkills = {
    Languages: skills.filter((s) => s.category === "Programming Languages"),
    Frontend: skills.filter((s) => s.category === "Frontend"),
    Backend: skills.filter((s) => s.category === "Backend"),
    Database: skills.filter((s) => s.category === "Database"),
    Cloud: skills.filter((s) => s.category === "Cloud"),
    Tools: skills.filter((s) => s.category === "Tools"),
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-16 gap-10"
    >
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 text-lg">
          Technologies I use to build high-performance web and mobile
          applications.
        </p>
      </div>

      {/* Skill Groups */}
      <div className="flex flex-col gap-10 w-full max-w-5xl">
        {Object.entries(groupedSkills).map(([category, categorySkills], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
              {category}
            </h3>

            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-6 text-center">
              {categorySkills.map((skill, index) => (
                <li
                  key={index}
                  className="relative group flex flex-col items-center justify-center p-4 
                  rounded-full bg-gray-900/50 hover:bg-gray-800 transition-all duration-300 
                  shadow-md hover:shadow-blue-500/20 cursor-pointer text-2xl text-white"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>

                  {/* Tooltip */}
                  <span
                    className="absolute -bottom-10 text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded-md 
                    opacity-0 group-hover:opacity-100 transition-all duration-200 
                    pointer-events-none"
                  >
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
