import React, { FC } from "react";
import classNames from "classnames";
import LinkItem from "./styles";

import { LinkProps } from "../../types/link";

const Link: FC<LinkProps> = ({ variant, text, url, navLink, active }) => (
  <LinkItem
    variant={variant}
    href={url}
    className={classNames({
      isActive: active,
      underlinedNav: navLink,
      underlinedCta: !navLink,
    })}
  >
    {text}
  </LinkItem>
);

export default Link;
