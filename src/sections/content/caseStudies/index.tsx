import React, { FC } from "react";
import { Description, Heading } from "../../../components";
import { CaseStudiesProps } from "../../../types/caseStudies";

const CaseStudies: FC<CaseStudiesProps> = ({ title, content }) => {
  return (
    <section id="blog">
      <Heading {...title} />
      <Description>{content}</Description>
    </section>
  );
};

export default CaseStudies;
