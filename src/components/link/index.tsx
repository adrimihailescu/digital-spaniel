import React from "react";
import LinkItem from "./styles";

import { LinkProps } from "../../types/link";

const Link = ({ variant, text, url }: LinkProps) => (
  <LinkItem variant={variant} href={url}>
    {text}
  </LinkItem>
);

export default Link;
