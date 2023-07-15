import React from "react";
import { LinkListComponent } from "./styles";
import Link from "../link";

const LinkList = ({ links }: any) => {
  return (
    <LinkListComponent>
      {Object.keys(links).map((index) => (
        <li key={index}>
          <Link {...links[index]} />
        </li>
      ))}
    </LinkListComponent>
  );
};

export default LinkList;
