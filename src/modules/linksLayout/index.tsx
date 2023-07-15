import React from "react";
import { LinksLayoutProps } from "../../types/linksLayout";
import { LinksLayoutComponent } from "./styles";
import { Heading, LinkList } from "../../components";

const LinksLayout = ({ data }: LinksLayoutProps) => {
  return (
    <LinksLayoutComponent>
      {Object.keys(data).map((index) => {
        return (
          <li key={index}>
            <Heading {...data[index as any].title} />
            <LinkList links={data[index as any]?.items} />
          </li>
        );
      })}
    </LinksLayoutComponent>
  );
};

export default LinksLayout;
