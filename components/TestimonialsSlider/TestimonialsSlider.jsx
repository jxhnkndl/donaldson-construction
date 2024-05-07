'use client';

import { useState, useEffect } from 'react';

import Testimonial from '../Testimonial/Testimonial';

import styles from './TestimonialsSlider.module.css';
import TestimonialsNav from '../TestimonialsNav/TestimonialsNav';

const TestimonialsSlider = ({ testimonialData }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Cycle through testimonial slides every 7.5 seconds
    const slideInterval = setInterval(() => {
      current === testimonialData.length - 1
        ? setCurrent(0)
        : setCurrent(current + 1);
    }, 7500);

    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className={`${styles.container}`}>
      <Testimonial testimonial={testimonialData[current]} />
      <TestimonialsNav
        testimonials={testimonialData}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default TestimonialsSlider;
