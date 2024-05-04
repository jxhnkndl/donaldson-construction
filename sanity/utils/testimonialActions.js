import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export async function fetchTestimonials() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

  return client.fetch(
    groq`*[_type == 'testimonial' && hidden == false]{
      _id,
      name,
      title,
      company,
      testimonialText
    }`
  );
}
