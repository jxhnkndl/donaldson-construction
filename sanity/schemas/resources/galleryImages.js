const galleryImages = {
  type: 'document',
  name: 'galleryImage',
  title: 'Gallery Image',
  fields: [
    {
      name: 'image',
      title: 'Image',
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
          title: 'Gallery Image - Alt Text',
          type: 'string',
          description: "Describe what's happening in the image in one sentence",
          validation: (rule) =>
            rule
              .required()
              .warning('🤖 You must include alt text for the gallery image'),
        },
      ],
    },
  ],
};

export default galleryImages;
