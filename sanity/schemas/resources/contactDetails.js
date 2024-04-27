const contactDetails = {
  type: 'document',
  name: 'contactDetails',
  title: 'Contact Details',
  fields: [
    {
      name: 'phoneRichmond',
      title: 'Richmond Phone',
      type: 'string',
      description: 'Provide the phone number for the Richmond office',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a phone number'),
    },
    {
      name: 'phoneCharlottesville',
      title: 'Charlottesville Phone',
      type: 'string',
      description: 'Provide the phone number for the Charlotesville office',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a phone number'),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: "Provide the company's public facing email address",
      validation: (rule) =>
        rule.required().warning('🤖 You must include a valid email address'),
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      description: "Provide the company's Instagram profile URL",
      validation: (rule) =>
        rule.required().warning('🤖 You must include a valid URL'),
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      description: "Provide the company's Facebook profile URL",
      validation: (rule) =>
        rule.required().warning('🤖 You must include a valid URL'),
    },
  ],
};

export default contactDetails;
