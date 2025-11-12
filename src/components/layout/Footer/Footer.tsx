import React from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import SlideIn from "@/components/animations/SlideIn";
import { socialNetworks } from "./data";
import { motion } from "framer-motion";
import { socialNetworkVariants } from "./anims";

const Footer: React.FC = () => {
  const { t } = useTranslation(["footer", "common"]);

  return (
    <footer className="footer">
      <SlideIn offset={100}>
        <section className="footer__contact">
          <h2 className="footer__title">
            <SlideIn delay={0.2}>{t("footer:title")}</SlideIn>
            <SlideIn delay={0.3}>
              <span className="footer__title-main">
                {t("footer:title-main")}
              </span>
            </SlideIn>
          </h2>

          <SlideIn delay={0.4}>
            <p className="footer__text">{t("footer:text")}</p>
          </SlideIn>

          <SlideIn delay={0.5}>
            <Button color="pink" size="sm">
              {t("common:contactMeBtn")}
            </Button>
          </SlideIn>
        </section>
      </SlideIn>

      <section className="footer__bottom">
        <ul className="footer__social-networks-list">
          {socialNetworks.map((socialNetwork, index) => (
            <motion.li
              key={index}
              className="footer__social-networks-item"
              variants={socialNetworkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <SlideIn delay={0.1 * index}>
                <a href={socialNetwork.link} target="_blank">
                  <socialNetwork.icon></socialNetwork.icon>
                </a>
              </SlideIn>
            </motion.li>
          ))}
        </ul>

        <div className="footer__copyright-wrapper">
          <SlideIn delay={0.1}>
            <p className="footer__copyright-text">{t("footer:copyright")}</p>
          </SlideIn>

          <SlideIn delay={0.2}>
            <Link className="footer__copyright-btn" to="legal">
              {t("footer:legal-information")}
            </Link>
          </SlideIn>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
