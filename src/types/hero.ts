import { HeadingProps } from "./heading";
import { LinkProps } from "./link";

export interface HeroProps {
  left: {
    quote: HeadingProps;
    title: HeadingProps;
    content: string;
    cta: LinkProps;
  };
  right: any;
}
