import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Hourly — før timer uten styr';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #7c2fa1 0%, #43005e 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -2 }}>Hourly</div>
        <div style={{ fontSize: 38, color: '#e4c8f5', marginTop: 16 }}>
          Før timer uten styr
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            background: 'rgba(255,255,255,0.14)',
            padding: '12px 32px',
            borderRadius: 999,
            color: '#f4e4ff',
          }}
        >
          Timeføring · Kontrakter · Fakturering — hourly.no
        </div>
      </div>
    ),
    size
  );
}
