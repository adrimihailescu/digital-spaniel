import { HeadingProps } from "./heading";
import { LinkProps } from "./link";

export interface FooterProps {
  left: {
    title: HeadingProps;
    cta: LinkProps;
  };
  right: any;
}
