import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export async function fetchHomePage() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

  return client.fetch(
    groq`*[_type == 'homePage']{
      aboutCta,
      projectsHeadline,
      brandTopHeadline,
      projectsCta,
      aboutHeadline,
      brandBottomHeadline,
      aboutText,
      testimonialsHeadline,
      'heroImages': heroImages[].projectImage {
        imageAltText,
        'href': asset._ref
      },
      brandTopImage {
        brandTopImageAltText,
        'href': asset._ref,
      },
      brandBottomImage {
        brandBottomImageAltText,
        'href': asset._ref,
      }
    }`
  )
}