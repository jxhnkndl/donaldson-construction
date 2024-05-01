import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

import styles from './BrandStatement.module.css';

const BrandStatement = ({ color, heading, image, textOrder, imageOrder }) => {
  return (
    <div className={`${styles.grid}`}>
      <div className={`${styles.textBlock}`}>
        {color === 'primary' && (
          <div className={`${styles.textContainer} ${styles.primary}`}>
            <h2 className={`${styles.heading} brandStatement`}>{heading}</h2>
          </div>
        )}
        {color === 'secondary' && (
          <div className={`${styles.textContainer} ${styles.secondary}`}>
            <h2 className={`${styles.heading} brandStatement`}>{heading}</h2>
          </div>
        )}
      </div>
      <div className={`${styles.imageBlock}`} style={{
        backgroundImage: `url(${urlForImage(image.href)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'none'
      }}>
      </div>
    </div>
  );
};

export default BrandStatement;
