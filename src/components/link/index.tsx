import React, { FC } from "react";
import LinkItem from "./styles";

import { LinkProps } from "../../types/link";

const Link: FC<LinkProps> = ({ variant, text, url, navLink, active }) => (
  <LinkItem variant={variant} href={url} navLink={navLink} active={active}>
    {text}
  </LinkItem>
);

export default Link;
