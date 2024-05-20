import { fetchHomePage } from '@/sanity/utils/homePageActions';
import { fetchFeatured } from '@/sanity/utils/projectActions';
import { fetchTestimonials } from '@/sanity/utils/testimonialActions';

import Carousel from '@/components/Carousel';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import BodyText from '@/components/BodyText';
import Button from '@/components/Button';
import BrandBlock from '@/components/BrandBlock';
import ProjectGrid from '@/components/ProjectGrid';

const HomePage = async () => {
  const pageData = await fetchHomePage();
  const projectData = await fetchFeatured();
  const testimonialData = await fetchTestimonials();

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
  } = pageData[0];

  return (
    <main>
      {/* HERO SECTION */}
      <Carousel images={heroImages} />

      {/* ABOUT SECTION */}
      <Section>
        <Container>
          <Heading level='h1'>{aboutHeadline}</Heading>
          <BodyText>{aboutText}</BodyText>
          <Button type='dark' href='/about'>
            {aboutCta}
          </Button>
        </Container>
      </Section>

      {/* BRAND BLOCK */}
      <BrandBlock
        color='primary'
        text={brandTopHeadline}
        image={brandBottomImage}
        order={1}
      />

      {/* FEATURED PROJECTS */}
      <Section>
        <Container>
          <Heading level='h2'>{projectsHeadline}</Heading>
          <ProjectGrid projects={projectData} />
        </Container>
      </Section>
    </main>
  );
};

export default HomePage;
