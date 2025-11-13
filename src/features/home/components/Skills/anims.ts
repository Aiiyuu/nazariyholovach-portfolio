import { Variants } from "framer-motion";

export const waverBtnVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, opacity: 0.8 },
  tap: { scale: 1.2 },
};
