import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export async function fetchFeatured() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

  return client.fetch(
    groq`*[_type == 'project' && featured == true]{
      _id,
      title,
      location,
      shortDescription,
      longDescription,
      featured,
      order,
      hidden,
      thumbnail {
        'altText': thumbnailAltText,
        'href': asset._ref
      },
      'imageGallery': gallery[].projectImage {
        'altText': imageAltText,
        'href': asset._ref
      }
    }`
  )
}