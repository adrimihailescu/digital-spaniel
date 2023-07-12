import React from "react";
import TextLayout from "../../../modules/textLayout";
import { LayoutWrapper, LayoutItem, Image } from "../../../components";

const Hero = ({ data }: any) => {
  return (
    <LayoutWrapper>
      <LayoutItem>
        <TextLayout {...data.left} />
      </LayoutItem>
      <LayoutItem>
        <Image />
      </LayoutItem>
    </LayoutWrapper>
  );
};

export default Hero;
