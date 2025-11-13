import { createContext } from "react";
import { Language } from "@/shared/components/ui";

type LanguageContextType = { lng: Language };

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
