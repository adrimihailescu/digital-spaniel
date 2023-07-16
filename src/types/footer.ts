import { HeadingProps } from "./heading";
import { LayoutItemVariant } from "./layout";
import { LinkProps } from "./link";
import { LinkLayoutItem } from "./linksLayout";

export interface FooterProps {
  left: {
    variant: LayoutItemVariant;
    title: HeadingProps;
    cta: LinkProps;
  };
  right: {
    variant: LayoutItemVariant;
    data: LinkLayoutItem[];
  };
}
