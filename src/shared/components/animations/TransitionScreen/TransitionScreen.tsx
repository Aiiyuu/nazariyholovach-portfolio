import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { StaggeredWords } from "@/shared/components/animations";
import { DELAY, DURATION, transition, titleVariants } from "./anims";
import { useTranslation } from "react-i18next";
import "./TransitionScreen.scss";

const CURVE = 400;

export const SECOND_PHASE_DELAY = 3500;
export const TRANSITION_SCREEN_DURATION = DURATION + SECOND_PHASE_DELAY;

type Props = { title: string };

export const TransitionScreen: React.FC<Props> = ({ title }) => {
  const { t } = useTranslation("pages");
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [show, setShow] = useState(true);

  const pageTitle = t(`${title}`);

  const initialPath = `
    M0 ${CURVE}
    Q${width / 2} 0 ${width} ${CURVE}
    L${width} ${height + CURVE}
    Q${width / 2} ${height + CURVE * 2} 0 ${height + CURVE}
    L0 ${CURVE}
  `;

  const exitPath = `
    M0 ${CURVE}
    Q${width / 2} 0 ${width} ${CURVE}
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 ${CURVE}
  `;

  const slideVariants: Variants = {
    initial: { top: `${height - CURVE / 2}px` },
    enter: { top: `-${CURVE}px`, transition },
    exit: { top: `-${height + CURVE}px`, transition },
  };

  const pathVariants: Variants = {
    initial: { d: initialPath },
    animate: { d: initialPath, transition },
    exit: {
      d: exitPath,
      transition: { ...transition, duration: DURATION / 1000 },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), SECOND_PHASE_DELAY);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="route-transition">
      <AnimatePresence>
        {show && (
          <motion.svg
            style={{ width, height: height + CURVE * 2 }}
            variants={slideVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <motion.path variants={pathVariants} />
          </motion.svg>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <motion.h1
            className="route-transition__title"
            variants={titleVariants}
            initial="initial"
            exit="exit"
          >
            <StaggeredWords
              delay={(DURATION / 2 + DELAY) / 1000}
              removeExtraSpaces={true}
            >
              {pageTitle.split("").join(" ")}
            </StaggeredWords>
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
};
