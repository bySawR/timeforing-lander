import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { client, getPost, postSlugsQuery, urlFor, CATEGORY_LABELS } from '../../../lib/sanity';
import CoverPlaceholder from '../../../components/CoverPlaceholder';

export const revalidate = 600;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(postSlugsQuery);
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Fant ikke innlegget' };

  const title = post.seoTitle || post.title;
  // Uten coverImage faller vi tilbake på det autogenererte OG-bildet
  // fra opengraph-image.tsx i samme mappe.
  const coverOg = post.coverImage
    ? [{ url: urlFor(post.coverImage).width(1200).height(630).fit('crop').url(), width: 1200, height: 630 }]
    : undefined;

  return {
    title,
    description: post.excerpt,
    alternates: { canonical: `/blogg/${post.slug}` },
    openGraph: {
      type: 'article',
      title,
      description: post.excerpt,
      url: `https://hourly.no/blogg/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      ...(coverOg ? { images: coverOg } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.excerpt,
      ...(coverOg ? { images: [coverOg[0].url] } : {}),
    },
  };
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure>
        <img
          src={urlFor(value).width(1200).fit('max').url()}
          alt={value.alt || ''}
          loading="lazy"
        />
        {value.caption && <figcaption>{value.caption}</figcaption>}
      </figure>
    ),
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    inLanguage: 'nb-NO',
    mainEntityOfPage: `https://hourly.no/blogg/${post.slug}`,
    image: post.coverImage
      ? urlFor(post.coverImage).width(1200).height(630).fit('crop').url()
      : `https://hourly.no/blogg/${post.slug}/opengraph-image`,
    author: { '@type': 'Organization', name: 'Hourly', url: 'https://hourly.no' },
    publisher: { '@type': 'Organization', name: 'Hourly', url: 'https://hourly.no' },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="wrap">
        <article className="article">
          <div className="article-head">
            <Link href="/blogg" className="back-link">
              ← Alle innlegg
            </Link>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <div className="blog-meta" style={{ marginTop: 14 }}>
              <Link href={`/blogg?kategori=${post.category}`} className="blog-cat">
                {CATEGORY_LABELS[post.category] || post.category}
              </Link>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>
          </div>

          <div className="article-cover">
            {post.coverImage ? (
              <Image
                src={urlFor(post.coverImage).width(1440).height(760).fit('crop').url()}
                alt={post.coverImage.alt || post.title}
                width={1440}
                height={760}
                priority
              />
            ) : (
              <CoverPlaceholder category={post.category} title={post.title} />
            )}
          </div>

          <div className="article-body">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          <div className="article-cta">
            <h2>Lei av regneark?</h2>
            <p>
              Hourly gjør timeføring, kontrakter og fakturagrunnlag til en jobb på minutter — ikke
              kvelder.
            </p>
            <a href="https://app.hourly.no/demo" className="btn btn-primary">
              Prøv demoen — ingen pålogging
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
