import { ImageResponse } from 'next/og';
import { getPost, CATEGORY_LABELS } from '../../../lib/sanity';

export const runtime = 'edge';
export const alt = 'Hourly-bloggen';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const title = post?.title || 'Hourly-bloggen';
  const category = post ? CATEGORY_LABELS[post.category] || post.category : '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #faf1ff 0%, #e4c8f5 100%)',
          padding: 72,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ fontSize: 40, fontWeight: 800, color: '#2a003d' }}>Hourly</div>
          {category && (
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#601382',
                background: '#f4e4ff',
                padding: '8px 24px',
                borderRadius: 999,
              }}
            >
              {category}
            </div>
          )}
        </div>
        <div
          style={{
            fontSize: title.length > 60 ? 56 : 68,
            fontWeight: 800,
            color: '#2a003d',
            lineHeight: 1.1,
            letterSpacing: -1,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 26, color: '#7c2fa1', fontWeight: 700 }}>hourly.no/blogg</div>
      </div>
    ),
    size
  );
}
