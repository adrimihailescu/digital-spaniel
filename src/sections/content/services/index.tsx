import React, { FC } from "react";
import { LayoutItem, LayoutWrapper } from "../../../components";
import { TextLayout, LinksLayout } from "../../../modules";
import { ServicesProps } from "../../../types/services";
import stylesVariables from "../../../constants/styles";

const Services: FC<ServicesProps> = ({
  left: { variant: variantLeft, ...restLeft },
  right: { variant: variantRight, ...restRight },
}) => {
  return (
    <LayoutWrapper bg={stylesVariables.color.grey10} id="services">
      <LayoutItem variant={variantLeft}>
        <TextLayout {...restLeft} />
      </LayoutItem>
      <LayoutItem variant={variantRight}>
        <LinksLayout {...restRight} />
      </LayoutItem>
    </LayoutWrapper>
  );
};

export default Services;
