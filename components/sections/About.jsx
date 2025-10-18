"use client";

import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants/constants";
import ContactMe from "../Buttons/ContactMe";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10">
      {/* Left: Profile Image */}
      <div className="w-48 h-48 md:w-64 md:h-64 relative">
        <Image
          src="/profile.png" // replace with your actual image path
          alt="Govardhan Katta"
          fill
          className="rounded-md object-cover shadow-lg"
        />
      </div>

      {/* Right: Text Content */}
      <div className="max-w-lg text-center md:text-left flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-4">Meet Govardhan</h1>
        <p className="text-2xl">
          I am avaliable for <span className="text-white">Web and App</span>{" "}
          Development
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          I'm Govardhan, a passionate Software Developer based in Tokyo. I
          specialize in building modern, responsive web and mobile applications
          using <span className="text-blue-400 font-semibold">Next.js</span>,
          <span className="text-blue-400 font-semibold"> Node.js</span>, and
          other cutting-edge frameworks.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-5">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-white transition-colors duration-200"
            >
              {/* <item.icon className="w-5 h-5 text-white" /> */}
              {item.icon}
            </Link>
          ))}
        </div>

        <ContactMe />
      </div>
    </section>
  );
}
