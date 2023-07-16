import React, { FC } from "react";
import { Heading, Link } from "../../../components";
import { ProjectsProps } from "../../../types/projects";

const Projects: FC<ProjectsProps> = ({ title, cta, categories }) => {
  return (
    <section>
      <Heading {...title} />
      <Link {...cta} />
    </section>
  );
};

export default Projects;
