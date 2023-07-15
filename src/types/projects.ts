import { HeadingProps } from "./heading";
import { LinkProps } from "./link";

export interface CategoriesProps {
  id: number;
  label: string;
  value?: string;
}

export interface ProjectsProps {
  title: HeadingProps;
  categories: CategoriesProps[];
  items: any;
  cta: LinkProps;
}
