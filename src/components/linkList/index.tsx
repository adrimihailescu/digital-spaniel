import React, { FC } from "react";
import { LinkListComponent } from "./styles";
import Link from "../link";
import { LinkListProps } from "../../types/link";

const LinkList: FC<LinkListProps> = ({ links }) => {
  return (
    <LinkListComponent>
      {Object.keys(links).map((_, index) => (
        <li key={index}>
          <Link {...links[index]} />
        </li>
      ))}
    </LinkListComponent>
  );
};

export default LinkList;
