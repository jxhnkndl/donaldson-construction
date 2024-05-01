import { fetchHomePage } from '@/sanity/utils/homePageActions';
import { fetchFeatured } from '@/sanity/utils/projectActions';

import Carousel from '@/components/Carousel/Carousel';
import Heading from '@/components/Heading/Heading';
import { IoChevronForward } from 'react-icons/io5';

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
      <Carousel images={heroImages} />
      <Heading level={'h1'}>
        Hello
      </Heading>
      <Heading level={'h2'}>
        Hello
      </Heading>
      <Heading level={'h3'}>
        Hello
      </Heading>
    </main>
  );
};

export default HomePage;
