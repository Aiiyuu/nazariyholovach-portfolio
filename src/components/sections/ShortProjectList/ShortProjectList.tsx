import React from "react";
import { shortProjectList } from "../../../data/projects";
import "./ShortProjectList.scss";
import SlideIn from "../../animations/SlideIn";
import StaggeredWords from "../../animations/StaggeredWords";
import StaggeredLines from "../../animations/StaggeredLines";
import Button from "../../ui/Button";
import ProjectCard from "../../ui/ProjectCard";

const ShortProjectList: React.FC = () => {
  return (
    <div id="main-projects" className="short-project">
      <h2 className="short-project__title">
        <StaggeredWords>A Universe of my</StaggeredWords>
        <span className="short-project__title-main">
          <StaggeredLines duration={0.4}>Highlights</StaggeredLines>
        </span>
      </h2>

      <ul className="short-project__list">
        {shortProjectList.map((project, index) => (
          <li className="short-project__item" key={project.name}>
            <ProjectCard project={project} zIndex={index} />
          </li>
        ))}
      </ul>

      <div
        className="short-project__btn"
        style={{ zIndex: shortProjectList.length }}
      >
        <SlideIn>
          <Button>All works</Button>
        </SlideIn>
      </div>
    </div>
  );
};

export default ShortProjectList;
