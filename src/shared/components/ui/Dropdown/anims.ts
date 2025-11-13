import { Variants } from "framer-motion";

export const dropdownBtnVariants: Variants = {
  hover: { scale: 1.03 },
  tap: { scale: 1.05 },
};

export const getItemDelay = (index: number, cols: number): number =>
  0.1 * Math.ceil((index + 1) / cols);
