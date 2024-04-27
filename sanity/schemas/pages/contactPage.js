const contactPage = {
  type: 'document',
  name: 'contactPage',
  title: 'Contact Page',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
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
    {
      name: 'contactHeadline',
      title: 'Contact Section Headline',
      type: 'string',
      description: 'What should the headline above the contact form say?',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a main headline'),
    },
    {
      name: 'contactText',
      title: 'Contact Section Text',
      type: 'text',
      description:
        'Provide 2-3 sentences inviting users to contact the company using the contact form',
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include a contact section overview'),
    },
    {
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'This is the text that appears under the Service Areas heading. Each entry will appear on a separate line on the webpage. To protect the layout, avoid including more than four entries at a time.',
      initialValue: [
        'Richmond VA',
        'Charlottesville VA',
        '+ Surrounding Areas',
      ],
    },
    {
      name: 'formCta',
      title: 'Form Submit Button Text',
      type: 'string',
      description: 'This is the text on the button that submits the contact form (Default: Submit)',
      initialValue: 'Submit'
    }
  ],
};

export default contactPage;
