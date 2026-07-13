import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, urlFor, CATEGORY_LABELS } from '../../lib/sanity';

export const metadata: Metadata = {
  title: 'Blogg — tips om timeføring, MVA og frilansliv',
  description:
    'Praktiske råd for frilansere og små team: timeføring, fakturering, MVA, kontrakter og hverdagen som selvstendig. Fra teamet bak Hourly.',
  alternates: { canonical: '/blogg' },
  openGraph: {
    title: 'Hourly-bloggen — tips om timeføring, MVA og frilansliv',
    description:
      'Praktiske råd for frilansere og små team: timeføring, fakturering, MVA og kontrakter.',
    url: 'https://hourly.no/blogg',
  },
};

export const revalidate = 600;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <div className="blog-hero">
        <div className="wrap">
          <span className="eyebrow">
            <span className="dot"></span> Bloggen
          </span>
          <h1>Tips for deg som fakturerer på timer</h1>
          <p>
            Praktiske råd om timeføring, MVA, kontrakter og frilanslivet — skrevet for deg som vil
            bruke mindre tid på admin.
          </p>
        </div>
      </div>

      <div className="wrap">
        {posts.length === 0 ? (
          <p className="blog-empty">Ingen innlegg ennå. Kom tilbake snart — vi skriver.</p>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <Link key={post._id} href={`/blogg/${post.slug}`} className="blog-card">
                <div className="blog-card-img">
                  {post.coverImage && (
                    <Image
                      src={urlFor(post.coverImage).width(640).height(360).fit('crop').url()}
                      alt={post.coverImage.alt || post.title}
                      width={640}
                      height={360}
                    />
                  )}
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span className="blog-cat">{CATEGORY_LABELS[post.category] || post.category}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
