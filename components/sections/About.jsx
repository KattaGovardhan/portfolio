"use client";

import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants/constants";
import ContactMe from "../Buttons/ContactMe";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { processSteps } from "@/constants/constants";

export default function About() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-16 gap-16"
      id="about"
    >
      {/* Top Section: Profile + Info */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">
        {/* Left: Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <Image
            src="/profile.png"
            alt="Govardhan Katta"
            fill
            className="rounded-md object-cover shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-lg text-center md:text-left flex flex-col gap-4">
          <h1 className="text-4xl font-bold mb-2">Meet Govardhan</h1>
          <p className="text-2xl mb-2">
            I am available for{" "}
            <span className="text-white font-semibold">Web and App</span>{" "}
            Development
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm Govardhan, a passionate Software Developer based in Tokyo. I
            specialize in building modern, responsive web and mobile
            applications using{" "}
            <span className="text-blue-400 font-semibold">Next.js</span>,
            <span className="text-blue-400 font-semibold"> Node.js</span>, and
            other cutting-edge frameworks.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 mb-4">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-white transition-colors duration-200"
              >
                <div className="w-5 h-5 text-white">{item.icon}</div>
              </Link>
            ))}
          </div>

          <ContactMe />
        </div>
      </div>

      {/* Development Process Section */}
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-3xl font-bold mb-10 text-white">
          My Development Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <Card
              key={step.step}
              className="bg-gray-900/40 hover:bg-gray-900 transition-all duration-200 shadow-md"
            >
              <CardHeader className="flex items-center gap-3 justify-center">
                {step.icon}
              </CardHeader>
              <CardTitle className="text-lg font-semibold">
                {step.title}
              </CardTitle>
              <CardContent className={"w-full"}>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
