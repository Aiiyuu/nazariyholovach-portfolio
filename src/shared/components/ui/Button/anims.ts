import { Variants } from "framer-motion";

export const buttonVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: { y: -6 },
  tap: { scale: 1.05 },
};
