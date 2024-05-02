import { fetchHomePage } from '@/sanity/utils/homePageActions';
import { fetchFeatured } from '@/sanity/utils/projectActions';

import BodyText from '@/components/BodyText/BodyText';
import BrandBlock from '@/components/BrandBlock/BrandBlock';
import Button from '@/components/Button/Button';
import Carousel from '@/components/Carousel/Carousel';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import ProjectGrid from '@/components/ProjectGrid/ProjectGrid';
import Section from '@/components/Section/Section';

const HomePage = async () => {
  const pageData = await fetchHomePage();
  const projectData = await fetchFeatured();

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
      <Section fluid={false}>
        <Container>
          <Heading level={'h1'}>{aboutHeadline}</Heading>
          <BodyText>{aboutText}</BodyText>
          <Button type='dark' href='/'>
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

      {/* FEATURED PROJECTS SECTION */}
      <Section fluid={false}>
        <Container>
          <Heading level={'h2'}>
            {projectsHeadline}
          </Heading>
          <ProjectGrid projects={projectData} />
          <Button type='dark' href="/">
            {projectsCta}
          </Button>
        </Container>
      </Section>

      {/* BRAND BLOCK */}
      <BrandBlock
        color='secondary'
        text={brandBottomHeadline}
        image={brandBottomImage}
        order={2}
      />

    </main>
  );
};

export default HomePage;
