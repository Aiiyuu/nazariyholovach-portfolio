import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import StaggeredLines from "@/components/animations/StaggeredLines";
import StaggeredWords from "@/components/animations/StaggeredWords";
import { skills } from "./data";
import StackItemCard from "@/components/home/StackItemCard";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import SlideIn from "@/components/animations/SlideIn";
import { waverBtnVariants } from "./anims";
import ExchangeIcon from "@/assets/icons/exchange.svg?react";

const ROTATION_DURATION = 500;

const Skills: React.FC = () => {
  const { t, i18n } = useTranslation(["waver", "skills"]);
  const waverList = t("waverList", { returnObjects: true }) as string[];
  const [waverItem, setWaverItem] = useState(waverList[0]);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    if (waverList && waverList.length > 0) {
      setWaverItem(waverList[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  const handleWaverSwitching = () => {
    if (isRotating || !waverList || waverList.length === 0) return;

    const currentIndex = waverList.findIndex((item) => item === waverItem);
    const nextIndex = (currentIndex + 1) % waverList.length;
    setWaverItem(waverList[nextIndex]);
    setIsRotating(true);

    setTimeout(() => setIsRotating(false), ROTATION_DURATION);
  };

  return (
    <div id="skills" className="skills">
      <h2 className="skills__title">
        <StaggeredLines>{t("waver:title")}</StaggeredLines>
      </h2>

      <div className="skills__waver">
        <motion.button
          className={clsx("skills__waver-btn", {
            "skills__waver-btn--is-rotating": isRotating,
          })}
          onClick={handleWaverSwitching}
          variants={waverBtnVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <ExchangeIcon />
        </motion.button>

        <span className="skills__waver-item">
          <StaggeredWords key={waverItem}>{waverItem + "?"}</StaggeredWords>
        </span>
      </div>

      <div className="skills__categories-list">
        {skills.map((category) => (
          <SlideIn key={category.name} offset={100}>
            <div className="skills__category-item">
              <h2 className="skills__category-title">
                {t(`skills:categories.${category.name}`)}
              </h2>

              <ul className="skills__stack-list">
                {category.stack.map((item, index) => (
                  <li key={item.name} className="skills__stack-item">
                    <SlideIn offset={50} delay={0.1 * index}>
                      <StackItemCard key={item.name} skill={item} />
                    </SlideIn>
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>
        ))}
      </div>
    </div>
  );
};

export default Skills;
