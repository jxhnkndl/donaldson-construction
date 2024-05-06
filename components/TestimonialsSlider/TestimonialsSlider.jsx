'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Testimonial from '../Testimonial/Testimonial';

import styles from './TestimonialsSlider.module.css';

const TestimonialsSlider = ({ testimonialData }) => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      current === testimonialData.length - 1
        ? setCurrent(0)
        : setCurrent(current + 1);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className={`${styles.container}`}>
      <Testimonial testimonial={testimonialData[current]} />
    </div>
  );
};

export default TestimonialsSlider;
