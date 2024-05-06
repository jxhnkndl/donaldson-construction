import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import quoteIcon from '../../assets/images/icon-quote.png';

import styles from './Testimonial.module.css';

const variants = {
  initial: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  animate: {
    opacity: 1,
    transform: 'translateX(0%)',
  },
  exit: {
    opacity: 1,
    transform: 'translateX(-100%)',
  },
};

const Testimonial = ({ testimonial }) => {
  const { _id, name, title, company, testimonialText } = testimonial;

  return (
    <div className={`${styles.container}`}>
      <AnimatePresence>
        <motion.div
          key={_id}
          className={`${styles.content}`}
          variants={variants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <div className={`${styles.imageContainer}`}>
            <Image
              className={`${styles.image}`}
              src={quoteIcon}
              alt={'Orange quotation mark'}
            />
          </div>
          <div className={`${styles.header}`}>
            <p className={`${styles.name}`}>{name}</p>
            <p className={`${styles.title}`}>
              {title}, {company}
            </p>
            <div className={`${styles.divider}`}></div>
          </div>
          <p className={`${styles.testimonialBody}`}>{testimonialText}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
