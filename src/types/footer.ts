import { HeadingProps } from "./heading";
import { LinkProps } from "./link";
import { LinksLayoutProps } from "./linksLayout";

export interface FooterProps {
  left: {
    title: HeadingProps;
    cta: LinkProps;
  };
  right: LinksLayoutProps;
}
