const Heading = ({ level, spacing, children }) => {
  switch (level) {
    case 'h1':
      return (
        <h1 className={`${heading} ${spacing === 'sm' ? 'mb-4' : 'mb-8'}`}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={`${heading} ${spacing === 'sm' ? 'mb-4' : 'mb-8'}`}>
          {children}
        </h2>
      );
    default:
      return;
  }
};

const heading = `text-[2rem] md:text-[2.75rem] lg:text-[4rem] leading-[2.5rem] md:leading-[3.25rem] lg:leading-[4.5rem] font-heading font-medium`;

export default Heading;
