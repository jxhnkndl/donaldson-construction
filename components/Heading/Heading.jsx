import styles from './Heading.module.css';

const Heading = ({ level, children }) => {
  switch (level) {
    case 'h1':
      return <h1 className={`${styles.heading}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`${styles.heading}`}>{children}</h2>;
    default:
      return;
  }
};

export default Heading;
