import React, { FC } from "react";
import TextLayout from "../../../modules/textLayout";
import { LayoutWrapper, LayoutItem, Image } from "../../../components";
import { HeroProps } from "../../../types/hero";

const Hero: FC<HeroProps> = ({
  left: { variant: variantLeft, ...restLeft },
  right: { variant: variantRight, heroImage },
}) => {
  return (
    <LayoutWrapper>
      <LayoutItem variant={variantLeft}>
        <TextLayout {...restLeft} />
      </LayoutItem>
      <LayoutItem variant={variantRight}>
        <Image {...heroImage} />
      </LayoutItem>
    </LayoutWrapper>
  );
};

export default Hero;
