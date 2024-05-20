import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

import BodyText from './BodyText';
import Subheading from './Subheading';

const Project = ({ project }) => {
  const {
    shortDescription,
    title,
    thumbnail,
  } = project;

  return (
    <div>
      <Link className='no-underline text-dark' href='/'>
        <div className='aspect-video relative mb-6 cursor-pointer transition-all duration-300 hover:scale-[1.015] active:scale-[0.995]'>
          <Image
            className='rounded-image'
            src={urlForImage(thumbnail.href)}
            alt={thumbnail.altText}
            fill
          />
        </div>
        <Subheading level={'h3'}>{title}</Subheading>
      </Link>
      <BodyText>{shortDescription}</BodyText>
    </div>
  );
};

export default Project;
