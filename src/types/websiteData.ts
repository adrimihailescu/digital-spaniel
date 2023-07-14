import { HeroProps } from "./hero";

interface Navigation {
  navBar: any;
  footer: any;
}
interface Content {
  hero: HeroProps;
  services: any;
  projects: any;
  caseStudies: any;
  about: any;
  testimonials: any;
}

export interface WebsiteData {
  navigation: Navigation;
  content: Content;
}
