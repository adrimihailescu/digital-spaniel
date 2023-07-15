import React, { FC } from "react";
import { Heading, Link } from "../../../components";
import { ProjectsProps } from "../../../types/projects";

const Projects: FC<ProjectsProps> = ({ title, cta, categories }) => {
  return (
    <>
      <Heading {...title} />
      <Link {...cta} />
    </>
  );
};

export default Projects;
