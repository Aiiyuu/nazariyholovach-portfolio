import React from "react";
import { shortProjectList } from "./data";
import "./ShortProjectList.scss";
import SlideIn from "@/components/animations/SlideIn";
import StaggeredWords from "@/components/animations/StaggeredWords";
import StaggeredLines from "@/components/animations/StaggeredLines";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/home/ProjectCard";
import { useTranslation } from "react-i18next";

const ShortProjectList: React.FC = () => {
  const { t } = useTranslation(["shortProjectList", "common"]);

  return (
    <div id="main-projects" className="short-project">
      <h2 className="short-project__title">
        <StaggeredWords>{t("shortProjectList:title")}</StaggeredWords>

        <span className="short-project__title-main">
          <StaggeredLines duration={0.4}>
            {t("shortProjectList:main")}
          </StaggeredLines>
        </span>
      </h2>

      <ul className="short-project__list">
        {shortProjectList.map((project, index) => (
          <li className="short-project__item" key={project.id}>
            <ProjectCard project={project} zIndex={index} />
          </li>
        ))}
      </ul>

      <div
        className="short-project__btn"
        style={{ zIndex: shortProjectList.length }}
      >
        <SlideIn>
          <Button>{t("common:allWorksBtn")}</Button>
        </SlideIn>
      </div>
    </div>
  );
};

export default ShortProjectList;
