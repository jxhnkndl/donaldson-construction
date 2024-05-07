import styles from './TestimonialsNav.module.css';

const TestimonialsNav = ({ testimonials, current, setCurrent }) => {
  const changeTestimonial = (index) => {
    setCurrent(index);
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.dots}`}>
        {testimonials.map((testimonial, index) => (
          <div
            key={`dot-${testimonial._id}`}
            className={`${styles.dot} ${current === index && styles.active}`}
            onClick={() => changeTestimonial(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsNav;
