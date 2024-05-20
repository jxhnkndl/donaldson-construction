'use client';

import { useState, useEffect } from 'react';
import { urlForImage } from '@/sanity/lib/image';

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (current === images.length - 1) {
        setCurrent(0);
        return;
      }

      setCurrent(current + 1);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div
      id='carousel'
      className='h-[50vh] md:h-[75vh] relative transition-all duration-500'
      style={{
        backgroundImage: `url(${urlForImage(images[current].href)})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}></div>
  );
};

export default Carousel;
