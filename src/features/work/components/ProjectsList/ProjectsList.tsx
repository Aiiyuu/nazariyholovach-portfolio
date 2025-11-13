import React from "react";
import { Project } from "@/features/work";
import { ProjectCard } from "@/features/work";
import "./ProjectList.scss";
import { motion, AnimatePresence } from "framer-motion";
import { itemVariants } from "./anims";

type Props = { projects: Project[] };

export const ProjectsList: React.FC<Props> = ({ projects }) => {
  return (
    <div className="work">
      <ul className="work__list">
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              className="work__item"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={index}
              layout
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};
