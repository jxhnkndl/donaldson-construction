const helpComponent = {
  type: 'document',
  name: 'helpBlock',
  title: 'Help Block',
  fields: [
    {
      name: 'helpHeadline',
      title: 'Help Block Headline',
      type: 'string',
      description: 'What should the headline inside of the help block say?',
      initialValue: 'How Can We Help?',
    },
    {
      name: 'helpText',
      title: 'Help Block Text',
      type: 'text',
      description:
        'Write a short text block inviting users to contact the company',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a text block'),
    },
    {
      name: 'helpCta',
      title: 'Help Component CTA Button Text',
      type: 'string',
      description:
        'This is the text on the button redirecting users to the contact page',
      initialValue: 'Contact Us',
    },
  ],
};

export default helpComponent;
