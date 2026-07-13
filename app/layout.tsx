import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

const SITE_URL = 'https://hourly.no';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hourly — før timer uten styr',
    template: '%s | Hourly',
  },
  description:
    'Hourly er timeføringsappen for frilansere og små team. Før timer, send kontrakter og hold oversikt over kundene dine — alt på ett sted. Fra kr 299,- i måneden.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  verification: { google: 'HJCL2HLp_lA4yfjj9wHrFn6zK7rw-2FklAHSsP0VX5Y' },
  openGraph: {
    type: 'website',
    siteName: 'Hourly',
    locale: 'nb_NO',
    url: SITE_URL,
    title: 'Hourly — før timer uten styr',
    description:
      'Før timer, send kontrakter og hold oversikt over kundene dine — alt på ett sted. Fra kr 299,- i måneden.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hourly — før timer uten styr',
    description: 'Før timer, send kontrakter og hold oversikt over kundene dine — alt på ett sted.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport = {
  themeColor: '#7c2fa1',
};

function Header() {
  return (
    <header>
      <div className="wrap">
        <nav>
          <Link href="/" className="logo">
            Hourly
          </Link>
          <div className="nav-links">
            <Link href="/#funksjoner">Funksjoner</Link>
            <Link href="/#team">Team</Link>
            <Link href="/#slik-fungerer-det">Slik fungerer det</Link>
            <Link href="/#priser">Priser</Link>
            <Link href="/blogg">Blogg</Link>
          </div>
          <div className="nav-cta">
            <a href="https://app.hourly.no/demo" className="btn btn-ghost">
              Se demo
            </a>
            <a href="https://app.hourly.no/login" className="btn btn-primary">
              Start i dag
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="logo">Hourly</div>
            <p className="footer-tagline">
              Før timer, send kontrakter og hold oversikt — uten ekstra styr.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Produkt</h4>
              <Link href="/#funksjoner">Funksjoner</Link>
              <Link href="/#team">Team</Link>
              <Link href="/#slik-fungerer-det">Slik fungerer det</Link>
              <Link href="/#priser">Priser</Link>
              <Link href="/#ofte-stilt">Spørsmål</Link>
            </div>
            <div className="footer-col">
              <h4>Ressurser</h4>
              <Link href="/blogg">Blogg</Link>
              <a href="https://app.hourly.no/demo">Prøv demoen</a>
            </div>
            <div className="footer-col">
              <h4>Konto</h4>
              <a href="https://app.hourly.no/login">Logg inn</a>
              <a href="https://app.hourly.no/login">Start i dag</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Hourly. Alle rettigheter reservert.</span>
          <span>Laget i Norge 🇳🇴</span>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
