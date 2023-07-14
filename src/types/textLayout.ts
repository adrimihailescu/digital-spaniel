import { HeadingProps } from "./heading";
import { LinkProps } from "./link";

export interface TextLayoutProps {
  quote?: HeadingProps;
  content?: string;
  title: HeadingProps;
  cta: LinkProps;
}
