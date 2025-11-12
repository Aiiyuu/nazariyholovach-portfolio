import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Language, LanguageItem } from "./types";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import "./LanguageSwitcher.scss";
import ArrowIcon from "@/shared/assets/icons/arrow.svg?react";
import { languages } from "./data";
import { motion } from "framer-motion";
import { switcherVariants } from "./anims";

const getCurrentLanguage = (lngName: LanguageItem["value"]): LanguageItem => {
  return languages.find((lng) => lng.value === lngName) || languages[0];
};

export const LanguageSwitcher: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { lng } = useParams<{ lng: Language }>();
  const currentLanguage = getCurrentLanguage(
    Object.values(Language).includes(lng as Language)
      ? (lng as Language)
      : Language.EN,
  );
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const collapseLanguageList = () => setIsCollapsed((prev) => !prev);

  const handleChange = (newLanguage: Language) => {
    collapseLanguageList();
    i18n.changeLanguage(newLanguage);

    const currentPath = window.location.hash.replace(/^#/, "") || "/";
    const segments = currentPath.split("/").filter(Boolean);

    if (segments.length > 0) {
      segments[0] = newLanguage;
    } else {
      segments.push(newLanguage);
    }

    const newPath = "/" + segments.join("/");

    navigate(newPath);
  };

  return (
    <div
      className={clsx("lng-switcher", {
        "lng-switcher--collapsed": isCollapsed,
      })}
    >
      <motion.button
        className="lng-switcher__btn"
        onClick={collapseLanguageList}
        variants={switcherVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <img src={currentLanguage.flag} alt={currentLanguage.name} />
        <span className="lng-switcher__arrow">
          <ArrowIcon></ArrowIcon>
        </span>
      </motion.button>

      <div className="lng-switcher__dropdown">
        <ul className="lng-switcher__list">
          {languages.map((language, index) => (
            <li
              key={index}
              className="lng-switcher__item"
              onClick={() => handleChange(language.value)}
            >
              <img src={language.flag} alt={language.name} />
              <span>{language.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
