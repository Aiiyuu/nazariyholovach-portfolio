import React from "react";
import { Language } from "@/shared/components/ui";
import { useParams } from "react-router-dom";
import { LanguageContext } from "@/shared/context";

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
