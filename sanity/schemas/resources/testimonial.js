import { FaStar } from "react-icons/fa";

const testimonial = {
  type: 'document',
  name: 'testimonial',
  title: 'Testimonial',
  icon: FaStar,
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
    },
    {
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'In what order should the testimonial appear in the slider? NOTE: Leaving this field blank will place the testimonial at the end of the testimonials slider'
    },
    {
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
      initialValue: false,
      description: 'Flip this switch to hide the testimonial from public view'
    }
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
};

export default testimonial;