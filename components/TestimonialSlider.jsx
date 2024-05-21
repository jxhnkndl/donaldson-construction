'use client';

import Testimonial from './Testimonial';

const TestimonialSlider = ({ testimonials }) => {
  return (
    <div>
      <Testimonial type='light' testimonial={testimonials[1]} />
    </div>
  );
};

export default TestimonialSlider;
