import { FooterItem } from "../types/FooterItemInterface";
import { SocialNetwork } from "../types/SocialNetworkInterface";
import Github from "../assets/icons/github.svg?react";
import LinkedIn from "../assets/icons/linkedin.svg?react";
import Telegram from "../assets/icons/telegram.svg?react";
import Spotify from "../assets/icons/spotify.svg?react";

export const footerLists: FooterItem[][] = [
  [
    {
      content: "Main works",
      title: true,
    },
    {
      content: "The MET",
      demo: "https://aiiyuu.github.io/layout_landing-page/",
    },
    {
      content: "Astro-blaster",
      demo: "https://aiiyuu.github.io/Astro-Blaster/",
    },
    {
      content: "Tcc-Escape Game",
      demo: "https://aiiyuu.github.io/tcc-chase-game/",
    },
    {
      content: "2048",
      demo: "https://aiiyuu.github.io/js_2048_game/",
    },
  ],
  [
    {
      content: "Other pages",
      title: true,
    },
    {
      content: "Home",
      page: "home",
    },
    {
      content: "About me",
      page: "about",
    },
    {
      content: "Works",
      page: "work",
    },
  ],
  [
    {
      content: "Navigation",
      title: true,
    },
    {
      content: "Introduction",
      navigate: "#introduction",
    },
    {
      content: "Main projects",
      navigate: "#main-projects",
    },
    {
      content: "Skills",
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
