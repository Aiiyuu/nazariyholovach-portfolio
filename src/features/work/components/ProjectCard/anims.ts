import { Transition, Variants } from "framer-motion";

export const transition: Transition = { duration: 15, ease: "easeInOut" };

export const thumbnailVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

export const thumbnailHeaderVariants: Variants = {
  initial: { opacity: 0.9, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
