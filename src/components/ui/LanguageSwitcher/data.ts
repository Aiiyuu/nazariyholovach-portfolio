import ukFlag from "../../../assets/icons/United-Kingdom.svg";
import uaFlag from "../../../assets/icons/Ukraine.svg";
import { LanguageItem } from "./types";

export const languages: LanguageItem[] = [
  {
    value: "en",
    name: "English",
    flag: ukFlag,
  },
  {
    value: "ua",
    name: "Українська",
    flag: uaFlag,
  },
];
