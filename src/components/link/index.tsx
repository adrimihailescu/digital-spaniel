import React, { FC } from "react";
import LinkItem from "./styles";

import { LinkProps } from "../../types/link";

const Link: FC<LinkProps> = ({ variant, text, url }) => (
  <LinkItem variant={variant} href={url}>
    {text}
  </LinkItem>
);

export default Link;
