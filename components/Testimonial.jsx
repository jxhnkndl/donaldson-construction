import Image from 'next/image';

import quoteIcon from '../assets/images/icon-quote.png';

const Testimonial = ({ type, testimonial }) => {
  const { company, name, testimonialText, title, _id } = testimonial;

  return (
    <article
      className={`h-[44rem] md:h-[32rem] px-6 py-8 md:p-12 lg:p-16 rounded-image flex flex-col justify-center ${
        type === 'light' ? 'bg-primary-pale' : 'bg-transparent'
      }`}>
      {/* ICON */}
      <div className='w-16 mb-6'>
        <Image
          src={quoteIcon}
          alt='Quotation mark above name of testimonial author'
        />
      </div>
      {/* NAME + TITLE */}
      <div className='mb-6 tracking-ls-lg'>
        <p className='font-semibold uppercase'>{name}</p>
        <p className='mb-2.5 text-[0.875rem]'>{title}, {company}</p>
        <div className='w-16 h-0.5 bg-primary' />
      </div>
      <p className='leading-lh-body italic'>
        {testimonialText}
      </p>
    </article>
  );
};

export default Testimonial;
