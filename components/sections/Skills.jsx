"use client";

import { skills } from "@/constants/constants";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-12 gap-8"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold  text-center text-white">Skills & Technologies</h2>
      <p>Skills I used to develop scalable Applications</p>

      {/* Skills Grid */}
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-6 md:gap-8 text-center">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-full bg-gray-900/50 hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer text-2xl text-white"
          >
            {skill.icon}
          </li>
        ))}
      </ul>
    </section>
  );
}
