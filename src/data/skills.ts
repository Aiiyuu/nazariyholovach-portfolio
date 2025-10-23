import { Skill } from "../types/SkillInterface";
import penToolIcon from "../assets/icons/pen-tool.png";
import frontendIcon from "../assets/icons/frontend.png";
import backendIcon from '../assets/icons/backend.png';

export const skillsList: Skill[] = [
  {
    id: 1,
    logo: penToolIcon,
    title: "UI & Mobile Adaptation",
    stack: [
      "Figma",
      "Responsive Design",
      "CSS Grid",
      "Flexbox",
      "Media Queries",
    ],
  },
  {
    id: 2,
    logo: frontendIcon,
    title: "Frontend Development",
    stack: [
      "React",
      "TypeScript",
      "SCSS",
      "Framer Motion",
      "Vue",
    ],
  },
  {
    id: 3,
    logo: backendIcon,
    title: "Backend Development",
    stack: [
      "після того як пройду ноду тут щось напишу",
      // "REST Framework",
      // "PostgreSQL"
    ],
  },
];
