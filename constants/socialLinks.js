import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/govardhan-katta/",
    icon: <FaLinkedin className="hover:text-black" />,
  },
  { name: "GitHub", href: "https://github.com/KattaGovardhan", icon: <FaGithub className="hover:text-black" /> },
  {
    name: "LeetCode",
    href: "https://leetcode.com/govardhankatta/",
    icon: <SiLeetcode className="hover:text-black" />,
  },
];
