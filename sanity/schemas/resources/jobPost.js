const jobPost = {
  type: 'document',
  name: 'jobPost',
  title: 'Job Post',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'What position is the candidate applying for?',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a job title'),
    },
    {
      name: 'location',
      title: 'Job Location',
      type: 'string',
      description: 'Where is the job located? (ex: Richmond VA)',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a job location'),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Describe the job in two sentences or less',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a short description'),
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) =>
        rule.required().warning('🤖 You must include a complete job description'),
    },
    {
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description:
        "In what order should the job post appear in the main list of job posts? NOTE: Leaving this field blank will place the job post at the end of the list of job posts",
    },
    {
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
      initialValue: false,
      description:
        'Flip this switch to hide the job post from public view',
    },
  ],
};

export default jobPost;
