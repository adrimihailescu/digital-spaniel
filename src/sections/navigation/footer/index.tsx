import React, { FC } from "react";
import { FooterProps } from "../../../types/footer";
import { LayoutItem, LayoutWrapper } from "../../../components";
import { LinksLayout, TextLayout } from "../../../modules";
import { FooterComponent, CopyrightAndSocialComponent } from "./styles";

const Footer: FC<FooterProps> = ({
  left: { variant: variantLeft, ...restLeft },
  right: { variant: variantRight, ...restRight },
}) => {
  return (
    <FooterComponent>
      <LayoutWrapper id="contact">
        <LayoutItem variant={variantLeft}>
          <TextLayout {...restLeft} />
        </LayoutItem>
        <LayoutItem variant={variantRight}>
          <LinksLayout {...restRight} />
        </LayoutItem>
      </LayoutWrapper>
      <CopyrightAndSocialComponent>
        copyright goes here + links with images
      </CopyrightAndSocialComponent>
    </FooterComponent>
  );
};

export default Footer;
