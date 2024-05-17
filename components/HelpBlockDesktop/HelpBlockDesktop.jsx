import { fetchHelpBlock } from '@/sanity/utils/helpBlockActions';

import Button from '../Button/Button';

import styles from './HelpBlockDesktop.module.css';

const HelpBlockDesktop = async () => {
  const helpBlockData = await fetchHelpBlock();
  
  const { helpHeadline, helpText, helpCta } = helpBlockData[0];

  return (
    <section className={`${styles.wrapper}`}>
      <div className={`${styles.grid} ${styles.bgImage}`}>
        <div className={`${styles.bgBlur}`} />
        <div className={`${styles.bgPlaceholder}`} />
      </div>
      <div className={`${styles.grid} ${styles.overlay}`}>
        <div className={`${styles.bgCharcoal}`}>
          <div className={`${styles.content}`}>
            <h2 className={`${styles.heading}`}>{helpHeadline}</h2>
            <p className={`${styles.body}`}>{helpText}</p>
            <Button type='secondary' href='/contact'>
              {helpCta}
            </Button>
          </div>
        </div>
        <div className={`${styles.bgGradient}`} />
      </div>
    </section>
  );
};

export default HelpBlockDesktop;
