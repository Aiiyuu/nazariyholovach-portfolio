import React from "react";
import { Project } from "@/types/project";
import ProjectCard from "@/components/work/ProjectCard";
import "./ProjectList.scss";
import { motion, AnimatePresence } from "framer-motion";
import { itemVariants } from "./anims";

type Props = {
  projects: Project[];
};

const ProjectsList: React.FC<Props> = ({ projects }) => {
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

export default ProjectsList;
