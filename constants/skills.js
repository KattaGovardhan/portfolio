import { MdNoEncryption } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { FaInfinity, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiAwsamplify,
  SiVercel,
  SiVite,
  SiJavascript,
  SiPython,
  SiJenkins,
  SiJsonwebtokens,
  SiSocketdotio,
  SiMysql,
  SiTailwindcss,
  SiShadcnui,
  SiCss3,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiCode } from "react-icons/fi";

export const skills = [
  // Programming Languages
  { name: "Java", icon: <FaJava />, category: "Programming Languages" },
  { name: "Python", icon: <SiPython />, category: "Programming Languages" },
  {
    name: "JavaScript (ES6+)",
    icon: <SiJavascript />,
    category: "Programming Languages",
  },

  // Web Development
  { name: "HTML5", icon: <FiCode />, category: "Frontend" },
  { name: "CSS3", icon: <SiCss3 />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend" },
  { name: "shadcn/ui", icon: <SiShadcnui />, category: "Frontend" },
  { name: "React.js", icon: <SiReact />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
  { name: "Node.js", icon: <SiNodedotjs />, category: "Backend" },
  { name: "Express.js", icon: <SiExpress />, category: "Backend" },
  { name: "JWT", icon: <SiJsonwebtokens />, category: "Backend" },
  { name: "bcrypt", icon: <MdNoEncryption />, category: "Backend" },
  { name: "WebSocket", icon: <SiSocketdotio />, category: "Backend" },
  { name: "REST API", icon: <TbApi />, category: "Backend" },

  // Database
  { name: "SQL", icon: <SiMysql />, category: "Database" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database" },

  // Cloud & CI/CD
  { name: "AWS", icon: <SiAwsamplify />, category: "Cloud" },
  { name: "Git", icon: <SiGit />, category: "Cloud" },
  { name: "GitHub Actions", icon: <SiJenkins />, category: "Cloud" },
  { name: "Docker", icon: <SiDocker />, category: "Cloud" },
  { name: "CI/CD", icon: <FaInfinity />, category: "Cloud" },

  // Tools
  { name: "Postman", icon: <SiPostman />, category: "Tools" },
  { name: "Vercel", icon: <SiVercel />, category: "Tools" },
  { name: "Vite", icon: <SiVite />, category: "Tools" },
  { name: "VS Code", icon: <VscVscode />, category: "Tools" },
];
