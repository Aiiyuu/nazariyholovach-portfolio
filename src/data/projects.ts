import { ProjectCardInterface } from "../types/ProjectCardInterface";
import metThumbnail from "../assets/images/projects/the-met.png";
import _2048Thumbnail from "../assets/images/projects/2048.png";
import astroBlasterThumbnail from "../assets/images/projects/astro-blaster.png";

export const shortProjectList: ProjectCardInterface[] = [
  {
    thumbnail: metThumbnail,
    name: "The MET",
    stack: ["HTML", "Sass", "JavaScript"],
    slogan: "Timeless Art, Endless Discovery",
    arrowPath: "M779.56 171.237C695.997 205.617 499.362 251.744 381.323 161.21C263.285 70.6755 389.441 19.3919 467.274 5.06682C521.709 -0.18567 625.709 1.34238 606.227 49.4745C581.874 109.64 339.781 59.5021 335.483 248.593C331.186 437.683 316.861 199.888 190.8 185.562C89.952 174.102 37.0448 180.787 23.1973 185.562L107.715 141.155L7.43976 185.562L99.12 217.078",
  },
  {
    thumbnail: _2048Thumbnail,
    name: "2048",
    stack: ["JavaScript", "OOP", "Sass"],
    slogan: "Think Fast, Merge Smarter",
    arrowPath: "M874.506 66.4192C807.077 18.9341 631.193 -47.545 467.084 66.4192C307.534 171.836 190.721 225.969 358.818 217.422C493.296 210.584 507.921 174.685 498.424 157.591C496.525 106.307 459.106 10.0072 324.629 35.0792C156.531 66.4192 355.969 191.78 185.022 143.345C48.2651 104.597 15.9752 127.2 16.9249 143.345L102.398 66.4192L5.25476 143.345L92.5982 185.011",
  },
  {
    thumbnail: astroBlasterThumbnail,
    name: "Astro-Blaster",
    stack: ["TypeScript", "OOP", "Canvas"],
    slogan: "Classic Chaos, Cosmic Combat",
    arrowPath: "M777.483 244.907C739.142 266.061 646.595 295.676 583.134 244.907C503.808 181.447 440.347 -52.5649 511.741 14.8622C583.134 82.2893 591.067 272.671 452.246 296.469C313.426 320.267 400.396 -9.16003 289.628 133.851C211.806 234.327 313.863 376.758 183.768 245.542C123.736 184.993 29.0822 240.253 21.1496 245.542L100.081 188.145L5.99225 245.542L100.081 288.113",
  },
  {
    thumbnail: metThumbnail,
    name: "Покищо непридумав",
    stack: [],
    slogan: "Покищо непридумав",
    arrowPath: "M834.363 1.29199C814.847 38.0275 756.53 109.432 679.385 101.167C582.955 90.8346 600.174 -9.04 514.076 46.0633C427.977 101.167 500.3 207.929 390.094 187.265C279.887 166.601 207.564 90.8345 276.443 46.0633C345.322 1.29199 562.291 73.6149 538.183 149.382C518.897 209.995 181.161 238.924 14.7031 245.812L93.9139 187.265L6.2749 248.881L93.9139 279.667",
  },
];
