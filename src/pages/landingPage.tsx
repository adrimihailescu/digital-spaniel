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

import websiteData from "../fakeCMS/websiteData";
import Card from "../components/card";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero
        left={websiteData.content.hero.left}
        right={websiteData.content.hero.right}
      />
      <Card
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
      />
      <About />
      <CaseStudies />
      <Projects />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;
