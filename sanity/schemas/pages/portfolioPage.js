import { LuGalleryVerticalEnd } from "react-icons/lu";

const portfolioPage = {
  type: 'document',
  name: 'portfolioPage',
  title: 'Portfolio Page',
  icon: LuGalleryVerticalEnd,
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'projects', title: 'Project Gallery Section' },
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
        rule
          .required()
          .warning('🤖 You must include a hero image'),
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
    // PROJECT GALLERY SECTION
    {
      name: 'projectsHeadline',
      title: 'Featured Projects Section Headline',
      type: 'string',
      group: 'projects',
      description: 'What should the headline above the featured projects say?',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a headline for the projects section'),
    },
    {
      name: 'projectsText',
      title: 'Featured Projects Section Text',
      type: 'text',
      group: 'projects',
      description:
        'Introduce the portfolio with an outline of the services you provide, the type of clients you serve, and or other information you\'d like users to have as they browser your project gallery',
      validation: (rule) =>
        rule.required().warning('🤖 You must include text for the projects section'),
    },
  ],
};

export default portfolioPage;
