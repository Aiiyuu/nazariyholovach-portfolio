import React from "react";
import { motion } from "framer-motion";

interface StaggeredWordsProps {
  children: string;
  delay?: number;
  rotate?: number;
  y?: number;
  removeExtraSpaces?: boolean;
}

export const StaggeredWords: React.FC<StaggeredWordsProps> = ({
  children,
  delay = 0.15,
  rotate = 10,
  y = 10,
  removeExtraSpaces = false,
}) => {
  const words = children.split(" ");

  const getMargin = (index: number, word: string) => {
    if (removeExtraSpaces && word) {
      return "0";
    }

    if (index + 1 !== words.length) {
      return "0.25em";
    }

    return "0";
  };

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={word + index}
          initial={{ opacity: 0, y, rotate, scale: 0.6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{
            delay: removeExtraSpaces && !word ? 0 : delay + index * 0.1,
            duration: 0.4,
            type: "tween",
          }}
          style={{
            display: "inline-block",
            marginRight: getMargin(index, word),
            transformOrigin: "bottom left",
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
};
