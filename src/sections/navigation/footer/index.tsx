import React, { FC } from "react";
import { FooterProps } from "../../../types/footer";
import { LayoutItem, LayoutWrapper } from "../../../components";
import { LinksLayout, TextLayout } from "../../../modules";
import stylesVariables from "../../../constants/styles";

const Footer: FC<FooterProps> = ({ left, right }) => {
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

export default Footer;
