const portfolioPage = {
  type: 'document',
  name: 'portfolioPage',
  title: 'Portfolio Page',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      accept: '.png,.jpg,.jpeg',
      description: 'Select a hero image to display at the top of the page',
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
    {
      name: 'mainHeadline',
      title: 'Main Headline',
      type: 'string',
      description: 'What should the headline under the hero image say?',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a main headline'),
    },
    {
      name: 'mainText',
      title: 'Main Text Block',
      type: 'text',
      description:
        'Introduce the portfolio with an outline of the services you provide, the type of clients you serve, and or other information you\'d like users to have as they browser your project gallery',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a portfolio overview'),
    },
  ],
};

export default portfolioPage;
