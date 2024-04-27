const testimonial = {
  type: 'document',
  name: 'testimonial',
  title: 'Testimonial',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) =>
        rule.required().warning('🤖 You must include the name of the person who gave the testimonial'),
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'This is an optional but strongly encouraged field'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'This is an optional but strongly encouraged field'
    },
    {
      name: 'testimonialText',
      title: 'Testimonial',
      type: 'text',
      validation: (rule) =>
        rule.required().warning('🤖 You must include the testimonial body'),
    }
  ]
};

export default testimonial;