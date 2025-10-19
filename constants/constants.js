import {
  Home,
  User,
  Code,
  Folder,
  Settings,
  Mail,
  Smartphone,
  Globe,
  Rocket,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiLeetcode,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiReact,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";
import { FiSearch, FiLayout, FiCode, FiCheckCircle } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";

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

export const processSteps = [
  {
    step: "01",
    title: "Planning & Research",
    desc: "Understand client requirements, define goals, and choose the right technologies to ensure scalability and performance.",
    icon: <FiSearch className="w-6 h-6" />,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    desc: "Create modern, responsive UI/UX using Figma and Tailwind CSS, ensuring accessibility and visual consistency.",
    icon: <FiLayout className="w-6 h-6" />,
  },
  {
    step: "03",
    title: "Development",
    desc: "Build full-stack applications using Next.js, Node.js, Express, and MongoDB with clean, modular, and reusable code.",
    icon: <FiCode className="w-6 h-6" />,
  },
  {
    step: "04",
    title: "Testing & Deployment",
    desc: "Thoroughly test for bugs, optimize for performance, and deploy using Vercel, Render, or AWS with CI/CD pipelines.",
    icon: <FiCheckCircle className="w-6 h-6" />,
  },
];

export const skills = [
  // Frontend
  { name: "React.js", icon: <SiReact />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend" },

  // Backend
  { name: "Node.js", icon: <SiNodedotjs />, category: "Backend" },
  { name: "Express.js", icon: <SiExpress />, category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Backend" },

  // Tools
  { name: "Git", icon: <SiGit />, category: "Tools" },
  { name: "VS Code", icon: <VscVscode />, category: "Tools" },
  { name: "Postman", icon: <SiPostman />, category: "Tools" },
];

export const projectCategories = ["All", "Web", "App"];

export const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern portfolio website to showcase my skills and projects built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    image: "/projects/portfolio.png",
    github: "https://github.com/KattaGovardhan/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "E-Commerce App",
    desc: "Full-stack e-commerce application with user authentication, product management, and payment integration.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/ecommerce.png",
    github: "https://github.com/KattaGovardhan/ecommerce-app",
    live: "https://ecommerceapp.com",
    category: "Web",
  },
  {
    title: "Chat Application",
    desc: "Real-time chat application using WebSockets with rooms and private messaging features.",
    tech: ["React", "Node.js", "Socket.io"],
    image: "/projects/chatapp.png",
    github: "https://github.com/KattaGovardhan/chat-app",
    live: "https://chatapp.com",
    category: "Web",
  },
  {
    title: "Task Manager",
    desc: "A productivity app to manage tasks, deadlines, and priorities with full CRUD operations.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    image: "/projects/taskmanager.png",
    github: "https://github.com/KattaGovardhan/task-manager",
    live: "https://taskmanager.com",
    category: "Web",
  },
];

export const services = [
  {
    icon: <Code size={32} />,
    title: "Full Stack Development",
    description:
      "Building robust web applications with modern frameworks like Next.js, Node.js, and MongoDB.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    description:
      "Creating responsive and high-performing apps using React Native and Expo for Android and iOS.",
  },
  {
    icon: <Globe size={32} />,
    title: "API Integration",
    description:
      "Developing and integrating secure REST and GraphQL APIs for seamless data communication.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Deployment & Optimization",
    description:
      "Deploying apps with CI/CD pipelines and optimizing performance for fast, reliable user experiences.",
  },
];
