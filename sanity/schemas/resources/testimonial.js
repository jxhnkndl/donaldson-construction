const testimonial = {
  type: 'document',
  name: 'testimonial',
  title: 'Testimonial',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Who gave the testimonial?',
      validation: (rule) =>
        rule.required().warning('🤖 You must include the name of the person who gave the testimonial'),
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'What is the person\'s job title? NOTE: This is an optional but highly encouraged field'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'What company does the person work for? NOTE: This is an optional but highly encouraged field'
    },
    {
      name: 'testimonialText',
      title: 'Testimonial',
      type: 'text',
      description: 'Provide the body of the testimonial',
      validation: (rule) =>
        rule.required().warning('🤖 You must include the testimonial body'),
    }
  ]
};

export default testimonial;