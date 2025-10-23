import { ProjectCardInterface } from "../types/ProjectCardInterface";
import metThumbnail from "../assets/images/projects/the-MET.png";
import _2048Thumbnail from "../assets/images/projects/2048.png";
import astroBlasterThumbnail from "../assets/images/projects/astro-blaster.png";
import tccEscapeThumbnail from "../assets/images/projects/TCC-Escape.png";

export const shortProjectList: ProjectCardInterface[] = [
  {
    thumbnail: metThumbnail,
    name: "The MET",
    stack: ["HTML", "Sass", "JavaScript"],
    slogan: "Timeless Art, Endless Discovery",
    overlay: "light",
    demoLink: "https://aiiyuu.github.io/layout_landing-page/",
  },
  {
    thumbnail: astroBlasterThumbnail,
    name: "Astro Blaster",
    stack: ["TypeScript", "OOP", "Canvas"],
    slogan: "Classic Chaos, Cosmic Combat",
    overlay: "light",
    demoLink: "https://aiiyuu.github.io/Astro-Blaster/",
  },
  {
    thumbnail: tccEscapeThumbnail,
    name: "TCC Escape Game",
    stack: ["TypeScript", "OOP", "Canvas"],
    slogan: "When TCC gets too real — dodge it",
    overlay: "dark",
    demoLink: "https://aiiyuu.github.io/tcc-chase-game/",
  },
  {
    thumbnail: _2048Thumbnail,
    name: "2048",
    stack: ["JavaScript", "OOP", "Sass"],
    slogan: "Think Fast, Merge Smarter",
    overlay: "dark",
    demoLink: "https://aiiyuu.github.io/js_2048_game/",
  },
];
