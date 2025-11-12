import React, { useCallback, useEffect } from "react";
import "./ProjectFilters.scss";
import { Category, Tag } from "@/types/project";
import Dropdown from "@/components/ui/Dropdown";
import { useProjectFilters } from "@/hooks";
import InputField from "@/components/ui/InputField/InputField";
import { ProjectFilters as ProjectFiltersType } from "./types";
import { useTranslation } from "react-i18next";

type Props = {
  onFilter: (filters: ProjectFiltersType) => void;
};

function getTranslatedOptions<T extends Record<string, string>>(
  obj: T,
  t: (key: string) => string,
  namespace: string
): Record<string, string> {
  return Object.fromEntries(
    Object.values(obj).map((item) => [item, t(`${namespace}.${item}`)])
  );
}

const ProjectFilters: React.FC<Props> = ({ onFilter }) => {
  const { t } = useTranslation("projects");
  const categoryOptions = getTranslatedOptions(Category, t, "categories");
  const tagOptions = getTranslatedOptions(Tag, t, "tags");

  const { search, category, tags, setFilters } = useProjectFilters();

  const onCategorySelect = ([selected]: string[]) => {
    setFilters({ category: selected as Category });
  };

  const onTagSelect = (selected: string[]) => {
    setFilters({
      tags: selected as Tag[],
    });
  };

  const onSearch = useCallback(
    (query: string) => setFilters({ search: query }),
    [setFilters]
  );

  useEffect(() => {
    onFilter({ search, category: category as Category, tags: tags as Tag[] });
  }, [search, category, tags, onFilter]);

  return (
    <div className="project-filter">
      <div className="project-filter__dropdown-group">
        <Dropdown
          title={t("categoryTitle")}
          options={categoryOptions}
          onSelect={onCategorySelect}
          defaultOptions={[category]}
        />

        <Dropdown
          title={t("tagsTitle")}
          options={tagOptions}
          onSelect={onTagSelect}
          multiple={true}
          defaultOptions={tags}
        />
      </div>

      <InputField
        placeholder="Search..."
        debounce={700}
        onType={onSearch}
        defaultValue={search}
      />
    </div>
  );
};

export default ProjectFilters;
