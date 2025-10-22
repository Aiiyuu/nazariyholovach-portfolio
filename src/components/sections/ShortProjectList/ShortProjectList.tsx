import React from "react";
import { shortProjectList } from "../../../data/projects";
import "./ShortProjectList.scss";
import ProjectCard from "../../ui/ProjectCard";
import SlideIn from "../../animations/SlideIn";
import StaggeredWords from "../../animations/StaggeredWords";
import StaggeredLines from "../../animations/StaggeredLines";
import { motion, Variants } from "framer-motion";
import Button from "../../ui/Button";

const shortProjectItemVariants: Variants = {
  hidden: (index: number) => ({
    rotate: index % 2 === 0 ? 15 : -15,
    opacity: 0.4,
  }),

  visible: {
    rotate: 0,
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const ARROW_DRAW_DURATION = 1.5;
const ARROW_DRAW_DELAY = 0.5;
const SLOGAN_TRANSITION_DELAY = ARROW_DRAW_DURATION + ARROW_DRAW_DELAY;

const projectArrowVariants: Variants = {
  hidden: {
    pathLength: 0,
  },

  visible: {
    pathLength: 1,

    transition: {
      delay: ARROW_DRAW_DELAY,
      duration: ARROW_DRAW_DURATION,
    },
  },
};

const ShortProjectList: React.FC = () => {
  return (
    <div className="short-project">
      <h2 className="short-project__title">
        <StaggeredWords>A Universe of my</StaggeredWords>
        <span className="short-project__title-main">
          <StaggeredLines duration={0.4}>Highlights</StaggeredLines>
        </span>
      </h2>

      <div className="short-project__list-wrapper">
        <ul className="short-project__list">
          {shortProjectList.map((project, index) => (
            <motion.li
              key={project.name}
              className="short-project__item"
              custom={index}
              variants={shortProjectItemVariants}
              initial="hidden"
              whileInView="visible"
            >
              <div className="short-project__card">
                <SlideIn offset={100} delay={0.1} scale={0.6} duration={0.4}>
                  <ProjectCard project={project} />
                </SlideIn>
              </div>

              <div className="short-project__arrow">
                <svg viewBox="0 0 883 347">
                  <motion.path
                    d={project.arrowPath}
                    variants={projectArrowVariants}
                    initial="hidden"
                    whileInView="visible"
                  />
                </svg>
              </div>

              <h3 className="short-project__item-slogan">
                <StaggeredWords delay={SLOGAN_TRANSITION_DELAY}>
                  {project.slogan}
                </StaggeredWords>
              </h3>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="short-project__btn">
        <SlideIn>
          <Button>All works</Button>
        </SlideIn>
      </div>
    </div>
  );
};

export default ShortProjectList;
