import { ProjectCard } from "./types";
import metThumbnail from "../../../assets/images/projects/the-MET.png";
import _2048Thumbnail from "../../../assets/images/projects/2048.png";
import astroBlasterThumbnail from "../../../assets/images/projects/astro-blaster.png";
import tccEscapeThumbnail from "../../../assets/images/projects/TCC-Escape.png";

export const shortProjectList: ProjectCard[] = [
  {
    id: "theMet",
    thumbnail: metThumbnail,
    stack: ["HTML", "Sass", "JavaScript"],
    overlay: "light",
    demoLink: "https://aiiyuu.github.io/layout_landing-page/",
  },
  {
    id: "astroBlaster",
    thumbnail: astroBlasterThumbnail,
    stack: ["TypeScript", "OOP", "Canvas"],
    overlay: "light",
    demoLink: "https://aiiyuu.github.io/Astro-Blaster/",
  },
  {
    id: "tccEscape",
    thumbnail: tccEscapeThumbnail,
    stack: ["TypeScript", "OOP", "Canvas"],
    overlay: "dark",
    demoLink: "https://aiiyuu.github.io/tcc-chase-game/",
  },
  {
    id: "_2048",
    thumbnail: _2048Thumbnail,
    stack: ["JavaScript", "OOP", "Sass"],
    overlay: "dark",
    demoLink: "https://aiiyuu.github.io/js_2048_game/",
  },
];