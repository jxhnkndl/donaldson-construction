const helpComponent = {
  type: 'document',
  name: 'helpBlock',
  title: 'Help Block',
  fields: [
    {
      name: 'helpHeadline',
      title: 'Help Block Headline',
      type: 'string',
      initialValue: 'How Can We Help?'
    },
    {
      name: 'helpText',
      title: 'Help Block Text',
      type: 'text',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a text block'),
    },
    {
      name: 'helpCta',
      title: 'Help Component CTA Button Text',
      type: 'string',
      initialValue: 'Contact Us'
    }
  ]
};

export default helpComponent;