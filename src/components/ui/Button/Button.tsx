import React, { ReactNode } from "react";
import "./Button.scss";
import { Variants, motion } from "framer-motion";
import clsx from "clsx";
import { ButtonSize } from "./types";

type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  color?: string;
  size?: ButtonSize;
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hover: {
    y: -6,
  },
  tap: {
    scale: 1.05,
  },
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  color,
  size = "lg",
}) => {
  return (
    <motion.button
      className={clsx("btn", {
        [`btn--${color}`]: color,
        [`btn--${size}`]: size,
      })}
      type={type}
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
};

export default Button;
