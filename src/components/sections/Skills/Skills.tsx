import React, { useState } from "react";
import "./Skills.scss";
import { waverList } from "../../../data/waver";
import { motion, Variants } from "framer-motion";
import StaggeredLines from "../../animations/StaggeredLines";
import StaggeredWords from "../../animations/StaggeredWords";
import { skillsList } from "../../../data/skills";
import SkillCard from "../../ui/SkillCard";

const waverBtnVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  hover: {
    scale: 1.05,
    opacity: 0.8,
  },
  tap: {
    scale: 1.2,
  },
};

const skillCardVariants: Variants = {
  hidden: {
    opacity: 0,
    rotate: 10,
  },
  visible: {
    opacity: 1,
    rotate: 0,

    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

const Skills: React.FC = () => {
  const [waverItem, setWaverItem] = useState(waverList[0]);

  const handleWaverSwitching = () => {
    const currentIndex = waverList.findIndex((item) => item === waverItem) + 1;
    const currentItem =
      currentIndex !== waverList.length
        ? waverList[currentIndex]
        : waverList[0];

    setWaverItem(currentItem);
  };

  return (
    <div id="skills" className="skills">
      <h2 className="skills__title">
        <StaggeredLines>You need</StaggeredLines>
      </h2>

      <div className="skills__waver">
        <motion.button
          className="skills__waver-btn"
          onClick={handleWaverSwitching}
          variants={waverBtnVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <svg viewBox="0 0 200 200">
            <g>
              <circle id="change-bg" cx="100" cy="100" r="100" />
              <path
                id="change-arrow-1"
                d="M52.415 119.704C47.1521 106.997 47.1518 93.0023 52.415 80.2962C56.8369 69.6211 64.5295 60.931 74.4109 55.3039V76.544H82.9064V44.2626H50.6247V52.7581H63.0154C42.343 68.9459 34.039 97.5403 44.566 122.955C48.5779 132.64 55.0636 141.123 63.3223 147.488C71.329 153.658 80.8437 157.739 90.8369 159.29L92.1398 150.895C74.2022 148.112 59.3521 136.451 52.415 119.704Z"
              />
              <path
                id="change-arrow-2"
                d="M155.401 122.955C161.533 108.152 161.533 91.8478 155.401 77.0452C151.39 67.3598 144.904 58.8766 136.645 52.5123C128.638 46.3418 119.123 42.2605 109.13 40.7098L107.828 49.1051C125.765 51.8885 140.615 63.5488 147.552 80.2965C152.815 93.0026 152.815 106.998 147.552 119.704C143.131 130.379 135.438 139.069 125.557 144.696V123.456H117.061V155.737H149.342V147.242H136.989C145.046 140.95 151.383 132.656 155.401 122.955Z"
              />
            </g>
          </svg>
        </motion.button>

        <span className="skills__waver-item">
          <StaggeredWords>{waverItem + "?"}</StaggeredWords>
        </span>
      </div>

      <div className="skills__list">
        {skillsList.map((skill) => (
          <motion.div
            key={skill.id}
            className="skills__item"
            variants={skillCardVariants}
            initial="hidden"
            whileInView="visible"
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
