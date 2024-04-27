const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Images' },
    { name: 'about', title: 'About Section' },
    { name: 'brandTop', title: 'Brand Statement - Top' },
    { name: 'projects', title: 'Featured Projects' },
    { name: 'brandBottom', title: 'Brand Statement - Bottom' },
    { name: 'testimonials', title: 'Testimonials' },
  ],
  fields: [
    // HERO IMAGES
    {
      name: 'heroImages',
      title: 'Hero Images',
      type: 'array',
      group: 'hero',
      description: 'Select images to display in the hero image carousel',
      of: [{ type: 'projectImage' }],
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include at least one project image'),
    },

    // ABOUT
    {
      name: 'aboutHeadline',
      title: 'About Section Headline',
      type: 'string',
      group: 'about',
      description: 'What should the headline above the company overview say?',
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include a headline for the about section'),
    },
    {
      name: 'aboutText',
      title: 'About Section Text',
      type: 'text',
      group: 'about',
      description:
        'Provide a one paragraph mission statement that introduces users to the company',
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include text for the about section'),
    },
    {
      name: 'aboutCta',
      title: 'About Section Button Text',
      type: 'string',
      group: 'about',
      description:
        'What should the text inside the call to action button at the bottom of the about section that links to the about page say? (Default: About Us)',
      initialValue: 'About Us',
    },

    // BRAND ROW - TOP
    {
      name: 'brandTopHeadline',
      title: 'Brand Headline',
      type: 'string',
      group: 'brandTop',
      description:
        'Write a short brand headline to appear over the orange brand block',
      validation: (rule) => [
        rule.required().warning('🤖 You must include a brand statement'),
        rule
          .max(75)
          .warning('🤖 Statement must contain less than 75 characters'),
      ],
    },
    {
      name: 'brandTopImage',
      title: 'Brand Image',
      type: 'image',
      group: 'brandTop',
      description:
        'Select a brand image to display next to the orange brand block',
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

    // FEATURED PROJECTS
    {
      name: 'projectsHeadline',
      title: 'Featured Projects Headline',
      type: 'string',
      group: 'projects',
      description:
        'What should the headline above the featured projects section say?',
      validation: (rule) =>
        rule
          .required()
          .warning(
            '🤖 You must include a headline for the featured projects section'
          ),
    },
    {
      name: 'projectsCta',
      title: 'Featured Projects Section Button Text',
      type: 'string',
      group: 'projects',
      description:
        'What should the text inside the call to action button at the bottom of the featured projects section that links to the portfolio page say? (Default: View More)',
      initialValue: 'View More',
    },

    // BRAND ROW - BOTTOM
    {
      name: 'brandBottomHeadline',
      title: 'Brand Headline',
      type: 'string',
      group: 'brandBottom',
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
      name: 'brandBottomImage',
      title: 'Brand Image',
      type: 'image',
      group: 'brandBottom',
      description:
        'Select a brand image to display next to the yellow brand block',
      accept: '.png,.jpg,.jpeg',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule.required().warning('🤖 You must include another brand image'),
      fields: [
        {
          name: 'brandBottomImageAltText',
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

    // TESTIMONIALS
    {
      name: 'testimonialsHeadline',
      title: 'Testimonials Section Headline',
      type: 'string',
      group: 'testimonials',
      description:
        'What should the headline above the testimonials slider say?',
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include a headline for the testimonials section'),
    },
  ],
};

export default homePage;
