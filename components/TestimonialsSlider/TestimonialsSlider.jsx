import Testimonial from '../Testimonial/Testimonial';

import styles from './TestimonialsSlider.module.css';

const TestimonialsSlider = ({ testimonials }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.track}`}>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
