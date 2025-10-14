import type React from "react";
import "./Navbar.scss";
import TeddyBear from "../../ui/TeddyBear";
import ThemeSwitcher from "../../ui/ThemeSwitcher";
import { useState } from "react";
import clsx from "clsx";

type PageLink = {
  content: string;
};

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
          <a className="nav__brand" href="#">
            <TeddyBear />
          </a>

          <ul className="nav__list">
            {pageLinks.map((link) => (
              <li className="nav__item">
                <a className="nav__link" href="#">
                  {link.content}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__theme-btn">
            <ThemeSwitcher />
          </div>

          <button className="nav__adaptive-menu-btn" onClick={handleNavOpen}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="nav__adaptive-menu-wrapper">
            <div className="nav__adaptive-menu">
              <ul className="nav__adaptive-menu-list">
                {pageLinks.map((link, index) => (
                  <li className="nav__adaptive-menu-item">
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

              <button
                className="nav__adaptive-menu-close-btn"
                onClick={handleNavClose}
              >
                <div className="nav__adaptive-menu-close-btn-wrapper"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
