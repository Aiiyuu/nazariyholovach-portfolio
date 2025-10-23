import React from "react";
import { motion } from "framer-motion";

interface StaggeredWordsProps {
  children: string;
  delay?: number;
  rotate?: number;
  y?: number;
}

const StaggeredWords: React.FC<StaggeredWordsProps> = ({
  children,
  delay = 0.15,
  rotate = 10,
  y = 10,
}) => {
  const words = children.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={word + index}
          initial={{ opacity: 0, y, rotate, scale: 0.6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{
            delay: delay + index * 0.1,
            duration: 0.4,
            type: "tween",
          }}
          style={{
            display: "inline-block",
            marginRight: "0.25em",
            transformOrigin: "bottom left",
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
};

export default StaggeredWords;
