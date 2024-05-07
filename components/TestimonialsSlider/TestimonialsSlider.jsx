'use client';

import { useState, useEffect } from 'react';

import Testimonial from '../Testimonial/Testimonial';

import styles from './TestimonialsSlider.module.css';
import TestimonialsNav from '../TestimonialsNav/TestimonialsNav';

const TestimonialsSlider = ({ testimonialData }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 7500);

    return () => clearInterval(slideInterval);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    current === testimonialData.length - 1
      ? setCurrent(0)
      : setCurrent(current + 1);
  };

  const handlePrev = () => {
    setDirection(0);
    current === 0
      ? setCurrent(testimonialData.length - 1)
      : setCurrent(current - 1);
  };

  return (
    <div className={`${styles.container}`}>
      <Testimonial
        testimonial={testimonialData[current]}
        direction={direction}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <TestimonialsNav
        testimonials={testimonialData}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default TestimonialsSlider;
