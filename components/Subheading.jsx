const Heading = ({ level, children }) => {
  switch (level) {
    case 'h2':
      return <h2 className={subheading}>{children}</h2>;
    case 'h3':
      return <h3 className={subheading}>{children}</h3>;
    default:
      return;
  }
};

const subheading = "mb-1 cursor-pointer text-[1.25rem] md:text-[1.5rem] leading-[1.75rem] md:leading-[2rem] lg:leading-[2.25rem] font-semibold hover:text-dark/75"

export default Heading;
