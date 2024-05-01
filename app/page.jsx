import { fetchHomePage } from '@/sanity/utils/homePageActions';

import BrandStatement from '@/components/BrandStatement/BrandStatement';
import Button from '@/components/Button/Button';
import Carousel from '@/components/Carousel/Carousel';
import Container from '@/components/Container/Container';
import { IoChevronForward } from 'react-icons/io5';
import Section from '@/components/Section/Section';

const HomePage = async () => {
  const data = await fetchHomePage();

  const {
    aboutCta,
    aboutHeadline,
    aboutText,
    brandBottomHeadline,
    brandBottomImage,
    brandTopHeadline,
    brandTopImage,
    heroImages,
    projectsCta,
    projectsHeadline,
    testimonialsHeadline,
  } = data[0];

  return (
    <main>
      {/* HERO CAROUSEL */}
      <Carousel images={heroImages} />

      {/* ABOUT SECTION */}
      <Section fluid={false}>
        <Container>
          <h1 className='heading'>{aboutHeadline}</h1>
          <p className='bodyText'>{aboutText}</p>
          <Button type='dark' href='/about'>
            {aboutCta}
            <IoChevronForward className='chevron' />
          </Button>
        </Container>
      </Section>

      {/* BRAND STATEMENT */}
      <BrandStatement
        color='primary'
        heading={brandTopHeadline}
        image={brandTopImage}
        textOrder={1}
        imageOrder={2}
      />

      {/* FEATURED PROJECTS SECTION */}
      <Section fluid={false}>
        <Container>
          <h2 className='heading'>{projectsHeadline}</h2>
          <Button type='dark' href='/about'>
            {projectsCta}
            <IoChevronForward className='chevron' />
          </Button>
        </Container>
      </Section>

      {/* BRAND STATEMENT */}
      <BrandStatement
        color='secondary'
        heading={brandBottomHeadline}
        image={brandBottomImage}
        textOrder={1}
        imageOrder={2}
      />
    </main>
  );
};

export default HomePage;
