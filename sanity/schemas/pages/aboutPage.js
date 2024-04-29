import { AiFillInfoCircle } from "react-icons/ai";

const aboutPage = {
  type: 'document',
  name: 'aboutPage',
  title: 'About Page',
  icon: AiFillInfoCircle,
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'about', title: 'About Section' },
    { name: 'brand', title: 'Brand Statement' },
    { name: 'testimonials', title: 'Testimonials' },
  ],
  fields: [
    // HERO SECTION
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'hero',
      description: 'Select a hero image to display at the top of the page',
      accept: '.png,.jpg,.jpeg',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule.required().warning('🤖 You must include a hero image'),
      fields: [
        {
          name: 'heroImgAltText',
          title: 'Hero Image - Alt Text',
          type: 'string',
          description: "Describe what's happening in the image in one sentence",
          validation: (rule) =>
            rule
              .required()
              .warning('🤖 You must include alt text for the hero image'),
        },
      ],
    },
    // ABOUT SECTION
    {
      name: 'aboutHeadline',
      title: 'About Section Headline',
      type: 'string',
      group: 'about',
      description: 'What should the headline above the company overview say?',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a headline for the about section'),
    },
    {
      name: 'aboutText',
      title: 'About Section Text',
      type: 'text',
      group: 'about',
      description:
        'Provide an overview of the company and its values, team, projects, and clients. What should a user know about your company? This can be as long as you want it to be.',
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include text for the about section'),
    },
    {
      name: 'aboutImage',
      title: 'About Section Image',
      type: 'image',
      group: 'about',
      description: 'Select an image to display next to the company overview',
      accept: '.png,.jpg,.jpeg',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule.required().warning('🤖 You must include an image'),
      fields: [
        {
          name: 'heroImgAltText',
          title: 'Hero Image - Alt Text',
          type: 'string',
          description: "Describe what's happening in the image in one sentence",
          validation: (rule) =>
            rule
              .required()
              .warning('🤖 You must include alt text for the image'),
        },
      ],
    },
    {
      name: 'aboutCta',
      title: 'About Section Button Text',
      type: 'string',
      description:
        'What should the text inside the call to action button at the bottom of the about section that links to the careers page say? (Default: Join Our Team)',
      initialValue: 'View More',
    },
    // BRAND STATEMENT BLOCK
    {
      name: 'brandHeadline',
      title: 'Brand Headline',
      type: 'string',
      group: 'brand',
      description:
        'Write a short brand headline to appear over the yellow brand block',
      validation: (rule) => [
        rule.required().warning('🤖 You must include a brand statement'),
        rule
          .max(75)
          .warning('🤖 Statement must contain less than 75 characters'),
      ],
    },
    {
      name: 'brandImage',
      title: 'Brand Image',
      type: 'image',
      group: 'brand',
      description:
        'Select a brand image to display next to the yellow brand block',
      accept: '.png,.jpg,.jpeg',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule.required().warning('🤖 You must include a brand image'),
      fields: [
        {
          name: 'brandTopImageAltText',
          title: 'Brand Image - Alt Text',
          type: 'string',
          description: "Describe what's happening in the image in one sentence",
          validation: (rule) =>
            rule
              .required()
              .warning('🤖 You must include alt text for the brand image'),
        },
      ],
    },
    // TESTIMONIALS SECTION
    {
      name: 'testimonialsHeadline',
      title: 'Testimonials Section Headline',
      type: 'string',
      description:
        'What should the headline above the testimonials slider say?',
      group: 'testimonials',
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include a headline for the testimonials section'),
    },
  ],
};

export default aboutPage;
