import Image from 'next/image';

import quoteIcon from '../../assets/images/icon-quote.png';

import styles from './Testimonial.module.css';

const Testimonial = ({ testimonial }) => {
  const { name, title, company, testimonialText } = testimonial;

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imageContainer}`}>
        <Image
          className={`${styles.image}`}
          src={quoteIcon}
          alt={'Orange quotation mark'}
        />
      </div>
      <div className={`${styles.header}`}>
        <p className={`${styles.name}`}>{name}</p>
        <p className={`${styles.title}`}>{title}, {company}</p>
        <div className={`${styles.divider}`}></div>
      </div>
      <p className={`${styles.testimonialBody}`}>
        {testimonialText}
      </p>
    </div>
  );
};

export default Testimonial;
