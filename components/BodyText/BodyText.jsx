import styles from './BodyText.module.css';

const BodyText = ({ children }) => {
  return <p className={`${styles.bodyText}`}>{children}</p>;
};

export default BodyText;
