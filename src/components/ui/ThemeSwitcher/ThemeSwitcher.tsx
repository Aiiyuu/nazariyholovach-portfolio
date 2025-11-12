import React from "react";
import "./ThemeSwitcher.scss";
import moonIcon from "@/assets/icons/moon.svg";
import sunIcon from "@/assets/icons/sun.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { themeSwitcherVariants } from "./anims";

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
    <motion.button
      className="theme-switcher"
      onClick={toggleTheme}
      variants={themeSwitcherVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <img src={moonIcon} alt="moon" />
      <img src={sunIcon} alt="sun" />
    </motion.button>
  );
};

export default ThemeSwitcher;
