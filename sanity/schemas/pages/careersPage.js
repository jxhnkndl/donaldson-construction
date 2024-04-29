const careersPage = {
  type: 'document',
  name: 'careersPage',
  title: 'Careers Page',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'careers', title: 'Careers Section' },
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
    // CAREERS SECTION
    {
      name: 'careersHeadline',
      title: 'Careers Section Headline',
      type: 'string',
      group: 'careers',
      description: 'What should the headline above the open job postings say?',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a headline for the careers section'),
    },
    {
      name: 'careersText',
      title: 'Careers Section Text',
      type: 'text',
      group: 'careers',
      description:
        'Provide 1-3 sentences explaining how users can apply for open positions',
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include text for the careers section'),
    },
  ]
};

export default careersPage;