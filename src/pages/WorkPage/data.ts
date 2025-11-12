import { Category, Project, Tag } from "@/types/project";
import metThumbnail from "@/assets/images/projects/the-met.webp";
import _2048Thumbnail from "@/assets/images/projects/2048.webp";
import astroBlasterThumbnail from "@/assets/images/projects/astro-blaster.webp";
import tccEscapeThumbnail from "@/assets/images/projects/TCC-Escape.webp";
import todoAppThumbnail from "@/assets/images/projects/todoApp.webp";

export const projects: Project[] = [
  {
    id: "theMet",
    thumbnail: metThumbnail,
    stack: ["HTML", "Sass", "JavaScript"],
    overlay: "light",
    demoLink: "https://aiiyuu.github.io/layout_landing-page/",
    category: Category.ART,
    tags: [Tag.ART, Tag.MUSEUM],
  },
  {
    id: "astroBlaster",
    thumbnail: astroBlasterThumbnail,
    stack: ["TypeScript", "OOP", "Canvas"],
    overlay: "light",
    demoLink: "https://aiiyuu.github.io/Astro-Blaster/",
    category: Category.VIDEO_GAMES,
    tags: [Tag.SPACE, Tag.ADVENTURE],
  },
  {
    id: "tccEscape",
    thumbnail: tccEscapeThumbnail,
    stack: ["TypeScript", "OOP", "Canvas"],
    overlay: "dark",
    demoLink: "https://aiiyuu.github.io/tcc-chase-game/",
    category: Category.VIDEO_GAMES,
    tags: [Tag.RACE, Tag.ADVENTURE],
  },
  {
    id: "_2048",
    thumbnail: _2048Thumbnail,
    stack: ["JavaScript", "OOP", "Sass"],
    overlay: "dark",
    demoLink: "https://aiiyuu.github.io/js_2048_game/",
    category: Category.VIDEO_GAMES,
    tags: [Tag.LOGIC, Tag.PUZZLE],
  },
  {
    id: "todoApp",
    thumbnail: todoAppThumbnail,
    stack: ["React", "TypeScript", "APIs"],
    overlay: "dark",
    demoLink: "https://aiiyuu.github.io/react_todo-app-with-api/",
    category: Category.WORK_SCHOOL,
    tags: [Tag.CAREER, Tag.OFFICE],
  },
];
