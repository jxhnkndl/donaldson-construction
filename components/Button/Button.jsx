import Link from 'next/link';
import { IoChevronForward } from 'react-icons/io5';

import styles from './Button.module.css';

const Button = ({ type, href, children }) => {
  switch (type) {
    case 'dark':
      return (
        <Link href={href} className={`${styles.button} ${styles.dark}`}>
          {children}
          <IoChevronForward className={`${styles.icon}`} />
        </Link>
      );

    case 'secondary':
      return (
        <Link href={href} className={`${styles.button} ${styles.secondary}`}>
          {children}
          <IoChevronForward className={`${styles.icon}`} />
        </Link>
      );
  }
};

export default Button;
