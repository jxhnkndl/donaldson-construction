const Heading = ({ level, children }) => {
  switch (level) {
    case 'h1':
      return (
        <h1 className='mb-4 text-[2rem] md:text-[2.75rem] lg:text-[4rem] leading-[2.5rem] md:leading-[3.25rem] lg:leading-[4.5rem] font-fw-heading'>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className='mb-4 text-[2rem] md:text-[2.75rem] lg:text-[4rem] leading-[2.5rem] md:leading-[3.25rem] lg:leading-[4.5rem] font-fw-heading'>
          {children}
        </h2>
      );
    default:
      return;
  }
};

export default Heading;
