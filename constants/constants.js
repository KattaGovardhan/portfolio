import { Home, User, Code, Folder, Settings, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const navLinks = [
  { name: "Home", href: "#", icon: <Home size={16} /> },
  { name: "About", href: "#about", icon: <User size={16} /> },
  { name: "Skills", href: "#skills", icon: <Code size={16} /> },
  { name: "Projects", href: "#projects", icon: <Folder size={16} /> },
  { name: "Services", href: "#services", icon: <Settings size={16} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "",
    icon: <FaLinkedin className="hover:text-black" />,
  },
  { name: "GitHub", href: "", icon: <FaGithub className="hover:text-black" /> },
  {
    name: "LeetCode",
    href: "",
    icon: <SiLeetcode className="hover:text-black" />,
  },
];