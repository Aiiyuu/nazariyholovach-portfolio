import React from "react";
import { ProjectCardInterface } from "../../../types/ProjectCardInterface";
import "./ProjectCard.scss";
import SlideIn from "../../animations/SlideIn";

type ProjectCardProps = {
  project: ProjectCardInterface;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { thumbnail, name, stack } = project;

  return (
    <article className="project-card">
      <img
        className="project-card__img"
        loading="lazy"
        src={thumbnail}
        alt={`${name}'s image`}
      />

      <div className="project-card__body">
        <SlideIn>
          <h4 className="project-card__title">{name}</h4>
        </SlideIn>

        <ul className="project-card__list">
          {stack.map((item, index) => (
            <li key={item} className="project-card__item">
              <SlideIn delay={0.2 * index}>{item}</SlideIn>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
