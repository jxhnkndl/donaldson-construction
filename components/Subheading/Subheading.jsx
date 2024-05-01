import styles from './Subheading.module.css';

const Heading = ({ level, children }) => {
  switch (level) {
    case 'h1':
      return <h2 className={`${styles.subheading}`}>{children}</h2>;
    case 'h2':
      return <h3 className={`${styles.subheading}`}>{children}</h3>;
  }
};

export default Heading;
