import React, { useEffect, useState } from "react";
import "./TransitionScreen.scss";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import StaggeredWords from "../StaggeredWords";

const DELAY = 300;
const DURATION = 750;
const CURVE = 400;
const DEFAULT_LOCATION = "home";

export const SECOND_PHASE_DELAY = 2000;
export const TRANSITION_SCREEN_DURATION = DURATION + SECOND_PHASE_DELAY;

const transition: Transition = {
  delay: DELAY / 1000,
  duration: DURATION / 1000,
  ease: [0.86, 0, 0.14, 1],
};

const titleVariants: Variants = {
  initial: { opacity: 1, x: 0 },
  exit: {
    y: -40,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const TransitionScreen: React.FC = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [show, setShow] = useState(true);

  const location = useLocation();
  const title =
    location.pathname.slice(1).split("/").at(-1) || DEFAULT_LOCATION;

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
    exit: { d: exitPath, transition: { ...transition, duration: DURATION / 1000 } },
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
            <StaggeredWords delay={(DURATION / 2 + DELAY) / 1000}>
              {title.split("").join(" ")}
            </StaggeredWords>
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TransitionScreen;
