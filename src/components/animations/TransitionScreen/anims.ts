import { Transition, Variants } from "framer-motion";

export const DELAY = 300;
export const DURATION = 750;

export const transition: Transition = {
  delay: DELAY / 1000,
  duration: DURATION / 1000,
  ease: [0.86, 0, 0.14, 1],
};

export const titleVariants: Variants = {
  initial: { opacity: 1, x: 0 },
  exit: {
    y: -40,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};