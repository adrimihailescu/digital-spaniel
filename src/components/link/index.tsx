import React, { FC } from "react";
import classNames from "classnames";
import LinkItem from "./styles";

import { LinkProps } from "../../types/link";

const Link: FC<LinkProps> = ({ variant, text, url, navLink, className }) => (
  <LinkItem
    variant={variant}
    href={url}
    className={`${className} ${classNames({
      underlinedNav: navLink,
      underlinedCta: !navLink,
    })}`}
  >
    {text}
  </LinkItem>
);

export default Link;
