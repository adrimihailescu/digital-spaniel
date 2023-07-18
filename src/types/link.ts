export enum LinkVariant {
  underlined,
  simple,
}

export interface LinkProps {
  variant: LinkVariant;
  text: string;
  url: string;
  navLink?: boolean;
  className?: string;
}

export interface LinkStyleProps {
  variant: LinkVariant;
  className?: string | null;
}

export interface LinkListProps {
  links: { [index: number]: LinkProps };
}
