import { HeadingVariant } from "../types/heading";
import { LayoutItemVariant } from "../types/layout";
import { LinkVariant } from "../types/link";
import { WebsiteData } from "../types/websiteData";
import { ProjectCategories } from "../types/projects";

const data: WebsiteData = {
  navigation: {
    navBar: {
      logo: {
        alt: "Logo image with a dog",
        src: "assets/logo.jpg",
        href: "#home",
      },
      links: [
        {
          text: "Services",
          url: "#services",
          variant: LinkVariant.underlined,
        },
        {
          text: "Work",
          url: "#work",
          variant: LinkVariant.underlined,
        },
        {
          text: "About",
          url: "#about",
          variant: LinkVariant.underlined,
        },
        {
          text: "Blog",
          url: "#blog",
          variant: LinkVariant.underlined,
        },
        {
          text: "Contact",
          url: "#contact",
          variant: LinkVariant.underlined,
        },
      ],
    },
    footer: {
      left: {
        variant: LayoutItemVariant.textLayoutFooter,
        title: {
          content: {
            first: "We’re a brands",
            second: "best friend",
          },
          variant: HeadingVariant.h2,
        },
        cta: {
          text: "Let’s talk",
          url: "/contact",
          variant: LinkVariant.underlined,
        },
      },
      right: {
        variant: LayoutItemVariant.linksLayoutFooter,
        data: [
          {
            title: {
              content: {
                text: "Explore",
              },
              variant: HeadingVariant.h3,
            },
            items: [
              {
                text: "Services",
                url: "/services",
                variant: LinkVariant.simple,
              },
              {
                text: "Work",
                url: "/work",
                variant: LinkVariant.simple,
              },
              {
                text: "About",
                url: "/about",
                variant: LinkVariant.simple,
              },
              {
                text: "Blog",
                url: "/blog",
                variant: LinkVariant.simple,
              },
              {
                text: "Careers",
                url: "/careers",
                variant: LinkVariant.simple,
              },
            ],
          },
          {
            title: {
              content: {
                text: "Services",
              },
              variant: HeadingVariant.h3,
            },
            items: [
              {
                text: "Brand",
                url: "/brand",
                variant: LinkVariant.simple,
              },
              {
                text: "Development",
                url: "/development",
                variant: LinkVariant.simple,
              },
              {
                text: "Marketing",
                url: "/marketing",
                variant: LinkVariant.simple,
              },
            ],
          },
          {
            title: {
              content: {
                text: "Questions?",
              },
              variant: HeadingVariant.h3,
            },
            items: [
              {
                text: "Call us",
                url: "0121 345 678",
                variant: LinkVariant.simple,
              },
              {
                text: "Email Us",
                url: "info@digitalspaniel.co.uk",
                variant: LinkVariant.simple,
              },
            ],
          },
        ],
      },
    },
  },
  content: {
    hero: {
      left: {
        variant: LayoutItemVariant.textLayout,
        quote: {
          content: {
            text: "BRAND, DEV, ECOM, MARKETING",
          },
          variant: HeadingVariant.h1,
        },
        title: {
          content: {
            first: "We unleash",
            second: "business potential",
          },
          variant: HeadingVariant.h2,
        },
        content:
          "We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.",
        cta: {
          text: "Let’s talk",
          url: "/contact",
          variant: LinkVariant.underlined,
        },
      },
      right: {
        variant: LayoutItemVariant.heroImageLayout,
        heroImage: {
          alt: "A Spaniel dog",
          mobile: "/assets/Spaniel01_gradient.jpg",
          nonMobile: "/assets/Spaniel01_gradient@2x.jpg",
        },
      },
    },
    services: {
      left: {
        variant: LayoutItemVariant.textLayout,
        title: {
          content: {
            first: "What are",
            second: "we capable of",
          },
          variant: HeadingVariant.h2,
        },
        content:
          "By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.",
        cta: {
          text: "Our process",
          url: "/contact",
          variant: LinkVariant.underlined,
        },
      },
      right: {
        variant: LayoutItemVariant.linksLayout,
        data: [
          {
            title: {
              content: {
                text: "Brand",
              },
              variant: HeadingVariant.h3,
            },
            items: [
              {
                text: "Brand Strategy",
                url: "/brand",
                variant: LinkVariant.simple,
              },
              {
                text: "Logo & Name",
                url: "/brand",
                variant: LinkVariant.simple,
              },
              {
                text: "Identity & Collateral",
                url: "/identity",
                variant: LinkVariant.simple,
              },
            ],
          },
          {
            title: {
              content: {
                text: "Development",
              },
              variant: HeadingVariant.h3,
            },
            items: [
              {
                text: "eCommerce",
                url: "/brand",
                variant: LinkVariant.simple,
              },
              {
                text: "Web Development",
                url: "/development",
                variant: LinkVariant.simple,
              },
              {
                text: "Mobile Apps",
                url: "/mobile",
                variant: LinkVariant.simple,
              },
            ],
          },
          {
            title: {
              content: {
                text: "Marketing",
              },
              variant: HeadingVariant.h3,
            },
            items: [
              {
                text: "Digital",
                url: "/digital",
                variant: LinkVariant.simple,
              },
              {
                text: "Market Research",
                url: "/market",
                variant: LinkVariant.simple,
              },
            ],
          },
        ],
      },
    },
    projects: {
      title: {
        content: {
          first: "Some of our",
          second: "recent projects",
        },
        variant: HeadingVariant.h2,
      },
      categories: [
        {
          label: "All",
          value: ProjectCategories.all,
        },
        {
          label: "Branding",
          value: ProjectCategories.branding,
        },
        {
          label: "Web Design",
          value: ProjectCategories.webDesign,
        },
        {
          label: "Digital Marketing",
          value: ProjectCategories.digitalMarketing,
        },
      ],
      cta: {
        text: "See all works",
        url: "/contact",
        variant: LinkVariant.underlined,
      },
      items: [
        {
          title: "Make ideas happen",
          content:
            "A local paper with big ideas needed A sharp new brand to inspire readers.",
          cta: {
            label: "Full project",
            url: "/ideas",
          },
          category: ProjectCategories.branding,
          image: {
            alt: "A boot",
            mobile: "/assets/whellies01.jpg",
            nonMobile: "/assets/whellies01@2x.jpg",
          },
        },
        {
          title: "Make ideas happen",
          content:
            "A local paper with big ideas needed A sharp new brand to inspire readers.",
          cta: {
            label: "Full project",
            url: "/ideas",
          },
          category: ProjectCategories.branding,
          image: {
            alt: "Sardine cans",
            mobile: "/assets/whellies01.jpg",
            nonMobile: "/assets/whellies01@2x.jpg",
          },
        },
        {
          title: "Make ideas happen",
          content:
            "A local paper with big ideas needed A sharp new brand to inspire readers.",
          cta: {
            label: "Full project",
            url: "/ideas",
          },
          category: ProjectCategories.branding,
          image: {
            alt: "Smiley faces",
            mobile: "/assets/newspaper.jpg",
            nonMobile: "/assets/newspaper@2x.jpg",
          },
        },
        {
          title: "Make ideas happen",
          content:
            "A local paper with big ideas needed A sharp new brand to inspire readers.",
          cta: {
            label: "Full project",
            url: "/ideas",
          },
          category: ProjectCategories.webDesign,
          image: {
            alt: "a dashboard",
            mobile: "/assets/dashboard01.jpg",
            nonMobile: "/assets/dashboard01@2x.jpg",
          },
        },
        {
          title: "Make ideas happen",
          content:
            "A local paper with big ideas needed A sharp new brand to inspire readers.",
          cta: {
            label: "Full project",
            url: "/ideas",
          },
          category: ProjectCategories.webDesign,
          image: {
            alt: "a paper",
            mobile: "/assets/newspaper02.jpg",
            nonMobile: "/assets/newspaper02@2x.jpg",
          },
        },
        {
          title: "Make ideas happen",
          content:
            "A local paper with big ideas needed A sharp new brand to inspire readers.",
          cta: {
            label: "Full project",
            url: "/ideas",
          },
          category: ProjectCategories.digitalMarketing,
          image: {
            alt: "a paper",
            mobile: "/assets/newspaper02.jpg",
            nonMobile: "/assets/newspaper02@2x.jpg",
          },
        },
        {
          title: "Make ideas happen",
          content:
            "A local paper with big ideas needed A sharp new brand to inspire readers.",
          cta: {
            label: "Full project",
            url: "/ideas",
          },
          category: ProjectCategories.digitalMarketing,
          image: {
            alt: "a paper",
            mobile: "/assets/newspaper02.jpg",
            nonMobile: "/assets/newspaper02@2x.jpg",
          },
        },
        {
          title: "Make ideas happen",
          content:
            "A local paper with big ideas needed A sharp new brand to inspire readers.",
          cta: {
            label: "Full project",
            url: "/ideas",
          },
          category: ProjectCategories.webDesign,
          image: {
            alt: "a paper",
            mobile: "/assets/newspaper02.jpg",
            nonMobile: "/assets/newspaper02@2x.jpg",
          },
        },
      ],
    },
    caseStudies: {
      title: { content: { first: "Case studies" }, variant: HeadingVariant.h2 },
      content:
        "Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business.",
      items: [
        {
          title: "Project title 1 here",
          content:
            "Short project description goes here To explain what the project is all about.",
          cta: {
            text: "Read more",
            url: "/ideas",
            variant: LinkVariant.underlined,
          },
          image: {
            alt: "a dashboard",
            mobile: "/assets/dashboard01.jpg",
            nonMobile: "/assets/dashboard01@2x.jpg",
          },
        },
        {
          title: "Project title 2 here",
          content:
            "Short project description goes here To explain what the project is all about.",
          cta: {
            text: "Read more",
            url: "/ideas",
            variant: LinkVariant.underlined,
          },
          image: {
            alt: "a dashboard",
            mobile: "/assets/dashboard01.jpg",
            nonMobile: "/assets/dashboard01@2x.jpg",
          },
        },
        {
          title: "Project title 3 here",
          content:
            "Short project description goes here To explain what the project is all about.",
          cta: {
            text: "Read more",
            url: "/ideas",
            variant: LinkVariant.underlined,
          },
          image: {
            alt: "a dashboard",
            mobile: "/assets/dashboard01.jpg",
            nonMobile: "/assets/dashboard01@2x.jpg",
          },
        },
      ],
    },
    about: {
      title: {
        content: {
          first: "What are",
          second: "we all about",
        },
        variant: HeadingVariant.h2,
      },
      callToActions: [
        {
          text: "About",
          url: "/about",
          variant: LinkVariant.underlined,
        },
        {
          text: "Careers",
          url: "/careers",
          variant: LinkVariant.underlined,
        },
      ],
      images: [
        {
          alt: "People sitting at a table",
          mobile: "/assets/office01.jpg",
          nonMobile: "/assets/office01@2x.jpg",
        },
        {
          alt: "People sitting at a table",
          mobile: "/assets/office03.jpg",
          nonMobile: "/assets/office03@2x.jpg",
        },
        {
          alt: "A picture of a plant, a desk and a wall ",
          mobile: "/assets/office04.jpg",
          nonMobile: "/assets/office04@2x.jpg",
        },
        {
          alt: "A hallway in an office",
          mobile: "/assets/office02.jpg",
          nonMobile: "/assets/office02@2x.jpg",
        },
      ],
    },
    testimonials: {
      title: {
        content: {
          first: "Kind words",
          second: "from our clients",
        },
        variant: HeadingVariant.h2,
      },
      url: "/assets/testimonials.json",
    },
  },
};

export default data;
