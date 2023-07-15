export enum LinkVariant {
  underlined,
  simple,
}

export interface LinkProps {
  variant: LinkVariant;
  text: string;
  url: string;
  navLink?: boolean;
  active?: boolean;
}

export interface LinkStyleProps {
  variant: LinkVariant;
  className?: string | null;
}
