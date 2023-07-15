import React, { FC } from "react";
import { Heading, Link } from "../../../components";
import { AboutProps } from "../../../types/about";

const About: FC<AboutProps> = ({ title, callToActions, images }) => {
  return (
    <>
      <Heading {...title} />
      <ul>
        {callToActions.map((cta, index) => (
          <li key={index}>
            <Link {...cta} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default About;
