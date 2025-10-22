import React from "react";
import { motion } from "framer-motion";

interface StaggeredLinesProps {
  children: string;
  delay?: number;
  duration?: number;
}

const StaggeredLines: React.FC<StaggeredLinesProps> = ({
  children,
  delay = 0.15,
  duration = 0.2,
}) => {
  const lines = children.split("//n");

  return (
    <>
      {lines.map((line, index) => (
        <motion.div
          key={line + index}
          initial={{ opacity: 0, y: 5, rotate: 5, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{
            delay: delay + index * 0.1,
            duration: duration,
            type: "tween",
          }}
          style={{
            display: "block",
            marginBottom: index !== lines.length - 1 ? "0.5em" : "0",
            transformOrigin: "bottom left",
          }}
        >
          {line}
        </motion.div>
      ))}
    </>
  );
};

export default StaggeredLines;
