import type React from "react";
import "./ThemeSwitcher.scss";
import moonIcon from "../../../assets/icons/moon.svg";
import sunIcon from "../../../assets/icons/sun.svg";
import { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      <img src={moonIcon} alt="moon" />
      <img src={sunIcon} alt="sun" />
    </button>
  );
};

export default ThemeSwitcher;
