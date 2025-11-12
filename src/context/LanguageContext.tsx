/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from "react";
import { Language } from "@/components/ui/LanguageSwitcher/types";
import { useParams } from "react-router-dom";

type LanguageContextType = {
  lng: Language;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { lng } = useParams<{ lng: Language }>();

  const language = Object.values(Language).includes(lng as Language)
    ? (lng as Language)
    : Language.EN;

  return (
    <LanguageContext.Provider value={{ lng: language }}>
      {children}
    </LanguageContext.Provider>
  );
};
