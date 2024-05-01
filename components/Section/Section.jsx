import styles from './Section.module.css';

const Section = ({ fluid, children }) => {
  return (
    <section
      // Determine x and y padding based on Section's design role
      className={`section ${styles.section} ${
        fluid ? styles.sectionXFluid : styles.sectionXPadded
      }`}>
      {children}
    </section>
  );
};

export default Section;
