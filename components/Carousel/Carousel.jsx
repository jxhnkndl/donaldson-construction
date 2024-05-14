'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';

import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  console.log(images);

  useEffect(() => {
    const imageInterval = setInterval(cycleImage, 7500);

    return () => clearInterval(imageInterval);
  }, [current]);

  const cycleImage = () => {
    if (current === images.length - 1) {
      setCurrent(0);
      return;
    }

    setCurrent(current + 1);
  };

  return (
    <div className={`${styles.carousel}`}>
      <AnimatePresence mode={'sync'}>
        <motion.div
          key={images[current].href}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <Image
            src={urlForImage(images[current].href)}
            alt={images[current].imageAltText}
            fill
            objectFit='cover'
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
