import React from "react";

import {
  Hero,
  About,
  CaseStudies,
  Projects,
  Services,
  Testimonials,
  NavBar,
  Footer,
} from "../sections";
import { ContentTypes } from "../types/websiteData";

// import Card from "../components/card";

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
      <NavBar />
      <Hero left={hero.left} right={hero.right} />
      <Services left={services.left} right={services.right} />
      <Projects {...projects} />
      <CaseStudies {...caseStudies} />
      {/* <Card
        {...{
          content:
            "Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!",
          image: {
            alt: "A picture of a man with beard ",
            mobile: "/assets/testimonial_face03.jpg",
            nonMobile: "/assets/testimonial_face03@2x.jpg",
          },
          name: "Paul Simon",
          role: "Founder, MegaCorp",
        }}
      /> */}
      <About {...about} />
      <Testimonials {...testimonials} />
      <Footer />
    </>
  );
};

export default LandingPage;
