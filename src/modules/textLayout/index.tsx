import React, { FC } from "react";
import { Heading, Description, Link } from "../../components";
import { TextLayoutProps } from "../../types/textLayout";

const TextLayout: FC<TextLayoutProps> = ({ quote, title, content, cta }) => {
  return (
    <>
      {quote && <Heading {...quote} />}
      <Heading {...title} />
      {content && <Description>{content}</Description>}
      <Link {...cta} />
    </>
  );
};

export default TextLayout;
