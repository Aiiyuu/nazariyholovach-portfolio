import React from "react";
import { useTranslation } from "react-i18next";
import "./ProjectWelcome.scss";
import { StatsSection } from "@/features/work/components/StatsSection";
import { PROJECTS_COMPLETED, YEARS_OF_EXPERIENCE } from "./data";

export const ProjectWelcome: React.FC = () => {
  const { t } = useTranslation("projects");

  return (
    <div className="project-welcome">
      <h1 className="project-welcome__title">{t("title")}</h1>
      <p className="project-welcome__subtitle">{t("subtitle")}</p>

      <div className="project-welcome__stats">
        <StatsSection years={YEARS_OF_EXPERIENCE}>
          {t("experience")}
        </StatsSection>

        <StatsSection years={PROJECTS_COMPLETED}>
          {t("completedProjects")}
        </StatsSection>
      </div>
    </div>
  );
};
