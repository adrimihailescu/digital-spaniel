import React, { FC } from "react";
import { Heading1Styles, Heading2Style, Heading3Styles } from "./style";
import {
  HeadingContentTypeA,
  HeadingContentTypeB,
  HeadingProps,
  HeadingVariant,
} from "../../types/heading";

const Heading: FC<HeadingProps> = ({ variant, content }) => {
  let text;
  switch (variant) {
    case HeadingVariant.h1:
      ({ text } = content as HeadingContentTypeB);
      return <Heading1Styles>{text}</Heading1Styles>;

    case HeadingVariant.h2:
      const { first, second } = content as HeadingContentTypeA;

      return (
        <Heading2Style>
          {first}
          <br />
          <span>{second}</span>
        </Heading2Style>
      );

    default:
    case HeadingVariant.h3:
      ({ text } = content as HeadingContentTypeB);
      return <Heading3Styles>{text}</Heading3Styles>;
  }
};

export default Heading;
