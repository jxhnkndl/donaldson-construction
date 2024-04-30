'use client';

import { useState, useEffect } from 'react';
import { urlForImage } from '@/sanity/lib/image';

import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(cycleImage, 7500);
  }, [current]);

  const cycleImage = () => {
    if (current === images.length - 1) {
      setCurrent(0);
      return;
    }

    setCurrent(current + 1);
  };

  return (
    <div
      className={`${styles.carousel}`}
      style={{
        backgroundImage: `url(${urlForImage(images[current].href)})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
      }}
    />
  );
};

export default Carousel;
