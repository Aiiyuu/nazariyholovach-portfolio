import React, { useRef } from "react";
import "./ProjectCard.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import SlideIn from "@/components/animations/SlideIn";
import Button from "@/components/ui/Button";
import clsx from "clsx";
import StaggeredWords from "@/components/animations/StaggeredWords";
import { useTranslation } from "react-i18next";
import { Project } from "@/types/project";

type Props = {
  project: Project;
  zIndex: number;
};

const ProjectCard: React.FC<Props> = ({ project, zIndex }) => {
  const { id, thumbnail, overlay, stack, demoLink } = project;
  const cardRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 80px", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const opacity = useTransform(scrollYProgress, [0.3, 1], [1, 0]);

  const { t } = useTranslation(["projects", "common"]);

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      style={{ scale, y, opacity, zIndex }}
    >
      <img
        loading="lazy"
        className="project-card__img"
        src={thumbnail}
        alt={t(`projects:${id}.name`)}
      />

      <div className="project-card__wrapper">
        <div
          className={clsx("project-card__overlay", {
            [`project-card__overlay--${overlay}`]: overlay,
          })}
        >
          <SlideIn delay={0.2}>
            <h4 className="project-card__slogan">
              {t(`projects:${id}.slogan`)}
            </h4>
          </SlideIn>

          <h1 className="project-card__title">
            <StaggeredWords delay={0.3} rotate={0} y={50}>
              {t(`projects:${id}.name`)}
            </StaggeredWords>
          </h1>

          <ul className="project-card__stack">
            {stack.map((item, index) => (
              <SlideIn
                offset={40}
                key={`${name}-${item}`}
                delay={0.1 * index + 0.4}
              >
                <li className="project-card__stack-item">{item}</li>
              </SlideIn>
            ))}
          </ul>
        </div>

        <div className="project-card__btn-group">
          <SlideIn delay={0.5 + 0.1 * stack.length}>
            <Button size="md" color="pink">
              {t("common:exploreBtn")}
            </Button>
          </SlideIn>

          {demoLink && (
            <SlideIn delay={0.6 + 0.1 * stack.length}>
              <a href={demoLink} target="_blank">
                <Button size="md" color="pink">
                  {t("common:demoBtn")}
                </Button>
              </a>
            </SlideIn>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
