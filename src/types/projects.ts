import { HeadingProps } from "./heading";
import { ImageProps } from "./image";
import { LinkProps } from "./link";

export enum ProjectCategories {
  all = "all",
  branding = "branding",
  webDesign = "web-design",
  digitalMarketing = "digital-marketing",
}

export interface ProjectsCategoryTabsProps {
  tabUnderlineLeft: number;
  tabUnderlineWidth: number;
  animationSpeed: number;
}

export interface CategoriesProps {
  label: string;
  value?: string;
}

export interface ProjectProps {
  title: string;
  content: string;
  cta: {
    label: string;
    url: string;
  };
  category: ProjectCategories;
  image: ImageProps;
}

export interface ProjectsProps {
  title: HeadingProps;
  categories: CategoriesProps[];
  items: ProjectProps[];
  cta: LinkProps;
}
