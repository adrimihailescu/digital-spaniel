import { HeadingProps } from "./heading";
import { ImageProps } from "./image";
import { LinkProps } from "./link";

export interface HeroProps {
  left: {
    quote: HeadingProps;
    title: HeadingProps;
    content: string;
    cta: LinkProps;
  };
  right: { heroImage: ImageProps };
}
