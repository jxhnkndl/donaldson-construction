import { IoMdContact } from "react-icons/io";

const contactPage = {
  type: 'document',
  name: 'contactPage',
  title: 'Contact Page',
  icon: IoMdContact,
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'contact', title: 'Contact Form Section' },
    { name: 'sidebar', title: 'Contact Sidebar'}
  ],
  fields: [
    // HERO SECTION
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'hero',
      description: 'Select a hero image to display at the top of the page',
      accept: '.png,.jpg,.jpeg',
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule.required().warning('🤖 You must include a hero image'),
      fields: [
        {
          name: 'heroImgAltText',
          title: 'Hero Image - Alt Text',
          type: 'string',
          description: "Describe what's happening in the image in one sentence",
          validation: (rule) =>
            rule
              .required()
              .warning('🤖 You must include alt text for the hero image'),
        },
      ],
    },
    // CONTACT FORM SECTION
    {
      name: 'contactHeadline',
      title: 'Contact Section Headline',
      type: 'string',
      group: 'contact',
      description: 'What should the headline above the contact form say?',
      validation: (rule) =>
        rule.required().warning('🤖 You must include a headline for the contact section'),
    },
    {
      name: 'contactText',
      title: 'Contact Section Text',
      type: 'text',
      group: 'contact',
      description:
        'Provide 2-3 sentences inviting users to contact the company using the contact form',
      validation: (rule) =>
        rule
          .required()
          .warning('🤖 You must include text for the contact section'),
    },
    {
      name: 'formCta',
      title: 'Form Submit Button Text',
      type: 'string',
      group: 'contact',
      description: 'This is the text on the button that submits the contact form (Default: Submit)',
      initialValue: 'Submit'
    },
    // CONTACT SIDEBAR
    {
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'sidebar',
      description:
        'This is the text that appears under the Service Areas heading. Each entry will appear on a separate line on the webpage. To protect the layout, avoid including more than four entries at a time.',
      initialValue: [
        'Richmond VA',
        'Charlottesville VA',
        '+ Surrounding Areas',
      ],
    },
  ],
};

export default contactPage;
