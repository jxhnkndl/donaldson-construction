const projectImage = {
  type: 'document',
  name: 'projectImage',
  title: 'Project Image',
  fields: [
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      accept: '.png,.jpg,.jpeg',
      description: 'Select project image',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule.required().warning('🤖 You must include a project image'),
      fields: [
        {
          name: 'imageAltText',
          title: 'Image - Alt Text',
          type: 'string',
          description: "Describe what's happening in the image in one sentence",
          validation: (rule) =>
            rule
              .required()
              .warning('🤖 You must include alt text for the image'),
        },
      ],
    },
  ],
};

export default projectImage;
