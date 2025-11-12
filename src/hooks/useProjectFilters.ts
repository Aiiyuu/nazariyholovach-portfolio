import { useCallback, useMemo } from "react";
import { Category, Tag } from "@/types/project";
import { useSearchParams } from "react-router-dom";
import { ProjectFilters } from "@/components/work/ProjectFilters/types";

export const useProjectFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? Category.ALL;
  const tags = useMemo(() => {
    const t = searchParams.get("tags")?.split(",").filter(Boolean);
    return t && t.length ? t : [Tag.ALL];
  }, [searchParams]);

  const setFilters = useCallback(
    (filters: ProjectFilters) => {
      setSearchParams((params) => {
        if (filters.search !== undefined) {
          const trimmed = filters.search.trim();
          if (trimmed) params.set("search", trimmed);
          else params.delete("search");
        }

        if (filters.category !== undefined) {
          if (filters.category === Category.ALL) params.delete("category");
          else params.set("category", filters.category);
        }

        if (filters.tags !== undefined) {
          if (filters.tags.includes(Tag.ALL)) params.delete("tags");
          else params.set("tags", filters.tags.join(","));
        }

        return params;
      });
    },
    [setSearchParams]
  );

  return { search, category, tags, setFilters };
};
