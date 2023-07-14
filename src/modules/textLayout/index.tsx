import React from "react";
import { Heading, Description, Link, LayoutItem } from "../../components";

const TextLayout = ({ quote, title, content, cta }: any) => {
  return (
    <LayoutItem>
      <Heading {...quote} />
      <Heading {...title} />
      <Description>{content}</Description>
      <Link {...cta} />
    </LayoutItem>
  );
};

export default TextLayout;
