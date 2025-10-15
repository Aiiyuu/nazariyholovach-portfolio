import React from "react";
import "./Navbar.scss";
import TeddyBear from "../../ui/TeddyBear";
import ThemeSwitcher from "../../ui/ThemeSwitcher";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import SlideIn from "../../animations/SlideIn";

type PageLink = {
  content: string;
};

const BASE_DURATION = 0.3;

const pageLinks: PageLink[] = [
  {
    content: "work",
  },
  {
    content: "about",
  },
  {
    content: "contact",
  },
];

const Navbar: React.FC = () => {
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
            <a className="nav__brand" href="#">
              <TeddyBear />
            </a>
          </SlideIn>

          <ul className="nav__list">
            {pageLinks.map((link, index) => (
              <SlideIn delay={BASE_DURATION + 0.1 * index} key={link.content}>
                <li className="nav__item">
                  <a className="nav__link" href="#">
                    {link.content}
                  </a>
                </li>
              </SlideIn>
            ))}
          </ul>

          <div className="nav__theme-btn">
            <SlideIn delay={BASE_DURATION + 0.1 * pageLinks.length}>
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
                    <a
                      className="nav__adaptive-menu-link"
                      href="#"
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${index * 200}ms`
                          : `${(pageLinks.length - 1 - index) * 200}ms`,
                      }}
                    >
                      {link.content}
                    </a>
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
