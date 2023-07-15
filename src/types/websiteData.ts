import { AboutProps } from "./about";
import { CaseStudiesProps } from "./caseStudies";
import { FooterProps } from "./footer";
import { HeroProps } from "./hero";
import { NavBarProps } from "./navigation";
import { ProjectsProps } from "./projects";
import { ServicesProps } from "./services";
import { TestimonialsProps } from "./testimonials";

interface Navigation {
  navBar: NavBarProps;
  footer: FooterProps;
}

export interface ContentTypes {
  hero: HeroProps;
  services: ServicesProps;
  projects: ProjectsProps;
  caseStudies: CaseStudiesProps;
  about: AboutProps;
  testimonials: TestimonialsProps;
}

export interface WebsiteData {
  navigation: Navigation;
  content: ContentTypes;
}
