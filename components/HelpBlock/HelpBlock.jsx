import Button from '../Button/Button';
import styles from './HelpBlock.module.css';

const HelpBlock = () => {
  return (
    <section className={`${styles.wrapper}`}>
      <div className={`${styles.grid} ${styles.bgImage}`}>
        <div className={`${styles.bgBlur}`} />
        <div className={`${styles.bgPlaceholder}`} />
      </div>
      <div className={`${styles.grid} ${styles.overlay}`}>
        <div className={`${styles.bgCharcoal}`}>
          <div className={`${styles.content}`}>
            <h2 className={`${styles.heading}`}>How can we help?</h2>
            <p className={`${styles.body}`}>
              Donaldson Construction provides commercial construction services
              to clients across Central Virginia. Contact our dedicated and
              experienced team of professional builders to discuss your next
              project.
            </p>
            <Button type='secondary' href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
        <div className={`${styles.bgGradient}`} />
      </div>
    </section>
  );
};

export default HelpBlock;
