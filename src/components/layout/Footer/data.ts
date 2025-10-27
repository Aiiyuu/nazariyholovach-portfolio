import { FooterItem } from "./types";
import { SocialNetwork } from "./types";
import Github from "../../../assets/icons/github.svg?react";
import LinkedIn from "../../../assets/icons/linkedin.svg?react";
import Telegram from "../../../assets/icons/telegram.svg?react";
import Spotify from "../../../assets/icons/spotify.svg?react";

export const footerLists: FooterItem[][] = [
  [
    {
      id: "footer.mainWorks",
      title: true,
    },
    {
      id: "footer.theMet",
      demo: "https://aiiyuu.github.io/layout_landing-page/",
    },
    {
      id: "footer.astroBlaster",
      demo: "https://aiiyuu.github.io/Astro-Blaster/",
    },
    {
      id: "footer.tccEscapeGame",
      demo: "https://aiiyuu.github.io/tcc-chase-game/",
    },
    {
      id: "footer.game2048",
      demo: "https://aiiyuu.github.io/js_2048_game/",
    },
  ],
  [
    {
      id: "footer.otherPages",
      title: true,
    },
    {
      id: "footer.home",
      page: "home",
    },
    {
      id: "footer.aboutMe",
      page: "about",
    },
    {
      id: "footer.works",
      page: "work",
    },
  ],
  [
    {
      id: "footer.navigation",
      title: true,
    },
    {
      id: "footer.introduction",
      navigate: "#introduction",
    },
    {
      id: "footer.mainProjects",
      navigate: "#main-projects",
    },
    {
      id: "footer.skills",
      navigate: "#skills",
    },
  ],
];

export const socialNetworks: SocialNetwork[] = [
  {
    icon: Github,
    link: "https://github.com/Aiiyuu?tab=repositories",
  },
  {
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/nazariy-holovach-a6a30738a/",
  },
  {
    icon: Telegram,
    link: "https://t.me/nazariyholovach",
  },
  {
    icon: Spotify,
    link: "https://open.spotify.com/playlist/3yOkvIECJUh1BfQiLm1uM6?si=90301607483e4f90",
  },
];
