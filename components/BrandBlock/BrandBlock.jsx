import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

import blueprintBg from '../../assets/images/blueprint-bg.jpg';
import Heading from '../Heading/Heading';

import styles from './BrandBlock.module.css';

const BrandBlock = ({ color, text, image, order }) => {
  return (
    <section className={`${styles.grid}`}>
      <div
        className={`${styles.block} ${
          order === 1 ? styles.first : styles.last
        }`}
        style={{
          backgroundImage: `url(${blueprintBg.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <div
          className={`${styles.overlay} ${
            color === 'primary' ? styles.primary : styles.secondary
          }`}>
          <h2 className={`${styles.text}`}>{text}</h2>
        </div>
      </div>
      <div
        className={`${styles.block} ${
          order === 2 ? styles.first : styles.last
        }`}
        style={{
          backgroundImage: `url(${urlForImage(image.href)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </section>
  );
};

export default BrandBlock;
