import React from "react";
import { motion, type MotionProps } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";

interface SlideInProps extends MotionProps {
  children: React.ReactNode;
  direction?: Direction;
  offset?: number;
  delay?: number;
  duration?: number;
  scale?: number;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = "up",
  offset = 20,
  delay = 0,
  duration = 0.3,
  scale = 1,
  ...motionProps
}) => {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { x: -offset, opacity: 0, scale };
      case "right":
        return { x: offset, opacity: 0, scale };
      case "up":
        return { y: offset, opacity: 0, scale };
      case "down":
        return { y: -offset, opacity: 0, scale };
      default:
        return { y: offset, opacity: 0, scale };
    }
  };

  const transition = { delay, duration, ease: "easeOut" as const };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, transition }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
