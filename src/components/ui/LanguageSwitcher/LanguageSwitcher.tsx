import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Language, LanguageItem } from "./types";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import "./LanguageSwitcher.scss";
import ArrowIcon from "../../../assets/icons/arrow.svg?react";
import { languages } from "./data";

const getCurrentLanguage = (lngName: LanguageItem["value"]): LanguageItem => {
  return languages.find((lng) => lng.value === lngName) || languages[0];
};

const LanguageSwitcher: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { lng } = useParams<{ lng: Language }>();
  const currentLanguage = getCurrentLanguage(lng || languages[0].value);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const collapseLanguageList = () => setIsCollapsed((prev) => !prev);

  const handleChange = (newLanguage: Language) => {
    collapseLanguageList();
    i18n.changeLanguage(newLanguage);
    navigate(`/${newLanguage}`);
  };

  return (
    <div
      className={clsx("lng-switcher", {
        "lng-switcher--collapsed": isCollapsed,
      })}
    >
      <button className="lng-switcher__btn" onClick={collapseLanguageList}>
        <img src={currentLanguage.flag} alt={currentLanguage.name} />
        <span className="lng-switcher__arrow">
          <ArrowIcon></ArrowIcon>
        </span>
      </button>

      <div className="lng-switcher__dropdown">
        <ul className="lng-switcher__list">
          {languages.map((language) => (
            <li
              key={language.value}
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

export default LanguageSwitcher;
