import React, { FC } from "react";
import TextLayout from "../../../modules/textLayout";
import { LayoutWrapper, LayoutItem, Image } from "../../../components";
import { HeroProps } from "../../../types/hero";

const Hero: FC<HeroProps> = ({ left, right }) => {
  return (
    <LayoutWrapper>
      <LayoutItem>
        <TextLayout {...left} />
      </LayoutItem>
      <LayoutItem>
        <Image {...right.heroImage} />
      </LayoutItem>
    </LayoutWrapper>
  );
};

export default Hero;
