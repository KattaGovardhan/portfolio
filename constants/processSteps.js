import { FiCheckCircle, FiCode, FiLayout, FiSearch } from "react-icons/fi";

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
