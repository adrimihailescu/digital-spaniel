import { LinksLayoutProps } from "./linksLayout";
import { HeadingProps } from "./heading";
import { LinkProps } from "./link";

export interface ServicesProps {
  left: {
    title: HeadingProps;
    content: string;
    cta: LinkProps;
  };
  right: LinksLayoutProps;
}
