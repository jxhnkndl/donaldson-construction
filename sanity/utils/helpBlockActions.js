import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export async function fetchHelpBlock() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

  return client.fetch(
    groq`*[_type == 'helpBlock']{
      helpHeadline,
      helpText,
      helpCta
    }`
  )
}