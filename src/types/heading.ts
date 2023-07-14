export interface HeadingContentTypeA {
  first: string;
  second: string;
}

export interface HeadingContentTypeB {
  text: string;
}

export enum HeadingVariant {
  h1,
  h2,
  h3,
}

export interface HeadingProps {
  variant: HeadingVariant;
  content: HeadingContentTypeA | HeadingContentTypeB;
}
