import React from "react";
import ImageComponent from "./style";

const Image = () => {
  return (
    <ImageComponent
      srcSet="/assets/Spaniel01_gradient.jpg 480w, /assets/Spaniel01_gradient@2x.jpg 800w"
      sizes="(max-width: 600px) 480px,
         800px"
      src="/assets/Spaniel01_gradient@2x.jpg"
      alt="Sample pic"
    />
  );
};

export default Image;
