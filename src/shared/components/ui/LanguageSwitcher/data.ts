import ukFlag from "@/shared/assets/icons/United-Kingdom.svg";
import uaFlag from "@/shared/assets/icons/Ukraine.svg";
import { Language, LanguageItem } from "./types";

export const languages: LanguageItem[] = [
  { value: Language.EN, name: "English", flag: ukFlag },
  { value: Language.UA, name: "Українська", flag: uaFlag },
];
