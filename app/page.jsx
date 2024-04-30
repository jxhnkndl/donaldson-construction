import { fetchHomePage } from '@/sanity/utils/homePageActions';

import Carousel from '@/components/Carousel/Carousel';

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
    testimonialsHeadline,
  } = data[0];

  return (
    <main>
      <Carousel images={heroImages} />
    </main>
  );
};

export default HomePage;
