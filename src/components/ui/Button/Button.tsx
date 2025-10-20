import React, { ReactNode } from "react";
import "./Button.scss";
import { Variants, motion } from "framer-motion";

type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  delay?: number;
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
}) => {
  return (
    <motion.button
      className="btn"
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
