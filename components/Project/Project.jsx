import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

import styles from './Project.module.css';

const Project = ({ project }) => {
  const { title, location, shortDescription, thumbnail, order } = project;

  return (
    <article
      className={`${styles.project} ${
        order === 1 ? styles.first : styles.last
      }`}>
      <div className={`${styles.imageContainer}`}>
        <Image
          className={`${styles.image}`}
          src={urlForImage(thumbnail.href)}
          alt={thumbnail.altText}
          fill
        />
      </div>
      <h2 className={`${styles.title}`}>{title}</h2>
      <p className={`${styles.description}`}>{shortDescription}</p>
    </article>
  );
};

export default Project;
