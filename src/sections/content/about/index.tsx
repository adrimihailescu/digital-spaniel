import React, { FC } from "react";
import { Heading, Link } from "../../../components";
import { AboutProps } from "../../../types/about";
import { AboutSectionComponent, MasonryLayout } from "./styles";
import { Image } from "../../../components";

const About: FC<AboutProps> = ({ title, callToActions, images }) => {
  return (
    <AboutSectionComponent id="about">
      <div className="title">
        <Heading {...title} />
      </div>
      <MasonryLayout>
        {images.map((image, index) => (
          <Image
            key={index}
            alt={image.alt}
            mobile={image.mobile}
            nonMobile={image.nonMobile}
          />
        ))}
        <ul className="cta-wrapper">
          {callToActions.map((cta, index) => (
            <li key={index} className="cta">
              <Link {...cta} />
            </li>
          ))}
        </ul>
      </MasonryLayout>
    </AboutSectionComponent>
  );
};

export default About;
