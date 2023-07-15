import React, { FC } from "react";
import { Description, Heading } from "../../../components";
import { CaseStudiesProps } from "../../../types/caseStudies";

const CaseStudies: FC<CaseStudiesProps> = ({ title, content }) => {
  return (
    <div>
      <Heading {...title} />
      <Description>{content}</Description>
    </div>
  );
};

export default CaseStudies;
