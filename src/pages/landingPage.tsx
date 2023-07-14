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
      <Hero data={websiteData.content.hero} />
      <Card />
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
