import styles from './Subheading.module.css';

const Heading = ({ level, children }) => {
  switch (level) {
    case 'h2':
      return <h2 className={`${styles.subheading}`}>{children}</h2>;
    case 'h3':
      return <h3 className={`${styles.subheading}`}>{children}</h3>;
    default:
      return;
  }
};

export default Heading;
