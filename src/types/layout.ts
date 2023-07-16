export enum LayoutItemVariant {
  textLayout = "text-layout",
  textLayoutFooter = "text-layout-footer",
  linksLayout = "links-layout",
  linksLayoutFooter = "links-layout-footer",
  heroImageLayout = "hero-layout",
}

export interface ItemProps {
  children: React.ReactNode;
  variant: LayoutItemVariant;
}

export interface LayoutItemStyleProps {
  className: LayoutItemVariant;
}

export interface WrapperProps {
  children: React.ReactNode;
  bg?: string;
  heroVariant?: boolean;
  id: string;
}
