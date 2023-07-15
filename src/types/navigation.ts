import { LinkProps } from "./link";

export interface NavBarProps {
  logo: {
    alt: string;
    src: string;
    href: string;
  };
  links: LinkProps[];
}
