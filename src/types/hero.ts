import { HeadingProps } from "./heading";
import { ImageProps } from "./image";
import { LayoutItemVariant } from "./layout";
import { LinkProps } from "./link";

export interface HeroProps {
  left: {
    variant: LayoutItemVariant;
    quote: HeadingProps;
    title: HeadingProps;
    content: string;
    cta: LinkProps;
  };
  right: {
    variant: LayoutItemVariant;
    heroImage: ImageProps;
  };
}
