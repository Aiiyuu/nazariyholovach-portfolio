import React from "react";
import { footerLists, socialNetworks } from "../../../data/footer";
import "./Footer.scss";
import clsx from "clsx";
import SlideIn from "../../animations/SlideIn";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

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
          <p className="footer__license">
            © 2025 Nazariy Holovach — free to explore under MIT
          </p>
        </SlideIn>
      </section>

      <section className="footer__section">
        {footerLists.map((list, index) => (
          <ul key={index} className="footer__list">
            {list.map((item, itemIndex) => (
              <li
                key={item.content}
                className={clsx("footer__item", {
                  "footer__item--bold": item.title,
                })}
              >
                <SlideIn offset={40} delay={0.1 * itemIndex}>
                  {item.title && <p>{item.content}</p>}

                  {item.demo && (
                    <a href={item.demo} target="_blank">
                      {item.content}
                    </a>
                  )}

                  {item.page && <Link to={item.page}>{item.content}</Link>}

                  {item.navigate && <a href={item.navigate}>{item.content}</a>}
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
