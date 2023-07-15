import React, { FC } from "react";
import { LayoutItem, LayoutWrapper } from "../../../components";
import { TextLayout, LinksLayout } from "../../../modules";
import { ServicesProps } from "../../../types/services";
import stylesVariables from "../../../constants/styles";

const Services: FC<ServicesProps> = ({ left, right }) => {
  return (
    <LayoutWrapper bg={stylesVariables.color.grey10}>
      <LayoutItem>
        <TextLayout {...left} />
      </LayoutItem>
      <LayoutItem>
        <LinksLayout {...right} />
      </LayoutItem>
    </LayoutWrapper>
  );
};

export default Services;
