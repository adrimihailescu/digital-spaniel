import { AboutProps } from "./about";
import { CaseStudiesProps } from "./caseStudies";
import { HeroProps } from "./hero";
import { ProjectsProps } from "./projects";

interface Navigation {
  navBar: any;
  footer: any;
}

export interface ContentTypes {
  hero: HeroProps;
  services: any;
  projects: ProjectsProps;
  caseStudies: CaseStudiesProps;
  about: AboutProps;
  testimonials: any;
}

export interface WebsiteData {
  navigation: Navigation;
  content: ContentTypes;
}
