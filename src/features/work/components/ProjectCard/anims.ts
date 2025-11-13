import { Transition, Variants } from "framer-motion";

export const thumbnailVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

export const transition: Transition = { duration: 15, ease: "easeInOut" };
