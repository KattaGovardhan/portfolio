"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/constants";
import { Resume } from "./Buttons/Resume";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const resumeUrl = "/Govardhan_Katta_Resume.pdf";

  return (
    <nav className="w-full fixed top-0 z-50 border-b border-gray-800 bg-background/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-baseline space-x-1">
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
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex gap-2 items-center"
            >
              {item.icon}
              {item.name}
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
        <div className="md:hidden bg-background border-t border-gray-800 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex gap-2 items-center"
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
  );
}
