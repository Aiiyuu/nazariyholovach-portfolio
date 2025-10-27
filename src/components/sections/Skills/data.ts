import { Skill } from "../../../components/ui/SkillCard/types";
import penToolIcon from "../../../assets/icons/pen-tool.png";
import frontendIcon from "../../../assets/icons/frontend.png";
import backendIcon from "../../../assets/icons/backend.png";

export const skillsList: Skill[] = [
  {
    id: "design",
    logo: penToolIcon,
    stack: [
      "Figma",
      "Responsive Design",
      "CSS Grid",
      "Flexbox",
      "Media Queries",
    ],
  },
  {
    id: "frontend",
    logo: frontendIcon,
    stack: ["React", "TypeScript", "SCSS", "Framer Motion", "Vue"],
  },
  {
    id: "backend",
    logo: backendIcon,
    stack: [
      "після того як пройду ноду тут щось напишу",
      // "REST Framework",
      // "PostgreSQL"
    ],
  },
];
