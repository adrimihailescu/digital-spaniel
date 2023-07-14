import React, { FC } from "react";
import ImageComponent from "./style";
import { ImageProps } from "../../types/image";

const Image: FC<ImageProps> = ({ alt, mobile, nonMobile }) => {
  return (
    <ImageComponent
      srcSet={`${mobile} 480w, ${nonMobile} 800w`}
      sizes="(max-width: 600px) 480px,
         800px"
      src={nonMobile}
      alt={alt}
    />
  );
};

export default Image;
