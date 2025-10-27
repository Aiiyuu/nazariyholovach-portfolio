import React from "react";
import { footerLists, socialNetworks } from "./data";
import "./Footer.scss";
import clsx from "clsx";
import SlideIn from "../../animations/SlideIn";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SocialNetworkVariants: Variants = {
  hover: {
    opacity: 0.8,
    scale: 1.1,
  },
  tap: {
    opacity: 0.8,
    scale: 1.2,
  },
};

const Footer: React.FC = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="footer">
      <section className="footer__section">
        <ul className="footer__social-networks">
          {socialNetworks.map((item, index) => (
            <motion.a
              href={item.link}
              key={index}
              target="_blank"
              className="footer__social-networks-item"
              variants={SocialNetworkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <SlideIn offset={40} delay={0.1 * index}>
                <item.icon />
              </SlideIn>
            </motion.a>
          ))}
        </ul>
      </section>

      <section className="footer__section">
        <SlideIn offset={40} delay={0.1 * socialNetworks.length}>
          <p className="footer__license">{t("footer.copyright")}</p>
        </SlideIn>
      </section>

      <section className="footer__section">
        {footerLists.map((list, index) => (
          <ul key={index} className="footer__list">
            {list.map((item, itemIndex) => (
              <li
                key={t(`footer.${item.id}`)}
                className={clsx("footer__item", {
                  "footer__item--bold": item.title,
                })}
              >
                <SlideIn offset={40} delay={0.1 * itemIndex}>
                  {item.title && <p>{t(`${item.id}`)}</p>}

                  {item.demo && (
                    <a href={item.demo} target="_blank">
                      {t(`${item.id}`)}
                    </a>
                  )}

                  {item.page && (
                    <Link to={item.page}>{t(`${item.id}`)}</Link>
                  )}

                  {item.navigate && (
                    <a href={item.navigate}>{t(`${item.id}`)}</a>
                  )}
                </SlideIn>
              </li>
            ))}
          </ul>
        ))}
      </section>
    </footer>
  );
};

export default Footer;
