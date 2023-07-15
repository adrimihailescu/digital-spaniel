import { HeadingProps } from "./heading";
import { ImageProps } from "./image";
import { LinkProps } from "./link";

export interface AboutProps {
  title: HeadingProps;
  callToActions: LinkProps[];
  images: ImageProps[];
}
