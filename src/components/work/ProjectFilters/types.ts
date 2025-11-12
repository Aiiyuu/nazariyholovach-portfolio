import { Category, Tag } from "@/types/project";

export type ProjectFilters = {
  category?: Category;
  tags?: Tag[];
  search?: string;
};
