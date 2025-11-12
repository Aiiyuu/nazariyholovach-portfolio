import { Skill } from "@/components/home/StackItemCard/types";
import figmaIcon from "@/assets/icons/figma.svg?react";
import htmlIcon from "@/assets/icons/html.svg?react";
import cssIcon from "@/assets/icons/css.svg?react";
import jsIcon from "@/assets/icons/javascript.svg?react";
import tsIcon from "@/assets/icons/typescript.svg?react";
import reactIcon from "@/assets/icons/react.svg?react";
import vueIcon from "@/assets/icons/vue.svg?react";
import tailwindcssIcon from "@/assets/icons/tailwindcss.svg?react";
import bootstrapIcon from "@/assets/icons/bootstrap.svg?react";
import frameMotionIcon from "@/assets/icons/framemotion.svg?react";
import legoIcon from "@/assets/icons/lego.svg?react";
import terrariaIcon from "@/assets/icons/terraria.svg?react";
import factorioIcon from "@/assets/icons/factorio.svg?react";

export const skills: Skill[] = [
  {
    name: "design",
    stack: [{ name: "Figma", status: "experienced", icon: figmaIcon }],
  },
  {
    name: "frontend",
    stack: [
      { name: "HTML", status: "expert", icon: htmlIcon },
      { name: "CSS", status: "expert", icon: cssIcon },
      { name: "JavaScript", status: "expert", icon: jsIcon },
      { name: "TypeScript", status: "expert", icon: tsIcon },
      { name: "React", status: "expert", icon: reactIcon },
      { name: "Vue", status: "experienced", icon: vueIcon },
      { name: "Tailwindcss", status: "expert", icon: tailwindcssIcon },
      { name: "Bootstrap", status: "experienced", icon: bootstrapIcon },
      { name: "Frame Motion", status: "expert", icon: frameMotionIcon },
    ],
  },
  {
    name: "bonus",
    stack: [
      { name: "Lego", status: "ultra-expert", icon: legoIcon },
      { name: "Terraria", status: "ultra-expert", icon: terrariaIcon },
      { name: "Factorio", status: "ultra-expert", icon: factorioIcon },
    ],
  },
];
