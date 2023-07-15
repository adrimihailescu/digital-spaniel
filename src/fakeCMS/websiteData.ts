import { HeadingVariant } from "../types/heading";
import { LinkVariant } from "../types/link";
import { WebsiteData } from "../types/websiteData";

const data: WebsiteData = {
  navigation: {
    navBar: [
      {
        logo: {
          title: "Logo",
          url: "/home",
        },
      },
      {
        Services: {
          title: "Services",
          url: "/services",
        },
      },
      {
        work: {
          title: "Work",
          url: "/work",
        },
      },
      {
        about: {
          title: "About",
          url: "/about",
        },
      },
      {
        blog: {
          title: "Blog",
          url: "/blog",
        },
      },
      {
        contact: {
          title: "Contact",
          url: "/contact",
        },
      },
    ],
    footer: {
      left: {
        title: {
          first: "We’re a brands",
          second: "best friend",
        },
        cta: {
          text: "Let’s talk",
          url: "/contact",
        },
        right: [
          {
            title: "Explore",
            items: [
              {
                title: "Services",
                url: "/services",
              },
              {
                title: "Work",
                url: "/work",
              },
              {
                title: "About",
                url: "/about",
              },
              {
                title: "Blog",
                url: "/blog",
              },
              {
                title: "Careers",
                url: "/careers",
              },
            ],
          },
          {
            title: "Services",
            items: [
              {
                title: "Brand",
                url: "/brand",
              },
              {
                title: "Development",
                url: "/development",
              },
              {
                title: "Marketing",
                url: "/marketing",
              },
            ],
          },
          {
            title: "Questions?",
            items: [
              {
                title: "Call us",
                url: "0121 345 678",
              },
              {
                title: "Email Us",
                url: "info@digitalspaniel.co.uk",
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
        heroImage: {
          alt: "A Spaniel dog",
          mobile: "/assets/Spaniel01_gradient.jpg",
          nonMobile: "/assets/Spaniel01_gradient@2x.jpg",
        },
      },
    },
    services: {
      left: {
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
      right: [
        {
          title: "Brand",
          items: [
            {
              title: "Brand Strategy",
              url: "/brand",
            },
            {
              title: "Logo & Name",
              url: "/brand",
            },
            {
              title: "Identity & Collateral",
              url: "/identity",
            },
          ],
        },
        {
          title: "Development",
          items: [
            {
              title: "eCommerce",
              url: "/brand",
            },
            {
              title: "Web Development",
              url: "/development",
            },
            {
              title: "Mobile Apps",
              url: "/mobile",
            },
          ],
        },
        {
          title: "Marketing",
          items: [
            {
              title: "Digital",
              url: "/digital",
            },
            {
              title: "Market Research",
              url: "/market",
            },
          ],
        },
      ],
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
          id: 1,
          label: "All",
          value: "all",
        },
        {
          id: 2,
          label: "Branding",
          value: "branding",
        },
        {
          id: 3,
          label: "Web Design",
          value: "web-design",
        },
        {
          id: 3,
          label: "Digital Marketing",
          value: "digital-marketing",
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
          category: "branding",
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
          category: "branding",
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
          category: "branding",
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
          category: "web-design",
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
          category: "web-design",
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
          category: "digital-marketing",
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
          alt: "A hallway in an office",
          mobile: "/assets/office02.jpg",
          nonMobile: "/assets/office02@2x.jpg",
        },
        {
          alt: "A picture of a plant, a desk and a wall ",
          mobile: "/assets/office04.jpg",
          nonMobile: "/assets/office04@2x.jpg",
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
      url: "/testimonials.json",
    },
  },
};

export default data;
