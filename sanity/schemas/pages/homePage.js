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
      group: 'overview',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a main headline'),
    },
    {
      name: 'mainText',
      title: 'Main Text Block - Mission Statement',
      type: 'text',
      group: 'overview',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a mission statement'),
    },
    {
      name: 'overviewCta',
      title: 'CTA Button Text',
      type: 'string',
      group: 'overview',
      initialValue: 'About Us',
    },
    // BRAND ROW - TOP
    {
      name: 'brandStatementTop',
      title: 'Brand Statement - Top Row',
      type: 'string',
      group: 'brandRowTop',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a brand statement'),
    },
    {
      name: 'brandImageTop',
      title: 'Brand Image - Top Row',
      type: 'image',
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
      group: 'projects',
      initialValue: 'View More',
    },
    // BRAND ROW - BOTTOM
    {
      name: 'brandStatementBottom',
      title: 'Brand Statement - Bottom Row',
      type: 'string',
      group: 'brandRowBottom',
      validation: (rule) =>
        rule.required().warning('🤖 You must include another brand statement'),
    },
    {
      name: 'brandImageBottom',
      title: 'Brand Image - Bottom Row',
      type: 'image',
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
      group: 'testimonials',
    },
  ],
};

export default homePage;
