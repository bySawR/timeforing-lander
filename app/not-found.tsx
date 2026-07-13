import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <div className="wrap" style={{ textAlign: 'center', padding: '120px 24px' }}>
        <h1 style={{ fontSize: 40, marginBottom: 16 }}>Fant ikke siden</h1>
        <p style={{ color: 'var(--brand-700)', marginBottom: 32 }}>
          Siden du leter etter finnes ikke, eller har flyttet på seg.
        </p>
        <Link href="/" className="btn btn-primary">
          Til forsiden
        </Link>
      </div>
    </main>
  );
}
