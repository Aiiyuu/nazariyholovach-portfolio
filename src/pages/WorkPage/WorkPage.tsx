import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import type { TFunction, i18n as I18nType } from "i18next";
import ProjectsList from "@/components/work/ProjectsList";
import { projects } from "./data";
import ProjectFilters from "@/components/work/ProjectFilters";
import { ProjectFilters as ProjectFiltersType } from "@/components/work/ProjectFilters/types";
import { Category, Project, Tag } from "@/types/project";
import { Language } from "@/components/ui/LanguageSwitcher/types";
import "./WorkPage.scss";

const normalize = (str: string): string =>
  str?.toLowerCase().replace(/\s+/g, "").trim() || "";

function filterProjects(
  projects: Project[],
  filter: ProjectFiltersType,
  t: TFunction<"projects">,
  i18n: I18nType
): Project[] {
  const { search, category, tags } = filter;
  let newProjects = [...projects];

  const supportedLanguages: Language[] = Object.values(Language);

  if (search) {
    const normalizedSearch = normalize(search);

    newProjects = newProjects.filter((project) => {
      const allTranslations: string[] = [];

      for (const lang of supportedLanguages) {
        const tFixed = i18n.getFixedT(lang, "projects");

        const name = normalize(tFixed(`${project.id}.name`));
        const slogan = normalize(tFixed(`${project.id}.slogan`));
        const categoryName = normalize(
          tFixed(`categories.${project.category}`)
        );

        const tagNames =
          project.tags?.map((tag) => normalize(tFixed(`tags.${tag}`))) || [];

        allTranslations.push(name, slogan, categoryName, ...tagNames);
      }

      return allTranslations.some((text) => text.includes(normalizedSearch));
    });
  }

  if (category && category !== Category.ALL) {
    newProjects = newProjects.filter(
      (project) => project.category === category
    );
  }

  if (tags && tags.length > 0 && tags[0] !== Tag.ALL) {
    newProjects = newProjects.filter(
      (project) =>
        project.tags && tags.some((tag) => project.tags!.includes(tag))
    );
  }

  return newProjects;
}

const WorkPage: React.FC = () => {
  const { t, i18n } = useTranslation("projects");
  const [filters, setFilters] = useState<ProjectFiltersType>({
    category: Category.ALL,
    tags: [Tag.ALL],
    search: "",
  });

  const handleFilterChanges = useCallback((filters: ProjectFiltersType) => {
    setFilters(filters);
  }, []);

  const preparedProjects = filterProjects(projects, filters, t, i18n);

  const hasProjects = projects.length > 0;
  const hasMatchingProjects = preparedProjects.length > 0;

  if (!hasProjects) {
    return <p className="no-projects">{t("noProjects")}</p>;
  }

  return (
    <>
      <ProjectFilters onFilter={handleFilterChanges} />

      {!hasMatchingProjects ? (
        <p className="no-projects">{t("noMatchingProjects")}</p>
      ) : (
        <ProjectsList projects={preparedProjects} />
      )}
    </>
  );
};

export default WorkPage;
