import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Language } from "@/shared/components/ui/LanguageSwitcher/types";

export const useLanguage = () => {
  const { lng } = useParams<{ lng: Language }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);
};
