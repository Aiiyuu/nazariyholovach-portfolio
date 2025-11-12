import React, { ReactNode } from "react";
import "./Button.scss";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ButtonSize } from "./types";
import { buttonVariants } from "./anims";

type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  color?: string;
  size?: ButtonSize;
  withMotion?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  color = "theme",
  size = "lg",
  withMotion = true,
}) => {
  const props = withMotion ? { whileHover: "hover", whileTap: "tap" } : {};

  return (
    <motion.button
      className={clsx(`btn btn--${color} btn--${size}`)}
      type={type}
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
