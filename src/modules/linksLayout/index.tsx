import React, { FC } from "react";
import { LinksLayoutProps } from "../../types/linksLayout";
import { LinksLayoutComponent } from "./styles";
import { Heading, LinkList } from "../../components";

const LinksLayout: FC<LinksLayoutProps> = ({ data }) => {
  return (
    <LinksLayoutComponent>
      {Object.keys(data).map((_, index) => {
        return (
          <li key={index}>
            <Heading {...data[index].title} />
            <LinkList links={data[index]?.items} />
          </li>
        );
      })}
    </LinksLayoutComponent>
  );
};

export default LinksLayout;
