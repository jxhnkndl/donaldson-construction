import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

import BodyText from '../BodyText/BodyText';
import { IoChevronForward } from 'react-icons/io5';
import Subheading from '../Subheading/Subheading';

import styles from './Project.module.css';

const Project = ({ project }) => {
  const {
    imageGallery,
    location,
    longDescription,
    order,
    shortDescription,
    title,
    thumbnail,
  } = project;

  console.log(thumbnail);

  return (
    <div className={`${styles.project}`}>
      <Link className={`${styles.link}`} href='/'>
        <div className={`${styles.imageContainer}`}>
          <Image
            className={`${styles.image}`}
            src={urlForImage(thumbnail.href)}
            alt={thumbnail.altText}
            fill
          />
        </div>
        <Subheading className={`${styles.title}`} level={'h3'}>
          {title}
          <IoChevronForward className={`${styles.icon}`} />
        </Subheading>
      </Link>
      <BodyText>{shortDescription}</BodyText>
    </div>
  );
};

export default Project;
