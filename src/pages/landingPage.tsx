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

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero data={websiteData.content.hero} />
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
