import React from "react";
import "./Navbar.scss";
import TeddyBear from "../../ui/TeddyBear";
import ThemeSwitcher from "../../ui/ThemeSwitcher";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import SlideIn from "../../animations/SlideIn";
import { Link, NavLink } from "react-router-dom";
import { pageLinks } from "./data";
import LanguageSwitcher from "../../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Language } from "../../ui/LanguageSwitcher/types";

const BASE_DURATION = 0.3;

type Props = {
  lng: Language;
};

const Navbar: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation("nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavOpen = () => {
    setIsMenuOpen(true);
  };

  const handleNavClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={clsx(
          "nav",
          !isMenuOpen && "nav--closed",
          isMenuOpen && "nav--opened"
        )}
      >
        <div className="nav__wrapper">
          <SlideIn>
            <Link to="/" className="nav__brand">
              <TeddyBear />
            </Link>
          </SlideIn>

          <ul className="nav__list">
            {pageLinks.map((link, index) => (
              <SlideIn delay={BASE_DURATION + 0.1 * index} key={link.content}>
                <li className="nav__item">
                  <NavLink
                    to={`/${lng}/${link.path}`}
                    className={({ isActive }) =>
                      clsx("nav__link", { "nav__link--active": isActive })
                    }
                  >
                    {t(`links.${link.content}`)}
                  </NavLink>
                </li>
              </SlideIn>
            ))}
          </ul>

          <SlideIn delay={BASE_DURATION + 0.1 * pageLinks.length}>
            <LanguageSwitcher />
          </SlideIn>

          <div className="nav__theme-btn">
            <SlideIn delay={BASE_DURATION + 0.1 * (pageLinks.length + 1)}>
              <ThemeSwitcher />
            </SlideIn>
          </div>

          <motion.button
            className="nav__adaptive-menu-btn"
            onClick={handleNavOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>

          <div className="nav__adaptive-menu-wrapper">
            <div className="nav__adaptive-menu">
              <ul className="nav__adaptive-menu-list">
                {pageLinks.map((link, index) => (
                  <li className="nav__adaptive-menu-item" key={link.content}>
                    <NavLink
                      to={`/${lng}/${link.path}`}
                      className={({ isActive }) =>
                        clsx("nav__adaptive-menu-link", {
                          "nav__adaptive-menu-link--active": isActive,
                        })
                      }
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${index * 200}ms`
                          : `${(pageLinks.length - 1 - index) * 200}ms`,
                      }}
                    >
                      {t(`links.${link.content}`)}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <motion.button
                className="nav__adaptive-menu-close-btn"
                onClick={handleNavClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
              >
                <div className="nav__adaptive-menu-close-btn-wrapper"></div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
