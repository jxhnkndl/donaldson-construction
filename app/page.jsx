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
import TestimonialSlider from '@/components/TestimonialSlider';
import testimonial from '@/sanity/schemas/resources/testimonial';

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
          <Heading level='h1' spacing="sm">{aboutHeadline}</Heading>
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
        image={brandTopImage}
        order={1}
      />

      {/* FEATURED PROJECTS */}
      <Section>
        <Container>
          <Heading level='h2'>{projectsHeadline}</Heading>
          <ProjectGrid projects={projectData} />
        </Container>
      </Section>

      {/* BRAND BLOCK */}
      <BrandBlock
        color='secondary'
        text={brandBottomHeadline}
        image={brandBottomImage}
        order={2}
      />

      {/* TESTIMONIALS */}
      <Section>
        <Container>
          <Heading level="h2">{testimonialsHeadline}</Heading>
          <TestimonialSlider testimonials={testimonialData} />
        </Container>
      </Section>
    </main>
  );
};

export default HomePage;
