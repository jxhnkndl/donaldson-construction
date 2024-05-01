import Link from 'next/link';

import styles from './Button.module.css';

const Button = ({ type, href, children }) => {
  switch (type) {
    case 'dark':
      return (
        <Link href={href} className={`${styles.link}`}>
          <div className={`${styles.button} ${styles.buttonDark}`}>
            {children}
          </div>
        </Link>
      );
    
    case 'secondary':
      return (
        <Link href={href} className={`${styles.link}`}>
          <div className={`${styles.button} ${styles.buttonSecondary}`}>
            {children}
          </div>
        </Link>
      );
  }
};

export default Button;
