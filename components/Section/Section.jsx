import styles from './Section.module.css';

const Section = ({ fluid, children }) => {
  if (fluid) {
    return (
      <section className={`${styles.section}`}>
        {children}
      </section>
    )
  } else {
    return (
      <section className={`${styles.section} ${styles.sidePadding}`}>
        {children}
      </section>
    )
  }
}

export default Section
