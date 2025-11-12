import { Variants } from "framer-motion";

export const imgOverlayVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.8, delay: 0.2, ease: "easeInOut" },
  },
};

export const imgVariantFasterNoOpacity: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.6, ease: "easeInOut" },
  },
};
