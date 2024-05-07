import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

import quoteIcon from '../../assets/images/icon-quote.png';

import styles from './Testimonial.module.css';

const Testimonial = ({ testimonial, direction, handleNext, handlePrev }) => {
  const { _id, name, title, company, testimonialText } = testimonial;

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
  });

  return (
    <div className={`${styles.container}`} {...handlers}>
      <AnimatePresence>
        <motion.div
          key={_id}
          className={`${styles.content}`}
          initial={{
            opacity: 0,
            transform:
              direction === 1 ? 'translateX(100%)' : 'translateX(-100%)',
          }}
          animate={{
            opacity: 1,
            transform: 'translateX(0%)',
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.25 }
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}>
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
