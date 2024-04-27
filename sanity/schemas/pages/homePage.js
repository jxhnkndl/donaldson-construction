const homePage = {
  type: 'document',
  name: 'homePage',
  title: 'Home Page',
  groups: [
    { name: 'heroImages', title: 'Hero Images' },
    { name: 'overview', title: 'Overview' },
    { name: 'brandRowTop', title: 'Brand Statement - Top' },
    { name: 'projects', title: 'Featured Projects' },
    { name: 'brandRowBottom', title: 'Brand Statement - Bottom' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'brandStatements', title: 'Brand Statements' },
  ],
  fields: [
    // OVERVIEW
    {
      name: 'mainHeadline',
      title: 'Main Headline',
      type: 'string',
      description: 'What should the headline under the hero image slider say?',
      group: 'overview',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a main headline'),
    },
    {
      name: 'mainText',
      title: 'Main Text Block - Mission Statement',
      type: 'text',
      description:
        'Write a short mission statement or brand overview that introduces users to the company',
      group: 'overview',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a mission statement'),
    },
    {
      name: 'overviewCta',
      title: 'CTA Button Text',
      type: 'string',
      description: 'This is the text on the button under the mission statement redirecting users to the about page',
      group: 'overview',
      initialValue: 'About Us',
    },

    // BRAND ROW - TOP
    {
      name: 'brandStatementTop',
      title: 'Brand Statement - Top Row',
      type: 'string',
      description:
        'Write a short brand headline to appear over the orange brand block',
      group: 'brandRowTop',
      validation: (rule) => [
        rule.required().warning('🤖 You must include a brand statement'),
        rule
          .max(75)
          .warning('🤖 Statement must contain less than 75 characters'),
      ],
    },
    {
      name: 'brandImageTop',
      title: 'Brand Image - Top Row',
      type: 'image',
      accept: '.png,.jpg,.jpeg',
      description:
        'Select a brand image to display next to the orange brand block',
      group: 'brandRowTop',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule.required().warning('🤖 You must include a brand image'),
      fields: [
        {
          name: 'brandImageTopAltText',
          title: 'Brand Image Alt Text - Top Row',
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
      name: 'projectHeadline',
      title: 'Featured Projects Headline',
      type: 'string',
      description: 'What should the headline above the featured projects section say?',
      group: 'projects',
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include a featured projects headline'),
    },
    {
      name: 'projectsCta',
      title: 'Featured Projects CTA Button Text',
      type: 'string',
      description: 'This is the text on the button under the featured projects redirecting users to the portfolio page',
      group: 'projects',
      initialValue: 'View More',
    },

    // BRAND ROW - BOTTOM
    {
      name: 'brandStatementBottom',
      title: 'Brand Statement - Bottom Row',
      type: 'string',
      description:
        'Write a short brand headline to appear over the yellow brand block',
      group: 'brandRowBottom',
      validation: (rule) => [
        rule.required().warning('🤖 You must include a brand statement'),
        rule
          .max(75)
          .warning('🤖 Statement must contain less than 75 characters'),
      ],
    },
    {
      name: 'brandImageBottom',
      title: 'Brand Image - Bottom Row',
      type: 'image',
      accept: '.png,.jpg,.jpeg',
      description:
        'Select a brand image to display next to the yellow brand block',
      group: 'brandRowBottom',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule.required().warning('🤖 You must include another brand image'),
      fields: [
        {
          name: 'brandImageBottomAltText',
          title: 'Brand Image Alt Text - Bottom Row',
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
      title: 'Testimonials Headline',
      type: 'string',
      description: 'What should the headline above the testimonials slider say?',
      group: 'testimonials',
    },
  ],
};

export default homePage;
