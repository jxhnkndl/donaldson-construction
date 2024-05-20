const Section = ({ fluid = false, children }) => {
  return (
    <section className={`py-14 md:py-20 lg:py-24 ${!fluid && 'px-6 lg:px-8'}`}>
      {children}
    </section>
  );
};

export default Section;
