"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ContactMe from "../Buttons/ContactMe";
import { Resume } from "../Buttons/Resume";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden"
      id="#"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        Govardhan Katta
      </motion.h1>

      {/* Dynamic Typing Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-xl text-muted-foreground mb-2 h-8"
      >
        <TypeAnimation
          sequence={[
            "I design & develop Web Apps",
            1500,
            "I design & develop Mobile Apps",
            1500,
            "I design & develop Software Systems",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl text-sm md:text-base text-muted-foreground mb-8 leading-relaxed"
      >
        Full Stack & Mobile Developer | Passionate about{" "}
        <span className="font-medium text-foreground">Scalable, Modern Apps</span>.
        Specializing in{" "}
        <span className="font-medium text-foreground">Next.js</span>,{" "}
        <span className="font-medium text-foreground">Node.js</span>, and{" "}
        <span className="font-medium text-foreground">cutting-edge frameworks</span>.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-4"
      >
        <Resume />
        <ContactMe />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          delay: 1.2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 flex flex-col items-center text-muted-foreground"
      >
        <ArrowDown size={22} className="animate-bounce" />
        <span className="text-xs mt-1">Scroll Down</span>
      </motion.div>
    </section>
  );
}
