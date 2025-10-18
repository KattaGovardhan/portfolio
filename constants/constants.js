import { Home, User, Code, Folder, Settings, Mail } from "lucide-react";
import {
  FaGithub,
  FaJava,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiLeetcode,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostman,
  SiGithub,
} from "react-icons/si";

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

export const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Python", icon: <FaPython /> },
];
