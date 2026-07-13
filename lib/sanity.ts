import { createClient, groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'r7opzp3e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-07-01',
  useCdn: true,
  perspective: 'published',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

export interface BlogPostPreview {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  coverImage?: SanityImageSource & { alt?: string };
}

export interface BlogPost extends BlogPostPreview {
  body: any[];
  seoTitle?: string;
  _updatedAt: string;
}

export const CATEGORY_LABELS: Record<string, string> = {
  tips: 'Tips og triks',
  mva: 'MVA og skatt',
  frilans: 'Frilansliv',
  fakturering: 'Fakturering',
  produkt: 'Produktnytt',
};

export const allPostsQuery = groq`*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt, publishedAt, category, coverImage
}`;

export const postBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, excerpt, publishedAt, category, coverImage, body, seoTitle, _updatedAt
}`;

export const postSlugsQuery = groq`*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`;

export async function getAllPosts(): Promise<BlogPostPreview[]> {
  return client.fetch(allPostsQuery, {}, { next: { revalidate: 600 } });
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  return client.fetch(postBySlugQuery, { slug }, { next: { revalidate: 600 } });
}
