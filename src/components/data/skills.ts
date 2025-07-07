import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  // FaPython,
  FaGitAlt,
  // FaDocker,
  // FaAws,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  // SiExpress,
  SiVercel,
} from "react-icons/si";

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon: IconType;
}

export interface SkillCategory {
  id: string;
  name: string;
}

export const skillCategories: SkillCategory[] = [
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "tools", name: "Tools" },
];

export const skills: Skill[] = [
  // Frontend
  {
    id: "1",
    name: "REACT",
    category: "frontend",
    icon: FaReact,
  },
  {
    id: "2",
    name: "NEXT.JS",
    category: "frontend",
    icon: SiNextdotjs,
  },
  {
    id: "3",
    name: "TYPESCRIPT",
    category: "frontend",
    icon: SiTypescript,
  },
  // {
  //   id: "4",
  //   name: "Vue.js",
  //   category: "frontend",
  //   icon: FaVuejs,
  // },
  // {
  //   id: "5",
  //   name: "FRAMER",
  //   category: "frontend",
  //   icon: SiFramer,
  // },
  // {
  //   id: "6",
  //   name: "THREE.JS",
  //   category: "frontend",
  //   icon: SiThreedotjs,
  // },
  // {
  //   id: "7",
  //   name: "GSAP",
  //   category: "frontend",
  //   icon: SiGreensock,
  // },
  // {
  //   id: "8",
  //   name: "WEBGL",
  //   category: "frontend",
  //   icon: SiWebgl,
  // },
  {
    id: "9",
    name: "CSS",
    category: "frontend",
    icon: FaCss3Alt,
  },
  {
    id: "10",
    name: "JavaScript",
    category: "frontend",
    icon: FaJs,
  },
  {
    id: "11",
    name: "HTML",
    category: "frontend",
    icon: FaHtml5,
  },
  // {
  //   id: "12",
  //   name: "Sass",
  //   category: "frontend",
  //   icon: SiSass,
  // },

  // Backend
  {
    id: "13",
    name: "NODE.JS",
    category: "backend",
    icon: FaNodeJs,
  },
  // {
  //   id: "14",
  //   name: "Python",
  //   category: "backend",
  //   icon: FaPython,
  // },
  // {
  //   id: "15",
  //   name: "PostgreSQL",
  //   category: "backend",
  //   icon: SiPostgresql,
  // },
  {
    id: "16",
    name: "MongoDB",
    category: "backend",
    icon: SiMongodb,
  },
  // {
  //   id: "17",
  //   name: "Express.js",
  //   category: "backend",
  //   icon: SiExpress,
  // },
  // {
  //   id: "18",
  //   name: "Prisma",
  //   category: "backend",
  //   icon: SiPrisma,
  // },
  // {
  //   id: "19",
  //   name: "GRAPHQL",
  //   category: "backend",
  //   icon: SiGraphql,
  // },
  {
    id: "20",
    name: "REST",
    category: "backend",
    icon: FaNodeJs,
  },

  // Tools
  {
    id: "21",
    name: "GIT",
    category: "tools",
    icon: FaGitAlt,
  },
  // {
  //   id: "22",
  //   name: "DOCKER",
  //   category: "tools",
  //   icon: FaDocker,
  // },
  // {
  //   id: "23",
  //   name: "AWS",
  //   category: "tools",
  //   icon: FaAws,
  // },
  {
    id: "24",
    name: "VERCEL",
    category: "tools",
    icon: SiVercel,
  },
  {
    id: "25",
    name: "FIGMA",
    category: "tools",
    icon: FaFigma,
  },
  // {
  //   id: "26",
  //   name: "BLENDER",
  //   category: "tools",
  //   icon: SiBlender,
  // },
];
