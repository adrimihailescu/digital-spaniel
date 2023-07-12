import React from "react";
import CTAComponent from "./style";

const CTA = ({ text, url }: any) => {
  return <CTAComponent href={url}>{text}</CTAComponent>;
};

export default CTA;
