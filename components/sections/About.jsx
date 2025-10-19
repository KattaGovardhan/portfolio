"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialLinks } from "@/constants/socialLinks";

import DevelopmentProcess from "../DevelopmentProcess";
import ButtonGround from "../Buttons/ButtonGroup";
import LearningJourney from "../LearningJourney";

export default function About() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 gap-20"
      id="about"
    >
      {/* === Top Section: Profile + Info === */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl"
      >
        {/* Left: Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-lg border border-gray-700 hover:border-blue-500 shadow-md hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden"
        >
          <Image
            src="/profile.png"
            alt="Govardhan Katta"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Text Content */}
        <div className="max-w-lg text-center md:text-left flex flex-col gap-4">
          <h1 className="text-4xl font-bold mb-2 text-white">Meet Govardhan</h1>
          <p className="text-2xl mb-2 text-muted-foreground">
            I am available for{" "}
            <span className="text-white font-semibold">Web and App</span>{" "}
            Development
          </p>
          <p className="text-gray-300 leading-relaxed">
            I'm Govardhan, a passionate Software Developer based in Tokyo. I
            specialize in building modern, responsive web and mobile
            applications using{" "}
            <span className="text-blue-400 font-semibold">Next.js</span>,
            <span className="text-blue-400 font-semibold"> Node.js</span>, and
            other cutting-edge frameworks.
          </p>

          {/* Short Personal Intro */}
          <p className="text-gray-400 italic">
            Outside of coding, I enjoy contributing to open-source projects and
            designing intuitive user experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-700 hover:text-white transition-colors duration-200"
                aria-label={item.name}
              >
                {/* <item.icon className="w-6 h-6" /> */}
                <p>{item.icon}</p>
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <ButtonGround />
          </div>
        </div>
      </motion.div>

      {/* === Education Timeline === */}
      <LearningJourney />

      <DevelopmentProcess />
    </section>
  );
}
