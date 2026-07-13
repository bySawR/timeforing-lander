import type { MetadataRoute } from 'next';
import { client, postSlugsQuery } from '../lib/sanity';

export const revalidate = 600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: { slug: string; _updatedAt: string }[] = await client.fetch(postSlugsQuery);

  return [
    {
      url: 'https://hourly.no',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://hourly.no/blogg',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `https://hourly.no/blogg/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
