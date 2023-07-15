import { HeadingProps } from "./heading";
import { ImageProps } from "./image";
import { LinkProps } from "./link";

export interface ItemsProps {
  title: string;
  content: string;
  cta: LinkProps;
  image: ImageProps;
}

export interface CaseStudiesProps {
  title: HeadingProps;
  content: string;
  items: ItemsProps[];
}
