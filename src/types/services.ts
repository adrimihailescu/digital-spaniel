import { LinkLayoutItem } from "./linksLayout";
import { HeadingProps } from "./heading";
import { LinkProps } from "./link";
import { LayoutItemVariant } from "./layout";

export interface ServicesProps {
  left: {
    variant: LayoutItemVariant;
    title: HeadingProps;
    content: string;
    cta: LinkProps;
  };
  right: {
    variant: LayoutItemVariant;
    data: LinkLayoutItem[];
  };
}
