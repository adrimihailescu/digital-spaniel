export enum LinkVariant {
  underlined,
  simple,
}

export interface LinkProps {
  variant: LinkVariant;
  text: string;
  url: string;
}

export interface LinkStyleProps {
  variant: LinkVariant;
}
