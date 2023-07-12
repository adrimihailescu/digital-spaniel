import React from "react";
import { Heading2, Description, CTA, LayoutItem } from "../../components";

const TextLayout = ({ title, content, cta }: any) => {
  return (
    <LayoutItem>
      <Heading2 {...title} />
      <Description>{content}</Description>
      <CTA {...cta} />
    </LayoutItem>
  );
};

export default TextLayout;
