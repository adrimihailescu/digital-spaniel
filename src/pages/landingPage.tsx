import React from "react";

import {
  Hero,
  About,
  CaseStudies,
  Projects,
  Services,
  Testimonials,
} from "../sections";
import { ContentTypes } from "../types/websiteData";

const LandingPage = ({
  hero,
  services,
  about,
  caseStudies,
  projects,
  testimonials,
}: ContentTypes) => {
  return (
    <>
      <Hero left={hero.left} right={hero.right} />
      <Services {...services} />
      <Projects {...projects} />
      <CaseStudies {...caseStudies} />
      <About {...about} />
      <Testimonials {...testimonials} />
    </>
  );
};

export default LandingPage;
