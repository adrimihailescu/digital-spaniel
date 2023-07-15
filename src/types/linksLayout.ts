import { HeadingProps } from "./heading";
import { LinkProps } from "./link";

export interface LinkLayoutItem {
  title: HeadingProps;
  items: LinkProps[];
}

export interface LinksLayoutProps {
  data: LinkLayoutItem[];
}
