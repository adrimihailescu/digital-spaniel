import React from "react";
import {
  Heading2,
  Description,
  CTA,
  LayoutItem,
  Heading1,
} from "../../components";

const TextLayout = ({ quote, title, content, cta }: any) => {
  return (
    <LayoutItem>
      <Heading1>{quote}</Heading1>
      <Heading2 {...title} />
      <Description>{content}</Description>
      <CTA {...cta} />
    </LayoutItem>
  );
};

export default TextLayout;
