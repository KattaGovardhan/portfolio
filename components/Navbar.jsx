"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { navLinks } from "@/constants/navLinks";
import { Resume } from "./Buttons/Resume";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  const resumeUrl = "/Govardhan_Katta_Resume.pdf";

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary origin-left z-[60]"
      />

      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 z-50 border-b border-gray-800 bg-background/60 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-baseline space-x-1 hover:scale-105 transition-transform"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Govardhan
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">Katta</p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative group text-sm font-medium transition-all duration-200 flex gap-2 items-center ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.icon}
                {item.name}
                <span
                  className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                    pathname === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden md:flex items-center">
            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Resume />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-accent transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-gray-800 animate-in fade-in slide-in-from-top duration-300">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-all flex gap-2 items-center ${
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}

              {/* Mobile Resume Button */}
              <div className="pt-4 w-4/5">
                <Link
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center"
                >
                  <Resume fullWidth />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
