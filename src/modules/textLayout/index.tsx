import React, { FC } from "react";
import { Heading, Description, Link, LayoutItem } from "../../components";
import { TextLayoutProps } from "../../types/textLayout";

const TextLayout: FC<TextLayoutProps> = ({ quote, title, content, cta }) => {
  return (
    <LayoutItem>
      {quote && <Heading {...quote} />}
      <Heading {...title} />
      {content && <Description>{content}</Description>}
      <Link {...cta} />
    </LayoutItem>
  );
};

export default TextLayout;
