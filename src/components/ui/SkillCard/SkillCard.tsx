import React from "react";
import { Skill } from "./types";
import "./SkillCard.scss";
import SlideIn from "../../animations/SlideIn";
import StaggeredWords from "../../animations/StaggeredWords";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

type Props = {
  skill: Skill;
};

const stackItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    y: 0,

    transition: {
      delay: 0.6,
      duration: 0.5,
    },
  },
};

const SkillCard: React.FC<Props> = ({ skill }) => {
  const { id, logo, stack } = skill;
  const { t } = useTranslation("skills");

  return (
    <div className="skill-card">
      <SlideIn delay={0.4}>
        <div className="skill-card__logo">
          <img src={logo} alt={t(`${id}`)} />
        </div>
      </SlideIn>

      <h2 className="skill-card__title">
        <StaggeredWords delay={0.5}>{t(`${id}`)}</StaggeredWords>
      </h2>

      <ul className="skill-card__stack">
        {stack.map((item) => (
          <motion.li
            key={item}
            className="skill-card__item"
            variants={stackItemVariants}
            initial="hidden"
            whileInView="visible"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
