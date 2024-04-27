const project = {
  type: 'document',
  name: 'project',
  title: 'Project',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'What is the name of the project?',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a project title'),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where is the project located? (ex: Richmond VA)',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a project location'),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description:
        'Describe the project in two sentences or less. This will appear under a featured project on the page or under a project in the gallery on the portfolio page',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a short description'),
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      description:
        'Describe the project at greater length. What should users know about the project? What services were rendered? What was your biggest win? What was the most significant challenge you overcame?',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a long description'),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      accept: '.png,.jpg,.jpeg',
      description:
        "Select an image to use as the project thumbnail. This image will represent the project in the portfolio gallery and act as the project page's hero image",
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include a project thumbnail image'),
      fields: [
        {
          name: 'thumbnailAltText',
          title: 'Thumbnail Image - Alt Text',
          type: 'string',
          description: "Describe what's happening in the image in one sentence",
          validation: (rule) =>
            rule
              .required()
              .warning('🤖 You must include alt text for the thumbnail image'),
        },
      ],
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      description: "Select images to display in the project's image gallery",
      of: [{ type: 'projectImage' }],
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include at least one project image'),
    },
    {
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description:
        "In what order should the image appear in the project's image gallery? NOTE: Leaving this field blank will place the image at the end of the project's image gallery",
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Flip this switch to feature this project on the homepage',
      initialValue: false,
    },

    {
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
      initialValue: false,
      description:
        'Flip this switch to hide the project image from public view',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};

export default project;
