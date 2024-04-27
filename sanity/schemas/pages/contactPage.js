const contactPage = {
  type: 'document',
  name: 'contactPage',
  title: 'Contact Page',
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
        'Provide 2-3 sentences inviting users to contact you using the contact form',
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
      name: 'formButtonText',
      title: 'Form Submit Button Text',
      type: 'string',
      description: 'This is the text on the button that submits the contact form',
      initialValue: 'Submit'
    }
  ],
};

export default contactPage;
