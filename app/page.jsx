import { fetchHomePage } from '@/sanity/utils/homePageActions';
import { fetchFeatured } from '@/sanity/utils/projectActions';
import { fetchTestimonials } from '@/sanity/utils/testimonialActions';

import Carousel from '@/components/Carousel/Carousel';

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
    </main>
  );
};

export default HomePage;
